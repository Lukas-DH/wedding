// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ API_KEY: process.env.NEXT_PUBLIC_API_URL });
}
