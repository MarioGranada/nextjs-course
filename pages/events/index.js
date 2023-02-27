import { useState } from "react";
import { useRouter } from "next/router";

const EventsPage = ({events}) => {
    const [eventsList, setEventsList] = useState(events);
    const router = useRouter();

    const handleFetchEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const fetchedEvents = await response.json();
        setEventsList(fetchedEvents);
        router.push('/events?category=sports', undefined, {shallow:true});
    };

    return <>
    <button onClick={handleFetchEvents}>Sports events</button>
    <h1>List of Events</h1>
    {eventsList.map(item => <div key={item.id}>
        <h2>
            {item.id} {item.title} {item.date} | {item.category}
        </h2>
        <p>{item.description}</p>
        <hr/>
    </div>)}
    </>
}

export async function getServerSideProps(context) {
    const {query} = context;
    const {category} = query;
    const queryString = category ? `category=${category}` : '';
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const events = await response.json();

    return {
        props: {
            events
        }
    }
}

export default EventsPage;