var elementnavhome=document.getElementById("navHome");
var elementnavmenu=document.getElementById("navMenu");
var elementnavcontact=document.getElementById("navContact");

elementnavhome.addEventListener("click",selectHome);
elementnavmenu.addEventListener("click",selectMenu);
elementnavcontact.addEventListener("click",selectContact);
// elementnavhome.inn
var menulist=["Menu","The common sunflower is a large annual forb of the genus Helianthus grown as a crop for its edible oil and seeds. This sunflower species is also used as wild bird food, as livestock forage, in some industrial applications, and as an ornamental in domestic gardens.","            Hours\nSunday: 8am - 8pm\nMonday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm\n"]
var homelist=["Sunflower\nLoving Cafe","The common sunflower is a large annual forb of the genus Helianthus grown as a crop for its edible oil and seeds. This sunflower species is also used as wild bird food, as livestock forage, in some industrial applications, and as an ornamental in domestic gardens.","            Hours\nSunday: 8am - 8pm\nMonday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm\n"]
var contactist=["Contact us","The common sunflower is a large annual forb of the genus Helianthus grown as a crop for its edible oil and seeds. This sunflower species is also used as wild bird food, as livestock forage, in some industrial applications, and as an ornamental in domestic gardens.","Hours\nSunday: 8am - 8pm\nMonday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm\n"]

function selectHome(){
    remove();
    document.getElementById("navHome").classList.add("selected" );
    setdata(homelist);
    // document.getElementsById("content").innerHTML=
}
function selectMenu(){
    remove();
    this.classList.add("selected");
    setdata(menulist);
}
function selectContact(){
    remove()
    this.classList.add("selected"); 
    setdata(contactist)
}
function remove(){
    try{document.getElementsByClassName("selected")[0].classList.remove("selected");}
    catch(err){console.log(err);}
    
}
function setdata(listt){
    for(let i=0 ;i<listt.length;i++){
        if(i==0 || i%5==0){
            var e=document.createElement("div");
            document.getElementById("content").innerHTML="";
            e.classList.add("contentHeading");
            e.innerText=listt[0];
            
        }
        else{
            var e=document.createElement("div");
            e.classList.add("contentdata");
            e.innerText=listt[i];
        }
        document.getElementById("content").append(e)
    }
}
selectHome()