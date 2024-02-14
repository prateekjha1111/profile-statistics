const countersArray = document.querySelectorAll(".counter");

countersArray.forEach(function(counter){
    counter.innerText = "0";
    updateFunction();

    function updateFunction(){
        let currentNum = +counter.innerText;
        const max = counter.getAttribute("data-ceil");
        const increment = max/15;
        currentNum =Math.ceil(currentNum + increment);

        if (currentNum < max){
            counter.innerText = currentNum;
            setTimeout(updateFunction, 50);
        }
        else {
            counter.innerText = max;
        }
    };
}); 