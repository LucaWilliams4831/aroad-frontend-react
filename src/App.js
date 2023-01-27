import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';
import Navbar from './component/navbar';
import Footer from './component/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/home' render={(props) => <Home {...props} />} />
        <Route path='/about' render={(props) => <Home {...props} />} />
        <Route path='/car_training' render={(props) => <Home {...props} />} />
        <Route path='/hgv_training' render={(props) => <Home {...props} />} />
        <Route path='/motorcycle_training' render={(props) => <Home {...props} />} />
        <Redirect to='/home' />
        <Redirect from='/' to='/home' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
