import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import React from "react";
import BackButton from "@/components/BackButton";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Headless Auth',
  description: 'A simple headless authentication app',
}

export default async function RootLayout(props: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
    <body className={montserrat.className + " flex min-h-screen bg-slate-100 flex-col items-center justify-between bg-cover bg-no-repeat text-slate-100"} style={{backgroundImage: `url('/background.gif')`}}>
        <main className="flex flex-col items-center justify-center space-y-10 w-full m-auto">
          <div className={"flex flex-row w-full"}>
            <BackButton />
          </div>
          {props.children}
        </main>
      </body>
    </html>
  )
}