import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const AuthorCard = ({author}) => {
  return (
    <Container className="d-flex justify-content-center align-items-center" >
    <Card style={{width: '38rem', textAlign: 'center', marginTop: '20px'}}>
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold', fontSize:'22px'}}>{author.firstName} {author.lastName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Mobile: {author.phone}</Card.Subtitle>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Card.Text><span style={{fontWeight: 'bold', fontSize:'20px'}}>Likes:</span> {author.numLikes}</Card.Text>
          <Card.Text><span style={{fontWeight: 'bold', fontSize:'20px'}}>Posts:</span> {author.numPosts}</Card.Text>
        </div>
      </Card.Body>
    </Card>
    </Container>
  )
}

export default AuthorCard