import './app.scss'
import { Provider } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Root from './root';


function App({store}) {
  return (
    <Provider store={ store }>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>
  );
}

export default App;
