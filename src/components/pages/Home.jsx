import {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import MyContext from '../../context/MyContext'

const Home = () => {

    const context = useContext(MyContext)
    const {result, count, saveCount,inputRef} = context

    
    useEffect(() => {
        inputRef.current.focus();
      },[inputRef])
    

    return (
        <section className="home">
            <form>
               <label >Choose a Number between 1-100  </label>
               
               <input type="number" name="count" min="1" max="100" ref={inputRef} value={count} onChange={saveCount} /> 
               
           </form>
            <h1>Nasa Picture of the day </h1>
            <div >
                {result.data.map((item ) =>
                <div key ={item.date} className="container">
                
                { item.media_type === "image" ?
                    <Link className="img-container" to="/object-details" state={item}><img src={item.url} alt="pic of the day" /></Link>
                 : <Link className="img-container" to="/object-details" state={item}><ReactPlayer url={item.url}/></Link>}
                
                <div className="text">
                    <p>Title: {item.title} , Date : {item.date}</p>
                    {/* <p>{item.explanation}</p> */}
                </div>
                </div>)}
            </div>
     
        </section>
    )
}

export default Home
