import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import DiscoverTextstyles from './DiscoverTextstyles.css'

function DiscoverText () {
    return (
        <section >

        <h1>Discover new music</h1>
        <CardGroup className='cardDiscover' tyle={{ width: "18rem"}}>
            <Card bg='dark'>
                <Card.Img className='mx-auto d-block' src={process.env.PUBLIC_URL + '/images/microphone.svg'} alt='Microphone icon' />
                <Card.Body>
                <Card.Title>Charts</Card.Title>
                </Card.Body>
            </Card>
            <Card bg='dark'>
                <Card.Img src={process.env.PUBLIC_URL + '/images/albums.svg'} alt='Three albums icon' />
                <Card.Body>
                <Card.Title>Albums</Card.Title>
                </Card.Body>
            </Card>
            <Card bg='dark'>
                <Card.Img src={process.env.PUBLIC_URL + '/images/more.svg'} alt='Right arrow icon' />
                <Card.Body>
                <Card.Title>More</Card.Title>
                </Card.Body>
            </Card>
            </CardGroup>
        <p>By joining you can benefit by listening to the latest albums released.</p>
        </section>
    )
}

export default DiscoverText