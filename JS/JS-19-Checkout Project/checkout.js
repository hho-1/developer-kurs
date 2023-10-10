//* ======================================================================
//*                 Checkout Page Solution
//* =======================================================================
//!kargo ücreti indirim ve vergi oranlarını variable olarak atadık

const vergi = 0.18;
const indirim = 0.7;

//!verilerin bilgilerini 3 object le diziye sakladık
let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];

//!sepettekiler dizisinin elemanlarını DOM a (browser=ekran) bastırma
ekranaBastir();//function yazmaya alışmak için bütün html yi bu function a bastırttım
hesaplaCardTotal();//ilk etapta dizideki bilgilere göre en alttaki table oluştu

function ekranaBastir() {
   sepettekiler.forEach((ürün) => {
     //!DESTRUCTURİNG
     const { name, price, adet, img } = ürün;

     document.querySelector(
       "#ürün-panel"
     ).innerHTML += `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-5">
      <img src=${img} class="img-fluid  rounded" alt="...">
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(price * indirim).toFixed(
                        2
                      )}</span>
                      <span class="h5 text-dark text-decoration-line-through">${price}</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${adet}</p>
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-ürün">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>
                  <div class="mt-2">
                    Ürün Toplam: $<span class="ürün-toplam">${(
                      price *
                      indirim *
                      adet
                    ).toFixed(2)}</span>
                  </div>
      </div>
    </div>
  </div>
</div>`;
   });

  //! silme olayı
//!bütün remove butonlarına ulaş, tıkladığın remove butonunun card sülalesini remove ile ekrandan filter ile diziden sil
  document.querySelectorAll(".remove-ürün").forEach((btn) => {
    btn.onclick = () => {
      //!ekrandan sil
      btn.closest(".card").remove();


      //!diziden sil
//! dizinin filterlanmış halini sepettekiler e assign ederek sepettekiler i yeni elemanlarıyla güncelledik
    sepettekiler = sepettekiler.filter(
      (ürün) =>
        ürün.name != btn.closest(".card").querySelector("h5").textContent
    );
      hesaplaCardTotal();//azalan elemanlar sonucu en alt total tekrar hesaplansın
      console.log(sepettekiler);
    };
  });
  //! adet değiştirme burada değişiklik olsun diye function tanımlayıp, içini dışarıda oluşturdum
  adetButon();

  //!browserda en alttaki total kısmı
  document.querySelector("#card-prices").innerHTML = `<table class="table">
            <tbody>
              <tr class="text-end">
                <th class="text-start">Aratoplam</th>
                <td>$<span class="aratoplam">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Vergi(18%)</th>
                <td>$<span class="vergi">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Kargo</th>
                <td>$<span class="kargo">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Toplam</th>
                <td>$<span class="toplam">0.00</span></td>
              </tr>
            </tbody>
          </table>`;
}

function adetButon() {
  document.querySelectorAll(".adet-controller").forEach((i) => {
    //! eksi, adet ve artının bulunduğu 3 kutuyu da çağırdım ve çocuklarına isim taktım
    const minus = i.firstElementChild;
    const adet1 = i.children[1];
    const plus = i.lastElementChild;

    //!tıkladığım artının adetini hem ekranda hem dizide değiştirdim
    plus.onclick = () => {
      //! ekranda arttırma
      adet1.textContent = Number(adet1.textContent) + 1;

      //!dizide arttırma

      //! dizide update olacaksa map kullanılabilir, değişen adetin akrabası h5 ile dizideki name i uyuşan elemanın adetini ekranda değişmiş olan adetle güncelle(assign et)
      sepettekiler.map((ürün) => {
        if (ürün.name == adet1.closest(".card").querySelector("h5").textContent)
          ürün.adet = adet1.textContent;
      });

      //!card ların altında bulunan o ürünün toplam fiyatını belirten yere (adetin sülalesinden ürün toplam tag inin textContent ine), tıkladığım plus ile değişen adet in card sülalesinden indirimli fiyatla, ekranda değişen adeti çarparak oluştur
      adet1.closest(".card").querySelector(".ürün-toplam").textContent =
        adet1.closest(".card").querySelector(".indirim-price").textContent *
        adet1.textContent;

      hesaplaCardTotal();
    };

     minus.onclick = () => {
       //!minus adet değişim ekrana bastırması
       adet1.textContent = Number(adet1.textContent) - 1;

       
       //!diziyi güncelle
       sepettekiler.map((ürün) => {
         if (
           ürün.name ==
           adet1.closest(".row").querySelector(".card-title").textContent
         )
           ürün.adet = adet1.textContent;
       });

       //!ürün toplam ekrana bastırması. her üründe olan toplam kısmı
       adet1.closest(".row").querySelector(".ürün-toplam").textContent = (
         adet1.closest(".row").querySelector(".indirim-price").textContent *
         adet1.textContent
       ).toFixed(2);
       hesaplaCardTotal();
       console.log(sepettekiler);
       //??????????????????????????????????????????????????????????????
     };

  });
}

//!calculate and update card total values
function hesaplaCardTotal() {

  const ürünToplam = document.querySelectorAll(".ürün-toplam");//querySelectorAll ile bütün ürüntoplam da yazanlar NodeList (diziye benzer forEach, map, index kullanılabilir) olarak geldi, reduce ile içeriğini toplayabilmem için gerçek bir diziye çevirdim

  const araToplam = Array.from(ürünToplam).reduce(
    (toplam, item) => toplam + Number(item.textContent),
    0
  );

  document.querySelector(".aratoplam").textContent = araToplam.toFixed(2);
  document.querySelector(".vergi").textContent = (araToplam * vergi).toFixed(2);

  document.querySelector(".kargo").textContent = 15.0;

  document.querySelector(".toplam").textContent =
    (araToplam + 15.0 + araToplam * vergi).toFixed(2);
}
