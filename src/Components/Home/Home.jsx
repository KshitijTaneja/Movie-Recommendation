import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import ListTable from '../Table/Table'
import './Home.css' 

const Home = () => (
  <div className='kt'>
    <SearchForm />
    <ListTable />
  </div>
)

export default Home
