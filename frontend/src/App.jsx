import React from 'react'
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'


import Bruh from './components/Bruh'
import Blog from './components/Blog'
import Changelog from './components/Changelog'
import Fundme from './components/Fundme'
import Start from './components/Start'

import './styles/bruh.css'

function App() {
 

  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path='/' element ={<Bruh />}/>
        <Route path= '/start' element = {<Start />}/>
        <Route path= '/blog' element = {<Blog />}/>
        <Route path= '/changelog' element = {<Changelog />}/>
        <Route path= '/fundme' element = {<Fundme />}/>
        
      </Routes>
    </Router>
   
  )
}

export default App
