const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
function change(){
    for(let i=0; i < text.length; i++){
        //change the text here
        text[i].innerHTML = config[i];
    }
}
change();


