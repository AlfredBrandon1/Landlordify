import axios from 'axios'

const initialState = {
    allLandlords: [],
    allRooms : [],
    allTenants: [],
    allTransactions: []
}


const reducer = (state = initialState, action) => {

    switch( action.type ){
        case 'REGISTER':
            const newLandlord = action.payload;
            axios.post('http://localhost:2000/api/v1/auth/register', newLandlord).then(result => {
                alert(result.data.status);
            });
            return { ...state, allLandlords: [ ...state.allLandlords, newLandlord ]};

        case 'LOGIN':
            axios.post('http://localhost:2000/api/v1/auth/login').then(result => {
                alert(result.data.status);
            });

        case 'ADD_ROOM':
            const newRoom = action.payload;
            axios.post('http://localhost:2000/api/v1/rooms/add-room', newRoom).then(result => {
                alert(result.data.status);
            });
            return { ...state, allRooms: [ ...state.allRooms, newRoom ]};

        case 'DELETE_ROOM':
            const deleteRoom = action.payload.id;
            axios.delete(`http://localhost:2000/api/v1/rooms/${deleteRoom}`).then(result => {
                alert(result.data.status);
            });
            return { ...state, allRooms : [state.allRooms.filter(room => room._id !== action.payload)]};
            
        case 'ADD_TENANT':
            const newTenant = action.payload;
            axios.post('http://localhost:2000/api/v1/tenants/add-tenant', newTenant).then(result => {
                alert(result.data.status);
            });
            return { ...state, allTenants: [ ...state.allTenants, newTenant ]};

        case 'DELETE_TENANT':
            const deleteTenant = action.payload.id;
            axios.delete(`http://localhost:2000/api/v1/tenants/${deleteTenant}`).then(result => {
                alert(result.data.status);
            });
            return { ...state, allTenants : [state.allTenants.filter(tenant => tenant._id !== action.payload)]};
            
        case 'ADD_TRANSACTION':
            const newTransaction = action.payload;
            axios.post('http://localhost:2000/api/v1/transactions/add-transaction', newTransaction).then(result => {
                alert(result.data.status);
            });
            return { ...state, allTransactions: [ ...state.allTransactions, newTransaction ]};

        case 'DELETE_TRANSACTION':
            const deleteTransaction = action.payload.id;
            axios.delete(`http://localhost:2000/api/v1/transactions/${deleteTransaction}`).then(result => {
                //alert(result.data.status);
            });
            return { ...state, allTenants : [state.allTenants.filter(tenant => tenant._id !== action.payload)]};

        default: 
        return state;
    }
}

export default reducer;