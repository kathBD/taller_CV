function colorChange() {

    let selectValue = document.getElementById('bgcolor').value;
    document.body.style.backgroundColor = selectValue;
    localStorage.setItem('color', selectValue);


}

const changeColor =()=>{

    const color = localStorage.getItem('color');
    if(color){
        let selectValue = document.getElementById('bgcolor').value;
        document.body.style.backgroundColor = color;
        
}
}


/*let elements = document.getElementsByClassName('acordeon');

for (let i = 0; i < elements.length; i++) {

    elements[i].addEventListener("click", function() {
        this.classList.toggle('active');
        let caja = this.nextElementSibling();
        if (caja.style.display == "block"){
            caja.style.display = "none";
        }else{
            caja.style.display == "block"
        }
    })
}*/