import React from 'react'
import Sound from 'react-sound'

class SoundPlayer extends React.Component {
    
    render() {
        return <Sound url={'../../public/music/overworld_1.mp3'} playStatus={'PLAYING'} />
    }
}

export default SoundPlayer