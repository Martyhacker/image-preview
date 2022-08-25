// import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest,NextApiResponse } from '../../node_modules/next/dist/shared/lib/utils';
import type { Readable } from 'node:stream';
var Scraper = require('images-scraper');
const google = new Scraper({
  puppeteer: {
    headless: true,
  },
});
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: Readable) {
  // const chunks = [];
  const chunks: Uint8Array[] = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const rawBody = buf.toString('utf8');
    const body = JSON.parse(rawBody);
    const results = await google.scrape(body['search'], 10);
    if (results.length === 0) return;
    res.status(200).json({ data: results });
    console.log(JSON.stringify({ data: results }));
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}