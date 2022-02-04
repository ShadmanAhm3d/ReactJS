import { useState, useEffect } from "react";
import Meetuplist from "../components/Meetups/Meetuplist";





const AllMeetupsPage = () => {
 
      const [isLoading, setIsLoading] = useState(true);
      const [loadedMeetups, setisLoadedMeetups] = useState([]);
//Here we are using the Use state to change the State from Loading.. to 
      useEffect( () => {
        //Here we are trying fetch the the data from the Firebase base to  our App page ,which recives it then returns the data to the Allpage  
        fetch('https://react-getting-started-3552c-default-rtdb.firebaseio.com/meetups.json'
        ).then( response => {
          return response.json();
        }).then( data => {

          const meetups = [];

          for (const key in data){
            const meetup = {
              id: key,
              ...data[key]
            };

            meetups.push(meetup)
          }


          //When the Firebase database has sent a response we set the setIsLoading to False
          setIsLoading(false);
          setisLoadedMeetups (meetups);
        });

      }, [] )


       
        //if the function is in loading... state we show the Loading... text on the app
        if(isLoading){
          return ( <section> 
            <p> 
              Loading...
            </p>
          </section>
          ); 
        }




    return (
        <section>
            <h1> All MeetUps</h1>
            <Meetuplist  meetups={loadedMeetups}/>
        </section>
    )
}

export default AllMeetupsPage;
