import {
    BsFillCaretLeftFill,
    BsFolderPlus,
    BsSearch
} from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";

const NavBar = (props) => {
    const { folderStructure, setFolderStructure, selectedLocation } = props;
    const locationArr = selectedLocation.split('$');
    let folderPath = '';
    let updatedFolderStructure = { ...folderStructure };
    let targetFolder = updatedFolderStructure;
    locationArr.map(folderIndex => {
        targetFolder = targetFolder.childFolders[parseInt(folderIndex)];
        if (folderPath) {
            folderPath += '/';
        }
        folderPath += targetFolder.name;
        return targetFolder;
    });

    const goToPrevPage = () => {
        const { selectedLocation, setLocation } = props;
        let locationArr = selectedLocation.split('$');
        if (locationArr.length > 1) {
            locationArr.splice(locationArr.length - 1, 1);
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
    return (
        <div className="navbar">
            <div className="row">
                <FaFirefoxBrowser className="appIcon"></FaFirefoxBrowser>
                <BsFillCaretLeftFill className="backButton" onClick={goToPrevPage}></BsFillCaretLeftFill>
                <p style={{ color: "white" }}>Back</p>
                <span><AiOutlineFolderOpen></AiOutlineFolderOpen>{folderPath}</span>
                <BsFolderPlus size="30px" className="folderIcon" onClick={createNewFolder}></BsFolderPlus>
                <BsSearch className="searchIcon"></BsSearch>
            </div>
        </div>
    )
}

export default NavBar;