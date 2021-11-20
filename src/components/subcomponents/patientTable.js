// import statements
import React, { Component } from 'react';
import '../../css/Table.css';
import ms from '../../images/MichaelScott1.png';
import dwight from '../../images/original1.png';
import jim from '../../images/Jim.png';
import pam from '../../images/pam.png';
import kelly from '../../images/kelly.png';

class PatientBlock extends Component {
    render() {

        return (
            <>
            {/* patient table */}
                <div id="patientTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{float: 'left', width: '49%', padding: '10px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th style={{maxwidth:'50%'}}>Patient List</th>
                                </tr>
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">Name</th>
                                    <th scope="col">Medical ID</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of patient rows */}
                            <tbody>
                            <tr>
                                <td><img src={ms} id='pic'/>Michael Scott</td>
                                <td>1245783</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td><img src={dwight} id='pic'/>Dwight Schrute</td>
                                <td>1654782</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td><img src={jim} id='pic'/>Jim Halpert</td>
                                <td>1356987</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td><img src={pam} id='pic'/>Pam Beesly</td>
                                <td>1024503</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td><img src={kelly} id='pic'/>Kelly Kapoor</td>
                                <td>9752041</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};
// export statements
export default PatientBlock;