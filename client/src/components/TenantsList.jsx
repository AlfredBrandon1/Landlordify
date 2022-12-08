import axios from 'axios';
import { useState, useEffect } from 'react';

//components
import TenantRow from './TenantRow'

//styling
import styled from 'styled-components';
import ReloadButton from './ReloadButton';

const TenantsList = () => {
    // State
    const [ tenants, setTenants ] = useState([]);

    const StyledTable = styled.table`
    border-collapse: collapse;
    table-layout: fixed;
    width: 98%;
    margin-left: 1em;
    td, th{
        border: 1px solid black;
        padding: .5em;
    };
    th{
        background-color: rgba(142, 142, 151, 0.2);
        color: black;
    }`

    useEffect(() => {
        axios.get('http://localhost:2000/api/v1/tenants').then( response => {
        setTenants( response.data );
        })
    }, []);

    return(
        <div className="tenants-container">
            <h3> Tenant List <ReloadButton/> </h3>
            <StyledTable>
                <tbody>
                    <tr>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Sex </th>
                        <th> Age </th>
                        <th> Contact Number </th>
                        <th> Status </th> 
                        <th> Action </th>
                    </tr>
                    {
                    tenants.map( tenant => {
                        return  <TenantRow
                            key = {tenant._id}
                            id = {tenant._id}
                            firstName = {tenant.firstName} 
                            lastName = {tenant.lastName} 
                            sex = {tenant.sex} 
                            age = {tenant.age} 
                            contactNo = {tenant.contactNo} 
                            tenantStatus = {tenant.tenantStatus}                          
                        />
                    })
                    }
                </tbody>
            </StyledTable>
        </div>
    )
}

export default TenantsList