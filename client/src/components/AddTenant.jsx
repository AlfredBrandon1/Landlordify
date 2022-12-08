import { useState } from "react"
import { Link , useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';

import * as HiIcons from 'react-icons/hi'

const AddTenant  = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sex, setSex] = useState('')
    const [age, setAge] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [tenantStatus, setTenantStatus] = useState ('')
    const [room_rented, setRoomRented] = useState ('')
    const [transaction, setTransaction] = useState ('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFirstNameChangeHandler = (event) => {
        setFirstName (event.target.value);
    }
    
    const onLastNameChangeHandler = (event) => {
        setLastName (event.target.value);
    }

    const onSexChangeHandler = (event) => {
        setSex (event.target.value);
    }

    const onAgeChangeHandler = (event) => {
        setAge (event.target.value);
    }

    const onContactNoChangeHandler = (event) => {
        setContactNo (event.target.value);
    }

    const onTenantStatusChangeHandler = (event) => {
        setTenantStatus (event.target.value);
    }

    const onRoomRentedChangeHandler = (event) => {
        setRoomRented (event.target.value);
    }

    const onTransactionChangeHandler = (event) => {
        setTransaction (event.target.value);
    }
    
    const onSubmitFormHandler = (event) => {
        event.preventDefault(); 
        dispatch({
            type: 'ADD_TENANT',
            payload:{
                firstName: firstName,
                lastName: lastName,
                sex: sex,
                age: age,
                contactNo: contactNo,
                tenantStatus: tenantStatus,
                room_rented: room_rented,
                transaction: transaction
            } })
        setFirstName('')
        setLastName('')
        setAge('')
        setSex('')
        setContactNo('')
        setTenantStatus('')
        setTransaction('')
        setRoomRented('')
        window.location.reload();
    }

    return(
        <div className="add-tenant">
            <form onSubmit = {onSubmitFormHandler}>
                <h2> Add a tenant  <HiIcons.HiDocumentAdd/>  </h2>
                <input 
                    type='text'
                    name='firstName'
                    value={ firstName }
                    placeholder = 'First name'
                    onChange = {onFirstNameChangeHandler}
                /> <br/>
                <input 
                    type='text'
                    name='lastName'
                    value={ lastName }
                    placeholder = 'Last name'
                    onChange = {onLastNameChangeHandler}
                /><br/>
                <select name = 'sex' value={sex} onChange = {onSexChangeHandler}>
                    <option> -- Select sex -- </option>
                    <option value= 'male'> male </option>
                    <option value= 'female'> female </option>
                </select><br/>
                <input 
                    type='text'
                    name='age'
                    value={ age }
                    placeholder = 'Age'
                    onChange = {onAgeChangeHandler}
                /><br/>
                <input 
                    type='text'
                    name='contactNo'
                    value={ contactNo }
                    placeholder = 'Contact Number'
                    onChange = {onContactNoChangeHandler}
                /><br/>
                <select name = 'status' value={tenantStatus} onChange = {onTenantStatusChangeHandler}>
                    <option> -- Select tenant status -- </option>
                    <option value= 'active'> active </option>
                    <option value= 'inactive'> inactive </option>
                </select><br/>
                <input 
                    type='text'
                    name='room_rented'
                    value={ room_rented }
                    placeholder = 'Room rented (ID)'
                    onChange = {onRoomRentedChangeHandler}
                /><br/>
                <input 
                    type='text'
                    name='transaction'
                    value={ transaction }
                    placeholder = 'Transaction (ID)'
                    onChange = {onTransactionChangeHandler}
                /><br/>
                <button type="submit">
                    Add Tenant
                </button>
            </form>
        </div>
    )
}

export default AddTenant