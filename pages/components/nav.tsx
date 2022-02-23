import Link from 'next/link'
import navStyle from '../../styles/Nav.module.css'

const Navigation = () => {
  return (
    <div className={navStyle.nav}>
      <ul className={navStyle.list}>
        <Link href="/">
          <a className={navStyle.item}>
            About
          </a>
        </Link>
        <Link href="/numToRome">
          <a className={navStyle.item}>
            Conversions
          </a>
        </Link>
        <Link href="/resources">
          <a className={navStyle.item}>Resources</a>
        </Link>

      </ul>
    </div>
  )
}

export default Navigation