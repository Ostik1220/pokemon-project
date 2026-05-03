import { useState } from 'react'
import { AddForm } from './components/addform/AddForm'
import { Filter } from './components/filter/Filter'
import { List } from './components/list/List'
import './App.css'

function App() {
    return (
        <>
            <AddForm/>
            <List/>
            <Filter/>
        </>
    )
}

export default App