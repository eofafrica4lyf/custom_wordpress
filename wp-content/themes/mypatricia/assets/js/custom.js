let newURL = "https://app.patriciacards.xyz/login";
let loginURL = "https://app.patriciacards.xyz/login";
let signUpURL = "https://app.patriciacards.xyz/register";
let tradeNowURL = "https://app.patriciacards.xyz/dashboard";
let buyNowURL = "https://app.patriciacards.xyz/dashboard";
let giftcardURL = "https://app.patriciacards.xyz/dashboard";
let btcURL = "https://app.patriciacards.xyz/dashboard";
let pmURL = "https://app.patriciacards.xyz/dashboard";
let apiURL = "https://api.mypatricia.co";

$("#new-url").click(function () {
  window.location.href = newURL;
});


// rates for landing page
let itunesBuy = document.getElementById("itunesBuy");
amazonBuy = document.getElementById("amazonBuy");
bitcoinBuy = document.getElementById("btc");
pmBuy = document.getElementById("pm");
itunesUuid = "8c6b8835-37d6-49ef-885e-e5c007cb0b4a";
amazonUuid = "8c6b9556-a5ea-4085-96ba-6539fbaab206";
cards = [itunesBuy, amazonBuy];
uuid = [itunesUuid, amazonUuid];
assets = [bitcoinBuy, pmBuy];
bitcoinId = document.getElementsByClassName("bitcoin")[0].id;
pmId = document.getElementsByClassName("pm")[0].id;
iD = [bitcoinId, pmId];

const getCardRate = (id, uuid) => {
  fetch(`${apiURL}/landing/card/sell/${uuid}`)
    .then(response => response.json())
    .then(data => {
      let rateVariations = data.data.variations[0].rate_variations;

      if (uuid == itunesUuid) {
        rateVariations.forEach(variation => {
          if (variation.card_acceptance_form == "picture" && variation.face_value_range_from == 50) {
            id.innerText = "₦" + variation.rate;
          }
        });
      } else if(uuid == amazonUuid) {
        rateVariations.forEach(variation => {
          if (variation.card_acceptance_form == "cash-receipt" && variation.face_value_range_from == 26) {
            id.innerText = "₦" + variation.rate;
          }
        })
      } else{
        id.innerText = "₦" + rateVariations[0].rate;
      }

    });
};

const getAssetRate = (id, iD) => {
  fetch(`${apiURL}/landing/${iD}/rate`)
    .then(response => response.json())
    .then(data => {
      var irate = data.data.usd_nra_sell;
      id.innerText = "₦" + irate;
    });
};

for (i = 0; i < uuid.length; i++) {
  getCardRate(cards[i], uuid[i]);
  getAssetRate(assets[i], iD[i]);
}


let m = 0;
let prevM = 0;
let words = document.querySelectorAll('.words');
let images = document.querySelectorAll('.slide')
console.log(images.length)
let time = 3000

const slideImages = () => {
  images[prevM].style.display = "none";
  images[m].style.display= "block";

  if(m < images.length - 1){
    m += 1;
    prevM = m - 1;
    // console.log(prevR, r)
  }else{
    m = 0;
    prevM = images.length - 1;
  }



  setTimeout( "slideImages()", time);
}

let r = 0
let prevR = 0;


const slideWords = () => {
  words[prevR].style.display = "none";
  words[r].style.display= "block";

  if(r < words.length -1 ){
    r += 1;
    prevR = r - 1;
    // console.log(prevR, r)
  }else{
    r = 0;
    prevR = words.length - 1;
  }



  setTimeout( "slideWords()", time);
}


// window.onload = () =>{
//   // slideImages()
//   slideWords()
// }

slideImages();
slideWords();



