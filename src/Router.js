import App from './App.js';
import Profile from './Profile.js'
import MiniGame from './MiniGame.js';
import Ken from './Ken.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/> } />
                <Route path="/profile" element = { <Profile/> } />
                <Route path="/minigame" element = { <MiniGame/> } />
                <Route path="/ken" element = { <Ken/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;