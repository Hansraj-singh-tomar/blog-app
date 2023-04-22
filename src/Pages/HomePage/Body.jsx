import React from 'react'
import db from '../../utils/db.json'


import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Card1 from '../../Compnents/card/Card1';

const Body = () => {
    const data = db.authors;
    // console.log(typeof data); // object
    // console.log(data); // [{}, {}, and so on...]

    // const data = db.posts;
    // console.log(data); // we can get here posts data 

  return (
    <Container>
    
        <Row>
        {
            data.map((item) => {
                return(
                    <Col key={item.id} md={4} sm={6} xs={12}>
                        <Card1 
                            name={`${item.firstName} ${item.lastName}`}
                            id={item.id}
                        />
                    </Col>
                )
            })
        }
        </Row>
        
    </Container>
  )
}

export default Body

// in this body section we w'll use Link instead of button 
// clicking on that we will create one component and then inside it we will use multiple compenent - inside it we will use 3 component 
// 