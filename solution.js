
/*  @param {string} s
    @return {string[]} */

const cellsInRange = (s) => {
    const res = [];
    const [row1, col1, , row2, col2] = s;
    for (let l1 = row1.charCodeAt(0), l2 = row2.charCodeAt(0); l1 <= l2; ++l1) {
    for (let n1 = +col1, n2 = +col2; n1 <= n2; ++n1) {
        res.push(String.fromCharCode(l1) + n1);
    }
    }
    return res;
};
//? For this we to traverse through all the elements of the given set of rows and columns -----
 //? Starting at row 1 and col 1 and ending at row2 and col2 >> these are just var of the given target
    // ? to get the desired result we need to use 2 for loops one for rows and another for columns
        //? and at last we need to push to the res[] that we created at beginning of the function.