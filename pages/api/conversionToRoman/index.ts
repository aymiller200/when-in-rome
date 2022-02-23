import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

import { romeObj } from '../../../helpers/romanNumerals'
import { buildEntryPath, extractEntries } from '../../../helpers/filePathAndExtraction'

function convertToRoman(num: number) {
  let romanNum = ''
  const romanKeys = Object.keys(romeObj).reverse()
  romanKeys.forEach(key => {
    while (num >= romeObj[key]) {
      romanNum += key
      num -= romeObj[key]
    }
  })
  return romanNum
}

function handler(req: NextApiRequest, res: NextApiResponse) {

  const entry: string = req.body.entry;
  const entryConverted = Number(entry)
  
  if (isNaN(entryConverted) || entryConverted === 0) {

    res.status(422).json({ message: 'Invalid input! Try entering a number next time!' })

    return
  }

  const entryData = {
    id: new Date().toISOString(),
    entry: entry,
    romanEntry: convertToRoman(Number(entry))
  }

  //store entries
  const filePath = buildEntryPath()
  const data = extractEntries(filePath)
  data.push(entryData)
  fs.writeFileSync(filePath, JSON.stringify(data))
  res.status(201).json({ message: 'Success!', entry: entryData })
}

export default handler