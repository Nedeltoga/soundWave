import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function DiscoverText () {
    return (
        <section>

        <h1>Discover new music</h1>
        <CardGroup >
            <Card bg='dark'>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/microphone.svg'} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card bg='dark'>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/albums.svg'} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card bg='dark'>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/more.svg'} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        <p>By joining you can benefit by listening to the latest albums released.</p>
        </section>
    )
}

export default DiscoverText