// Cannot Write Commands Because I dont know js :(
const images = ['imgs/team-01.png ' , 'imgs/team-02.png', 'imgs/team-03.png' , 'imgs/team-04.png' , 'imgs/team-05.png'];
let index = 0;
const imgElement = document.querySelector('#image');

function change() {
    imgElement.src = images[index];
    index > 3 ? index = 0 : index++;
}
  
  window.onload = function() {
    setTimeout(() => {
      change();
      setInterval(() => {
        if (imgElement.complete) {
          change();
        } else {
          index > 3 ? index = 0 : index++;
          imgElement.src = images[index];
        }
      }, 2000);
    }, 1000);
};