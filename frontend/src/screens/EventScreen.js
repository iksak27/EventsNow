import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listEventDetails } from '../actions/eventActions'

const EventScreen = () => {

    const [qty, setQty] = useState(0);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const eventDetails = useSelector((state) => state.eventDetails)
    const {loading, error, event } = eventDetails

    useEffect(() => {
dispatch(listEventDetails(params.id))
    }, [dispatch,params.id])

    const addToCartHandler = () => {
        navigate(`/cart/${params.id}?qty=${qty}`)
    }
  return (
<>
<Link className='btn btn-light my-3' to='/'>
    Go back
    </Link>
    {loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
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
                {event.numTickets > 0 && (
                    <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col>
                            <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value) }
                            >
                                {[...Array(event.numTickets).keys()].map((x) => (
                                    <option key={x + 1} value={x+1}>
                                        {x+1}
                                    </option>
                                ))}
                            </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
                <ListGroup.Item>
                    <Button
                    className='btn-block'
                    type='button'
                    disabled={event.numTickets === 0}
                    onClick = {addToCartHandler}
                    >
                        Add to Cart
                    </Button>
                </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>)}
        </>
    )
}

export default EventScreen