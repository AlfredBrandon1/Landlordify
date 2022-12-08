import * as RiIcons from 'react-icons/ri'
import { useDispatch } from 'react-redux'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const TransactionRow = ({id, paymentAmount, paymentType, coveredMonth, paymentDate, remarks}) => {
    const dispatch = useDispatch();

    const submit = () => {
        dispatch({
            type: 'DELETE_TRANSACTION', payload: {id :id}
        })
        confirmAlert({
        title: 'Confirm to delete',
        message: 'Sure ka ba?',
        buttons: [
            {
            label: 'Confirm',
            },
            {
            label: 'Cancel',
            },            
        ],       
        }); 
    }
    
    return(
        <tr>
            <td> {paymentAmount} </td>
            <td> {paymentType} </td>
            <td> {coveredMonth} </td>
            <td> {paymentDate} </td>
            <td> {remarks} </td>
            <td>
                <RiIcons.RiDeleteBin5Fill 
                    onClick = {submit}
                    color='red'
                    cursor='grab'                                    
                />
            </td>
    </tr>
    )
}

export default TransactionRow