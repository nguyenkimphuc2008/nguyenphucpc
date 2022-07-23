var list_product_1=[
    ["./static/product/laptop/laptop gaming/1.webp","Laptop Gaming Acer Nitro 5 AN515 45 R6EV","20,790,000₫","./web_product/laptop/laptop_1.html"],
    ["./static/product/laptop/laptop gaming/2.webp","Laptop Gaming Acer Nitro 5 Eagle AN515 57 5669","20,990,000₫","./web_product/laptop/laptop_2.html"],
    ["./static/product/laptop/laptop gaming/3.webp","Laptop Lenovo IdeaPad Gaming 3 15ACH6","20,790,000₫","./web_product/laptop/laptop_3.html"],
    ["./static/product/laptop/laptop gaming/4.webp","Laptop gaming MSI GF63 Thin 11SC 664VN","21,490,000₫","./web_product/laptop/laptop_4.html"],
    ["./static/product/laptop/laptop gaming/5.webp","Laptop ASUS TUF Gaming F15 FX506HCB HN144W","22,490,000₫","./web_product/laptop/laptop_5.html"],
    ["./static/product/laptop/laptop gaming/6.webp","Laptop gaming GIGABYTE G5 KD 52VN123SO","29,790,000₫","./web_product/laptop/laptop_6.html"],
    ["./static/product/laptop/laptop gaming/7.webp","Laptop Gaming HP VICTUS 16 d0291TX","27,990,000₫","./web_product/laptop/laptop_7.html"],
    ["./static/product/laptop/laptop gaming/8.webp","Laptop Gaming ASUS TUF A17 FA707RC HX130W","22,490,000₫","./web_product/laptop/laptop_8.html"],
    ["./static/product/laptop/laptop gaming/9.webp","Laptop Gaming Dell G15 5511 70266676","23,590,000₫","./web_product/laptop/laptop_9.html"],
    ["./static/product/laptop/laptop gaming/10.webp","Laptop Gaming Asus ROG Strix G15 G513IH HN015W","22,490,000₫","./web_product/laptop/laptop_10.html"],
]

var list_product_2=[
    ["./static/product/laptop/laptop office/1.webp","Laptop Asus ZenBook 14X OLED UM5401QA","23,990,000₫","./web_product/laptop/laptop_11.html"],
    ["./static/product/laptop/laptop office/2.webp","Laptop Dell Inspiron 5410 N4I5547W1 Silver","24,600,000₫","./web_product/laptop/laptop_12.html"],
    ["./static/product/laptop/laptop office/3.webp","Laptop Dell Inspiron 5310 P145G001 70273577","25,490,000₫","./web_product/laptop/laptop_13.html"],
    ["./static/product/laptop/laptop office/4.webp","Laptop MSI Summit E13 Flip Evo A11MT 220VN","37,990,000₫","./web_product/laptop/laptop_14.html"],
    ["./static/product/laptop/laptop office/5.webp","Laptop Dell Vostro 3400 V4I7015W1 Black","23,500,000₫","./web_product/laptop/laptop_15.html"],
    ["./static/product/laptop/laptop office/6.webp","Laptop Asus Vivobook A515EA BQ1530W","13,290,000₫","./web_product/laptop/laptop_16.html"],
    ["./static/product/laptop/laptop office/7.webp","Laptop DELL Inspiron 3515 G6GR71","14,190,000₫","./web_product/laptop/laptop_17.html"],
    ["./static/product/laptop/laptop office/8.webp","Laptop Acer Aspire 3 A315 56 58EG","12,490,000₫","./web_product/laptop/laptop_18.html"],
    ["./static/product/laptop/laptop office/9.webp","Laptop Acer Aspire 3 A315 57G 32QP","12,490,000₫","./web_product/laptop/laptop_19.html"],
    ["./static/product/laptop/laptop office/10.webp","Laptop HP 15S du3593 tu 63P89PA","14,990,000₫","./web_product/laptop/laptop_20.html"],
]

var list_product_3=[
    ["./static/product/keyboard/1.webp","Bàn phím Logitech K120","160,000₫"],
    ["./static/product/keyboard/2.webp","Bàn phím Dare-U LK185","170,000₫"],
    ["./static/product/keyboard/3.webp","Bàn phím Fuhlen L411 USB","230,000₫"],
    ["./static/product/keyboard/4.webp","Bàn phím Dare-U LK135","240,000₫"],
    ["./static/product/keyboard/5.webp","Bàn phím Fuhlen L500S văn phòng USB","250,000₫"],
    ["./static/product/keyboard/6.webp","Bộ bàn phím + chuột Newmen T260","250,000₫"],
    ["./static/product/keyboard/7.webp","Bộ bàn phím và chuột AJAZZ X1080","260,000₫"],
    ["./static/product/keyboard/8.webp","Bàn phím + chuột không dây DareU LK186G","290,000₫"],
    ["./static/product/keyboard/9.webp","Bàn phím gaming HAVIT KB866L","340,000₫"],
    ["./static/product/keyboard/10.webp","Bàn phím Gaming DareU LK145","340,000₫"],
]

