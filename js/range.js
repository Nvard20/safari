const slider = document.getElementById("myinput");
const min = slider.min;
const max = slider.max;
const value = slider.value;
var output = document.getElementById("output");

output.innerHTML = slider.value;

slider.style.background = `linear-gradient(to right, #F9CA0D 0%, #F9CA0D ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, #F9CA0D 0%, #F9CA0D ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
  output.innerHTML = this.value;

};