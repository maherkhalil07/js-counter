// $("#test").animate({ width: "100%", height: "80vh" }, 1500, function () {
//     $("#test h1").fadeIn(1000, function () {

//         $("#test .col-md-4").fadeIn(1000);
//     });
// });

// counter
let counterId = document.getElementById("counterId");

var x = 0;
// function add
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
