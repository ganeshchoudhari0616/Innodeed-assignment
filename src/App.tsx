import React from 'react';
import Card from './Card';
const data = require("./cars.json");

function App() {
  
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-md-12">
          
              <h2>
              <strong>Cars Info</strong>
              </h2>
            
          <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="0"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="row">
                  
                  <Card
                  car={data[0]}
                  />
                  <Card car={data[1]} />
                  <Card car={data[2]} />
                  
                </div>
              </div>
              <div className="item carousel-item">
                <div className="row">
                  
                  <Card
                  car={data[3]}
                  />
                  <Card car={data[4]} />
                  <Card car={data[5]} />
                  
                </div>
              </div>
              <div className="item carousel-item">
                <div className="row">
                  
                  <Card
                  car={data[6]}
                  />
                  <Card car={data[7]} />
                  
                </div>
              </div>
              
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
