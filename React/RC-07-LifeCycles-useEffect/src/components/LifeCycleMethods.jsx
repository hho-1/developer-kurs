//?==================================================================
//?                         LIFECYCLE METHODS
//?          https://reactjs.org/docs/react-component.html
//?
//?==================================================================

//* Lifecycle yöntemleri, DOM'daki süreleri boyunca componentler üzerinde çalışmak için kullanılan, React'te yerleşik özel yöntemlerdir.
//* Örneğin, bileşen bağlandığında, oluşturduğunda, güncellendiğinde veya bağlantısını kestiğinde.

//* Component in oluşturulması (constructor)
//* DOM ağacına ekleme. (componentDidMount)
//* Component in işlenmesi  (render)
//* (Optional) Componentin update edilmesi (componentDidUpdate)
//* componentin ölümü (DOM ağacından kaldırılıyor)(componentWillUnmount)

import React from "react";

class LifeCycleMethods extends React.Component {
  //! 1-) componentin oluşturulmasında çağrılır
 
  constructor(props){
    console.log('constructor is running');
    super(props)
    this.state = {count: 0}

  }

  handleArtir = () => {
    this.setState({count: this.state.count + 1})
  }



  //! 3-) component  monte edildiğinde çağrılır
  //! (ilk renderdan hemen sonra).
  //!  lifecycle döngüsünde yalnızca bir kez çağrılır

  componentDidMount(){
    console.log('Component kuruldu');
  }

  //! 4-) bileşen güncellenir ve yeniden oluşturulur hemen sonrasında çağrılır.
  //! It receives the prevState and prevProps as parameters
  //!ayrıca yeni değiştirilen duruma veya props lara  bir kez erişebilir
 

  componentDidUpdate(){
    console.log("Component update edildi.");
  }

  //! 5-) bileşen DOM'dan kaldırılmadan önce çağrılır
  
  componentWillUnmount(){
    console.log("Component öldü");
  }


//! 2-) her oluşturmada çağrılır (Bileşeni DOM'a çizme)
  render() {
    console.log("Component Rendered");
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT: {this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleArtir}>ARTIR</button>
      </div>
    );
  }
}
export default LifeCycleMethods;
