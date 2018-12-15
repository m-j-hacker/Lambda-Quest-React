import React from 'react'
import Map from '../map';
import Player from '../player';
import Sound from 'react-sound'

import { tiles } from '../../data/map/1'
import store from '../../config/store'

function World(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles,
    }
})
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}
        >
            <Sound url={'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Swimmey%20Texture.mp3'} autoLoad={true} playStatus={Sound.status.PLAYING} position={0} />
            <Map />
            <Player />
        </div>
    )
}

export default World