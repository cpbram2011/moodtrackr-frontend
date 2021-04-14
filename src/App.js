import './App.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import LoginForm from './components/session_form/login';


function App({store}) {
  return (
    <Provider store={ store }>
    <HashRouter>
    <div className="App">
      <header className="App-header">
        <LoginForm />
    
      </header>
    </div>
    </HashRouter>
  </Provider>
  );
}

export default App;
