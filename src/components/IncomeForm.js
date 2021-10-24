import React, {useRef} from 'react';

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = e => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);
    
    setIncome([...income, {
      "desc": desc.current.value,
      "price": price.current.value,
      "date": newD.getTime()
    }]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  }

  

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input type="text" required name="desc" id="desc" placeholder="Enter the Description of the item..." ref={desc} /> 
        <input type="number" min="0" required name="price" id="price" placeholder="Enter the Price..." ref={price}/>
        <input type="date"  required name="date" id="date" placeholder="Enter the  date..." ref={date} />
        <input type="submit" value="Add" />  
      </div>
    </form>
  )
}

export default IncomeForm;