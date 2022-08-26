import './App.css';
import Home from './component/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Create from './component/Create'
import Preview from './component/Preview'



function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/create" element={<Create />}>
        </Route>
        <Route path="/preview" element={<Preview />}>
        </Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
