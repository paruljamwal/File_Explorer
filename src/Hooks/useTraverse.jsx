import React from 'react'

const useTraverse = () => {
    function insertNode(tree,folderId,item,isFolder){
      if(tree.id === folderId && tree.isFolder){
        tree.items.unshift({
            id:new Date().getTime(),
            name:item,
            isFolder,
            items:[]
        })
        return tree;
      }
      //depth first search...
      let latestNode=[];
     latestNode= tree.items.map((e)=>(
        insertNode(e,folderId,item,isFolder)
      ))
      return {...tree,items:latestNode}
    }

  return {insertNode}
}

export default useTraverse;