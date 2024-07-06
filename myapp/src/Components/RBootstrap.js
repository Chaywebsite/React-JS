import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RBootstrap = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default RBootstrap