import { useState } from "react"
import { Link , useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';

import * as HiIcons from 'react-icons/hi'

const AddRoom  = () => {

    const [roomName, setRoomName] = useState ('')
    const [roomType, setRoomType] = useState('')
    const [roomPrice, setRoomPrice] = useState()
    const [roomStatus, setRoomStatus] = useState('')
    const [tenants, setTenant] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onRoomNameChangeHandler = (event) => {
        setRoomName (event.target.value);
    }

    const onRoomTypeChangeHandler = (event) => {
        setRoomType (event.target.value);
    }

    const onRoomPriceChangeHandler = (event) => {
        setRoomPrice (event.target.value);
    }

    const onroomStatusChangeHandler = (event) => {
        setRoomStatus (event.target.value);
    }

    const ontenantsChangeHandler = (event) => {
        setTenant(event.target.value)
    }
    
    const onSubmitFormHandler = (event) => {
        event.preventDefault(); 
        dispatch({
            type: 'ADD_ROOM',
            payload:{
                roomName : roomName,
                roomType : roomType,
                roomPrice : roomPrice,
                roomStatus : roomStatus,
                tenants: tenants
            } })
        setRoomName('')
        setRoomType('')
        setRoomPrice('')
        setRoomStatus('')
        setTenant('')
        window.location.reload();
    }

    return(
        <div className="add-room">
            <form onSubmit = {onSubmitFormHandler}>
                <h2> Add a room <HiIcons.HiDocumentAdd/> </h2>
                <input 
                    type='text'
                    name='roomName'
                    value={ roomName }
                    placeholder = 'Room name'
                    onChange = {onRoomNameChangeHandler}
                /> <br/>
                <select name = 'status' value={roomType} onChange = {onRoomTypeChangeHandler}>
                    <option> -- Select room type -- </option>
                    <option value= '1-roomed-type'> 1 roomed type </option>
                    <option value= '2-roomed-type'> 2 roomed type </option>
                    <option value= '3-roomed-type'> 3 roomed type </option>
                </select>
                <br/>
                <input 
                    type='text'
                    name='roomPrice'
                    value={ roomPrice }
                    placeholder = 'Room price'
                    onChange = {onRoomPriceChangeHandler}
                /> <br/>
                <select name = 'status' value={roomStatus} onChange = {onroomStatusChangeHandler}>
                    <option> -- Select room status -- </option>
                    <option value= 'occupied'> occupied </option>
                    <option value= 'vacant'> vacant </option>
                </select>
                <br/>
                <input 
                    type ='text'
                    name='tenants'
                    value={ tenants }
                    placeholder = 'Add tenants (ID)'
                    onChange = {ontenantsChangeHandler}
                /> <br/>
                <button type="submit">
                    Add room
                </button>
            </form>
        </div>
    )
}

export default AddRoom