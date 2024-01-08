let count = 10;
let num=''
for(i=1; i<count; i++)
{ 
    for(j=i; j<count; j++)
    {
        num+=" "
    }

    for(j=1; j<=(2*i-1); j++)
    {
        num+=i
    }

    num+="\n"

    }
    document.querySelector(".number-pyramid").innerHTML = "<pre>" + num + "</pre>";
