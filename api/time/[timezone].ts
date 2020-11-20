import { NowRequest, NowResponse } from '@vercel/node'

export default ({ query }: NowRequest, res: NowResponse) => {
  res.json(
    new Date().toLocaleString('en-US', { timeZone: query.timezone as string | undefined })
  )
}
