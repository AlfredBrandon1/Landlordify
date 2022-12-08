import AddTenant from "../components/AddTenant"
import Header from "../components/Header"
import TenantsList from "../components/TenantsList"

const Tenants = () => {
    return (
        <>
        <Header/>
        <h2> Tenants </h2>
        <div className="tenants container">
            <AddTenant/>
            <TenantsList/>
        </div>
        </>
    )
}

export default Tenants