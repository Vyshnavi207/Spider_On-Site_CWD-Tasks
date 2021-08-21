const gettext=document.getElementById("convert");
const getstyle=document.getElementById("style");

function change(){
    const contain=document.getElementById("contain");
    const type=contain.value;
    gettext.style.fontFamily = type;
    
    const contain2=document.getElementById("contain2");
    const colour=contain2.value;
    gettext.style.color = colour;

    const contain3=document.getElementById("contain3");
    const size=contain3.value;
    gettext.style.fontSize=size;
}

function save(){
    const filename = 'Downloadtext.txt';
    const textvalue = gettext.value;
    var download = document.getElementById("file");
    download.setAttribute('href', 'data:text/plain;charset=utf-8,' + textvalue);
    download.setAttribute('download',filename);
    download.click();
} 