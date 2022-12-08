import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const RoomInfo = ({id, roomName, roomType, roomPrice, roomStatus, tenants }) => {
    const navigate = useNavigate()

    const onClickHandler = (event) => {
        navigate('/rooms')
    }

    return(
        <>
            <li>ID: {id}</li>
            <li>ROOM NAME: Room {roomName} </li>
            <li>ROOM TYPE: {roomType} </li>
            <li>ROOM PRICE: Php {roomPrice} </li>
            <li>ROOM STATUS: {roomStatus} </li>
            <li> 
                RENTER:  <Link to = {`/tree/${id}`}> {tenants}  </Link>
            </li>
            <br/><br/>
            <button onClick={onClickHandler}> Back to room list </button> 
        </>

    )
}

export default RoomInfo