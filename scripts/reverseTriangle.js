let reverse=''

for(let i=5; i>=0; i--){
    for(let j=0; j<=i;j++){
        reverse+='*'
    }
    reverse+='\n'
    }

    document.querySelector(".reverse-triangle").innerHTML="<pre>" + reverse + "</pre>"
