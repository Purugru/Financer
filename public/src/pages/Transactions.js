import './pagecss/Transactions.css'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Transactions = () => {
  const navigate = useNavigate();
  return (
    <div className="transactions-container">
      <h1>Transactions Page</h1>

      <div className="teal-grid-goals">
        <div className="teal-segment-income">
        <div className="white-section">
            <span className="text-green">7000$</span>
          </div>
        </div>
        <div className="teal-segment-expense">
        <div className="white-section">
            <span className="text-red">4726$</span>
          </div>
        </div>
        <div className="teal-segment-goals-h1"></div>
        <div className="teal-segment-goals-h2"></div>
        <button className="teal-segment-goals-h3" onClick={() => navigate("/transactions/all")}>
          <h3 className="white-text">All Transactions</h3>
        </button>
      </div>
    </div>
  );
}

export default Transactions;