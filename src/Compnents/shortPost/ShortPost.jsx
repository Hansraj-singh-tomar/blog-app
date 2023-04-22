import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShortPost = (props) => {
  return (
    <Container>

    <Link id={props.id}>
        <h1 className="list-group-item row" style={{border: "1px solid black", fontSize: "16px", margin: "2%", padding: "2%", width: "100%"}}>
            <span className="d-inline-block col-sm-4 text-primary">{props.title}</span>
            <span className="d-inline-block col-sm-4 text-right text-info">{ new Date(props.date).toLocaleDateString() }</span>
            <span className="d-inline-block col-sm-4 text-danger text-right ">
                {props.whichSort === "numComments" ? "Comment" : "Likes"} {' '}
                {props.whichSort === "numComments" ? props.numComments : props.numLikes}
            </span>
        </h1>
    </Link>
    </Container>
  )
}

export default ShortPost