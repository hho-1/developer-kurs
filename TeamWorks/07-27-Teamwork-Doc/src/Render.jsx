import React from 'react'

const Render = () => {
    
        let langs = ["Ruby","ES6","Scala"]
        return (<div>
        {langs.map(it => <p>{it}</p>)}
        </div>)
        
}

export default Render