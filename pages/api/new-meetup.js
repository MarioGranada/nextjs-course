// /api/new-meetup
// POST
import { MongoClient } from "mongodb";

const handler  = async (req, res) => {

    if(req.method !== "POST") {
        return;
    }

    const data = req.body; 

    const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.USER_PSSWD}@cluster0.vfrndqf.mongodb.net/meetupsDB?retryWrites=true&w=majority`);

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({message: "Meet up created successfully", result});
}

export default handler;