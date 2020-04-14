function check() {
    let x = document.getElementById('a').value;
    if (x<40){
        alert('D')
    }else if(x<60){
        alert('C')
    }else if(x<80){
        alert('B')
    }else if(x>=80){
        alert('A')
    }
}