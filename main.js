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


let elementsA = document.getElementsByClassName('acordeon');

for (let i = 0; i < elementsA.length; i++) {

    elementsA[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let box = this.nextElementSibling;
        if (box.style.display == "block"){
            box.style.display = "none";
        }else{
            box.style.display ="block";
        }
    });
}