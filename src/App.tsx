import React from 'react';
import './styles/style.css'
import './App.css';
import './utils/ibg'
import {About, AndroidApp, Banner, ChatBot, Design, Footer, Header} from "./components/pages";

function App() {
  return (
    <div className="page">
      <Header />
       <main className='content'>
          <Banner/>
          <About/>
          {/*<Design/>*/}
          {/*<ChatBot/>*/}
          {/*<AndroidApp/>*/}
       </main>
       <Footer/>
    </div>
  );
}

export default App;
