import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './Firstpage.css'
import { Link } from 'react-router-dom';
function Firstpage() {
 
  return (
   
   
    <div className='formStyle'>
  
        <Form className='p-4'>
        <h5 className='mt-5'>Create Profile</h5>
      <Form.Group className="mb-3" controlId="jobTitle">
        
        <Form.Control type="text" placeholder='Job Title'/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="contactNum">
        
        <Form.Control type='text' placeholder='Contact Number' />
      </Form.Group>

      <FormLabel>Add Your Skills</FormLabel>
      <InputGroup className='mb-4'>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <FormLabel>Work Expperience</FormLabel>
      <InputGroup className='mb-4'>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <FormLabel>Description</FormLabel>
      <InputGroup className='mb-4'>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
     
      <Link to={'/createprofile'}>
        <div className="d-grid gap-2">
          <Button variant="warning"  size='lg' type="submit">
            Continue
          </Button>
        </div>
      </Link>
      
    </Form>
    
    </div>
     
  )
}

export default Firstpage