var list_product_4=[
    ["./static/product/mouse/1.webp","Chuột Logitech G402 Hyperion","160,000₫"],
    ["./static/product/mouse/2.webp","Chuột Logitech G603 Wireless","170,000₫"],
    ["./static/product/mouse/5.webp","Chuột Logitech G Pro Wireless","250,000₫"],
    ["./static/product/mouse/4.webp","Chuột Logitech G Pro Hero","240,000₫"],
    ["./static/product/mouse/3.webp","Chuột Logitech G703 HERO Lightspeed Wireless","230,000₫"],
    ["./static/product/mouse/6.webp","Chuột Logitech G Pro League Of Legends","250,000₫"],
    ["./static/product/mouse/7.webp","Chuột Logitech G Pro X Superlight Wireless Black","260,000₫"],
    ["./static/product/mouse/8.webp","Chuột Logitech G302 Daedalus Prime","290,000₫"],
    ["./static/product/mouse/9.webp","Chuột Logitech G Pro X Superlight Wireless White","340,000₫"],
    ["./static/product/mouse/10.webp","Chuột Logitech G102 Lightsync RGB Black","340,000₫"],
]

var list_sp=document.getElementsByClassName('lapgame')[0]
var add_lap=document.getElementsByClassName('lap-info')[0]

for (let index = 0; index < list_product_1.length-1; index++) {
    list_sp.innerHTML+=add_lap.outerHTML
}

for (let index = 0; index < list_product_1.length; index++) {
    var add_lap=document.getElementsByClassName('lap-info')[index]
    add_lap.getElementsByClassName('img')[0].setAttribute('src',list_product_1[index][0])
    add_lap.getElementsByClassName('title')[0].innerText=list_product_1[index][1]
    add_lap.getElementsByClassName('text')[0].innerText=list_product_1[index][2]
    add_lap.getElementsByTagName('a')[0].setAttribute('href',list_product_1[index][3])
}


var lapoffice=document.getElementsByClassName('lapoffice')[0]
var lapoffice_info=document.getElementsByClassName('lapoffice-info')[0]

for (let index = 0; index < list_product_2.length-1; index++) {
    lapoffice.innerHTML+=lapoffice_info.outerHTML
}

for (let index = 0; index < list_product_2.length; index++) {
    var lapoffice_info=document.getElementsByClassName('lapoffice-info')[index]
    lapoffice_info.getElementsByClassName('img')[0].setAttribute('src',list_product_2[index][0])
    lapoffice_info.getElementsByClassName('title')[0].innerText=list_product_2[index][1]
    lapoffice_info.getElementsByClassName('text')[0].innerText=list_product_2[index][2]
    lapoffice_info.getElementsByTagName('a')[0].setAttribute('href',list_product_2[index][3])
}




var keyboard=document.getElementsByClassName('keyboard')[0]
var keyboard_info=document.getElementsByClassName('keyboard-info')[0]

for (let index = 0; index < list_product_3.length-1; index++) {
    keyboard.innerHTML+=keyboard_info.outerHTML
}

for (let index = 0; index < list_product_3.length; index++) {
    var keyboard_info=document.getElementsByClassName('keyboard-info')[index]
    keyboard_info.getElementsByClassName('img')[0].setAttribute('src',list_product_3[index][0])
    keyboard_info.getElementsByClassName('title')[0].innerText=list_product_3[index][1]
    keyboard_info.getElementsByClassName('text')[0].innerText=list_product_3[index][2]
}




var mouse=document.getElementsByClassName('mouse')[0]
var mouse_info=document.getElementsByClassName('mouse-info')[0]

for (let index = 0; index < list_product_4.length-1; index++) {
    mouse.innerHTML+=mouse_info.outerHTML
}

for (let index = 0; index < list_product_4.length; index++) {
    var mouse_info=document.getElementsByClassName('mouse-info')[index]
    mouse_info.getElementsByClassName('img')[0].setAttribute('src',list_product_4[index][0])
    mouse_info.getElementsByClassName('title')[0].innerText=list_product_4[index][1]
    mouse_info.getElementsByClassName('text')[0].innerText=list_product_4[index][2]
}

