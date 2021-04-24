import React from 'react'
import './App.css'
import List from './Tasks/List'
import Form from './Tasks/Form'

const App = () => (
  <section className='container container-margin'>
    <div>
      <Form />
    </div>
    <div>
      <List />
    </div>
  </section>
)

export default App
