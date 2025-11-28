import './App.css'
import Course from './course';
import Navbar from './navbar';
import Footer from './footer';
import html from './assets/HTML.png';
import css from './assets/css.png';
import js from './assets/Javascript.jpg';

function App() {
  return (
    <>
    <Course name="HTML" price="$199" image={html} show={true} />
    <Course name="CSS" price="$299" image={css}  show={true}/>
    <Course name="Javascript" price="$499" image={js}  show={true}/>
    </>
  );
}

export default App
