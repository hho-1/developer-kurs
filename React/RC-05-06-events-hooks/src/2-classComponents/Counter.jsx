import React, { Component } from 'react'

/* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================*/

class Counter extends Component {
    constructor(props){
        super(props)
        /* this.state = {count: 0} */
        this.state = {count: props.count || 0}             //babadan parametre gelirse onu yaz, gelmezse 0 yaz
    }
    artir(){
        this.setState({count: this.state.count + 1})
    }
    azalt = () => {
        this.setState({count: this.state.count - 1})           //arrow function kullandigimiz icin asagidaki onClick kisminda bind yapmaya gerek kalmadi
    }

    //? React tarafından tanımlanan method lar default olarak class a bind edilir (bağlanır).
    //? Bu nedenle, metodlarımızı constructor daki class a bind etmeliyiz veya automatic binding için arrow function kullanabiliriz.

    render(){
        return (
            <div className='container text-center mt-5'>
                <h1>Class Component</h1>
                <h2>COUNT: {this.state.count}</h2>
                <button className='btn btn-danger btn-lg me-5 mt-3' onClick={this.artir.bind(this)}>ARTIR</button>
                <button className='btn btn-success btn-lg mt-3' onClick={this.azalt}>AZALT</button>
            </div>
        )
    }
}

export default Counter