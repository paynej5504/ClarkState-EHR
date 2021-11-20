// import statements
import React from 'react';
import '../css/Navbar.css';
import { Navbar as HospitalRunNavbar, Toast } from '@hospitalrun/components'
import logo from '../images/FinalLogoFlat.png';

class NavBar extends React.Component {

    render() {

        return (
             /* Beginning of navbar */
                <HospitalRunNavbar
                  bg="dark"
                  variant="dark"
                  navItems={[
                    {
                      type: 'link-list-icon',
                      label: '',
                      name: 'menu',
                      size: 'lg',
                      iconClassName: 'align-bottom',
                      /* daily care */
                      children: [
                        {
                          type: 'link',
                          label: 'Daily Care',
                          icon: 'dashboard',
                          href: '/daily-care',
                        },
                        /* admin dashboard */
                        {
                          type: 'link',
                          label: 'Admin Dashboard',
                          icon: 'admin',
                          dividerAbove: true,
                          href: '/admin-dash',
                        },
                        /* vital signs */
                        {
                          type: 'link',
                          label: 'Vital Signs',
                          icon: 'inventory',
                          onClick: () => {
                            Toast('success', 'Patients List clicked!!', 'Success')
                          },
                        },
                        /* patient assessment */
                        {
                          type: 'link',
                          label: 'Patient Assessment',
                          icon: 'patient',
                          dividerAbove: true,
                          onClick: () => {
                            Toast('success', 'New Appointment clicked!!', 'Success')
                          },
                        },
                        /* order entry */
                        {
                          type: 'link',
                          label: 'Order Entry',
                          icon: 'incident',
                          onClick: () => {
                            Toast('success', 'Appointment Schedule clicked!!', 'Success')
                          },
                        },
                        /* medication administration */
                        {
                          type: 'link',
                          label: 'Medication Administration',
                          icon: 'medication',
                          dividerAbove: true,
                          onClick: () => {
                            Toast('success', 'New Lab Request clicked!!', 'Success')
                          },
                        },
                        /* logout */
                        {
                          type: 'link',
                          label: 'Logout',
                          icon: 'logout',
                          dividerAbove: true,
                        },
                      ],
                    },
                    /* header logo */
                    {
                      type: 'image',
                      src: {logo},
                      onClick: () => {
                        Toast('success', 'Header clicked!!', 'Success')
                      },
                    },
                  ]}
                />
              
        );
    }
}

// export statements
export default NavBar;
