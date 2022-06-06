import './App.css';
import Hero from './assets/images/image-header-mobile.jpg'

function App() {
  return (
    <div className="container1">
      <div className="container2">
        
        <div className="hero_section">
          <img src={Hero} alt="header"/>
        </div>
        <div className="continuation">

        <div className="content_section">
          <h2>Get <strong>insights</strong> that help your business grow.</h2>
          <h5>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</h5>
        </div>

        
        <div className="achievements">
          <div className="companies">
            <h1>10k+</h1>
            <h4>companies</h4>
          </div>

          <div className="templates">
            <h1>314</h1>
            <h4>templates</h4>
          </div>

          <div className="quaries">
            <h1>12M+</h1>
            <h4>queries</h4>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
