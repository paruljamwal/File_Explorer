import React, { useState } from 'react'
import "./Folder.css";
const Folder = ({explorer}) => {
    console.log(explorer);
    const [expand,setExpand]=useState(false);

    if(explorer.isFolder){
      
      return (
        <div style={{marginTop:5}} >
          <div className='folder' onClick={()=>setExpand(!expand)} >
           <span>📂 {explorer.name}</span>
            </div>
            {/* items  */}
            <div style={{display:expand ? "block" : "none", paddingLeft:25}} >
              {explorer.items.map((e)=>(
                <Folder explorer={e} key={e.id} />
              ))}
            </div>
        </div>
      )
    }else{
      return <span className='file' > 🗃 {explorer.name}</span>
    }
}

export default Folder;