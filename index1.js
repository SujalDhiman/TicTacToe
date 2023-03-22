let buttons=document.querySelectorAll("button")
let i=0
let moves=0
let flag=0
let choice=[0,1]
let user1="PLAYER 1"
let user2="PLAYER 2"
let grabDisplay=document.querySelector(".display")
logic(user1,user2)
let score1=document.querySelector(".player1")
let sc1=0
let score2=document.querySelector(".player2")
let sc2=0
function logic(user1,user2)
{
buttons.forEach((element)=>
{
    grabDisplay.innerText=`${user1} (X)`
    element.addEventListener("click",()=>
    {
        if(i==0)
        {
            if(!(element.innerText=="O") && !(element.innerText=="X"))
            {
            element.innerText="X"
            moves=moves+1
            console.log("moves:-",moves)
            if((document.getElementById("id1").innerText=="X" && document.getElementById("id2").innerText=="X" && document.getElementById("id3").innerText=="X") || (document.getElementById("id1").innerText=="X" && document.getElementById("id4").innerText=="X" && document.getElementById("id7").innerText=="X") || (document.getElementById("id1").innerText=="X" && document.getElementById("id5").innerText=="X" && document.getElementById("id9").innerText=="X")|| (document.getElementById("id2").innerText=="X" && document.getElementById("id5").innerText=="X" && document.getElementById("id8").innerText=="X")|| (document.getElementById("id3").innerText=="X" && document.getElementById("id6").innerText=="X" && document.getElementById("id9").innerText=="X")|| (document.getElementById("id4").innerText=="X" && document.getElementById("id5").innerText=="X" && document.getElementById("id6").innerText=="X")|| (document.getElementById("id7").innerText=="X" && document.getElementById("id8").innerText=="X" && document.getElementById("id9").innerText=="X")|| (document.getElementById("id3").innerText=="X" && document.getElementById("id5").innerText=="X" && document.getElementById("id7").innerText=="X")||(document.getElementById("id7").innerText=="X" && document.getElementById("id8").innerText=="X" && document.getElementById("id9").innerText=="X"))
            {
                
                flag=1
                clear()
                sc1=sc1+1
                score1.innerText=sc1
                moves=0
            }
            i=i+1
            flag=0
            grabDisplay.innerText=`${user2} (O)`
            }
        }
        else if(i==1)
        {
            if(!(element.innerText=="X")&& !(element.innerText=="O"))
            {
            element.innerText="O"
            moves=moves+1
            console.log("moves:-",moves)
            if((document.getElementById("id1").innerText=="O" && document.getElementById("id2").innerText=="O" && document.getElementById("id3").innerText=="O") || (document.getElementById("id1").innerText=="x" && document.getElementById("id4").innerText=="O" && document.getElementById("id7").innerText=="O") || (document.getElementById("id1").innerText=="O" && document.getElementById("id5").innerText=="O" && document.getElementById("id9").innerText=="O")|| (document.getElementById("id2").innerText=="O" && document.getElementById("id5").innerText=="O" && document.getElementById("id8").innerText=="O")|| (document.getElementById("id3").innerText=="O" && document.getElementById("id6").innerText=="O" && document.getElementById("id9").innerText=="O")|| (document.getElementById("id4").innerText=="O" && document.getElementById("id5").innerText=="O" && document.getElementById("id6").innerText=="O")|| (document.getElementById("id7").innerText=="O" && document.getElementById("id8").innerText=="O" && document.getElementById("id9").innerText=="O")|| (document.getElementById("id3").innerText=="O" && document.getElementById("id5").innerText=="O" && document.getElementById("id7").innerText=="O")||(document.getElementById("id7").innerText=="O" && document.getElementById("id8").innerText=="O" && document.getElementById("id9").innerText=="O"))
            {
                flag=1
                clear()
                sc2=sc2+1
                score2.innerText=sc2
                moves=0
            }
            i=0
            flag=0
            grabDisplay.innerText=`${user1} (X)`
            }
        }
        if(moves==9 && flag!=1)
        {
            clear()
            let displaywinner=document.createElement("li")
            displaywinner.innerText=`NO ONE IS THE WINNER(A TIE)`
            displayWinners.appendChild(displaywinner)
            moves=0
            i=choice[Math.floor(Math.random()*choice.length)]
            if(i==0)
            grabDisplay.innerText=`${user1} (X)`
            else
            grabDisplay.innerText=`${user2} (O)`
        }
    })
})
}

function clear()
{
    buttons.forEach((element)=>
    {
        element.innerText=""
    })
}