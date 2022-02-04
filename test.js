var findMaxLength = function (nums) {
    let map = {};
    let max = 0, count = 0;
    map[count] = -1
    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] == 1 ? 1 : -1);

        if (count in map) {
            max = Math.max(max, i - map[count]);

        } else {
            map[count] = i;
        }
    }
    return max;
};

console.log(findMaxLength([0, 1, 0]))