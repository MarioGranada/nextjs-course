import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
    return <MeetupDetail {...props.meetupData} />;
}

export async function getStaticPaths() {
    return {
        // fallback: if false, it returns 404 page when the params is not in the list.
        // That means, the only params accepted are the ones in the list.
        // if true, it will look for the server in order to find the data/information
        // related to the given param in the path. 
        fallback: false, 
        paths: [
            {
                params: {
                    meetupId: "m1"
                }
            },
            {
                params: {
                    meetupId: "m2"
                }
            }
        ]
    }
}


export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                id: meetupId,
                title: 'A First Meetup',
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
                address: 'Some address 5, 12345 Some City',
                description: "This is a first meetup"
            }
        }
    }
}

export default MeetupDetails;