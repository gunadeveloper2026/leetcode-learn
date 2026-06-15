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