import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom'

const Card1 = (props) => {
  return (
    <Card className='align-items-center' style={{width: '18rem', padding: '20px', backgroundColor: 'rgb(246,246,246)', border: 'none', margin: '15px'}}>
            <Card.Img variant="top" src="holder.js/100px180"/>
            <Card.Body>
                <Card.Title className='text-center'>{props.name}</Card.Title>
                  <Link id={props.id} to={`/profile/${props.id}`}>
                    <Button variant="primary">
                      Click to view profile
                    </Button> 
                  </Link>
            </Card.Body>
    </Card>
  )
}

export default Card1
