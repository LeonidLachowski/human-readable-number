module.exports = function toReadable (number) {
    const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';
    number = number + '';
    console.log(number);
    const length = number.length;
    const digits = number[length - 1];
    if(length == 1) {
        if(parseInt(digits) == 0) word = 'zero'
        else word = first[parseInt(digits)]
    } else {
        if(length == 3) word = first[parseInt(number[0])] + 'hundred ';
        if(parseInt(number[length-2] + digits) >= 20) word += tens[parseInt(number[length-2])] + ' ' + first[parseInt(digits)];
        else word += first[parseInt(number[length-2] + digits)];
    }
    return word.trim();  
}
