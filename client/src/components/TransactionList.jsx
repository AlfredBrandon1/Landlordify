import axios from 'axios';
import { useState, useEffect } from 'react';

//components
import TransactionRow from './TransactionRow';

//styling
import styled from 'styled-components';
import ReloadButton from './ReloadButton';

const TransactionList = () => {

    // State
    const [ transactions, setTransaction ] = useState([]);

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
        axios.get('http://localhost:2000/api/v1/transactions').then( response => {
        setTransaction( response.data );
        })
    }, []);

    return(
        <div className="transaction-list">
            <h3> Transaction List <ReloadButton/> </h3>  
            <StyledTable>             
                <tbody>
                    <tr>
                        <th> Payment Amount </th>
                        <th> Payment Type </th>
                        <th> Payment covered month </th>
                        <th> Payment Date </th>
                        <th> Remarks </th>
                        <th> Action </th>
                    </tr>
                    {
                    transactions.map( transaction => {
                        return  <TransactionRow
                            key = {transaction._id}
                            id = {transaction._id}
                            paymentAmount =  {transaction.paymentAmount}
                            coveredMonth = {transaction.coveredMonth}
                            paymentType = {transaction.paymentType}
                            paymentDate = {transaction.paymentDate}
                            remarks = {transaction.remarks}
                        />
                    })
                    }
                </tbody>
            </StyledTable>
        </div>
    )
}

export default TransactionList