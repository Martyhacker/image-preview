import type { NextApiRequest, NextApiResponse } from 'next';
import type { Readable } from 'node:stream';
const imageSearch = require('image-search-google');
const client = new imageSearch('03eee2029b5034fec', 'AIzaSyCY6JvrZabYSC-JtD_dEhIMXH_XdFAnwWs');
const options = { page: 1 };
export const config = {
    api: {
        bodyParser: false,
    },
};

async function buffer(readable: Readable) {
    const chunks = [];
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
        await client.search(body['search'], options).then(images => {
            res.status(200).send({ data: images });
        }).catch(err => console.log(err));
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}