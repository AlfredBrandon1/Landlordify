import { useNavigate } from "react-router-dom"

const TenantInfo = ({id, firstName, lastName, sex, age, contactNo, tenantStatus, roomRented ,transaction}) => {
    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate('/tenants')
    }

    return(
        <>
            <li> NAME : {firstName} {lastName} </li>
            <li> SEX: {sex} </li>
            <li> AGE: {age} </li>
            <li> CONTACT NO.{contactNo}  </li>
            <li> STATUS: {tenantStatus} </li>
            <li> TRANSACTIONS (ID): {transaction} </li>
            <li> ROOM RENTED (ID):  {roomRented}  </li>
            <br/><br/>
            <button onClick={onClickHandler}> Back to tenant list </button> 
        </>

    )
}

export default TenantInfo