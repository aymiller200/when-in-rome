import React, { useState, ReactElement} from 'react'
import Link from 'next/link'
import Error from '../_error'
import Layout from '../components/layout'
import Title from '../components/title'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import conversionStyle from '../../styles/Conversion.module.css'
import { romeObj } from "../../helpers/romanNumerals";


const RomanToNum = () => {
  const [romeEntry, setRomeEntry] = useState('')
  const [entryRomeRes, setEntryRomeRes] = useState('')
  const [statusCode, setStatusCode] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [error, setError] = useState(false)

  function convertToNumber(str: string, event: React.FormEvent) {
    event.preventDefault()
    const pattern = /^M{0,1}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
    let num = 0;
    let romanNum = ''

    str.split('').forEach((val, i) => {
      //str ["X", "X", "X", "V", "I"]
      //val [10, 10, 10, 5, 1] 
      // 0     1    2    3    4  
      if (romeObj[val] < romeObj[str[i + 1]]) {
        num -= romeObj[val] // 1 - 0
      } else {
        num += romeObj[val]
      }
      romanNum = num.toString()
    })

    if(!str.match(pattern)){
      setEntryRomeRes('')
      setError(true)
      setStatusMessage('Ope! Remember, Roman Numerals are symbols like I, IV, X!')
      setStatusCode(String(404))
    }else{
      setEntryRomeRes(romanNum)
      setError(false)
      setStatusMessage('')
      setStatusCode('')
    }

  }
  
  function entryHandler(e: React.FormEvent<HTMLInputElement>) {
    const enteredRomeNumeral = (e.currentTarget.value)
    setRomeEntry(enteredRomeNumeral)
  }

  return (
    <>
      <div className={conversionStyle.formContainer}>
        <form onSubmit={(event: React.FormEvent) => convertToNumber(romeEntry, event)} className={conversionStyle.form}>
          <div>
            <label htmlFor="romanEntry" className={conversionStyle.title}>Enter a Roman Numeral to Get a Number</label>

            <input type="text" id="romanEntry" value={romeEntry} onChange={entryHandler} className={conversionStyle.input} />
          </div>

          <button className={conversionStyle.btn}>Convert!</button>
        </form>

        <h1 className={conversionStyle.result}>{entryRomeRes}</h1>

        <div className={conversionStyle.link}>
          <Link href='/numToRome'><a className={conversionStyle.switch}> {`-> `} Convert a Number to a Roman Numeral {` <-`}</a></Link>
        </div>

        {error ? <Error statusCode={statusCode} statusMessage={statusMessage} /> : null}

      </div>
    </>
  )
}

RomanToNum.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Title />
      <Navigation />
      {page}
      <Footer />
    </Layout>
  )
}

export default RomanToNum