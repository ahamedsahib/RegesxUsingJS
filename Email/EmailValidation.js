var emails = ["abc@gmail.com", "abc_dfg@gmail.com", "abc@gmail.com.in","abc+@gmail.com", "abc@gmail.c", "abc@gmail.com.in.us"];

var emailPattern = /^abc([+.-_]{1}\w+)?@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2})?$/;

for(let i in emails)
{
    if(emailPattern.test(emails[i]))
        console.log("Valid Email: "+emails[i]);
    else
        console.log("Invalid Email: "+emails[i]);
    
}