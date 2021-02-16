var colorCombos = [
  {
    background: "#004e64",
    text: "#FFFFFF"
  },
  {
    background: "#00a5cf",
    text: "#FFFFFF"
  },
  {
    background: "#9fffcb",
    text: "#000000"
  },
  {
    background: "#25a18e",
    text: "#FFFFFF"
  },
  {
    background: "#7ae582",
    text: "#000000"
  },
];
function setColor(el, event) { 
  event.preventDefault();
  const name = document.getElementById('typedName');
  const buttonTxt1 = document.getElementById('button-txt-1');
  const buttonTxt2 = document.getElementById('button-txt-2');
  const tagline = document.getElementById('tagline');
  const icons = document.querySelectorAll('.fab')
  el.colorIdx = el.colorIdx || 0; 
  const idx = el.colorIdx++
  el.style.backgroundColor = colorCombos[idx % colorCombos.length].background;
  name.style.color = colorCombos[idx % colorCombos.length].text;
  tagline.style.color = colorCombos[idx % colorCombos.length].text;
  buttonTxt1.style.color = colorCombos[idx % colorCombos.length].text;
  buttonTxt2.style.color = colorCombos[idx % colorCombos.length].text;
  icons.forEach((icon) => {
    icon.style.fill = colorCombos[idx % colorCombos.length].text;
    icon.style.color = colorCombos[idx % colorCombos.length].text;
  })
} 
