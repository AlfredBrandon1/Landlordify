import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect , useState } from 'react';
import RoomInfo from '../components/RoomInfo';

const ViewRoom = () => {
    const  {id}  = useParams()
    const [ rooms, setRoom ] = useState([]); // State
    
    useEffect(() => {
        axios.get(`http://localhost:2000/api/v1/rooms/${id}`).then( response => {
        setRoom( response.data );
        })
    }, []);

    return (
        <><h2> ROOM INFO </h2>
            <div className='view-room container'>              
                <ul>
                    <li> 
                        <RoomInfo 
                            key = {rooms._id}
                            id = {rooms._id}
                            roomName = {rooms.roomName}
                            roomType = {rooms.roomType}
                            roomPrice = {rooms.roomPrice} 
                            roomStatus = {rooms.roomStatus}
                            tenant = {rooms.tenants}
                        />                    
                    </li>
                </ul>
            </div>
            
        </>
    );
}

export default ViewRoom 