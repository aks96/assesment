import { DiDropBox } from "react-icons/di";

const Sidebar = (props) => {
    const {folderStructure, selectedLocation, setLocation} = props;
    const locationArr = selectedLocation.split('$');
    const sideBarSelection = parseInt(locationArr[0]);

    return(
        <div className="side">
            <p className="heading">Favourites</p>
            {folderStructure.childFolders.map((folder,index) => {
                return(
                    <div className="sidebar-options" style={index===sideBarSelection ? {background:'#9ea19e'} : {}} onClick={() => setLocation(index.toString())}>
                        <span style={{paddingRight: "5px"}}>{folder.icon}</span>
                        {folder.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar