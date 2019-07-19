let x =3;

function test(indexI,indexJ) {
    let text = document.getElementById("position"+indexI+indexJ);
    text.innerHTML ='<img src="Oimage.png" height="50" width="50"/>';
    console.log(text);
}
test(1,2);


