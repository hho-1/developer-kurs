import React from 'react'               //Bunu silsen de olur. CÜNKÜ zaten parent index.js'de vr





const Clock = () => {
  
   const date = new Date().toLocaleDateString();
  
    return (
    <div>

        <h2> {date} </h2>


    </div>
  )
}

export default Clock