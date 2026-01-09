// fetch('https://api.aladhan.com/v1/asmaAlHusna')
// .then(response => response.json())
// .then(asmaAlHusna => {
//     let asma = asmaAlHusna.data;
//     for (const element of asma) {
//         console.log(element);
        
//     }
// }
// )
// function getAsmaAlHusna() {
//     let url = "https://api.aladhan.com/v1/asmaAlHusna"
// axios.get(url)
// .then( (response)=>{
//     console.log(response);
    
// })
// .catch(error =>{
//     alert(error)
// })

// }

// getAsmaAlHusna()
    

function quran() {
axios.get('http://api.alquran.cloud/v1/surah')
.then( (response)=>{
   
    let x = response.data
    console.log(x);
    for (let element of x.data ) {
      document.getElementById("content").innerHTML +=`
      <div id="quran-text" onclick="userIdclick(${element.number})>
      <h2>${element.name}</h2>
     
      <p>عدد الايات ${element.numberOfAyahs} </p>
      </div>
      `
    }
    
})
.catch(error =>{
    console.log(error);
    
})
}
// جزء خاص ببحث علي ايه
function Search() {
  let name = document.getElementById("Search").value
  document.getElementById("content").innerHTML =""
  let url = "http://api.alquran.cloud/v1/search/" + name + "/all/ar"
fetch(url)
.then(response => response.json())
.then(asmaAlHusna => {
    let asma = asmaAlHusna.data.matches;
    for (const element of asma) {
        console.log(element);
        // window.location.href = `page2.html?value=${encodeURIComponent(input.value)}`;

        document.getElementById("result").innerHTML +=`
        <div id="quran-Search-text">
      <h3 id="surah-name">${element.surah.name}</h3>
      <div id="quran-Search-ayah">
        <span id="ayah-number">${element.text}</span>
      
      </div>
    </div>
        
        
        
        `
    }
}
)
}
// =========================
// دالة تبديل /n ال br
// =========================
function nl2br(text) {
  return text.replace(/\n/g, "<br>");
}

// =========================
// الصفحة الأولى: أسماء السور
// =========================
if (document.getElementById("content")) {

  let url = "http://api.alquran.cloud/v1/surah";

  axios.get(url)
  .then((response) => {
    let x = response.data;

    for (let element of x.data) {
      document.getElementById("content").innerHTML += `
        <div id="quran-text" onclick="userIdclick(${element.number})">
          <h2>${element.name}</h2>
          <p>عدد الآيات: ${element.numberOfAyahs}</p>
        </div>
      `;
    }
  });

  function userIdclick(number) {
    window.location.href = `quran.html?surah=${number}`;
  }
}


// =========================
// الصفحة الثانية: عرض السورة
// =========================
if (document.getElementById("surah-content")) {

  const params = new URLSearchParams(window.location.search);
  var surahNumber = params.get("surah");

  if (surahNumber) {
    fetch(`http://api.alquran.cloud/v1/surah/${surahNumber}`)
    .then(res => res.json())
    .then(data => {
      const surah = data.data;
      document.getElementById("sura-content1").innerHTML = `<h2>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ </h2>`

      for (const element of surah.ayahs) {
          const text = element.text.replace("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ", "");
                    document.getElementById("sura-content1").innerHTML += `<span onclick="numbertext(${surahNumber} ,${element.numberInSurah})" class="sura-conten"  id="sura-conten${element.number}"> ${text} ﴿ ${element.numberInSurah}  ﴾</span> 
`      
  }
      }
          );
  }
}
function numbertext( id1 ,id2) {
  let url = "https://api.alquran.cloud/v1/ayah/" + id1 + ":" + id2 + "/ar.alafasy"
   fetch(url)
    .then(res => res.json())
    .then(data => {
     
      let audio = data.data.audio;
      console.log(url);

      document.getElementById("nldjjln").innerHTML =`<audio src="${audio}" id="playBtn"></audio>`
      let playBtn = document.getElementById("playBtn");     
      playBtn.play()
      
          })
  
}





























// function getposts(userId){
//     let request = new XMLHttpRequest
//     request.open("GET","https://jsonplaceholder.typicode.com/posts?userId=" + userId)
//     request.responseType = "json"
//     request.send()
//     request.onload = function(){  
//         if (request.status >= 200 && request.status <= 300) {
//            let post = request.response
//             document.getElementById("Posts").innerHTML =""
//            for (let element of post) {
//             document.getElementById("Posts").innerHTML +=`
//             <div id="post">
//               <h3>${element.title}</h3>
//               <p>${element.body}</p>
//             </div>
            
//             `
//             console.log(element);
            
//            }
            
//         }
//     }

// }
// function getuser(){
//     let request = new XMLHttpRequest
//     request.open("GET","https://jsonplaceholder.typicode.com/users")
//     request.responseType = "json"
//     request.send()
//     request.onload = function(){  
//         if (request.status >= 200 && request.status <= 300) {
//            let user = request.response
//             document.getElementById("user").innerHTML =""
//            for (let element of user) {
//             document.getElementById("user").innerHTML +=`
//             <div id="user" onclick="userIdclick(${element.id})">
//               <h3>${element.name}</h3>
//               <p>${element.email}</p>
//             </div>
            
//             `
//             console.log(element);
            
//            }
            
//         }
//     }

// }
// getposts(1)
// getuser()
// function userIdclick(id){ 
//     getposts(id)
