import React from 'react'
import students from "./data/students.js"
import Header from './components/Header.jsx'
import Dashboard from "./components/Dashboard.jsx"
import Footer from './components/Footer.jsx'
export default function App() {
  return (
    <div>
           <Header />
           <Dashboard studentsArr={students}/>
           <Footer />
    </div>
  )
}
