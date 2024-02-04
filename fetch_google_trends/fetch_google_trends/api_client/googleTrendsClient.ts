import axios, { AxiosInstance } from 'axios'

export default class GoogleTrendsApiClient {
  constructor() {
    this.client = axios.create({
      url: 'https://trends.google.com/trends/api/realtimetrends',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.url = 'https://trends.google.com/trends/api/realtimetrends'
  }

  private client: AxiosInstance
  private readonly url: string

  async fetchGoogleTrends() {
    const params = { hl: 'ja', tz: '-540', cat: 'e', fi: '0', fs: '0', geo: 'JP', ri: '300', rs: '20', sort: '0' }
    return this.client.get(this.url, { params })
  }
}
