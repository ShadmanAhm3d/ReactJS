import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import Meetuplist from "../components/Meetups/Meetuplist";


const FavoritesPage = () => {

    const favortiesCtx = useContext(FavoritesContext);

    let content;

    if (favortiesCtx.totalFavorites=== 0){
        content = <p>
            Add your Favorites here
        </p>
    } else {
        content = <Meetuplist meetups = {favortiesCtx.favorites} />
    }

    return  <section>
        <h1>
            My Favorties
        </h1>
        {content}
    </section>
}

export default FavoritesPage;
