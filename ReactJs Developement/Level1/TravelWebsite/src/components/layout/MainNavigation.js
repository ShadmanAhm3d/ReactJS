import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {

    const favortiesCtx = useContext(FavoritesContext);



//Here we're using the Link from react router dom which links alll the paths  in our websites using urls,This page also takes the css module from another component 

    return <header className={classes.header}>
        <div className={classes.logo}>
            React Meetup
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>AllMeetups</Link>
                </li>
                <li>
                    <Link to='/new-meetups'>New Meetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        Favorites

                        <span className={classes.badge}>{favortiesCtx.totalFavorites} </span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
       
   
}

export default MainNavigation
