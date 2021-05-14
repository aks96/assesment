
const Sidebar = (props) => {
    const {folderStructure, selectedLocation, setLocation} = props;
    const locationArr = selectedLocation.split('$');
    const sideBarSelection = parseInt(locationArr[0]);

    return(
        <div className="side">
            {folderStructure.childFolders.map((folder,index) => {
                return(
                    <div className="sidebar-options" style={index===sideBarSelection ? {color:'red'} : {}} onClick={() => setLocation(index.toString())}>
                        {folder.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar