import React, { Component } from 'react';
import Navbar from '@hospitalrun/components';

import { Spinner, Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'

class Home extends Component {
    

    render() {
        return (
            <>
            <Breadcrumb>
                    <BreadcrumbItem>
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Daily Care
                    </BreadcrumbItem>
                </Breadcrumb>
                <h1>DailyCare</h1>
                
    
  
            </>
        )}   
};
export default Home;