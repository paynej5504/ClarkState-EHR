// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const AddPatient = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
          Add Patient
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Medical Staff Form"
          body={
            <div>
              <h7>First Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="First Name"
              />
              <h7>Last Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Last Name"
              />
              <h7>Age</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Age"
              />
              <h7>Date of Birth</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="date"
                placeholder="Date of Birth"
              />
              <h7>Biological Sex</h7>
              <Dropdown
                text="Bio Gender"
                size= "sm"
                items={[
                    {text: 'Male', onClick: () => {} },
                    {text: 'Female', onClick: () => {} },
                    {text: 'Other', onClick: () => {} },
                ]}
                
              />
              <h7>Gender</h7>
              <Dropdown
                text="Gender"
                size="sm"
                items={[
                    {text: 'Male', onClick: () => {} },
                    {text: 'Female', onClick: () => {} },
                    {text: 'Other', onClick: () => {} },
                ]}
                
              />
              <h7>Height</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Height"
              />
              <h7>Weight</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Weight"
              />
              <h7>Room Number</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Room Number"
              />
              <h7>Provider</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Provider"
              />
              <h7>Admit Date</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="date"
                placeholder="Admit Date"
              />
              <h7>Diagnosis</h7>
              <TextField
                name="test_field" defaultValue="enter diagnosis" rows={5}
              />
              <h7>Allergies</h7>
              <TextField
                name="test_field" defaultValue="enter allergies" rows={5}
              />
              <h7>Diet</h7>
              <TextField
                name="test_field" defaultValue="enter diet" rows={5}
              />
              <h7>Code Status</h7>
              <Dropdown
                text="Code"
                items={[
                    {text: 'Full Code', onClick: () => {} },
                    {text: 'Do not resuscitate', onClick: () => {} },
                    {text: 'Comfort measures only', onClick: () => {} },
                    {text: 'Do not intubate', onClick: () => {} },
                    {text: 'Terminal weaning', onClick: () => {} }
                ]}
              />
              <h7>Isolation Status</h7>
              <Dropdown
                text="Isolation status"
                items={[
                    {text: 'Standard', onClick: () => {} },
                    {text: 'Contact', onClick: () => {} },
                    {text: 'Droplet', onClick: () => {} },
                    {text: 'Airborne', onClick: () => {} }
                ]}
              />
              <h7>Activity Level</h7>
              <Dropdown
                text="Activity Level"
                items={[
                    {text: 'Bedrest', onClick: () => {} },
                    {text: 'BRP only', onClick: () => {} },
                    {text: 'Bedside commode only', onClick: () => {} },
                    {text: 'Dangle', onClick: () => {} },
                    {text: 'Up as tolerated', onClick: () => {} }
                ]}
              />
              <h7>Account Number</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="Account Number"
              />
              <h7>Medical Number</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="Medical Number"
              />
            </div>
          }
          closeButton={{
            children: 'Submit',
            color: 'success',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked submit')
              setShow(!show)
            },
          }}
          middleButton={{
            children: 'Skip',
            color: 'warning',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked skip')
              setShow(!show)
            },
          }}
          successButton={{
            children: 'Cancel',
            color: 'danger',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked cancel')
              setShow(!show)
            },
          }}
        />
      </div>
    )
  }

  export default AddPatient;