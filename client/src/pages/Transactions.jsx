import AddTransaction from "../components/AddTransaction"
import Header from "../components/Header"
import TransactionList from "../components/TransactionList"
import ViewRoom from "./ViewRoom"

const Transactions = () => {
    return(
        <>
            <Header/> 
            <h2> Transactions </h2>
            <div className="transactions container">
                <AddTransaction/>
                <TransactionList/>
            </div>
        </>

    )
}

export default Transactions