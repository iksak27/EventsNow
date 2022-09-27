import React from 'react'
import { Card } from 'react-bootstrap'

const Event = ({event}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Card.Img src={event.image} variant='top' />
        <Card.Body>
            <Card.Title as='div'>
                <strong>{event.name}</strong>
            </Card.Title>
            <Card.Text as='div'>
                <div className='my-3'>
                    {event.followers} people are interested!
                </div>
            </Card.Text>
            <Card.Text as='h3'>${event.price}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Event