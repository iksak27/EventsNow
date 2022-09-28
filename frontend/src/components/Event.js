import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Event = ({event}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/event/${event._id}`}>
        <Card.Img src={event.image} variant='top' />
        </Link>
        <Card.Body>
            <Link to={`/event/${event._id}`}>
            <Card.Title as='div'>
                <strong>{event.name}</strong>
            </Card.Title>
            </Link>
            <Card.Text as='div'>
                <div className='my-3'>
                <i class="fa-solid fa-users"></i> {event.followers} followers
                </div>
            </Card.Text>
            <Card.Text as='h4'>{event.price !== 0 ? '$' + event.price : 'Free!'}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Event