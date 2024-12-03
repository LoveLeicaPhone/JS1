function validate(){
    var digits ="0123456789";
    var temp;
    if(document.testform.Name.value==""){
        alert("No Name !");
        return false;
    }
    if(document.testform.age.value==""){
        alert("Invalid Age !");
        return false;
    }
    for( var i = 0 ; i < document.testform.age.value.length; i++){
        temp = document.testform.age.value.substring(i,i+1);
        if(digits.indexOf(temp)== -1){
            alert("Invalid Age !");
            return false;
        }
    }
    return true;
}
