import React from 'react'
import { Container } from 'react-bootstrap'

const FilterHeader = ({activeButton, ascDate, dscDate, ascLike, dscLike}) => {
  return (
    <Container className='d-flex justify-content-between rounded-pill' style={{backgroundColor: "#007bff"}}>
        <button 
          className={`m-3 btn btn-primary ${activeButton === 'ascDate' ? 'active' : ''}`}
          style={{backgroundColor: "#007bff", border: "none", color: "#fff", fontSize: '2vh'}}
          onClick={ascDate}
        >Assending By Date</button>
        <button 
          className={`m-3 ${activeButton === 'dscDate' ? 'active' : ''}`} 
          style={{backgroundColor: "#007bff", border: "none", color: "#fff", fontSize: '2vh'}}
          onClick={dscDate}
        >Decending By Date</button>
        <button 
          className={`m-3 ${activeButton === 'ascLike' ? 'active' : ''}`} 
          style={{backgroundColor: "#007bff", border: "none", color: "#fff", fontSize: '2vh'}}
          onClick={ascLike}
        >Assending By Like</button>
        <button 
          className={`m-3 ${activeButton === 'dscLike' ? 'active' : ''}`} 
          style={{backgroundColor: "#007bff", border: "none", color: "#fff", fontSize: '2vh'}}
          onClick={dscLike}
        >Decending By Like</button>
    </Container>
  )
}

export default FilterHeader