import aboutStyle from '../styles/About.module.css'
import Layout from './components/layout'
import Navigation from './components/nav'
import { ReactElement } from 'react'
import Title from './components/title'

import Footer from './components/footer'

const Home = () => {

  return (
    <>
     
      <div className={aboutStyle.text}>
          <p className={aboutStyle.about}> Roman numerals are fun and fancy, but it can take a while to get the hang of them, and who has time for that? The answer is me, I have time for that! With me by your side, you're sure to woo and wow all of your friends with your newfound roman numeral knowledge, I guarantee it . </p>
          <br />
          <p className={aboutStyle.about}>Leave the logic to me, you just focus on looking cool.</p>
        </div>
    </>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Title />
      <Navigation />
      {page}
      <Footer />
    </Layout>
  )
}

export default Home