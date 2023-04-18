import React from 'react'
import { Link } from 'react-router-dom'



function Home() {
  return (

    <div className='home-page'>
    <img className="home-pic" src="https://d2x3xhvgiqkx42.cloudfront.net/e8b80860-81ef-4d71-8236-9126bb7fc000/8e79daa2-ac8f-44ee-af38-e418102e1535/2020/09/04/01c2fbab-9155-460b-8d13-7d2e81fd6e77/adf9b7f3-1563-4d79-8033-6045fe6a3bd2.png" alt="rick&morty-img" height="400" width="400"/>
     <p className= "adventure">Click below if you want to know more about these crazy characters</p>
     <Link className="btn" to="/about">Let's Go</Link>
    </div>
   
  )
}

export default Home