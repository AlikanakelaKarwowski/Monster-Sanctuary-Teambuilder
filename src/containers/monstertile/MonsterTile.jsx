import React from 'react'
import './monstertile.css'
import {Abilities, Stats, Equipment} from "../../components";
const MonsterTile = () => {
    return (
        <div>
            MonsterTile
            <Abilities />
            <Stats/>
            <Equipment/>
        </div>
    )
}

export default MonsterTile
