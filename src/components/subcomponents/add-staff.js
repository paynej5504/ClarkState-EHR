// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput} from '@hospitalrun/components'

const AddStaff = () => {
    const [show, setShow] = useState(false)
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'left', marginTop: '50px', marginLeft: '15px', background: '#F5DE36', color: 'black'}}>
          Add Medical Staff
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
              <h7>Username</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Username"
              />
              <h7>Password</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="password"
                placeholder="Password"
              />
              <h7>Email</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="email"
                placeholder="Email"
              />
              <h7>Patient Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Patient Name"
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

  export default AddStaff;