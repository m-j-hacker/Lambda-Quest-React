import React from 'react'
import Map from '../map';
import Player from '../player';

import { tiles } from '../../data/map/1'

function World(props) {
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}
        >

            <Map tiles={tiles} />
            <Player />
        </div>
    )
}

export default World