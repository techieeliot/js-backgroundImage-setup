// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

// setting up the counter
let coutner = 0;

// select the button

const btn = document.querySelectorAll('.btn');
///console.log(btn);

btn.forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    //get the event target
    let value = event.target;
    //console.log(value);
    if(value.classList.contains('btn-left')){
      counter--;
      if(counter<0){
        counter = pictures.length - 1;
      }
      console.log(counter);
      document.querySelector(
        ".img-container"
      ).style.backgroundImage = 'url('img/${pictures[counter]}.jpeg')';;
    }

    if(value.classList.contains('btn-right')){
      counter--;
      if(counter> pictures.length - 1){
        counter = 0;
      }
      console.log(counter);

      document.querySelector(
        ".img-container"
      ).style.backgroundImage = 'url('img/${pictures[counter]}.jpeg')';
    
    }

  });
});


}

})
