import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/Contents/About';
import Homepage from './Components/Contents/Homepage';
import Scroll from './Components/Scroll/Scroll';
import { UserContext } from './UserContext';
import { useState } from 'react';
function App(props) {
  const [getCart,setCart] = useState("")
  const [getid,setid] = useState("")
  const [getidlarge,setidlarge] = useState("")
  const [getidwishlist,setidwishlist] = useState("")
  return (
    <div>
      <UserContext.Provider value={{getCart,setCart,getid,setid,getidlarge,setidlarge,getidwishlist,setidwishlist}}>
          <Header/>
            <main class="main-content">
              {props.children}
            </main>
          <Footer/>
          <Scroll/> 
      </UserContext.Provider>
    </div>
  );
}

export default App;
