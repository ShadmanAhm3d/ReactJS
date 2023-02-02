import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card;


//This is a simple page which receives css from  the module css folder and recives a function as children prop to render the data in cards