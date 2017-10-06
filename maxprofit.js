function maxprofit(arr) {
    var max = Math.max.apply(0, arr),
        slot = arr.lastIndexOf(max),
        min = Math.min.apply(0, arr.slice(0, slot));
    if (arr.length && !slot && !min - 1) return maxprofit(arr.slice(1));
    return max - min;
}
var test = [45, 24, 35, 31, 40, 38, 11];
console.log(maxprofit(test));