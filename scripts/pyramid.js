let height = 5;
let pyramid=''
for(i=1; i<=height; i++)
{ 
    for(j=i; j<height; j++)
    {
       pyramid+=" "
    }

    for(j=1; j<=(2*i-1); j++)
    {
       pyramid+="*"
    }

    pyramid+="\n"

    }
    document.querySelector(".pyramid").innerHTML = "<pre>" + pyramid + "</pre>";
