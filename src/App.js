
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Admin from './Component/Admin';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Jeans from './Component/Jeans';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Shirt from './Component/Shirt';
import UserDetails from './Component/UserDetails';
import Users from './Component/Users';
import PageNotFound from './PageNotFound';


function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />}>
            <Route index element={<Shirt />}></Route>  {/** Route index we used to show child copmponent by Default */}
            <Route path='shirts' element={<Shirt />} />
            <Route path='jeans' element={<Jeans />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={<Users />} >
            <Route path=':id' element={<UserDetails />} /> {/**path='/users/:id'called Dynamic Routing */}
            <Route path='admin' element={<Admin />} />     {/**path='/users/admin'called Static Routing */}
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>

  );
}

export default App;
