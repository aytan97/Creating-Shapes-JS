for (let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        document.querySelector(".multiply-numbers").innerHTML += `${i}*${j}=`+i*j +"<br>";
    }
    document.querySelector(".multiply-numbers").innerHTML+="<hr>"
}