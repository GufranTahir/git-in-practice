var list = document.getElementsByClassName('list');
var panel = document.getElementsByClassName('panel');
var accordion_icon = document.getElementsByClassName('accordion_icon');
var listconttext = document.getElementsByClassName('listconttext');

for (var i = 0; i < list.length; i++) {
    toggole(i, list[i]);
}

var statue = new Array(list.length).fill(0);

function toggole(index, el) {
    el.onclick = function () {
        if (!statue[index]) {
            statue[index] = 1;
            panel[index].style.height = listconttext[index].getBoundingClientRect().height + "px";
            accordion_icon[index].innerHTML = "remove";
            accordion_icon[index].style.color = "red";
        }
        else {
            statue[index] = 0;
            panel[index].style.height = "0px";
            accordion_icon[index].innerHTML = "add";
            accordion_icon[index].style.color = "blue";
        }
    }
}