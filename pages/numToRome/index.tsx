
import Link from 'next/link'
import Layout from '../components/layout'
import Title from '../components/title'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import { romeObj } from '../../helpers/romanNumerals'

import React, { useState, ReactElement } from 'react'

import conversionStyle from '../../styles/Conversion.module.css'

const NumToRoman = () => {
  const [entry, setEntry] = useState('')
  const [entryNumRes, setEntryNumRes] = useState('')

  function convertToRoman(num: number, e?: React.FormEvent) {
    e?.preventDefault()
    let romanNum = ''
    const romanKeys = Object.keys(romeObj).reverse()
    romanKeys.forEach(key => {
      while (num >= romeObj[key]) {
        romanNum += key
        num -= romeObj[key]
      }
    })
   
    setEntryNumRes(romanNum)
  }

  function entryHandler(e: React.FormEvent<HTMLInputElement>) {
    const enteredNum = (e.currentTarget.value)
    setEntry(enteredNum)
  }

  return (
    <>
    <div className={conversionStyle.formContainer}>
      
      <form className={conversionStyle.form}>
        <div >
          <label htmlFor="entry" className={conversionStyle.title}>Enter a Number to Get a Roman Numeral</label>
          <input type="text" id="entry" value={entry} onChange={entryHandler} className={conversionStyle.input} />
        </div>
        <button onClick={(event: React.FormEvent) => convertToRoman(Number(entry), event)} className={conversionStyle.btn}>Convert!</button>
      </form>

      <h1 className={conversionStyle.result}>{entryNumRes}</h1>
      
      <div className={conversionStyle.link}>
        <Link href='/romeToNum'><a className={conversionStyle.switch}> {`-> `} Convert Roman Numeral to a Number {` <-`} </a></Link>
      </div>
 
    </div>
    
    </>
  )
}

NumToRoman.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Title />
      <Navigation />
      {page}
      <Footer />
    </Layout>
  )
}

export default NumToRoman