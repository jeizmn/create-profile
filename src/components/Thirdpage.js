import React from 'react'
import './Secondpage'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormLabel } from 'react-bootstrap';
import './Style.css'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
function Thirdpage() {
  return (
    <div className='formStyle'>

        <Form className='p-4'>
        <div>
        <iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Vilame%201st%20Floor,%20Laham%20Commercial%20Complex,%20DOTSPACE%20BUSINESS%20CENTER,%20Near%20Al%20Uthuman%20School,%20Vetturoad,%20Near,%20Asset%20Orchestra%20Rd,%20Kazhakkoottam,%20Kerala%20695582%20Trivandrum+(TL%20TECHNOLOGIES%20PRIVATE%20LIMITED)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <Card style={{ width: '32rem',align:'center'}} >
      <Card.Body>
      <div class="card-body rounded-top">
              <h5 class="card-title d-flex justify-content-center ">Select Address</h5>
              
              <FormLabel>Use saved address</FormLabel>
                <InputGroup >
                  <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
              <div>
                <p>Add new location</p>
                <p>Use current location</p>
              </div>
        </div>
      </Card.Body>
    </Card>

      <Link style={{textDecoration: 'none'}}>
        <div className="d-grid gap-2">
          <Button variant="warning"  size='lg' type="submit">
            Confirm
          </Button>
        </div>
      </Link>
      
    </Form>
    
    </div>
  )
}

export default Thirdpage