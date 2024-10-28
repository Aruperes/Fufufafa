import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'



const App = () => {
  const JeremyApp= "Hello (App)"
  return (
    <div>
      <h1>{JeremyApp}</h1>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
};

export default App;