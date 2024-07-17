import Navbar from "./components/Navbar/navbar";
import Intro from './components/Intro/Intro'; 
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Intro/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;