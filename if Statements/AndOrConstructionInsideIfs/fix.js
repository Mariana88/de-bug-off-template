var myvar = "global";
function fixed() {
    console.log(myvar); // (*)
    if (true) {
        myvar = "local"; // (**)
    }
    console.log(myvar);
}