document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate").addEventListener("click", function () {
        let num = parseInt(document.getElementById("number").value);
        if (isNaN(num) || num < 0) {
            document.getElementById("result").innerText = "Please enter a valid non-negative number.";
            return;
        }

        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }

        document.getElementById("result").innerText = `${num}! = ${result}`;
    });
});
