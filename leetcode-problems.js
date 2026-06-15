// 01.Move Zeroes 

var moveZeroes = function(nums) {
    let insertpos =0;

    for(let i=0;i<nums.length; i++){
        if(nums[i] !==0){
            nums[insertpos] = nums[i];
            insertpos++;
        }
    }
    for(let i =insertpos; i<nums.length; i++){
        nums[i]=0;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]

// 02.Longest Consecutive Sequence

var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;
    for(let num of set){
        if(!set.has(num-1)){
            let current = num;
            let length =1;
            while(set.has(current+1)){
                current++;
                length++;
            }
        longest = Math.max(longest,length);
        }
    }
        return longest;  
};
console.log(longestConsecutive([100,4,200,1,3,2])); // 4

// 03. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left =0;
    let maxlength =0;
    
    for(let right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxlength = Math.max(maxlength,right-left+1);
    }
    return maxlength;

};
console.log(lengthOfLongestSubstring("abcabcbb")); // 3

// 04.Reverse Words in a String

var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};
console.log(reverseWords("  hello world!  ")); // "world! hello"

// 05.First Unique Character in a String

var firstUniqChar = function(s) {
    let count ={}
    for(let char of s){
        count[char] = (count[char]||0)+1;
    }
    for(let i=0; i<s.length;i++){
        if(count[s[i]]===1){
            return i
        }
    }
    return -1;
};
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2

// 06.Maximum Subarray

var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for(i=1;i<nums.length;i++){
        currentSum = Math.max(nums[i],currentSum+nums[i]);
        maxSum = Math.max(maxSum,currentSum);
    }
    return maxSum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6

// 07.Kth Largest Element in an Array

var findKthLargest = function(nums, k) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);

    let buckets = new Array(max - min + 1).fill(0);

    for (const num of nums) {
        buckets[num - min]++;
    }

    let remaining = k

    for (let i = buckets.length - 1; i >= 0; i--) {
        remaining -= buckets[i];

        if (remaining <= 0) {
            return i + min;
        }
    }
};
console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4