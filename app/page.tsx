import './globals.css'
import { headers } from 'next/headers'
import Header from '../components/Header/header'
import Banner from '../components/mainBanner/mainBanner'

export default function Page() {
  const headersList = headers()
  const referer = headersList.get('referer')
    return(
      <>
      <Header />
      <Banner />
      </>
    )
  }