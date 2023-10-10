import React, { useState } from 'react'

const State = () => {
  
    const [getValue, setGetValue] = useState("")

    const getText = (e) => {
        setGetValue(e.target.value)
        console.log(getValue);
    }
  
    return (
    <div>
        <form>
            <input type="text" onInput={getText} />
        </form>
    </div>
  )
}

export default State