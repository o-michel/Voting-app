let volume = document.getElementById("volume");
let firstDecri = document.getElementById("decrimentA");
let firstIncreasedNum = document.getElementById("numbA");
let firstIncri = document.getElementById("incrimentA");
// let firstIncri = document.getElementById("incrimentA");
// console.log(firstIncri);

let voteBoxObj = [
    {firstParty: 0,
     validation: true},
     {secondParty: 0,
         validation: false},
         {thirdParty: 0,
            validation: true},
            
    ];

let increasedNum = 0;
// console.log(firstIncreasedNum);
let voteCountedEle = 0;


    
firstIncri.addEventListener("click", (e)=>{
    // increasedNum++;
    increasedNum ++;
    voteBoxObj[0].firstParty = increasedNum;
    // firstIncreasedNum.innerHTML = increasedNum;
    // console.log(voteBoxObj[0].firstParty);
    if (increasedNum > 5) {
        volume.style.width = "5%";
        
    }
    if (increasedNum > 10) {
        volume.style.width = `calc(5%*1.5)`;
        console.log(volume.style.width);
        
    }
    if (increasedNum > 15) {
        volume.style.width = "calc(5%*2";
        
    }
    if (increasedNum > 20) {
        volume.style.width = "5%*2.5";
        
    }
    if (increasedNum > 25) {
        volume.style.width = "5%*5";
        console.log(volume.style.width);
    }

    if (increasedNum > 30) {
        volume.style.width = "+5%*3+111.667";
        
    }
   
    
    voteCountedEle = voteBoxObj[0].firstParty;
    localStorage.setItem("vote", voteCountedEle);
    
    
});
    
firstDecri.addEventListener("click", (e)=>{
    // increasedNum++;
    increasedNum --;
    voteBoxObj[0].firstParty = increasedNum;
    // firstIncreasedNum.innerHTML = increasedNum;
    // console.log(voteBoxObj[0].firstParty);
    // if (increasedNum > 50) {
    //     volume.style.width = "1.666666666666667%";
        
    // }
    // if (increasedNum > 100) {
    //     volume.style.width = `calc(1.666666666666667%*2)`;
        
    // }
    // if (increasedNum > 150) {
    //     volume.style.width = "calc(1.666666666666667%*3";
        
    // }
    // if (increasedNum > 200) {
    //     volume.style.width = "1.666666666666667%";
        
    // }
    // if (increasedNum > 250) {
    //     volume.style.width = "1.666666666666667%";
        
    // }
    // if (increasedNum > 300) {
    //     volume.style.width = "1.666666666666667%";
        
    // }
    // if (increasedNum > 350) {
    //     volume.style.width = "1.666666666666667%";
        
    // }
    // if (increasedNum > 400) {
    //     volume.style.width = "1.666666666666667%";
        
    // }
    // if (increasedNum > 450) {
    //     volume.style.width = "1.666666666666667%";
        
    // }
    // if (increasedNum > 500) {
    //     volume.style.width = "1.666666666666667%";
        
    // }
    
    voteCountedEle = voteBoxObj[0].firstParty;
    localStorage.setItem("vote", voteCountedEle);
    
    
});


document.addEventListener("DOMContentLoaded", function(){
    alert(`Wellcome to the votting center created by MICHELLIN
    When ever the page is reload, the vote will start again
    Meanwhile The result of the previous Election will be display on`);
    alert(`Click on the + or - button to start voting again`)
    // firstIncreasedNum.innerHTML = localStorage.getItem("vote");
    // firstIncreasedNum.innerHTML = localStorage.getItem("vote");
    console.log( localStorage.getItem("vote"));
    loadedNum = localStorage.getItem("vote");
    console.log(loadedNum * 1);

// if (condition) {
    
// } else {
    
// }



    //dom is fully loaded, but maybe waiting on images & css files
});


setInterval(() => {
    firstIncreasedNum.innerHTML = localStorage.getItem("vote");
    console.log(firstIncreasedNum);
    console.log(voteCountedEle);
    console.log(increasedNum);
    
    // if (newValue > 1) {
        //     newValues = newValue + increasedNum
        //     console.log(newValues);
        // }
        // newValue = firstIncreasedNum.innerHTML;
        // // this.body.addEventListener(this.onload, ()=>{
            // //     console.log(newValue);
    // // })
    // console.log(increasedNum);
}, 500);

let loadedNum = 0;




// store the data at the section(second page) where voters will be evicted
// setInterval(() => {

    // voteCounted.innerHTML = voteCountedEle;
    // console.log(voteBoxObj[0].firstParty);
    // console.log(voteBoxObj);
// }, 6000);

// setInterval(() => {
//     localStorage.getItem("vote");
//     console.log(localStorage.getItem("vote"))
// }, 9000);

// function increase() {
//    while (increasedNum < 3) {
//     increasedNum+= 1;
//     increasedNum++;
//      firstIncreasedNum.innerHTML = ` ${increasedNum}`;
//    }

// }
// console.log(increasedNum);
// increase();




