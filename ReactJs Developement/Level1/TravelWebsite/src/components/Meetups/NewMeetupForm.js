import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';



//This NewMeetupForm is a function which takes the data form the Form and allocates it to NewMeetup.js
const NewMeetupForm = (props) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();



    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

     //Here the meetupdata is reciving the OnaddMeetup which is coming froom NewMeetup.js 
        const meetupdata = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
       props.onAddMeetup(meetupdata);
    }
   //Here the useref attribute is sending the requiredInputref to useref(); and daata is being extracted in the submitHandler function 

   //This card is Wrapping all the data in Css,which gives the Nice Card look to the website
    return (
        <Card >
            <form className={classes.form} onSubmit={submitHandler}>
                <div classes={classes.control}>
                    <label htmlFor="title"> Meetup Title </label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div classes={classes.control}>
                    <label htmlFor="image"> Meetup Image </label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div classes={classes.control}>
                    <label htmlFor="address"> Meetup Address </label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div classes={classes.control}>
                    <label htmlFor="description"> Meetup Description </label>
                    <textarea 
                    id='description'
                     required 
                     rows='5' 
                     ref={descriptionInputRef}>
                          </textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>

    );
}

export default NewMeetupForm
