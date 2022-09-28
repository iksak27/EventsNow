import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import axios from 'axios'

const EventScreen = () => {

    const params = useParams();
    const [event, setEvent] = useState({})

    useEffect(() => {
        const fetchEvents = async () => {
            const {data} = await axios.get(`/api/events/${params.id}`)
            setEvent(data)
        }
        fetchEvents()
    }, [params.id])
  return (
<>
<Link className='btn btn-light my-3' to='/'>
    Go back
    </Link>
    <Row>
        <Col md={6}>
            <Image src={event.image} alt={event.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{event.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Price: {event.price !== 0 ? '$' + event.price : 'Free!'}</ListGroup.Item>
                <ListGroup.Item>Description: {event.description}</ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                            <strong>{event.price !== 0 ? '$' + event.price : 'Free!'}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                        {event.numTickets > 0 ? 'Buy Tickets' : 'Sold Out'}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button
                    className='btn-block'
                    type='button'
                    disabled={event.numTickets === 0}
                    >
                        Add to Cart
                    </Button>
                </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
        </>
    )
}

export default EventScreen