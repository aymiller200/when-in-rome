import { ReactElement } from 'react'
import aboutStyle from '../../styles/About.module.css'
import Footer from './footer'
import Layout from './layout'
import Navigation from './nav'
import Title from './title'

const About = () => {
  return (
    <>
      <div className={aboutStyle.text}>
        <p className={aboutStyle.about}> Roman numerals are fun and fancy, but it can take a while to get the hang of them, and who has time for that? The answer is me, I have time for that! With me by your side, you are sure to woo and wow all of your friends with your newfound roman numeral knowledge, I guarantee it . </p>
        <br />
        <p className={aboutStyle.about}>Leave the logic to me, you just focus on looking cool.</p>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Title />
      <Navigation />
      {page}
      <Footer />
    </Layout>
  )
}
export default About