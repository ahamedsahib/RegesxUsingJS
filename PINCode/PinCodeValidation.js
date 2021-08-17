var PinCode = ['628204','04008','B3288B','600 008','325678'];
//Pin code with space and without space regex pattern
var PinCodePattern = RegExp("^[1-9][0-9]{2}\\s?[0-9]{3}$");
for(let i in PinCode )
{
    if(PinCodePattern.test(PinCode[i]))
        console.log("Valid PinCode: "+PinCode[i]);
    else
        console.log("Invalid PinCode: "+PinCode[i]);   
}