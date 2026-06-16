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

இந்த problem-ல நாம “kth largest element” கண்டுபிடிக்கணும். 
Normal-ஆ sort பண்ணாம, fast-ஆ solve பண்ண counting method use பண்ணிருக்கோம். 
முதலில் array-ல இருக்குற எல்லா numbers-க்கும் minimum value என்ன, maximum value என்னன்னு கண்டுபிடிக்கிறோம். 
இதனால நமக்கு total range தெரியும். அடுத்து அந்த range அளவுக்கு ஒரு புதிய array (dp) create பண்ணுறோம். 
இந்த dp array ஒரு frequency box மாதிரி. அதாவது ஒவ்வொரு number எத்தனை முறை வந்திருக்குன்னு store பண்ணும். 
அதுக்காக nums array-ல உள்ள ஒவ்வொரு number-யும் loop பண்ணி, அந்த number-க்கு corresponding index-ல (num - min) position-ல +1 increment பண்ணுறோம். 
இப்ப dp array-ல எல்லா numbers-க்கும் count ready ஆயிடும்.

அடுத்து முக்கிய logic start ஆகுது. 
நாம பெரிய number-ல இருந்து small number நோக்கி traverse பண்ணுறோம். 
அதாவது dp array-யை reverse direction-ல loop பண்ணி போறோம். 
ஏன்னா நமக்கு kth largest வேண்டியது, அதனால பெரிய values first consider பண்ணணும். 
ஒவ்வொரு index-ல இருக்கும் frequency value-யை k-ல இருந்து கழிக்கிறோம். 
அதாவது அந்த number எத்தனை times வந்திருக்கோ, அவ்வளவு k reduce ஆகும். 
இப்படியே போகும்போது k value 0 அல்லது negative ஆகிடும் moment தான் நமக்கு answer கிடைச்சுடுச்சு என்று அர்த்தம். 
அந்த time-ல அந்த index-க்கு min சேர்த்து original number-ஐ return பண்ணுறோம். இதுதான் kth largest element.