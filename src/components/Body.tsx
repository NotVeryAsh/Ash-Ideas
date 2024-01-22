'use client'

import React, {ReactNode} from "react";
import { Montserrat } from 'next/font/google'
import {usePathname} from "next/navigation";
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Body({children}: {children?: ReactNode}) {

    const pathName = usePathname();

    let styles = {};
    let classes = null;

    if(pathName === '/') {
        styles = {
            backgroundImage: `url('/background.gif')`
        }

        classes = ' justify-center';
    }

    const backgroundClasses = " bg-gradient-to-b from-royal via-midnight via-80% to-midnight to-90%"

    return (
        <body className={montserrat.className + backgroundClasses + " flex flex-col items-center justify-between bg-cover bg-no-repeat text-slate-100"} style={styles}>
          <main className={classes + " flex flex-col items-center p-24 w-full m-auto min-h-screen"}>
            {children}
          </main>
        </body>
    );
}