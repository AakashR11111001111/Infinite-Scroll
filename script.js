var mainContainer = document.querySelector("#main-container");
var cursor = document.querySelector("#cursor");
var fotuContainer = document.querySelector(".img-container");
var pCount = null;



async function showPics(){

    let fetfotu = await fetch('https://api.unsplash.com/photos/random/?client_id=nOZ8-oQTkpz_oTsDbhOoNSsuzj0drJWYzfM2Ej20DfU&count=10');
    let jfotu = await fetfotu.json();
    jfotu.forEach(fotus =>{
        let div = document.createElement("div");
        let code = `
            <div class="card">
                <img src="${fotus["urls"]["regular"]}" alt="">
            </div>
        `
        div.innerHTML = code;
        fotuContainer.appendChild(div);
    })
}


window.addEventListener("load", async ()=>{
   showPics();
})

window.addEventListener("scroll", function() {
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight) {
        showPics();
    }
    console.log("helo world");
});




// https://api.unsplash.com/photos/?client_id=nOZ8-oQTkpz_oTsDbhOoNSsuzj0drJWYzfM2Ej20DfU;

// https://api.unsplash.com/photos/random/?client_id=nOZ8-oQTkpz_oTsDbhOoNSsuzj0drJWYzfM2Ej20DfU&count=10