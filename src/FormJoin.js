import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormJoinstyles from './FormJoinstyles.css'

function FormJoin(){
    return (
        <Form className='form-join w-75 p-5'>
            <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" size="sm" style={{backgroundColor: "#202027"}} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" size="sm" style={{backgroundColor: "#202027"}}/>
            </Form.Group>
            <Form.Group className="mb-3">
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

