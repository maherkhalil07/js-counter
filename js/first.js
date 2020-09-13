let counterId = document.getElementById("counterId");
var x = 0;
function add() {
    x += 1;
}
function counter(){
    setInterval(() => {
        if (x < 100) {
                add();
                console.log(x)
                counterId.innerHTML = `${x}`
            } else {
                counterId.innerHTML = `${x}`
            }
            
        }, 200);
}
counter()
