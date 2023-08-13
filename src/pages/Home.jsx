import React from 'react'
import useData from '../hooks/useData';
import Card from '../components/simple/card';
import '../stylesheet/home.css';
function Home() {
  const data = useData();
  console.log(data)
  return (
    <main className = 'main'>
        {(data.length === 0) ? <p>loading...</p> : data.map((item, index) => <Card 
            key = {index} 
            desc = {item.name} 
            img = {item.img} 
            to = {item.to}
            syllabus = {item.syllabus}
        />)}
    </main> 
  )
}

export default Home;