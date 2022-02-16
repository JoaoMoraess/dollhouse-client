import type { NextPage } from 'next'

import { ProductCardProps } from 'components'
import { HomeTemplate, HomeTemplateProps } from 'templates/home'
import { axiosAdapter } from 'utils/adapters/axios'
import { baseApiUrl } from 'utils/api'

const Home: NextPage<HomeTemplateProps> = (props) => {
  return <HomeTemplate {...props} />
}

export async function getServerSideProps (): Promise<any> {
  const { body } = await axiosAdapter<{products: ProductCardProps[]}>({
    method: 'get',
    url: `${baseApiUrl}/products`,
    body: {
      limit: 10,
      offset: 0,
      orderBy: 'ASC',
      sortBy: 'name'
    }
  })
  return {
    props: {
      products: body.products
    }
  }
}

export default Home
