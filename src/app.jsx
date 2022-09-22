import React from 'react' 
import CountersList from './countersList'
import Page from "./page"


const App = () => {
    return(
        <>
            <CountersList />

            <div className="App">
                <Page />
            </div>
        </>
      );
}

export default App