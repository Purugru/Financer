import React, { useState } from 'react';
import './pagecss/Alltrans.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Alltrans = () => {
  // Simulated state for Expense cards
  const [expenseCards, setExpenseCards] = useState([
    { id: '1', title: 'Category 1', items: [] },
    { id: '2', title: 'Category 2', items: [] },
    // Additional cards...
  ]);

  // Simulated function to add a new Expense card
  const addCard = () => {
    const newCard = { id: Date.now().toString(), title: 'New Category', items: [] };
    setExpenseCards((prevCards) => [...prevCards, newCard]);
  };

  // Simulated function to remove an Expense card
  const removeCard = (cardId) => {
    setExpenseCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  // Simulated function to add a new transaction to a card
  const addTransaction = (cardId) => {
    const newTransaction = { id: Date.now().toString(), amount: 0, name: 'New Transaction', mode: 'Cash' };
    setExpenseCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? { ...card, items: [...card.items, newTransaction] }
          : card
      )
    );
  };

  // Simulated function to edit card title
  const editCardTitle = (cardId, newTitle) => {
    setExpenseCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? { ...card, title: newTitle }
          : card
      )
    );
  };

  // Simulated function to edit transaction details
  const editTransactionDetails = (cardId, transactionId, newDetails) => {
    setExpenseCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              items: card.items.map((transaction) =>
                transaction.id === transactionId
                  ? { ...transaction, ...newDetails }
                  : transaction
              ),
            }
          : card
      )
    );
  };

  return (
    <div>
      {/* Display Expense Cards with Teal Boxes */}
      <div className="alltrans-container">
        {expenseCards.map((card) => (
          <div key={card.id} className="transparent-card">
            <div className="teal-section">
              <div className="remove-icon" onClick={() => removeCard(card.id)}>
                <i className="fas fa-trash-alt"></i>
              </div>
              <div className="edit-icon" onClick={() => {
                const newTitle = prompt('Enter a new title:', card.title);
                if (newTitle) {
                  editCardTitle(card.id, newTitle);
                }
              }}>
                <i className="fas fa-pencil-alt"></i>
              </div>
              <h2 className="card-title">{card.title}</h2>
            </div>
            <button className="plus-button" onClick={() => addTransaction(card.id)}>
              +
            </button>
            {card.items.map((transaction) => (
              <div key={transaction.id} className="transaction">
                {/* Transaction content and buttons */}
                <p>Amount: {transaction.amount}</p>
                <p>Name: {transaction.name}</p>
                <p>Mode: {transaction.mode}</p>
                <div className="edit-transaction">
                  <button onClick={() => {
                    const newAmount = prompt('Enter a new amount:', transaction.amount);
                    if (newAmount !== null) {
                      editTransactionDetails(card.id, transaction.id, { amount: parseFloat(newAmount) });
                    }
                  }}>
                    <i className="fas fa-pencil-alt"></i> Edit Amount
                  </button>
                  <button onClick={() => {
                    const newName = prompt('Enter a new name:', transaction.name);
                    if (newName !== null) {
                      editTransactionDetails(card.id, transaction.id, { name: newName });
                    }
                  }}>
                    <i className="fas fa-pencil-alt"></i> Edit Name
                  </button>
                  <button onClick={() => {
                    const newMode = prompt('Enter a new mode:', transaction.mode);
                    if (newMode !== null) {
                      editTransactionDetails(card.id, transaction.id, { mode: newMode });
                    }
                  }}>
                    <i className="fas fa-pencil-alt"></i> Edit Mode
                  </button>
                  <button onClick={() => {
                    const isConfirmed = window.confirm('Are you sure you want to delete this transaction?');
                    if (isConfirmed) {
                      setExpenseCards((prevCards) =>
                        prevCards.map((c) =>
                          c.id === card.id
                            ? { ...c, items: c.items.filter((t) => t.id !== transaction.id) }
                            : c
                        )
                      );
                    }
                  }}>
                    <i className="fas fa-trash-alt"></i> Delete Transaction
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Add Card Button */}
      <button className="btn btn-primary" onClick={addCard}>Add Card</button>
    </div>
  );
};

export default Alltrans;
