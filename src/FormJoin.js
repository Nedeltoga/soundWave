import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormJoinstyles from './FormJoinstyles.css'

function FormJoin(){
    return (
        <Form className='form-join w-100 p-3'>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" size="sm" style={{backgroundColor: "#202027"}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" size="sm" style={{backgroundColor: "#202027"}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="text" size="sm" style={{backgroundColor: "#202027"}}/>
            </Form.Group>
            <Button variant="primary" type="submit" className='w-100'>
                Join Now
            </Button>
        </Form>
    )
}
export default FormJoin

