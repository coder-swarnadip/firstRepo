let kham= document.querySelector("#kham");
let container= document.querySelector("#container");
let cover=document.querySelector("#uparrow");
let newCover= document.createElement("div");
let downarrow= document.querySelector("#downarrow");
let innerCover= document.createElement("div");
let main= document.querySelector("#first");
newCover.classList.add("downarrow");
innerCover.classList.add("innerCover");

console.dir(kham);
kham.addEventListener("click", function(){





    cover.remove();
    kham.after(innerCover);

    downarrow.remove();


    kham.before(newCover);

    main.innerHTML="<p>this is your message</p>";


    console.log("open the massege!");
})