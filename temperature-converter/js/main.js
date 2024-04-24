//Write your pseduo code first!

// 0 -> 32

//  need the value that is in selseeyus

document.querySelector("#convert").addEventListener("click", convert);

function convert() {
  // convert from selseeyus to fairinheight

  let temp = document.querySelector("#celcius").value;

  temp = (temp * 9) / 5 + 32;

  // show it

  document.querySelector("#placeToSee").innerText = `${temp}`;
}
