import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'

export default function handleMovement(player) {

    function getNewPosition(oldPos, direction) {
        // This code is responsible for updating the new position based
        // on the entered direction
        switch(direction) {
            case 'WEST':
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]
            case 'EAST':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]
            case 'NORTH':
                return [ oldPos[0], oldPos[1]-SPRITE_SIZE ]
            case 'SOUTH':
                return [ oldPos[0], oldPos[1]+SPRITE_SIZE ]
        }
        
    }

    function observeImpassable(oldPos, newPos) {
        const tiles = store.getState().map.tiles
        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]
        return nextTile < 5
    }

    function observeBoundaries(oldPos, newPos) {
        // This code is a HOF for dispatchMove's payload.position to 
        // make sure that the character cannot walk off the map
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
               (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }

    function dispatchMove(newPos) {
        
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos
            }
        })
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)

        if(observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos)) {
            dispatchMove(newPos)
        }
    }

    function handleKeyDown(e) {
        // The keycodes correspond to the 4 cardinal directions of the arrow keys
        e.preventDefault()

        switch(e.keyCode) {
            case 37:
                return attemptMove('WEST')
            
            case 38:
                return attemptMove('NORTH')

            case 39:
                return attemptMove('EAST')

            case 40:
                return attemptMove('SOUTH')
            default:
            console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}