import { useState } from "react"
import { Link , useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';

import * as HiIcons from 'react-icons/hi'

const AddTransaction  = () => {

    const [paymentAmount, setPaymentAmount] = useState('')
    const [paymentType, setPaymentType] = useState('')
    const [coveredMonth, setCoveredMonth] = useState('')
    const [paymentDate, setPaymentDate] = useState('')
    const [remarks, setRemarks] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onPaymentAmountChangeHandler = (event) => {
        setPaymentAmount (event.target.value);
    }   
    const onPaymentTypeChangeHandler = (event) => {
        setPaymentType (event.target.value);
    }
    const onCoveredMonthChangeHandler = (event) => {
        setCoveredMonth (event.target.value);
    }
    const onPaymentDateChangeHandler = (event) => {
        setPaymentDate (event.target.value);
    }
    const onRemarksChangeHandler = (event) => {
        setRemarks (event.target.value);
    }
    
    const onSubmitFormHandler = (event) => {
        event.preventDefault(); 
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:{
                paymentAmount: paymentAmount,
                paymentType: paymentType,
                paymentDate: paymentDate,
                coveredMonth: coveredMonth,
                remarks: remarks
            } })
        
        //reset the values after submit
        setPaymentAmount(0)
        setPaymentType('')
        setPaymentDate(0)
        setCoveredMonth('')
        setRemarks('')
        window.location.reload(); //reloads the page after submit
    }

    return(
        <div className="add-tenant">
            <form onSubmit = {onSubmitFormHandler}>
                <h2> Add a transaction <HiIcons.HiDocumentAdd/> </h2>
                <input 
                    type='number'
                    name='paymentAmount'
                    value={ paymentAmount }
                    placeholder = 'Payment amount'
                    onChange = {onPaymentAmountChangeHandler}
                /> <br/>
                <select name ="paymentType" value = {paymentType} onChange = {onPaymentTypeChangeHandler}>
                    <option> -- Select a payment type -- </option> 
                    <option value = 'advance-payment' selected> advance payment</option>
                    <option value = 'deposit'> deposit payment </option>
                    <option value = 'partial-payment'> partial payment </option>
                    <option value = 'monthly-dues'> monthly due </option>
                </select><br/>
                <input 
                    type='date'
                    name='paymentDate'
                    value={ paymentDate }
                    placeholder = 'Payment date'
                    onChange = {onPaymentDateChangeHandler}
                /> <br/>
                <select
                    name ="paymentType"
                    value = {coveredMonth}
                    onChange = {onCoveredMonthChangeHandler}
                >       <option> -- Select payment covered month -- </option>
                        <option value= 'january'> January </option>
                        <option value= 'february'> February </option>
                        <option value= 'march'> March </option>
                        <option value= 'april'> April </option>
                        <option value= 'may'> May </option>
                        <option value= 'june'> June </option>
                        <option value= 'july'> July </option>
                        <option value= 'august'> August </option>
                        <option value= 'september'> September </option>
                        <option value= 'october'> October </option>
                        <option value= 'november'> November </option>
                        <option value= 'december'> December </option>
                </select><br/>
                <input 
                    type='text'
                    name='remarks'
                    value={ remarks }
                    placeholder = 'Remarks'
                    onChange = {onRemarksChangeHandler}
                /> <br/>               
                <button type="submit">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}

export default AddTransaction