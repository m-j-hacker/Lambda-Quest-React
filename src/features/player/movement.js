import store from '../../config/store'

export default function handleMovement(player) {

    function getNewPosition(direction) {
        return [ oldPos[0]-, oldPos[1] ]
    }

    function dispatchMove(direction) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    function handleKeyDown(e) {
        e.preventDefault()

        switch(e.keyCode) {
            case 37:
                return console.log('WEST')
            
            case 38:
                return console.log('NORTH')

            case 39:
                return console.log('EAST')

            case 40:
                return console.log('SOUTH')
            default:
            console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}