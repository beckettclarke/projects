if (window.matchMedia("(min-width: 480px)").matches) {
  console.log("🖥️ Desktop mode");
  rows = 6;
} else {
  console.log("📱 Mobile mode");
  rows = 3;
}
let repetition = 1;
let boxnum = 1;
function addCategory(label){
  boxnum++;
  repetition=1;
  var category = document.createElement('h1');
  category.classList.add("title", "center");
  category.innerHTML=label;
  document.body.appendChild(category);
}
function addItem(name, desc, price, img, url) {
  console.log('Item added! Repetition:' + repetition + ". BoxNum: " + boxnum);
  if (repetition == 1) {
    repetition=1;
    var boxtemp = document.createElement("div");
    boxtemp.style.display = "flex";
    boxtemp.style.marginTop = "2.5px";
    boxtemp.id = "box" + boxnum;
    document.body.appendChild(boxtemp);
  }
  repetition++;
  // Wrapper
  var main = document.createElement("div");
  main.classList.add("box");
  main.href = url;
  // Icon
  var icon = document.createElement("img");
  icon.src = img;
  main.appendChild(icon);
  /* Break */ main.appendChild(document.createElement("br"));
  // Name
  var nameelm = document.createElement("span");
  nameelm.innerHTML = name;
  nameelm.classList.add('name');
  nameelm.classList.add('center');
  main.appendChild(nameelm);
  // Desc
  var descelm = document.createElement("span");
  descelm.innerHTML = desc;
  descelm.classList.add('desc');
  descelm.classList.add('center');
  main.appendChild(descelm);
  // Button
  var buybut = document.createElement('div');
  buybut.style.justifyContent="center";
  buybut.style.display="grid";
  buybut.style.marginBottom="10px;";
  buybut.innerHTML="<a style=\"margin-bottom:10px\" class=\"mbutton link-green\" href=\"" + url + "\" target=\"_blank\"><i class='fa-solid fa-cart-shopping'></i><span class='price-text'>$" + price + "</span>";
  main.appendChild(buybut);
  // Add to body
  document.getElementById("box" + boxnum).appendChild(main);
  
  if (repetition == rows) {
    repetition = 1;
    boxnum++;
    var boxtemp = document.createElement("div");
    boxtemp.style.display = "flex";
    boxtemp.style.marginTop = "2.5vw";
    boxtemp.id = "box" + boxnum;
    document.body.appendChild(boxtemp);
    console.log("✅ Added new box! #" + boxnum);
  }
}

addCategory("Tech");
addItem("Glorious Model O", "A very high quality gaming mouse", "99", "https://m.media-amazon.com/images/I/71gL7gGh3iL._AC_SX679_.jpg", "https://www.amazon.ca/dp/B08HR9S2B7");
addItem("Steelseries Apex 5", "The king of all gaming keyboards", "112", "https://m.media-amazon.com/images/I/81yd9W+0doL._AC_SX679_.jpg", "https://www.amazon.ca/dp/B07ZGDD6B1");
addItem("SmartDevil Fan", "White desk fan to cool me off", "44", "https://m.media-amazon.com/images/I/710TUwYI1BS._AC_SX679_.jpg", "https://www.amazon.ca/dp/B08YQWCT96/");
addItem("TRÅDFRI Light bulb", "Smart light bulb with a wireless remote", "15", "https://www.ikea.com/ca/en/images/products/tradfri-dimmer-kit-smart-wireless-dimmable-warm-white__0710407_pe727526_s5.jpg?f=xl", "https://www.ikea.com/ca/en/p/tradfri-dimmer-kit-smart-wireless-dimmable-warm-white-90435927/");
addCategory("Items");
addItem("Moyu RS3 M", "A very smooth speedcube", "16", "https://m.media-amazon.com/images/I/61lQrtTFm3L._AC_SX679_.jpg", "https://www.amazon.ca/dp/B08BG6CVQD");
addItem("Blue Compass", "A boom arm for my Blue Yeti mic", "140", "https://m.media-amazon.com/images/I/71AjdSX61wL._AC_SX425_.jpg", "https://www.amazon.ca/dp/B078MLBGRM/");
addItem("Faux plants 6pk", "6 fake plants for room decoration", "40", "https://m.media-amazon.com/images/I/715XC9-RJrL._AC_SX679_.jpg", "https://www.amazon.ca/dp/B09Z64R3B7");
addItem("Black solo loop", "A black Apple Watch band (I'm size 7)", "60", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPDJ3ref?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660711205894", "https://www.apple.com/ca/shop/product/MPDQ3AM/A/41mm-midnight-solo-loop-size-7");
addItem("Big water bottle", "Bigger orange-green gradient water bottle", "26", "https://m.media-amazon.com/images/I/71fJOa54M1L._AC_SX679_.jpg", "https://www.amazon.ca/dp/B093L54HWG");
addItem("Whiteboard eraser", "An eraser with 3 repacement pads inside", "35", "https://m.media-amazon.com/images/I/41qOniXLeDL._AC_SX679_.jpg", "https://www.amazon.ca/dp/B0B5SLHQYY/");
addCategory("Digital");
addItem("Optifine Cape", "A customizeable Minecraft cape", "14", "https://i.ibb.co/8m7KJ5D/32d5d3293e3e.png", "https://www.craft.do/s/UaSu7FEwLhyjAk");
// addItem("Name", "Description", "Price", "ImgURL", "URL");
// addItem("Name", "Description", "Price", "ImgURL", "URL");
// addItem("Name", "Description", "Price", "ImgURL", "URL");
// addItem("Name", "Description", "Price", "ImgURL", "URL");
// addItem("Name", "Description", "Price", "ImgURL", "URL");
// addItem("Name", "Description", "Price", "ImgURL", "URL");
// addItem("Name", "Description", "Price", "ImgURL", "URL");
// addItem("Name", "Description", "Price", "ImgURL", "URL");
// addItem("Name", "Description", "Price", "ImgURL", "URL");