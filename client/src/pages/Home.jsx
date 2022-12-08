import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

import RoomRow from "../components/RoomRow";

const Home = ({ id, roomName, roomType, roomPrice, roomStatus, tenants }) => {
    const [rooms, setRoom] = useState([''])

    useEffect(() => {
        axios.get('http://localhost:2000/api/v1/rooms').then( response => {
        setRoom( response.data );
        })
    }, []);

    return(
        <>
            <Header/>
            <div className="home">           
                <h2> HOME </h2>
                <ul>
                    <li> Room {roomName} </li>
                    <li> {roomType} </li>
                    <li> Php {roomPrice} </li>
                    <li> {roomStatus} </li>
                    <li> {tenants} </li>
                </ul>
                <p>
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
                </p>
            </div>
        </>
    )

}

export default Home;