import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
    return <><Head>
        <title>{props.meetupData.title} </title>
        <meta name="description" content={props.meetupData.description} />
        </Head> <MeetupDetail {...props.meetupData} /></>;
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.USER_PSSWD}@cluster0.vfrndqf.mongodb.net/meetupsDB?retryWrites=true&w=majority`);

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups =  await meetupsCollection.find({},{_id:1}).toArray();

    client.close();
    return {
        // fallback: if false, it returns 404 page when the params is not in the list.
        // That means, the only params accepted are the ones in the list.
        // if true, it will look for the server in order to find the data/information
        // related to the given param in the path. 
        fallback: false, 
        paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
        // paths: [
        //     {
        //         params: {
        //             meetupId: "m1"
        //         }
        //     },
        //     {
        //         params: {
        //             meetupId: "m2"
        //         }
        //     }
        // ]
    }
}


export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.USER_PSSWD}@cluster0.vfrndqf.mongodb.net/meetupsDB?retryWrites=true&w=majority`);

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const {_id: id, title, image, address, description} =  await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    client.close();
    return {
        props: {
            meetupData: {
                id: id.toString(),
                title,
                image,
                address,
                description
            }
            // meetupData: {
            //     id: meetupId,
            //     title: 'A First Meetup',
            //     image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
            //     address: 'Some address 5, 12345 Some City',
            //     description: "This is a first meetup"
            // }
        }
    }
}

export default MeetupDetails;