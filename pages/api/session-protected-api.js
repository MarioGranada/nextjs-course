import { getSession } from "next-auth/react";

async function handler(req, res) {
    const session = await getSession({req});
    if(!session) {
        res.status(401).json({error: 'Unauthenticated User'});
    }
    res.status(201).json({message: 'Authenticated API', session});
}

export default handler;
