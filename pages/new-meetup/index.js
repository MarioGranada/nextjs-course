import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '@components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const router = useRouter();
const addNewMeetUpForm = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    console.log('in here oe data sent', data);
    router.push('/');
};

    return <><Head>
        <title> Add a New Meetup</title>
        <meta name="description" content="Add your own meetups and create amazing networking opportunities"/>
        </Head> <NewMeetupForm onAddMeetup={addNewMeetUpForm} /></> ;
}

export default NewMeetupPage;