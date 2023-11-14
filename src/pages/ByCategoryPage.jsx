import React, { useEffect, useState } from 'react'
import LayOut from '../layOut/LayOut'
import { useParams } from 'react-router-dom'
import {postByCategory}  from '../ApiRequest/ApiRequest'
import BlogLists from '../components/BlogLists'
import Loader from '../components/Loader'

function ByCategoryPage() {
  let{categoryID}=useParams()
  const[list,setList]=useState(null)
  useEffect(()=>{
    postByCategory(categoryID).then((res)=>{
      setList(res);
    })
   
  },[categoryID])
  console.log(list);
  return (
    <div>
   <LayOut/>
   {list===null?<Loader/>:<BlogLists list={list}/>}
    </div>


  )
}

export default ByCategoryPage
