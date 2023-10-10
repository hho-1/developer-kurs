// //?==================================================================
// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (yani istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);

import React, { useEffect, useState } from "react";
import moment from "moment"
const Clock = () => {
  
  const [zaman,setZaman]=useState(moment())
  //!componentDidMount=ilk render da çalış birdaha burayı görme
 useEffect(() => {
  const time = setInterval(()=>{
    console.log("merhaba");
    setZaman(moment())

  },1000)
 

  return()=>{
console.log("başka sayfaya gidildiği için component öldü ");
clearInterval(time)
  }
   
 }, [])
 

    //!component kapandığında yada başka sayfaya gidildiğinde çalışma dursun istersek
   

//!count değişkeni her güncellendiğinde alttakiler olsun



  return (
    <div>
    {zaman.format("HH")}:
    {zaman.format("mm")}:
    {zaman.format("ss")}
    </div>
  );
};

export default Clock;