
let guess = window.prompt('what')


let list = [1,2]
let randomElement = list[select()]
function select() {
    let random = Math.random() * list.length;
    return Math.floor(random);
  }


let config = (b)=>{
    if (guess == randomElement){
    alert('win')
    console.log(randomElement)
}else{
    alert('boo')
    console.log(randomElement)
}
}


config(randomElement.value)



