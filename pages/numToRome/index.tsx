import Error from '../_error'
import Link from 'next/link'
import Layout from '../components/layout'
import Title from '../components/title'
import Navigation from '../components/nav'
import Footer from '../components/footer'

import { useState, ReactElement } from 'react'

import conversionStyle from '../../styles/Conversion.module.css'

interface NumToRoman {
  entry: string
  romanEntry: string
}

interface Entry {
  entry: NumToRoman
  message: string
}

const NumToRoman = () => {
  const [entry, setEntry] = useState('')
  const [entryNumRes, setEntryNumRes] = useState('')
  const [statusCode, setStatusCode] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [error, setError] = useState(false)

  function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    fetch('/api/conversionToRoman', {
      method: 'POST',
      body: JSON.stringify({
        entry: entry
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })

      .then((res) => {
        if (!res.ok) {
          setError(true)
          setStatusCode(res.status.toString())
          return res.json()
        }
        setError(false)
        return res.json()
      })
      .then((data: Entry) => {
        if (!data.entry) {
          setStatusMessage(data.message)
        }
        setEntryNumRes(data.entry.romanEntry)
      })
  }

  function entryHandler(e: React.FormEvent<HTMLInputElement>) {
    const enteredNum = (e.currentTarget.value)
    setEntry(enteredNum)
  }

  return (
    <>
    <div className={conversionStyle.formContainer}>
      
      <form onSubmit={formHandler} className={conversionStyle.form}>
        <div >
          <label htmlFor="entry" className={conversionStyle.title}>Enter a Number to Get a Roman Numeral</label>
          <input type="text" id="entry" value={entry} onChange={entryHandler} className={conversionStyle.input} />
        </div>
        <button className={conversionStyle.btn}>Convert!</button>
      </form>

      <h1 className={conversionStyle.result}>{entryNumRes}</h1>
      
      <div className={conversionStyle.link}>
        <Link href='/romeToNum'><a className={conversionStyle.switch}> {`-> `} Convert Roman Numeral to a Number {` <-`} </a></Link>
      </div>
      {error ? <Error statusCode={statusCode} statusMessage={statusMessage} /> : null}
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