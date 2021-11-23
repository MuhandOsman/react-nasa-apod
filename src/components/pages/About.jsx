import { useContext, useEffect } from 'react'
import MyContext from '../../context/MyContext'


const About = () => {

  const context = useContext(MyContext)
  const {counter ,setCounter ,date , key, saveDate} = context

  

    useEffect(() => {
        const getData = async () => {
          try {
            const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
            const data = await resp.json()
            setCounter({data:data , loading: false})
          } catch (error) {
            console.log(error);
          }
        }
        getData()
      },[key, date ,setCounter])

      if (counter.loading) {return <h2>Loading...</h2> }

    return (
        <section className="about">
            <h1>Nasa Picture of the day</h1>
            <form>
               <label >Choose a date between 1996-2021 </label>
               <input type="date" name="date" min="1996-01-01" value={date} onChange={saveDate}/>
           </form>
            <div className="container">
                <img src={counter.data.url} alt="pic of the day" />
                <div className="text">
                    <p>Title: {counter.data.title} , Date : {counter.data.date}</p>
                    <p>{counter.data.explanation}</p>  
                </div>
                
            </div>
            
      
        </section>
    )
}

export default About
