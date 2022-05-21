
import './App.css';
import Movielist from './components/Movielist';
import { Routes,Route } from "react-router-dom";
import Timeslots from './components/Timeslots';
import Seat from './components/Seat';
import MovieScreen from './components/MovieScreen';
import MyNavbar from './components/MyNavBar'
import Timer from './components/Timer'
import Recipt from './components/Recipt';



function App() {
  return (
    <div className="App">
     

      <MyNavbar/>
     <Routes>
     <Route exact path="/" element={<Movielist/>}/>
     <Route exact path="/MovieScreen" element={<MovieScreen/>}/>
     <Route exact path="/Recipt" element={<Recipt/>}/>
 <Route exact path="/Timeslots" element={<Timeslots/>}/>
       
      </Routes>
     

    </div>
  );
}

export default App;
