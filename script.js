let page = document.querySelector(".sec-hero");
let obj = [
    {
        "name" : "LinkedIn",
        "icon" : "ri-linkedin-fill",
        "color" : "#0077B5 ",
        "link" : "https://www.linkedin.com/in/dheeraj-ray-628853291/"
    },
    {
        "name" : "GitHub",
        "icon" : "ri-github-fill",
        "color" : "#333333 ",
        "link" : "https://github.com/DheerajRay-01"
    },
    {
        "name" : "Twitter",
        "icon" : "ri-twitter-x-fill",
        "color" : "#000000 ",
        "link" : "https://x.com/DheerajRay2003"
    },
    {
        "name" : "Instagram",
        "icon" : "ri-instagram-line",
        "color" : "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045) ",
         "link" : "https://www.instagram.com/mr.dheeraj2003/"
    },
    {
        "name" : "Whatsapp",
        "icon" : "ri-whatsapp-line",
        "color" : "#009b89",
        "link" : "https://wa.me/+917999768117"
    },
    {
        "name" : "Telegram",
        "icon" : "ri-telegram-fill",
        "color" : "#24A1DE",
        "link" : "https://t.me/mrdheeraj2003"
    },
    {
        "name" : "Discord",
        "icon" : "ri-discord-fill",
        "color" : "#7289da",
        "link" : "https://discordapp.com/users/mr.dheeraj2003"
    },
    {
        "name" : "Mail",
        "icon" : "ri-mail-line",
        "color" : "#EA4335",
        "link" : "mailto:dheerajray2003@gmail.com?subject=Hello%20Dheeraj&body=I%20would%20like%20to%20contact%20you."
    },
      {
        "name" : "Share",
        "icon" : "ri-share-line",
        "color" : "#003092",
        "link" : "https://connect-with-dheeraj.vercel.app"
    }
]



obj.forEach((val)=> {
    page.innerHTML +=`
    <div class="links ${val["name"]} " id="${val["name"]}">
        <div class="icon ">
            <div class="ic " style="background: ${val["color"]};" >
                <i class="${val["icon"]}"></i>
            </div>
        </div>
        <div class="link link-${val["name"]}" >
            <h3>${val["name"]}</h3>
        </div>
         <div class="blank"></div>
    </div>
    `
  
});



obj.forEach((val)=> {
    let linkElement = document.querySelector(`.link-${val["name"]}`);
    linkElement.style.setProperty('--background-color', `${val["color"]}`);
    linkElement.addEventListener("click",(e)=>{
        console.log(e.target.className)
        setTimeout(function() {
                 window.open(`${val["link"]}`,"_blank") 
            }, 1000); 
       
    })
})


