console.log("connection check in")
var restart = document.querySelector("#b");
var squares = document.querySelectorAll('td');
function clear(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent='';
  }
}
restart.addEventListener('click',clear)
function clean(){
  if(this.textContent ===''){
    this.textContent='x';
  }else if (this.textContent ==='x') {
    this.textContent='o';
  }else {
    this.textContent='';
  }
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',clean)
}
