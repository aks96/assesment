const RightClickMenu = (props) => {
    const { xCoordinate,
        yCoordinate,
        folderStructure,
        selectedLocation,
        setFolderStructure,
        selectedFolder,
        setRenameModeOn } = props;
    const locationArr = selectedLocation.split('$');
    const childFolderIndex = selectedFolder && parseInt(selectedFolder.split('$')[locationArr.length]);
    let updatedFolderStructure = { ...folderStructure };
    let targetFolder = updatedFolderStructure;
    locationArr.map(folderIndex => (
        targetFolder = targetFolder.childFolders[parseInt(folderIndex)]
    ));

    const createNewFolder = () => {
        targetFolder.childFolders.push({
            name: 'New Folder',
            childFolders: []
        });
        setFolderStructure(updatedFolderStructure);
    }

    const deleteFolder = () => {
        targetFolder.childFolders.splice(childFolderIndex, 1);
        setFolderStructure(updatedFolderStructure);
    }

    const copyFolder = () => {
        targetFolder.childFolders.push({
            name: `${targetFolder.childFolders[childFolderIndex].name}-copy`,
            childFolders: []
        });
        setFolderStructure(updatedFolderStructure);
    }

    return (
        <div className="menu" style={{ position: 'absolute', left: xCoordinate, top: yCoordinate }}>
            <div className="item" onClick={() => { createNewFolder() }}>New Folder</div>
            {selectedFolder && (
                <div>
                    <div className="item" onClick={() => { deleteFolder() }}>Delete</div>
                    <div className="item" onClick={() => { copyFolder() }}>Duplicate</div>
                    <div className="item" onClick={() => setRenameModeOn(childFolderIndex)}>Rename</div>
                </div>
            )}
        </div>
    );
}

export default RightClickMenu;