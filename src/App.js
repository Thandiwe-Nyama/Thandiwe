import Navbar from "./components/Navbar/navbar";
import Intro from './components/Intro/Intro'; 
import Skills from "./components/Skills/skills";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Intro/>
            <Skills/>
        </div>
    );
}

export default App;