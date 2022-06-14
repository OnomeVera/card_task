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
          <h4>Discover the benefits of data analytics and make <br/>better decisions regarding revenue, customer <br/>experience, and overall efficiency.</h4>
        </div>

        
        <div className="achievements">
          <div className="companies">
            <h3>10k+</h3>
            <h6>companies</h6>
          </div>

          <div className="templates">
            <h3>314</h3>
            <h6>templates</h6>
          </div>

          <div className="quaries">
            <h3>12M+</h3>
            <h6>queries</h6>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
