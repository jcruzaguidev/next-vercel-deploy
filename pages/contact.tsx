import type { NextPage } from 'next'
import { MainLayout } from '../components/layouts/MainLayout'

const Contact: NextPage = () => {
   return (
      <MainLayout>
         <h1 className="title">
            Contact Page
         </h1>

         <p className="description">
            Get started by editing{' '}
            <code className="code">pages/index.tsx</code>
         </p>
      </MainLayout>
   )
}

export default Contact

