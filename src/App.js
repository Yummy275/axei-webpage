import './App.css';
import PageHead from './components/PageHead';
import Intro from './components/Intro';
import CardHolder from './components/CardHolder';
import Services from './components/Services';

function App() {
    return (
        <div className="App">
            <PageHead></PageHead>
            <Intro></Intro>
            <CardHolder></CardHolder>
            <Services></Services>
        </div>
    );
}

export default App;
