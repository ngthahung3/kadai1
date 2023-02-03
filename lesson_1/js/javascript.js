function Amount(){
    var getInput = document.getElementById('amount').value;

    var selectForm = document.getElementById('form').value;

    var selectTo = document.getElementById('to').value;
    
    Change(getInput,selectForm,selectTo)
}

function Change(input, form, to){
    if(form==1 && to==1){
        document.getElementById('result').innerHTML = 'Result: ' + (input / 23000) + ' USD'
    }else if(form==1 && to==2){
        document.getElementById('result').innerHTML = 'Result: ' + (input) + ' VND'
    }else if(form==2 && to==1){
        document.getElementById('result').innerHTML = 'Result: ' + (input) + ' USD'
    }else{
        document.getElementById('result').innerHTML = 'Result: ' + (input *23000) + ' VND'
    }
}


