import * as RiIcons from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

const TenantRow = ({id, firstName, lastName, sex, age, contactNo, tenantStatus}) => {
    const dispatch = useDispatch();

    return(
        <tr>
            <td> <Link to = {`/tree/${id}`}> {firstName} </Link> </td>
            <td> {lastName} </td>
            <td> {sex} </td>
            <td> {age} </td>
            <td> {contactNo} </td>
            <td>  {tenantStatus} </td>
            <td>
                <RiIcons.RiDeleteBin5Fill 
                    onClick = {
                        () => dispatch({
                            type: 'DELETE_TENANT', payload: {id :id}
                        },
                            window.location.reload()
                    )} 
                    color='red'
                    cursor='grab'                                                
                />
                
            </td>
        </tr>

    )
}

export default TenantRow