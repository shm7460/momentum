const colors = ["#F4DBDC", "#CBD1E4", "FDDF08", "F5EDE6", "#EDE9E5"];

const chosenColors = colors[Math.floor(Math.random() * colors.length)];
document.querySelector("body").style.background = chosenColors;
