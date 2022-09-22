import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
const addNewMeetUpForm = (enteredMeetupData) => {
    console.log(enteredMeetupData);
};

    return <NewMeetupForm onAddMeetup={addNewMeetUpForm} />;
}

export default NewMeetupPage;