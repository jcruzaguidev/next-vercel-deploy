import type { NextPage } from 'next'
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

const About: NextPage = () => {
   return (
      <MainLayout>
         <DarkLayout>
            <h1 className="title">
               Ir a <Link href="/">Home</Link>
            </h1>

            <p className="description">
               Get started by editing{' '}
               <code className="code">pages/index.tsx</code>
            </p>
         </DarkLayout>
      </MainLayout>
   )
}

export default About
