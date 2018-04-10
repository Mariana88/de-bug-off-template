function binaryStrAddition (binaryStr1, binaryStr2){
    let i;
    let addedBinary = "";
    let extra = "";
    if (binaryStr1.length > binaryStr2.length){
        i = binaryStr1.length -1
    } else {i = binaryStr2.length - 1};
    while (i>=0){
        if (binaryStr1[i] == 0 && binaryStr2[i]==0 && extra==0){
            addedBinary = 0 + addedBinary;
            extra = 0;
            i = i--;
        } else if (((binaryStr1[i] == 1 && binaryStr2[i]==0) || 
                    (binaryStr1[i] == 0 && binaryStr2[i]==1)) && extra == 0){
            addedBinary = 1 + addedBinary;
            extra =0;
            i = i--;
        } else if (binaryStr1[i] == 1 && binaryStr2[i]==1 && extra == 1){
            addedBinary = 1 + addedBinary;
            extra = 1;
            i = i--;
        } else {
            addedBinary = 0 + addedBinary;
            extra = 1;
            i = i--;
        }
    }
    return addedBinary;
}

/* this object is a hint
let number = {
    value: 0,  
    decrement: function() {
        this.value = this.value - 1;
        return this.value + 1;  
    },
    increment: function() {
        this.value = this.value + 1;
        return this.value -1;
    }
}
*/