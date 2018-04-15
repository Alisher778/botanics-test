import React, { Component } from "react";
import "./App.css";
import { test } from "./test.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: test, result: [] };
  }

  // Rendering Images for test
  renderImg() {
    return this.state.data.map((item, i) => {
      if (i == 0) {
        return (
          <div className="row current" key={i}>
            <div className="col-md-8" key={i+1}>
              <img src={item.img} alt={item.cat} className="img-fluid" data-family={item.cat} id={`img${i+1}`}/>
            </div>
            <div className="col-md-4">
              <ul className="list-group answer">
                <li className="list-group-item" data-answer="rano"><span>A)</span> Ranodoshlar</li>
                <li className="list-group-item" data-answer="gul"><span>B)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="dul"><span>C)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>D)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>E)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>F)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>G)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>H)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>I)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>J)</span> Guldoshlar</li>
              </ul>
            </div>
          </div>
        );
      }
      return(
        <div className="row d-none" key={i}>
          <div className="col-md-6" key={i}>
            <img src={item.img} alt={item.cat} className="img-fluid" data-family={item.cat} id={`img${i+1}`}/>
          </div>
          <div className="col-md-6">
            <ul className="list-group answer">
              <li className="list-group-item" data-answer="rano"><span>A)</span> Ranodoshlar</li>
                <li className="list-group-item" data-answer="gul"><span>B)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="dul"><span>C)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>D)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>E)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>F)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>G)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>H)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>I)</span> Guldoshlar</li>
                <li className="list-group-item" data-answer="kul"><span>J)</span> Guldoshlar</li>
            </ul>
          </div>
        </div>
      )
    });
  }
  
  render() {
    console.log(this.state.data);
    return( 
        <div className="App container">
          <div className="p-3">
            <h1 className="text-center">Qo'vnoq Botanika</h1>
          </div>
          
          {this.renderImg()}
          <div className="container p-4">
            <ul id="paginate" className="list-group d-flex flex-row justify-content-center"></ul> 
          </div>
          <div id="refresh"><i className="fa fa-refresh" aria-hidden="true"></i></div>
        </div>
    )
  }
}
export default App;
