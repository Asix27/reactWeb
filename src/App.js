import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./Components/UI/navbar/Navibar";
import AppRouter from "./Components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Components/Footer";
import {useContext} from "react";
import {ContextAuth} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./Components/UI/loader/Loader";

function App() {

    const {auth} = useContext(ContextAuth)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <Navibar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
