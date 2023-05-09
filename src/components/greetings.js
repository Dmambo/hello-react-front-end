import React from 'react';

const Greetings = (props) => {
  return (
    <div>
      <h1>All Greeetings</h1>
      {props.greetings.map((item) => {
        return <p key={item.id}>{item.message}</p>;
      })}
    </div>
  );
};

export default Greetings;
