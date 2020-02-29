import React from 'react';
import './Practice.css'

const Practice = (props) => {
  const todaysDate = () => {
    const dateObj = new Date();
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    return `${month}/${day}/${year}`;
  };

  return(
    <div className="Practice">
      <h1>This is the practice component</h1>
      <p>Today's date is {todaysDate()}</p>
      <p>My name is {props.name} and I'm a {props.career}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Practice;
