import Head from 'next/head'
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

// Commented code left here purposely
// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Some address 5, 12345 Some City',
//         description: "This is a first meetup"
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Some address 5, 12345 Some City',
//         description: "This is a second meetup"
//     },
// ];

function HomePage(props) {
    return <>
    <Head>
        <title>React Meetups Next JS course</title>
        <meta name="description" content="Browse a huge list of highly active React Meetups!" />
    </Head>
    <MeetupList meetups={props.meetups} /></>;
}

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://user:psswd@cluster0.vfrndqf.mongodb.net/meetupsDB?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                address: meetup.address,
                image: meetup.image,
                title: meetup.title,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage;
