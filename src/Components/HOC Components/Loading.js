import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div style={{margin:"auto"}}>
    <Spinner animation="border" role="status">
    
    </Spinner>
    <p className="visually-hidden">Loading...Please wait.....</p>
    </div>
  )
}

export default Loading