function admin(){
    document.getElementById('navi').setAttribute('class','customnavv');
    document.getElementById('dlt').setAttribute('class','custom');
    document.getElementById('conn').setAttribute('class','customcon');
    var footdiv = document.getElementById('foot');
    var h1 = footdiv.getElementsByTagName('h1');
    footdiv.style.backgroundColor = "lightgreen";
    h1.innerHTML = "Rahida PRiya";
}


function user(){
    document.getElementById('navi').setAttribute('class','navv');
    document.getElementById('dlt').setAttribute('class','user');
    document.getElementById('conn').setAttribute('class','con');
    var footdiv = document.getElementById('foot');
    var h1 = footdiv.getElementsByTagName('h1');
    footdiv.style.backgroundColor = "";
    h1.innerHTML = "Over 5 million blogs and counting since 2005";
}
