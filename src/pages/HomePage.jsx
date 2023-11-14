import React, { useEffect, useState } from 'react'
import LayOut from '../layOut/LayOut'
import BlogLists from '../components/BlogLists'
import { postLatest } from '../ApiRequest/ApiRequest'
import Loader from '../components/Loader'

function HomePage() {
  const[list,setList]=useState(null)
  useEffect(()=>{
    (async()=>{
let res=await postLatest()
setList(res)
    })()
  },[])
  return (
    <div>
      <LayOut/>
      {list===null?<Loader/>:<BlogLists list={list}/>}
    </div>
  )
}

export default HomePage
