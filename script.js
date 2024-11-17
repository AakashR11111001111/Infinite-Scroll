var mainContainer = document.querySelector("#main-container");
var cursor = document.querySelector("#cursor");
var fotuContainer = document.querySelector(".img-container");

window.addEventListener("load", async ()=>{
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

})

mainContainer.addEventListener("mousemove",(m)=>{
    let cRect = cursor.getBoundingClientRect();
    gsap.to(cursor, {
        x:m.clientX - cRect.width/2,
        y:m.clientY - cRect.height/2
    })
})

window.addEventListener("scroll", async function() {
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.body.offsetHeight) {
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
});




// https://api.unsplash.com/photos/?client_id=nOZ8-oQTkpz_oTsDbhOoNSsuzj0drJWYzfM2Ej20DfU;

// https://api.unsplash.com/photos/random/?client_id=nOZ8-oQTkpz_oTsDbhOoNSsuzj0drJWYzfM2Ej20DfU&count=10