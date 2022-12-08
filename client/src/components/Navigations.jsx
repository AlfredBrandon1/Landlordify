//react-icons
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as ImIcons from 'react-icons/im';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';

import { Link } from "react-router-dom";

const Navigations = () => {
    return(
            <>
                    {/* <Link to = '/home'> <AiIcons.AiFillHome /> Home </Link> */}
                    <Link to = '/rooms'> <MdIcons.MdMeetingRoom/> Rooms </Link>
                    <Link to = '/tenants'> <ImIcons.ImProfile/> Tenants </Link>
                    <Link to = '/transactions'> <BsIcons.BsReceipt/> Transactions </Link>
                    <Link to = "/"> <RiIcons.RiLogoutCircleRFill/> Logout </Link>
            </>
    )
}

export default Navigations