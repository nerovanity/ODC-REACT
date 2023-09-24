import './App.css';
import { Navbar } from './pages/navbar';
import { Home } from './pages/home';
import  { Route, Routes } from 'react-router-dom'
import { Users } from './component/showUsers';
import { Add } from './component/adduser';
import { Edit } from './component/editUser';

const App=() => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users/:id" element={<Users />} />
          <Route path="/add-user" element={<Add />} />
          <Route path="/edit-user/:id" element={<Edit />} />
      </Routes>
    </div>
  );
} 

export default App;