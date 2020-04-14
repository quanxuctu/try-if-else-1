function check() {
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    let z = document.getElementById('number3').value;
    if (x>y && x>z){
        alert(x + 'la so lon nhat')
    }else if(y>x && y>z){
        alert(y + 'la so lon nhat')
    }else if (z>x && z>y){
        alert(z + 'la so lon nhat')
    }
}