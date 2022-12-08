import AddRoom from "../components/AddRoom"
import Header from "../components/Header"
import RoomsList from "../components/RoomsList"

const Rooms = () => {
    return(
        <>
        <Header/>
        <h2> Rooms  </h2>
        <div className="rooms container">         
            <AddRoom/>
            <RoomsList/>
        </div>
        </>

    )
}

export default Rooms