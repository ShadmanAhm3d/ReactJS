import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
     const favortiesCtx = useContext(FavoritesContext);
         

     const ItemIsFavorite = favortiesCtx.ItemIsFavorite(props.id);


    const toggleFavoriteStatusHandler = () => {

        if(ItemIsFavorite) {
            favortiesCtx.removeFavorite(props.id);
        }else {
            favortiesCtx.addFavorite({
                id: props.id,
                title : props.title,
                description: props.description,
                image : props.iamge,
                address: props.address,
            });
        }


    }




    return (
        <li className={classes.item}>
            <Card >
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{ItemIsFavorite ? 'Remove from Favorites ' :   'To Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem
