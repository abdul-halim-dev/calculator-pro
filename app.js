


function Deleteme(){
    document.getElementById('result').value = " ";
};

function claculator(newValue){
    document.getElementById('result').value += newValue;
};

function Answer(){
    var a = document.getElementById('result').value;
    var b = eval(a);
    document.getElementById('result').value = b;
};