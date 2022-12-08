import axios from 'axios';
import { useState, useEffect,useSelector } from 'react';

//components
import RoomRow from './RoomRow'

//styling
import styled from 'styled-components';
import ReloadButton from './ReloadButton';

const RoomsList = () => {
    // State
    const [ rooms, setRoom ] = useState([]);

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
        axios.get('http://localhost:2000/api/v1/rooms').then( response => {
        setRoom( response.data );
        })
    }, []);

    return(
        <div className="roomslist-container">
            <h3> Room List <ReloadButton/> </h3>            
            <StyledTable>
                <tbody>
                    <tr>
                        <th> Name </th>
                        <th> Type </th>
                        <th> Price </th>
                        <th> Status </th>
                        <th> Tenants </th> 
                        <th> Action </th> 
                    </tr> 
                    {
                    rooms.map( room => {
                        return  <RoomRow 
                                key = {room._id}
                                id = {room._id}
                                roomName = {room.roomName}
                                roomType = {room.roomType}
                                roomPrice = {room.roomPrice} 
                                roomStatus = {room.roomStatus}
                                tenant = {room.tenants}
                        />  
                    })
                    }
                </tbody>
            </StyledTable>
        </div>
    )
}

export default RoomsList