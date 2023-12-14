//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.


import React from 'react'
import resim from '../img/tree.webp'

import "./Msg.css"
import Clock from '../clock/Clock'

const stil = {
    color: "teal",
    border: '1px dotted red'

}



const Msg = () => {
  

    return (                                            //return'ün icin react alani, disi ise javascript alani. Reactin ici ekrana basilacaklar
    <div>

        <h1 style={stil}>Burasi msg</h1>
        <span style={{
            color: 'salmon',
            fontFamily: 'monospace',
            fontSize: '1.3rem'
        }}>Merhaba</span>
        <p>Welcome react</p>
        <img className='img-msg' id='bee' src="https://cdn.pixabay.com/photo/2023/06/12/16/41/wild-bee-8058943_1280.jpg" alt="" />
        <br />
        <img className='img-msg' id='tree' src={resim} alt="" />

        <Clock />


    </div>                             
    )
}

export default Msg


