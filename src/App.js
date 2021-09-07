// import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import Aside from './Navigation/Aside';
import Posts from './Posts/Posts';
import CreatePost from './publications/CreatPoste';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import FourOFour from './404/FouroFour';
import Register from './Login/Register';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
        <Navigation />
        <div className="Container">
          <Aside />
           <Switch>
             <Route path="/" exact>
             <Main title="Hello!"><Posts /></Main>
             </Route>
             <Route path="/create-posts">
             <Main title="Share your thoughts..."><CreatePost /></Main>
             </Route>
             <Route path="/profile">
             <Main title="Profile"><Profile /></Main>
             </Route>
             <Route path="/login">
             <Main title="Login"><Login /></Main>
             </Route>
             <Route path="/register">
             <Main title="Register"><Register /></Main>
             </Route>
             <Route path="*" component={FourOFour}/>
           </Switch>
          
        </div>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
