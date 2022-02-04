import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
    return (
        <div>
            <MainNavigation />
        <main className={classes.main}>
            {props.children}
        </main>
        </div>
    );
}

export default Layout

//This is a Layout page which wraps the entire Route and Switch and it is also providing the necccessary CSS to the application