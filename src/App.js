import React, { Component } from 'react';
import './App.css';
import Sidebar from './pages/sidebar';
import Mainbar from './pages/mainbar';
import { ImDropbox } from "react-icons/im";
import { BsStopwatch, BsDownload, BsMusicNoteBeamed } from "react-icons/bs";
import { GrAppleAppStore } from "react-icons/gr";
import { AiFillPicture } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import NavBar from './pages/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderStructure: {
        childFolders: [
          {
            name: 'Air Drop',
            icon: <ImDropbox />,
            childFolders: [
              {
                name: 'folder1',
                childFolders: [
                  {
                    name: 'child folder1',
                    childFolders: []
                  }
                ]
              },
              {
                name: 'folder2',
                childFolders: []
              }
            ]
          },
          {
            name: 'Recents',
            icon: <BsStopwatch />,
            childFolders: []
          },
          {
            name: 'Applications',
            icon: <GrAppleAppStore />,
            childFolders: []
          },
          {
            name: 'Downloads',
            icon: <BsDownload />,
            childFolders: []
          },
          {
            name: 'Picture',
            icon: <AiFillPicture />,
            childFolders: []
          },
          {
            name: 'Music',
            icon: <BsMusicNoteBeamed />,
            childFolders: []
          },
          {
            name: 'Movies',
            icon: <BiCameraMovie />,
            childFolders: []
          }
        ]
      },
      selectedLocation: '0'
    }
  }

  setLocation = (location) => {
    this.setState({
      selectedLocation: location
    });
  }

  setFolderStructure = (updatedFolderStructure) => {
    this.setState({
      folderStructure: updatedFolderStructure
    })
  }

  render() {
    const { folderStructure, selectedLocation } = this.state;
    return (
      <div className="container">
        <NavBar setLocation={(location) => {
          this.setLocation(location)
        }}
          selectedLocation={selectedLocation}
          folderStructure={folderStructure}
          setFolderStructure={(folderStructure) => {
            this.setFolderStructure(folderStructure)
          }} />
        <div className="row">
          <Sidebar selectedLocation={selectedLocation}
            folderStructure={folderStructure}
            setLocation={(location) => {
              this.setLocation(location)
            }} />
          <Mainbar selectedLocation={selectedLocation}
            folderStructure={folderStructure}
            setFolderStructure={(folderStructure) => {
              this.setFolderStructure(folderStructure)
            }}
            setLocation={(location) => {
              this.setLocation(location)
            }} />
        </div>
      </div>
    )
  }
}

export default App;
