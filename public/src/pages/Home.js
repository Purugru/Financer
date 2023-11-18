import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import cpfm from './cpfm.png';
import '../App.css'
import './pagecss/Home.css'
const Home = () => {

  return (
    <div>
      <div style={{ marginTop: '10px' }}></div>
      <h2>Offers Just For You</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src={cpfm} className="card-img-top" alt="Offer 1" />
            <div className="card-body">
              <h5 className="card-title">Offer 1</h5>
              <p className="card-text">Description for Offer 1</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card">
            <img src={cpfm} className="card-img-top" alt="Offer 2" />
            <div className="card-body">
              <h5 className="card-title">Offer 2</h5>
              <p className="card-text">Description for Offer 2</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={cpfm} className="card-img-top" alt="Offer 3" />
            <div className="card-body">
              <h5 className="card-title">Offer 3</h5>
              <p className="card-text">Description for Offer 3</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <Link to="/offers" className="btn btn-outline-primary more-offers-btn">
            More Offers <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row mt-3">
        <div className="col-md-12">
          <h2>Recent Transactions</h2>
        </div>
      </div>
      <div className="teal-grid">
        <div className="teal-segment"></div>
        <div className="teal-segment"></div>
        <div className="teal-segment"></div>
        <div className="teal-segment"></div>
      </div>
      <div className="divider"></div>
      <div className="row mt-3">
        <div className="col-md-12">
          <h2>Goals</h2>
        </div>
      </div>
      <div className="teal-grid-goals">
        <div className="teal-segment-goals"></div>
        <div className="teal-segment-goals"></div>
        <div className="teal-segment-goals-half"></div>
      </div>
    </div>
    
  );
}

export default Home;