import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Getproducts from './components/Getproducts';
import"bootstrap/dist/js/bootstrap.min.js";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Addproducts from './components/Addproducts';
import Aboutus from './components/Aboutus';
import Mpesapayment from './components/Mpesapayment';
import Chat from './components/Chat';
import { LanguageProvider } from "./components/LanguageContext";



function App() {
  return (
    <LanguageProvider>
        <Router>
          <div className="App backstyling">
            <header className="App-header text1">
              <h1>Welcome to PharmaDaily!</h1>
            </header>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Getproducts/>}/>
              <Route path='/signin' element={<Signin/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/addproducts' element={<Addproducts/>}/>
              <Route path='/makepayment' element={<Mpesapayment/>} />
              <Route path='/aboutus' element={<Aboutus/>}/>
              <Route path='/chat' element={<Chat/>}/>

            </Routes>
          </div>
        </Router>
        </LanguageProvider>
  );
}

export default App;