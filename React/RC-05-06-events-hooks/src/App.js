import React from 'react'
import Events from './1-events-hooksIntro/Events'
import "bootstrap/dist/css/bootstrap.min.css"
import Hooks from './2-hooks/Hooks'
import Counter from './2-classComponents/Counter'

const App = () => {
  return (
    <div>
      {/* <Events/> */}
      {/* <Hooks/> */}
      {/* <Counter/> */}
      <Counter count={20}/>
    </div>
  )
}

export default App