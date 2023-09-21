
let count = 20;
let scoreCount =0;
let randomNumber ;
score =()=>{
    scoreCount +=10;
    document.getElementById("score-val").innerText = scoreCount;
}
hit =()=>{
    randomNumber = Math.floor(Math.random()*20)
    document.getElementById("hit-value").innerText = randomNumber; 
}
bubble = ()=>{
    let ball = " ";
    for(let i =0 ; i<=167;i++){
        let random = Math.floor(Math.random()*20)
        ball +=`<div class="bubble">${random}</div>`;
    }
    document.querySelector(".bottom").innerHTML= ball;
}
timer=()=>{
    setInterval(()=>{
    if(count>0){
      count--;
      document.querySelector("#time").textContent = count;
    }
     else{
        clearInterval(timer);
        document.querySelector(".bottom").innerHTML = `<h1>Game Over </br> Your score is ${scoreCount}</h1>`;
        
     }
    },1000)
}
document.querySelector(".bottom").addEventListener("click",((a)=>{
  let bubbleClick = Number(a.target.textContent);
  if(bubbleClick === randomNumber){
    score();
    bubble();
    hit();
  }
}))
hit();
timer();
bubble();