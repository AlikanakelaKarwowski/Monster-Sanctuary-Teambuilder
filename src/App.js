import React from 'react'

import { EquipmentPage, MonsterPage, MonsterTile, SkillPage } from "./containers";
import {Abilities, Equipment, Login, Navbar, Stats} from './components'
import './App.css'
const App = () => {
    return (
        <div className="App">
            <div className='gradient__bg'>
                <Navbar/>
                <Login/>
            </div>
            <MonsterTile/>
            <MonsterPage/>
            <SkillPage/>
            <EquipmentPage/>
        </div>
    )
}

export default App
