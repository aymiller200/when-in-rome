import { useState, ReactElement } from 'react'
import Link from 'next/link'
import Error from '../_error'
import Layout from '../components/layout'
import Title from '../components/title'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import conversionStyle from '../../styles/Conversion.module.css'

interface RomeToNum {
  numResult: string
  romanEntry: string
}

interface Entry {
  entry: RomeToNum
  message: string
}

const RomanToNum = () => {
  const [romeEntry, setRomeEntry] = useState('')
  const [entryRomeRes, setEntryRomeRes] = useState('')
  const [statusCode, setStatusCode] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [error, setError] = useState(false)

  function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    fetch('/api/conversionToNum', {
      method: 'POST',
      body: JSON.stringify({
        romeEntry: romeEntry.toUpperCase()
      }),
      headers: {
        'Content-type': 'application/json'
      }
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

        setEntryRomeRes(data.entry.numResult)

      })
  }

  function entryHandler(e: React.FormEvent<HTMLInputElement>) {
    const enteredRomeNumeral = (e.currentTarget.value)
    setRomeEntry(enteredRomeNumeral)
  }

  return (
    <>
      <div className={conversionStyle.formContainer}>
        <form onSubmit={formHandler} className={conversionStyle.form}>
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