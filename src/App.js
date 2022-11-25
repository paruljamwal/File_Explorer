
import { useState } from 'react';
import './App.css';
import Folder from './component/Folder';
import explorer from './data/folderData';

function App() {
const [explorerData,setExplorerData]= useState(explorer);
console.log(explorerData); 

return (
    <div className="App">
     <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
