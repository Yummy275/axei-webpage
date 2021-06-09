import './App.css';
import PageHead from './components/PageHead';
import Intro from './components/Intro';
import CardHolder from './components/CardHolder';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <PageHead></PageHead>
            <Intro></Intro>
            <CardHolder></CardHolder>
            <Services></Services>
            <CallToAction
                title="Deserunt sit culpa enim ipsum ullamco voluptate dolore anim."
                btnText="Action"
            ></CallToAction>
            <Footer></Footer>
        </div>
    );
}

export default App;
