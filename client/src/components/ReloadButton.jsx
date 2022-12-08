import * as TfiIcons from 'react-icons/tfi'

const ReloadButton = () => {
    const onRefreshClickHandler =()=> {
        window.location.reload();
    }
    return(
        <TfiIcons.TfiReload 
            onClick={onRefreshClickHandler}
            cursor = "grab" 
            color='red'
        /> 
    )
}

export default ReloadButton