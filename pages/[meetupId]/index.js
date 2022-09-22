import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
    return <MeetupDetail {...{
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: "This is a first meetup"
    }} />;
}

export default MeetupDetails;