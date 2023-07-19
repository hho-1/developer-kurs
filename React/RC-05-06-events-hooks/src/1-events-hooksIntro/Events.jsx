import React from 'react'


//! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor


// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.

const Events = () => {
  
    //!Javascript alani, ekrana basilmaz

    let baslik = "Merhaba"
    let count = 0;

    const artir = () => {
        count += 1;
        document.querySelector('span').textContent = count
    }

    const butonTxt = (a) => {
        document.querySelector(".btn-info").textContent = a
    }

    return (
    //!React alani
    
    <div className='container text-center mt-4'>
        <h1>{baslik}</h1>
        <h2>Count: <span>{count}</span></h2>
        <button className='btn btn-primary btn-lg' onClick={artir}>Artir</button>    
        <button className='btn btn-info btn-lg' onClick={()=>butonTxt(new Date().getFullYear())}>Sifirla</button>
        <button className='btn btn-danger btn-lg' onClick={()=>alert('Butona tiklandi')}>Tiklandi</button>
    </div>
    )
}

//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//* DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------

export default Events