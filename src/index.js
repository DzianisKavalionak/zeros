module.exports = function getZerosCount(number) {
    let zeros = 0;
    for (let i = 5; number/i >= 1; i) {
        zeros += Math.floor(number/i);
        i = i * 5;}
    return zeros;
}
