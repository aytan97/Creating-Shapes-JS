
let triangle=''

for(let i=0; i<=4; i++){
    for(let j=0; j<=i;j++){
        triangle+='*'
    }
    triangle+='\n'
    }

    document.querySelector(".triangle").innerHTML="<pre>" + triangle + "</pre>"
