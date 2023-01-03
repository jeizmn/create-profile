import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
import Thirdpage from './components/Thirdpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Firstpage/>}/>
            <Route path='/createprofile' element={<Secondpage/>}/>
            <Route path='/address' element={<Thirdpage/>}/>
          </Routes>
        </Router>
     
      </header>
    </div>
  );
}

export default App;
