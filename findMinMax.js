function findMinMax(a, b, c) {
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);

    return {max: max, min: min};
}
module.exports.findMinMax = findMinMax;