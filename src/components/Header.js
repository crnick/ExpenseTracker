import React from 'react';
import Modal from 'react-modal'
function Header({totalIncome}) {
  return (
    <header>
      <h1>Expense Tracker</h1>
      
      <div className="total-income">Total Price: ${totalIncome}</div>
     
    </header>
  );
}

export default Header;