import { ReactElement } from 'react'

import Footer from '../components/footer'
import Layout from '../components/layout'
import Navigation from '../components/nav'
import Title from '../components/title'

import resourceStyle from '../../styles/Resource.module.css'

const Resources = () => {
  return (
  <>
    <h3 className={resourceStyle.title}>Helpful Guides and Interesting History</h3>
    <div className={resourceStyle.resource}>
      <a href='https://www.britannica.com/topic/Roman-numeral' target='_blank' className={resourceStyle.item}>Theory</a>
      
      <a href='https://en.wikipedia.org/wiki/Roman_numerals' target='_blank' className={resourceStyle.item}>History</a>

      <a href='https://www.cuemath.com/numbers/roman-numerals/' target='_blank' className={resourceStyle.item}>Guides</a>
    </div>
    </>
  )
}

Resources.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Title />
      <Navigation />
      {page}
      <Footer />
    </Layout>
  )
}

export default Resources