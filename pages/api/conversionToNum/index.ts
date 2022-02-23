import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

import { romeObj } from "../../../helpers/romanNumerals";
import { romanBuildEntryPath, extractEntries } from '../../../helpers/filePathAndExtraction'

function convertToNumber(str: string) {
  let num = 0;
  str.split('').forEach((val, i) => {
    //str ["X", "X", "X", "V", "I"]
    //val [10, 10, 10, 5, 1] 
    // 0     1    2    3    4  
    if (romeObj[val] < romeObj[str[i + 1]]) {
      num -= romeObj[val] // 1 - 0
    } else {
      num += romeObj[val]
    }
  })

  return num

}

function handler(req: NextApiRequest, res: NextApiResponse) {

  const romeEntry: string = req.body.romeEntry

  //Error Handling
  const pattern = /^M{0,1}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/

  if (!romeEntry.match(pattern) || !romeEntry) {

    res.status(422).json({ message: 'Invalid input! Remember, Roman Numerals are symbols like: I, IV, V' })
    
    return
  }
  //

  const romeEntryData = {
    id: new Date().toISOString(),
    romeEntry: romeEntry,
    numResult: convertToNumber(romeEntry)
  }

  //store entries
  const filePath = romanBuildEntryPath()
  const data = extractEntries(filePath)
  data.push(romeEntryData)
  fs.writeFileSync(filePath, JSON.stringify(data))
  res.status(201).json({ message: 'Success!', entry: romeEntryData })

}

export default handler