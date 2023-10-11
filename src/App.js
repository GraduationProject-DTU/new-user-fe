import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/Contents/About';
import Homepage from './Components/Contents/Homepage';
import Scroll from './Components/Scroll/Scroll';
function App(props) {
  return (
    <div>
        <Header/>
        <main class="main-content">
          {props.children}
        </main>
        <Footer/>
        <Scroll/>
    </div>
  );
}

export default App;
