import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect , useState } from 'react';
import TenantInfo from '../components/TenantInfo';

const ViewTenant = () => {
    const  {id}  = useParams()
    const [ tenants, setTenant ] = useState(''); // State
    
    useEffect(() => {
        axios.get(`http://localhost:2000/api/v1/tenants/tree/${id}`).then( response => {
        setTenant( response.data );
        })
    }, []);

    return (
        <><h2> TENANT INFO </h2>
            <div className='view-room container'>              
                <ul>
                    <li> 
                        <TenantInfo 
                            key = {tenants._id}
                            id = {tenants.id}
                            firstName = {tenants.firstName}
                            lastName = {tenants.lastName}  
                            sex = {tenants.sex} 
                            age = {tenants.age} 
                            contactNo = {tenants.contactNo}  
                            tenantStatus = {tenants.tenantStatus} 
                            transaction = {tenants.transactions}
                            roomRented = {tenants.room_rented}
                        />                    
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ViewTenant 