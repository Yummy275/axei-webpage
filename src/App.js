import './App.css';
import PageHead from './components/PageHead';
import Intro from './components/Intro';
import CardHolder from './components/CardHolder';
import NavSection from './components/NavSection';

function App() {
    return (
        <div className="App">
            <PageHead></PageHead>
            <Intro></Intro>
            <CardHolder></CardHolder>
            <NavSection></NavSection>
        </div>
    );
}

export default App;
