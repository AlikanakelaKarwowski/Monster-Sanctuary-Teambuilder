import React from 'react'
import './monstertile.css'
import {Abilities, Stats, Equipment, MonsterImg} from "../../components";
const MonsterTile = () => {
    return (
        <div className='monster-tile'>
            MonsterTile
            <MonsterImg/>

            <Abilities />
            <Stats/>
            <Equipment/>
        </div>
    )
}

export default MonsterTile
