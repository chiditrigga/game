
let guess = window.prompt('guess a number from 1 -2')
let count = 0;


let list = [1,2]
let randomElement = list[select()]

function select() {
    let random = Math.random() * list.length;
    return Math.floor(random);
  }

    let config = (b)=>{
        
      if(guess == randomElement){
        
    
    alert('you win!')
    console.log(randomElement)
    
    

      }else{
  alert('you lose')
    console.log(randomElement)

        }
    }






    config(randomElement.value)


