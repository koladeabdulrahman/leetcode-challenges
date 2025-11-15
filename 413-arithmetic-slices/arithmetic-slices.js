/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let n=nums.length,cnt=0,ans=0;
        if(n<3) return 0;
        for(let i=1;i<n-1;i++){
            if(nums[i]-nums[i-1]==nums[i+1]-nums[i]) cnt++;
            else{
                ans+=cnt*(cnt+1)/2;
                cnt=0;
            }
        }
        ans+=cnt*(cnt+1)/2;
        return ans;
};