import Home from "./Home"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Students from "./Students"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Students" element= {<Students/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
