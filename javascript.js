var activeCategory = "";
var pageCategory = {
    "page3":"cups", 
    "page4":"tableware", 
    "page5":"utensils", 
    "page6":"walldecor", 
    "page7":"vases",
    "page8":"misc"
}
var articles = [];

function showpage(pageid) {
    var pages = document.getElementsByClassName("page");
    for(var i = 0; i < pages.length; i++){
        pages[i].style.display="none";
    }
    document.getElementById(pageid).style.display="block";
    alert(pageCategory[pageid]);
    getArticles(pageCategory[pageid]);
   if(pageid != 'page9'){
      menuFunction()
      }    
    }

function getArticles(category){
    activeCategory=category;
        var jqxhr = $.ajax("articleservice.php", {
            method:"POST",
            data:{
                category: encodeURIComponent(category),
            }
        })
        .done(serviceResults)
        .fail(function() {
          console.log( "Error" );
        })
        .always(function() {
          console.log( "Request articles for category "+category+" has completed." );
        });
}

function serviceResults(data){
    console.log(data);
    articles.length=0;
    for(var i = 0; i < data.length; i++){
        var article= data[i];
        articles.push(article);
    }
    renderItems(activeCategory);
}
function renderItems(kategori){
    console.log("articles", articles.length);
    var articleStr="";
    for(var i =0; i< articles.length; i++){
        var article= articles[i];
        articleStr+= '<div class="shop-item">';
            articleStr+= '<img class="shop-item-image" src="images/'+article.img+'">';
            articleStr+= '<span class="shop-item-title">'+article.id+'</span>';
            articleStr+= '<div class="shop-item-details">';
                articleStr+= '<span class="shop-item-price">'+article.price+'</span>';
                articleStr+= '<button class="btn-secondary" type="button" disabled>OUT OF STOCK</button>';
            articleStr+= '</div>';
        articleStr+= '</div>';
    }
    alert(articleStr);
    document.getElementById(kategori).innerHTML=articleStr;
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-remove')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }  
    
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCart)
    }
    
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', makePurchase)
}

function makePurchase() {
    alert('Purchase complete')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCart(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imgSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imgSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imgSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == title) {
            alert('This item is already added to your cart')
            return
        }
    }
var cartRowContents =
        `<div class="cart-item cart-column">
            <img src="${imgSrc}" width="60" height="60" >
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-remove" type="button"><span>REMOVE</span></button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('sek',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText =  total + 'sek'
}


/*DROP DOWN FUNCTIONS IN NAVBAR*/
function myDropdown(){
    document.getElementById("myDropdown").classList.toggle("show");
}
function myDropdown2(){
    document.getElementById("myDropdown2").classList.toggle("show");
}
        
window.onclick = function(e){
    if (!e.target.matches('.btn-dd')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
             myDropdown.classList.remove('show');
        }
        var myDropdown2 = document.getElementById("myDropdown2");
        if (myDropdown2.classList.contains('show')) {
            myDropdown2.classList.remove('show');
        }
    }
}

/*MAKES NAVBAR RESPONSIVE*/        
function menuFunction() {
    var x = document.getElementById("menu");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
 }

