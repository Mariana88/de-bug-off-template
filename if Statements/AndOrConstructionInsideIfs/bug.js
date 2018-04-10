var myvar = "global";
function buggy() {
    console.log(myvar); // (*)
    if (true) {
        var myvar = "local"; // (**)
    }
    console.log(myvar);
}

// http://2ality.com/2011/02/javascript-variable-scoping-and-its.html