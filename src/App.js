import './App.css';
import PageHead from './components/PageHead';
import Bio from './components/Bio';
import CardHolder from './components/CardHolder';
import Products from './components/Products';

function App() {
    return (
        <div className="App">
            <PageHead></PageHead>
            <Bio></Bio>
            <CardHolder></CardHolder>
            <Products></Products>
        </div>
    );
}

export default App;
