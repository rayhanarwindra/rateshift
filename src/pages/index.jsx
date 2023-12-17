import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import CurrencyConverter from '@/components/CurrencyConverter'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>RateShift | Convert currency anywhere, anytime.</title>
      </Head>
      <main
        className={`px-40 py-4 ${inter.className}`}
      >
        <Navbar />
        <Landing />
        <CurrencyConverter />
      </main>
    </div>

  )
}
