
import { useState } from 'react';
// import './App.css';
import Folder from './component/Folder';
import explorer from './data/folderData';
import useTraverse from './Hooks/useTraverse';

function App() {
const [explorerData,setExplorerData]= useState(explorer);
// console.log(explorerData); 

// custom hook......
const {insertNode} = useTraverse();
const handleInsertNode=(folderId,item,isFolder)=>{
 const finalTree = insertNode(explorerData,folderId,item,isFolder)

 // update orignal tree....
 setExplorerData(finalTree);
}
return (
    <div className="App">
     <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
