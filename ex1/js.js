function check() {
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    if (x % y==0){
        alert(x+"chia het cho"+y)
    }else {
        alert(x+"khong chia het cho"+y)
    }
}