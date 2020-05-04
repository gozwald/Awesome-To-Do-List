import React from "react";
import "./styles.css";
import Form from "./Form.js";
import bg1 from './img/bg-1.png'
import bg2 from './img/bg-2.png'
import bg3 from './img/bg-3.png'
import bg4 from './img/bg-4.png'
import symbolwebsites from './img/symbol-websites.png'
import symbolgrocery from './img/symbol-grocery.png'
import symbolbucket from './img/symbol-bucket.png'
import symbolgeneral from './img/symbol-general.png'

// import GroceryItems from "./GroceryItems.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <div className="contain" style={{minHeight: '100vh'}}>
        <div style={{height: '7vh', backgroundColor: '#4e4e4e'}}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Awesome TODO</a>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown"> */}
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>
            {/* </div> */}
          </nav>
        </div>
        <div id="midmobile">
          {/* <img src="./src/img/avatar.png"> */}
          <div className="flex" style={{height: '86vh', flexWrap: 'wrap', overflow: 'hidden'}}>
            <div id="bg-img1" className="flex grow">
              <a href="#open-modal"><h2>Grocery List</h2><br /><br /><img src={symbolgrocery} alt="" /></a>
              <div id="open-modal" className="modal-window">
                <div>
                  <a href="#modal-close" title="Close" className="modal-close">close ×</a>
                  <h1>Review urls</h1>
                  <div><Form /></div>
                </div>
              </div></div>
            <div id="bg-img2" className="flex grow">
              <a href="#open-modal2"><h2>Website List</h2><br /><br /><img src={symbolwebsites} alt="" /></a>
              <div id="open-modal2" className="modal-window">
                <div>
                  <a href="#modal-close" title="Close" className="modal-close">close ×</a>
                  <h1>CSS Modal</h1>
                  <div>yaddaaayadaaaaaaa</div>
                </div>
              </div>
            </div>
            <div id="bg-img3" className="flex grow">
              <a href="#open-modal3"><h2>Bucket List</h2><br /><br /><img src={symbolbucket} alt="" /></a>
              <div id="open-modal3" className="modal-window">
                <div>
                  <a href="#modal-close" title="Close" className="modal-close">close ×</a>
                  <h1>CSS Modal</h1>
                  <div>yaddaaayadaaaaaaa</div>
                </div>
              </div>
            </div>
            <div id="bg-img4" className="flex grow">
              <a href="#open-modal4"><h2>General List</h2><br /><br /><img src={symbolgeneral} alt="" /></a>
              <div id="open-modal4" className="modal-window">
                <div>
                  <a href="#modal-close" title="Close" className="modal-close">close ×</a>
                  <h1>Grocery List</h1>
                  <div>yaddaaayadaaaaaaa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="midfull">
          <div className="flexrow">
            <a href="grocery.html"><div className="smnavbox" style={{backgroundImage: `url(${bg1})`}}><h4>Grocery List</h4><img src={symbolgrocery} alt="" /></div></a>
            <a href="website.html"><div className="smnavbox" style={{backgroundImage: `url(${bg2})`}}><h4>Website List</h4><img src={symbolwebsites} alt="" /></div></a>
            <a href="Bucket.html"><div className="smnavbox" style={{backgroundImage: `url(${bg3})`}}><h4>Bucket List</h4><img src={symbolbucket} alt="" /></div></a>
            <a href="index.html"><div className="smnavbox" style={{backgroundImage: `url(${bg4})`}}><h4>General List</h4><img src={symbolgeneral} alt="" /></div></a>
          </div>
          <div className="flexcol">
            <div className="flexcolbox" style={{width: '30vw', backgroundColor: 'rgba(235, 235, 235, 0.377)'}}>Get.<br />Shit. Done.</div>
            <div className="flexcolbox3" style={{width: '70vw'}}><Form />  </div>
              
            
          </div>
        </div>
        <div className="footer">❤️ #staythefuckhome ❤️</div>
      </div>
       
        <br />

        {/* <GroceryItems props=this.state./> */}
      </div>
    );
  }
}

export default App;
