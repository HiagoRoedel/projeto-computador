import './globals.css'
import { headers } from 'next/headers'
import Header from '../components/Header/header'

export default function Page() {
  const headersList = headers()
  const referer = headersList.get('referer')
    return(
      <>
      <Header />
      </>
    )
  }