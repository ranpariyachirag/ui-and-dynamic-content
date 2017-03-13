var new_button,
    ulist,
    listitem;
   
    




new_button = document.querySelector("button");
ulist = document.querySelector("ul");



function removeItem(e) {
	
	"use strict";
 
    listitem = e.target;
    ulist.removeChild(listitem);
	
}

function addItem() {
    
	
	"use strict";

    listitem = document.createElement("li");
    
	
	listitem.innerHTML = prompt("Enter a new item for to-buy list!");
    
    if(listitem.innerHTML)
        {
   
    ulist.appendChild(listitem);
    listitem.addEventListener("click", removeItem, false);
        }
	
	
}

new_button.addEventListener("click", addItem, false);

  