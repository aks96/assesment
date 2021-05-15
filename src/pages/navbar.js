import { BsFillCaretLeftFill,BsFillCaretRightFill, BsFolderPlus } from "react-icons/bs";

const NavBar = () => {
    return(
        <div className="navbar">
            <BsFillCaretLeftFill color="white"></BsFillCaretLeftFill>
            <BsFillCaretRightFill color="white"></BsFillCaretRightFill>
            <BsFolderPlus color="white" style={{float: "right", paddingRight: "30px"}}></BsFolderPlus>
        </div>
    )
}

export default NavBar;