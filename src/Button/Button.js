import React from 'react';

const Button = (props) => {

  return (
    <div className="row songButton">
      <div className="col-md-12 text-center">
        <button onClick={props.onClick} type="button" className="btn btn-dark buttonRandom">Randomize</button>
      </div>
    </div>
    
  );
}

export default Button;