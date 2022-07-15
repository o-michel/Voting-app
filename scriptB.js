let voteCounted = document.getElementById("voteCountedA");
console.log( voteCounted);


setInterval(() => {
    localStorage.getItem("vote");
    console.log(localStorage.getItem("vote"))
    voteCounted.innerHTML = localStorage.getItem("vote")
}, 1000);

