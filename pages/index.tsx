import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}

export default Home
