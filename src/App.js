import './App.css';
import PageHead from './components/PageHead';
import Bio from './components/Bio';
import CardHolder from './components/CardHolder';

function App() {
    return (
        <div className="App">
            <PageHead></PageHead>
            <Bio></Bio>
            <CardHolder></CardHolder>
        </div>
    );
}

export default App;
