import type { Metadata } from 'next'
import './globals.css'
import React from "react";
import BackButton from "@/components/BackButton";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Body from "@/components/Body";
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Headless Auth',
  description: 'A simple headless authentication app',
}

export default async function RootLayout(props: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
        <Body>
          <div className={"flex flex-row w-full"}>
            <BackButton />
          </div>
          {props.children}
        </Body>
    </html>
  )
}