// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import data from './components/data/data.json'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {




  return (
    <><Navbar />
      <div className='flex flex-wrap container items-center justify-evenly '>

        {
          data.map((obj, idx) => (



            <Card obj={obj} key={idx} />
          ))
        }
      </div>


    </>

  )
}

export default App