import { BsFolderFill } from "react-icons/bs";

const Mainbar = (props) => {
    const {folderStructure, selectedLocation} = props;
    const locationArr = selectedLocation.split('$');
    let targetFolder = folderStructure;
    locationArr.map(folderIndex => {
        targetFolder = targetFolder.childFolders[parseInt(folderIndex)];
        console.log(targetFolder);
    });
    return(
        <div className="main">
            {targetFolder.childFolders.map(folder => {
                return(
                    <div>
                        <BsFolderFill size='50px' color='skyblue'></BsFolderFill>
                        {folder.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Mainbar