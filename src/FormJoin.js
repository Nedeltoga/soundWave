import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function FormJoin(){
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Join Now
            </Button>
        </Form>
    )
}
export default FormJoin