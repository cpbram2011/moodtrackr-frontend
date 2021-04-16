import './app.scss'
import { Provider } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from "./util/route_util";
import Modal from './components/modal/modal'
import Splash from './components/splash/splash'
import Home from './components/home/home';


function App({store}) {
  return (
    <Provider store={ store }>
    <HashRouter>
    <div className="App">
      <header className="App-header">
      </header>
        <Modal />
        <AuthRoute path='/' component={Splash} />
        <ProtectedRoute path='/home' component={Home} />
    </div>
    </HashRouter>
  </Provider>
  );
}

export default App;
