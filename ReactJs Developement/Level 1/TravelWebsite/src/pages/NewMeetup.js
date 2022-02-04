
import { useHistory  } from "react-router";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";

const NewMeetupPage = () => {

   const history = useHistory();



//This page contains a JSx attributes called onAddmeetup which takes a function names addMeetupHandler and the addMeetupHandler function sent the data to to the firebase Realtime data base and stores it in Json format
    const addMeetupHandler = (meetupdata) => {
        fetch('https://react-getting-started-3552c-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupdata),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then( () =>  {
            history.replace('/');
        });
    }



    return (<div>
        <section>
            <h1> Add a new meetup </h1>
            {/* This onAddmeetup is being sent to NewMeetupForm page  */}
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    </div>
    )
}

export default NewMeetupPage;
