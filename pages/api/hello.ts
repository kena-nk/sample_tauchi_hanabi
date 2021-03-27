import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(200).json({ name: 'John Doe' })
}
