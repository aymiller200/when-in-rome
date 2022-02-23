
import { NextPage } from 'next'
import errorStyle from '../styles/Error.module.css'

interface Props {
  statusCode: string
  statusMessage: string
}

const Error: NextPage<Props> = ({ statusCode, statusMessage }) => {

  return (
    <div className={errorStyle.error}>
      <h5 className={errorStyle.text}>
        {statusCode && `Error: ${statusCode}, ${statusMessage}`}
      </h5>
    </div>
  )
}

export default Error