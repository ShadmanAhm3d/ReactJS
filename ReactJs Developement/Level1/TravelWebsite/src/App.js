// In this page we have addded all the imports, and a Layout component which wraps all the pages and give them a layout



import { Route , Switch} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

// We add Routes here to Navigate through URLS,This Page contains all the pages links and their paths
function App() {
  return (
    <Layout>
      
      <Switch>

        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetups'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        </Switch>
      </Layout>

  );
}

export default App;