var backgrounds = ["#11cbd7", "#c6f1e7", "#f0fff3", "#fa4659"]; 
var textColors = ["#fa4659", "#f0fff3", "#c6f1e7", "#11cbd7"];
var colorCombos = [
  {
    background: "#d8e2dc",
    text: "#9d8189"
  },
  {
    background: "#ffe5d9",
    text: "#f4acb7"
  },
  {
    background: "#ffcad4",
    text: "#d8e2dc"
  },
  {
    background: "#f4acb7",
    text: "#ffe5d9"
  },
  {
    background: "#9d8189",
    text: "#d8e2dc"
  },
];
function setColor(el) { 
  const name = document.getElementById('typedName');
  const tagline = document.getElementById('tagline');
  const icons = document.querySelectorAll('.fab')
  el.colorIdx = el.colorIdx || 0; 
  const idx = el.colorIdx++
  el.style.backgroundColor = colorCombos[idx % colorCombos.length].background;
  name.style.color = colorCombos[idx % colorCombos.length].text;
  tagline.style.color = colorCombos[idx % colorCombos.length].text;
  icons.forEach((icon) => {
    icon.style.fill = colorCombos[idx % colorCombos.length].text;
    icon.style.color = colorCombos[idx % colorCombos.length].text;
  })
} 
