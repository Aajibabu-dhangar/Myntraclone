let itemscontainerElement=document.querySelector('.items-container');
let bagItems=[];
onload();
function onload(){
    displayitemsonhomepage();
displaaybagicon();
}
function addtobag(itemId){
bagItems.push(itemId);
displaaybagicon()
}

function displaaybagicon(){
    let bagitemcountelement=document.querySelector('.bag-item-count');
   if(bagItems.length>0){
         bagitemcountelement.style.visibility='visible';
    bagitemcountelement.innerText=bagItems.length;
   }

   else{
     bagitemcountelement.style.visibility='hidden';
}
}


function displayitemsonhomepage(){
let innerHTML='';
items.forEach(item =>{
innerHTML+=`

<div class="item-container">
    <img src="${item.image}" class="item-image" alt="itemimage">
    <div class="rating">
        ${item.rating.stars}⭐|${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
<div class="price">

    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% off)</span>
</div>
<button class="btn-add-bag" onclick="addtobag(${item.id})">Add To Bag</button>
</div>
`


}

);

itemscontainerElement.innerHTML=innerHTML;
}







