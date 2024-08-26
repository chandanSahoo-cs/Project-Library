import { useState, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [startTime, setStartTime]=useState(null)
  const [now, setNow]=useState(null)
  // const [intervalId, setIntervalID] = useState(null)
  const intervalRef=useRef(null)
  useEffect(()=>{
    const id=setInterval(()=>{
      setNow(Date.now());
    },10)
    intervalRef.current=id;
    return ()=>clearInterval(id)
  },[startTime])

  function start (){
    setStartTime(Date.now());
    // clearInterval(intervalId)
    // setIntervalID(null)
    // const id=setInterval(()=>{
    //   setNow(Date.now())
    // },10)
    // setIntervalID(id);
  }
  function stop(){
    if(intervalRef.current){
      clearInterval(intervalRef.current)
      intervalRef.current=null
    }
  }
  let time=0
  if(startTime!=null && now!=null){
    time=((now-startTime)/1000).toFixed(2)
  }
  return (
    <>
    <h1>Time: {time} </h1>
    <button onClick={start}>start</button>
    <button onClick={stop}>stop</button>
    </>
  )
}

export default App 
