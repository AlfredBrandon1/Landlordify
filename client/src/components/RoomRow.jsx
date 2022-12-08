//react icons
import * as RiIcons from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

const RoomRow = ({id, roomName, roomType, roomPrice, roomStatus, tenants }) => {
    const dispatch = useDispatch()
    return(
        <>
            <tr>
                <td> <Link to = {`/${id}`}>  Room {roomName} </Link> </td>
                <td> {roomType} </td>
                <td> Php {roomPrice} </td>
                <td> {roomStatus} </td>
                <td>  <Link to = {`/tree/${id}`}> <span>  {tenants} </span>  </Link></td>
                <td>
                    <RiIcons.RiDeleteBin5Fill 
                        onClick = {
                            () => dispatch({
                                type: 'DELETE_ROOM', payload: {id :id}
                            },
                            window.location.reload()
                        )} 
                        color='red'
                        cursor='grab'
                        data-hover ='delete'                                    
                    />
                    {/* <Link to = {`/${id}`}> view room </Link> */}
                </td>
            </tr>
        </>

    )
}

export default RoomRow