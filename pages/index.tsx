import Head from 'next/head'
import QRComponent from '../components/QRComponent'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-gray font-Outfit">
      <Head>
        <title>QR Code Component</title>
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <QRComponent 
          qrSrc = "/qr.png"
          title = "Improve your front-end skills by building projects"
          description = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        />
      </main>
    </div>
  )
}
