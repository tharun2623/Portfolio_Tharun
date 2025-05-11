import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Qualification from './components/Qualification/Qualification';
import Skill from './components/Skills/Skill';
import Scrolltop from './components/Scrolltop/Scrolltop';
function App() {

    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skill />
                <Qualification />
                <Contact />
            </main>
            <Footer />
            <Scrolltop />
        </>
    )
}

export default App;