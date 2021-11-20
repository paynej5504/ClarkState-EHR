import React, { Component } from 'react';
import DashboardBlock from '../subcomponents/dashboard-block'
import { Spinner, Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'

class Home extends Component {

    render() {
        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem active>
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        Dashboard
                    </BreadcrumbItem>
                </Breadcrumb>
                
                <DashboardBlock
                    name={'Vitals'} />

                <Spinner
                    color="blue"
                    loading size={[10, 25]} 
                    type="ScaleLoader" />
                
            </>
        )}   
};
export default Home;