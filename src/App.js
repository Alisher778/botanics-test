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
    return this.state.data.sort(()=>{return 0.5-Math.random()}).map((item, i) => {
      if (i == 0) {
        return (
          <div className="row current" key={i}>
            <div className="col-md-8" key={i+1}>
              <img src={item.img} alt={item.cat} className="img-fluid" data-family={item.cat} id={`img${i+1}`}/>
            </div>
            <div className="col-md-4">
              <ul className="list-group answer">
                <li className="list-group-item" data-answer="rano"><span>A)</span> Ra'nodoshlar Oilasi</li>
                <li className="list-group-item" data-answer="karam"><span>B)</span> Karamdoshlar Oilasi</li>
                <li className="list-group-item" data-answer="sho'r"><span>C)</span> Sho'radoshlar Oilasi</li>
                <li className="list-group-item" data-answer="gul"><span>D)</span> Gulxayridoshlar Oilasi</li>
                <li className="list-group-item" data-answer="bur"><span>E)</span> Burchoqdoshlar/Dukkakdoshlar</li>
                <li className="list-group-item" data-answer="it"><span>F)</span> Ituzumdoshlar Oilasi</li>
                <li className="list-group-item" data-answer="tok"><span>G)</span> Tokdoshlar Oilasi</li>
                <li className="list-group-item" data-answer="qovoq"><span>H)</span> Qovoqdoshlar Oilasi</li>
                <li className="list-group-item" data-answer="qoqi"><span>I)</span> Qoqio'tdoshlar Oilasi</li>
                <li className="list-group-item" data-answer="lola"><span>J)</span> Loladoshlar Oilasi</li>
                <li className="list-group-item" data-answer="piyoz"><span>K)</span> Piyozdoshlar Oilasi</li>
                <li className="list-group-item" data-answer="bug'doy"><span>L)</span> Bug'doydoshlar Oilasi</li>
              </ul>
            </div>
          </div>
        );
      }
      return(
        <div className="row d-none" key={i}>
          <div className="col-md-8" key={i}>
            <img src={item.img} alt={item.cat} className="img-fluid" data-family={item.cat} id={`img${i+1}`}/>
          </div>
          <div className="col-md-4">
            <ul className="list-group answer">
              <li className="list-group-item" data-answer="rano"><span>A)</span> Ra'nodoshlar Oilasi</li>
              <li className="list-group-item" data-answer="karam"><span>B)</span> Karamdoshlar Oilasi</li>
              <li className="list-group-item" data-answer="sho'r"><span>C)</span> Sho'radoshlar Oilasi</li>
              <li className="list-group-item" data-answer="gul"><span>D)</span> Gulxayridoshlar Oilasi</li>
              <li className="list-group-item" data-answer="bur"><span>E)</span> Burchoqdoshlar/Dukkakdoshlar</li>
              <li className="list-group-item" data-answer="it"><span>F)</span> Ituzumdoshlar Oilasi</li>
              <li className="list-group-item" data-answer="tok"><span>G)</span> Tokdoshlar Oilasi</li>
              <li className="list-group-item" data-answer="qovoq"><span>H)</span> Qovoqdoshlar Oilasi</li>
              <li className="list-group-item" data-answer="qoqi"><span>I)</span> Qoqio'tdoshlar Oilasi</li>
              <li className="list-group-item" data-answer="lola"><span>J)</span> Loladoshlar Oilasi</li>
              <li className="list-group-item" data-answer="piyoz"><span>K)</span> Piyozdoshlar Oilasi</li>
              <li className="list-group-item" data-answer="bug'doy"><span>L)</span> Bug'doydoshlar Oilasi</li>
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
            <h1 className="text-center">Quvnoq Botanika</h1>
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
