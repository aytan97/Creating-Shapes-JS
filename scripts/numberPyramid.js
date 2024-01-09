let count = 4;
let empty=''
let num=1
for(i=1; i<=count; i++)
{ 
    for(j=i; j<count; j++)
    {
        empty+=" "
    }

    for(j=1; j<=i; j++)
    {
        empty+=num;
        num++;
    }

    empty+="\n"

    }
    document.querySelector(".number-pyramid").innerHTML = "<pre>" + empty + "</pre>";
