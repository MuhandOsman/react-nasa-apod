import React, { useEffect, useState,useRef } from 'react'
import MyContext from './MyContext'

const MyProvider = (props) => {
    const key = process.env.REACT_APP_KEY

  const [result,setResult] = useState({data:[], loading:true})
  const [counter,setCounter] = useState({data:[], loading:true})

  const [count , setCount] = useState("5")
  const [date , setDate] = useState("2021-11-21")

  const inputRef = useRef()

  



  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=${count}`)
        const data = await resp.json()
        setResult({data:data , loading: false})
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  },[key, count])

  if (result.loading) {return <h2>Loading...</h2> } 

  console.log(result);

  
  const saveDate = (e) => {
    setDate( e.target.value)
}

const saveCount = (e) => {
    setCount( e.target.value)
}



const handleSubmit = (e) => {
    e.preventDefault()

}


    return (
        <MyContext.Provider value={{result, count, setCount,date , setDate, key, handleSubmit, saveDate, saveCount,counter,inputRef,setCounter}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider
