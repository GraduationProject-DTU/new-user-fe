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
  return (
    <div>
      <UserContext.Provider value={{getCart,setCart,getid,setid}}>
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
