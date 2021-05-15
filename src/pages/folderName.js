const FolderName = (props) => {
    const {renameModeOn, name, folderStructure, setFolderStructure, selectedLocation, index, setRenameModeOn} = props;
    
    const rename = (e) => {
        const locationArr = selectedLocation.split('$');
        let updatedFolderStructure = {...folderStructure};
        let targetFolder = updatedFolderStructure;
        locationArr.map(folderIndex => {
            targetFolder = targetFolder.childFolders[parseInt(folderIndex)];
        });
        console.log(e);
        targetFolder.childFolders[index].name = e.target.value;
        setFolderStructure(updatedFolderStructure);
        setRenameModeOn(-1);
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            rename(e);
        }
    }

    return(
        <div>
            {renameModeOn===index && (
                <input
                    type='text'
                    defaultValue={name}
                    onBlur={(e)=>{rename(e)}}
                    onKeyDown={(e)=>{handleKeyDown(e)}}
                />
            )}
            {renameModeOn!==index && name}
        </div>
    )
}

export default FolderName;