let frame = "";
for (let i = 5; i >= 1; i--) {
  if (i == 5 || i == 1) {
    for (let j = 0; j < 5; j++) {
      frame += "* ";
    }
  } else {
    frame += "* ";
    for (let j = 2; j < 5; j++) {
      frame += "  "; 
    }
    frame += "*";
  }
  frame += "\n";
}

document.querySelector(".frame").innerHTML = "<pre>" + frame + "</pre>";
