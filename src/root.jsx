import { AuthRoute, ProtectedRoute } from "./util/route_util";
import Modal from './components/modal/modal'
import Splash from './components/splash/splash'
import Home from './components/home/home';
import Navbar from './components/navbar';

const Root = () => {

    return (
        <div className="App">
                <ProtectedRoute path='/' component={Navbar} />
                <Modal />
                <AuthRoute path='/' component={Splash} />
                <ProtectedRoute path='/home' component={Home} />
            </div>

    )

}

export default Root;