import { BsFillCaretLeftFill,BsFillCaretRightFill, BsFolderPlus, BsSearch } from "react-icons/bs";

const NavBar = (props) => {
    const {folderStructure,setFolderStructure,selectedLocation} = props;
    const locationArr = selectedLocation.split('$');
    let updatedFolderStructure = {...folderStructure};
    let targetFolder = updatedFolderStructure;
    locationArr.map(folderIndex => {
        targetFolder = targetFolder.childFolders[parseInt(folderIndex)];
    });
    
    const goToPrevPage = () => {
        const {selectedLocation, setLocation} = props;
        let locationArr = selectedLocation.split('$');
        if(locationArr.length>1){
            locationArr.splice(locationArr.length-1,1);
            setLocation(locationArr.join('$'));
        }
    }
    const createNewFolder = () => {
        targetFolder.childFolders.push({
            name: 'New Folder',
            childFolders: []
        });
        setFolderStructure(updatedFolderStructure);
    }
    return(
        <div className="navbar">
            <div className="row">
                <p style={{color:"white", paddingLeft:"10px"}}>Browser</p>
                <BsFillCaretLeftFill className="backButton" onClick={goToPrevPage}></BsFillCaretLeftFill>
                <p style={{color:"white"}}>Back</p>
                <BsFolderPlus size="30px" className="folderIcon" onClick={createNewFolder}></BsFolderPlus>
            </div>
        </div>
    )
}

export default NavBar;