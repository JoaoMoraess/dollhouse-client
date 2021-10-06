import axios from 'axios'
import faker from 'faker'

import { axiosAdapter, AxiosAdapter, HttpRequest } from '.'
jest.mock('axios')
describe('AxiosAdapter', () => {
  let sut: AxiosAdapter
  let fakeAxios: jest.Mocked<typeof axios>
  let request: HttpRequest

  beforeAll(() => {
    request = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['post', 'put', 'delete']),
      body: faker.random.objectElement(),
      headers: faker.random.objectElement()
    }

    fakeAxios = axios as jest.Mocked<typeof axios>
    fakeAxios.request.mockClear().mockResolvedValue({
      status: 200,
      data: 'any_data'
    })
  })

  beforeEach(() => {
    sut = axiosAdapter
  })

  it('should call axios with correct params', async () => {
    await sut(request)

    expect(fakeAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      headers: request.headers,
      method: request.method
    })
  })

  it('should return data on success', async () => {
    const result = await sut(request)

    expect(result).toEqual({
      statusCode: 200,
      body: 'any_data'
    })
  })

  it('should rethrow if get throws', async () => {
    fakeAxios.request.mockRejectedValueOnce({
      response: {
        data: {},
        status: 500
      }
    })

    const promise = sut(request)
    // promise.
    expect(promise).toEqual(fakeAxios.request.mock.results[0].value)
  })
})
