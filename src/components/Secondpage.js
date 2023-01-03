import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormLabel } from 'react-bootstrap';
import './Firstpage.css'
import { Link } from 'react-router-dom'

function Secondpage() {
  return (
    <div className='formStyle'>
  
        <Form className='p-4'>
        <h5 className='mt-5'>Create Profile</h5>
        <h5 className='mt-5'>Portfolio</h5>
        <FormLabel>Attch images for your completed jobs</FormLabel>
            <Container className='mb-4'>
                <Row>
                    <Col>
                        <img src='../images/Rectangle4161.png'></img>
                    </Col>
                    <Col>
                    <img src='../images/Rectangle4161.png'></img>

                    </Col>
                    <Col>
                    <img src='../images/Rectangle4161.png'></img>

                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img src='../images/Rectangle4161.png'></img>

                    </Col>
                    <Col>
                    <img src='../images/Rectangle4161.png'></img>

                    </Col>
                    <Col>
                    <img src='../images/Rectangle4161.png'></img>

                    </Col>
                </Row>
        </Container>

        <FormLabel>Hourly Rate</FormLabel>
        <Form.Group className="mb-4" controlId="hourlyRate">
        
        <Form.Control type="text" />/hr
      </Form.Group>

      <Link to={'/address'}>
        <div className="d-grid gap-2">
          <Button variant="warning"  size='lg' type="submit">
            Submit
          </Button>
        </div>
      </Link>
      
    </Form>
    
    </div>
  )
}

export default Secondpage