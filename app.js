var userNumber = +prompt("Enter a number");

for (var i = 1; i <= userNumber; i++) {
    console.log("Table of :" + i);

    document.write("<h1>" + "Table of :" + i + " </h1>");

    for (var j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + i * j );

        document.write(i + " x " + j + " = " + i * j + "<br>");
    }
}