import React from 'react'
import Events from './1-events-hooksIntro/Events'
import "bootstrap/dist/css/bootstrap.min.css"
import Hooks from './2-hooks/Hooks'
import Counter from './2-classComponents/Counter'
import Form from './3-forms/Form'
import MouseKeyboard from './4-mouse-keyBoard/MouseKeyboard'

const App = () => {
  return (
    <div>
      {/* <Events/> */}
      {/* <Hooks/> */}
      {/* <Counter/> */}
      {/* <Counter count={20}/> */}
      {/* <Form/> */}
      <MouseKeyboard/>
    </div>
  )
}

export default App