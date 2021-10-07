import type { NextPage } from 'next'

import { mock } from 'components/products-grid/mock'
import { HomeTemplate, HomeTemplateProps } from 'templates/home'

const Home: NextPage<HomeTemplateProps> = (props) => {
  return <HomeTemplate {...props} />
}

export async function getStaticProps (): Promise<any> {
  return {
    props: {
      ...mock
    }
  }
}

export default Home
