import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { height, width, text } = req.query
  
  // Generate SVG based on parameters
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="100%" height="100%" fill="#f0f0f0"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif">${text}</text>
  </svg>`

  res.setHeader('Content-Type', 'image/svg+xml')
  res.status(200).send(svg)
}