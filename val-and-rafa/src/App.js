import './App.css';
import NAVBAR from "../src/components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import RSVP from './pages/rsvp';
import Cabins from './pages/cabins';
import Schedule from './pages/schedule';
import Registry from './pages/registry';
import Travel from './pages/travel';
import QA from './pages/q-a';
import Moments from './pages/moments';


function App() {
  return (
    <div className="App">
      <div className="whitebackgound">
        <header>
          <h1 className='headertext'>Val & Rafa</h1>
        </header>
        <Router>
        <NAVBAR />
          <Routes>
            <Route exact path='/'element={<Home/>}/>
            <Route exact path='/RSVP'element={<RSVP/>}/>
            <Route exact path='/CABINS'element={<Cabins/>}/>
            <Route exact path='/SCHEDULE'element={<Schedule/>}/>
            <Route exact path='/REGISTRY'element={<Registry/>}/>
            <Route exact path='/TRAVEL'element={<Travel/>}/>
            <Route exact path='/Q&A'element={<QA/>}/>
            <Route exact path='/MOMENTS'element={<Moments/>}/>
          </Routes>
        </Router>
        <div class="box-bar">
        <div class="box-3">
          <div class="btn btn-three">
            <span>RSVP</span>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
