import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import Navbar from '../components/navbar'
import Hero from '../components/hero'

type Props = {
}

const Index = ({ }: Props) => {
  
  return (
    <>
      <Layout>
        <Head>
          <title>sixlighthouses</title>
        </Head>
        <Container>
          <Navbar />
          <Intro />
          <Hero />
        </Container>
      </Layout>
    </>
  )
}

export default Index