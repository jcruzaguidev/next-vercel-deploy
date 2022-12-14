import React from 'react'
import Head from 'next/head'
import NavBar from '../NavBar'
import styles from './MainLayout.module.css'

interface Props {
   children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
   return (
      <>
         <div className={styles.container}>
            <Head>
               <title>Home Page</title>
               <meta name="description" content="Generated by create next app" />
               <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>
               {children}
            </main>
         </div>
      </>
   )
}
