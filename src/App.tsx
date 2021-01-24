import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './assets/css/main.css';
import { Header, Banner, SectionOne, SectionThree, Footer, SectionTwo, Contact, jsFiles } from './components/'

class App extends Component {

  scriptsInjector = () => {
    for(let i = 0; i < jsFiles.length; i++){
      const script = document.createElement("script");

      script.src = jsFiles[i];
      // script.async = true;
      document.body.appendChild(script);
    }
  }

  componentDidMount(){
    this.scriptsInjector();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
