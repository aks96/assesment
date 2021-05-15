import React, { Component } from 'react';
import './App.css';
import Sidebar from './pages/sidebar';
import Mainbar from './pages/mainbar';
import { BsFolderFill } from "react-icons/bs";
import NavBar from './pages/navbar';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      folderStructure:{
      childFolders:[
        {
          name: 'Air Drop',
          childFolders:[
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
          childFolders:[]
        },
        {
          name: 'Applications',
          childFolders:[]
        },
        {
          name: 'Downloads',
          childFolders:[]
        },
        {
          name: 'Picture',
          childFolders:[]
        },
        {
          name: 'Music',
          childFolders:[]
        },
        {
          name: 'Movies',
          childFolders:[]
        }
      ]},
      selectedLocation:'0'
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

  render(){
    const {folderStructure, selectedLocation} = this.state;
    return(
      <div className="container">
        <NavBar></NavBar>
        <div className="row">
          <Sidebar selectedLocation={selectedLocation} folderStructure={folderStructure} setLocation={(location)=>{this.setLocation(location)}}/>
          <Mainbar selectedLocation={selectedLocation} folderStructure={folderStructure} setFolderStructure={(folderStructure)=>{this.setFolderStructure(folderStructure)}} setLocation={(location)=>{this.setLocation(location)}}/>
        </div>
      </div>
    )
  }
} 

export default App;
