//type checkString below
function checkString(string){
    if(str.length >=8 && str.length <=20){
        return string;
    }
    else{
        throw new RangeError("Your password must be 8-20 characters!")
    }
}
//type getString below
function getString(string){
    try{
        str=checkString(string);
    }
    catch(e){
        console.log(e.message);
        getString();
    }
}
