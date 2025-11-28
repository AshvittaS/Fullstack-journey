import PropTypes from 'prop-types'
function Course(props){
    if(props.show == true){
    return(
        <div className="card"> 
            <img src={props.image}  />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    );
}
}
Course.propTypes={
    name:PropTypes.string,
    price:PropTypes.number,
    show:PropTypes.bool
}
export default Course;