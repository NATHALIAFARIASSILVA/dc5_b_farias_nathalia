function comb() {
    let tab=[];
    for (let a = 0; a <= 9; a++) { 
        for (let b = a + 1; b < 10; b++) {
            for (let c = b + 1; c < 10; c++) {
                tab+= [a] + [b] + [c] + '. ';
            }

        }

    }
console.log(tab);

}

comb();