import { BsFolderFill } from "react-icons/bs";
import { useState } from "react";
import RightClickMenu from "./rightClickMenu";

const Mainbar = (props) => {
    const {folderStructure, selectedLocation, setFolderStructure, setLocation} = props;
    const [menuState, setMenuState] = useState({isOpen: false, x: 0, y: 0, selectedFolder: null});
    const locationArr = selectedLocation.split('$');
    let targetFolder = folderStructure;
    locationArr.map(folderIndex => {
        targetFolder = targetFolder.childFolders[parseInt(folderIndex)];
    });

    const onRightClick = (e, folderLocation) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuState({
            isOpen: true,
            x: e.clientX,
            y: e.clientY,
            selectedFolder: folderLocation
        });
    }

    const openFolder = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        setLocation(`${selectedLocation}$${index}`);
    }

    return(
        <div className="main" onContextMenu={(e)=>onRightClick(e)} onClick={() => setMenuState({isOpen: false, x:0, y:0})}>
            {targetFolder.childFolders.map((folder,index) => {
                return(
                    <div className="folders" onContextMenu={(e)=>onRightClick(e, `${selectedLocation}$${index}`)} onDoubleClick={(e)=>{openFolder(e, index)}}>
                        <BsFolderFill size='50px' color='skyblue'></BsFolderFill>
                        {folder.name}
                    </div>
                )
            })}
            {menuState.isOpen && <RightClickMenu xCoordinate={menuState.x} yCoordinate={menuState.y} selectedFolder={menuState.selectedFolder} setFolderStructure={setFolderStructure} folderStructure={folderStructure} selectedLocation={selectedLocation}/>}
        </div>
    )
}

export default Mainbar