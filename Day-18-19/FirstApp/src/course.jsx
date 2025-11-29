import PropTypes from 'prop-types'
import { useState,useEffect } from 'react';   
function Course(props){
    const [PurschaseState,Purschased]=useState(false);
    function buyCourse(){
        alert(props.name + "Purschased");
        Purschased(true);
    }
    return(
        <div className="card"> 
            <img src={props.image}  />
            <h3>{props.name}</h3>
            <p>${props.price}</p>
            <button onClick={buyCourse}>Buy now</button>
            <button onClick={()=>props.delete(props.id)}>Delete</button>
            <p>{PurschaseState ? "Already Purschased" : "Buy it now"}</p>
        </div>
    );
}

Course.propTypes={
    name:PropTypes.string,
    price:PropTypes.number,
    show:PropTypes.bool
}
export default Course;