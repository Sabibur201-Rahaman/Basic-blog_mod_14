import React from 'react'
import LayOut from '../layOut/LayOut'
import BlogLists from '../components/BlogLists'
import Loader from '../components/Loader'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { postDetails } from '../ApiRequest/ApiRequest'
import BlogDetails from './../components/BlogDetails';

function PageDetails() {
  let[list,setList]=useState(null)
  let{postID}=useParams()
  useEffect(()=>{
    postDetails(postID).then((res)=>{
      setList(res)
    })
  },[postID])
  console.log(list)
  return (
    <div>
    <LayOut/>
      {list===null?<Loader/>:<BlogDetails list={list}/>}
      </div>
  )
}

export default PageDetails
