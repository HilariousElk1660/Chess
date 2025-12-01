import './App.css';
import Board from './components/Board/Board.jsx';
import { reducer } from './reducer/reducer.js'
import { useReducer } from 'react'
import { initGameState } from './constants.jsx';
import AppContext from './contexts/Context.jsx'
import Control from './components/Control/Control.jsx';
import TakeBack from './components/Control/bits/TakeBack.jsx';
import MovesList from './components/Control/bits/MoveList.jsx'
import StartScreen from './components/StartScreen/StartScreen.jsx';
import actionTypes from './reducer/actionTypes.jsx';


function App() {

    const [appState, dispatch ] = useReducer(reducer,initGameState);

    const providerState = {
        appState,
        dispatch
    }

    return (
        <AppContext.Provider value={providerState}>
        <div className="App">

            {!appState.gameStarted ? (
                <StartScreen onStart={() => dispatch({ type: actionTypes.START_GAME })} />
            ) : (
                <>
                    <Board />
                    <Control>
                        <MovesList />
                        <TakeBack />
                    </Control>
                </>
            )}

        </div>
    </AppContext.Provider>
    ); 
}

export default App;