

var getSumAbsoluteDifferences = function(nums) {
    let res = [];
    let prefixSum = 0;
    let suffixSum = nums.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < nums.length; i++) {
        let leftSum = nums[i] * i - prefixSum
        let rightSum = suffixSum - (nums[i] * (nums.length - i))
        let totalSum = leftSum + rightSum;

        res.push(totalSum);

        prefixSum += nums[i];
        suffixSum -= nums[i];
    }

    return res;    
};