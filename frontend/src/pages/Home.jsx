import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './Home.css'
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <div>
        
<Container>

    <h1 className='text-center py-5 my-5'> Notes   <i className="bi bi-plus-circle anchor1"></i></h1>


    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Card.Link href="#"><i class="bi bi-pen"></i></Card.Link>
        <Card.Link href="#"><i class="bi bi-archive"></i></Card.Link>
        </div>
      
      </Card.Body>
    </Card>
    </div>
  

</Container>



    </div>
  )
}
