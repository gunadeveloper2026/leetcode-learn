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
// short explanation in tamil:
// Non-zero numbers-ஐ முன்னாடி கொண்டு வந்து fill பண்ணிட்டு, 
// மீதமுள்ள இடத்தை zero-ஆ fill பண்ணுறோம்

// Brief explanation in Tamil:
// இந்த problem-ல நாம array-ல இருக்குற எல்லா 0 values-ஐ கடைசிக்கு தள்ளணும், ஆனால் மற்ற numbers-ன் order change ஆகக்கூடாது.
// இதுக்கு நாம இரண்டு step approach use பண்ணுறோம்.
// முதலில் ஒரு variable insertpos எடுத்துக்கிறோம். இது எங்கே next non-zero number வைக்கணும்னு track பண்ணும் pointer மாதிரி வேலை செய்யும். 
// ஆரம்பத்தில இது 0-ல start ஆகும்.
// இப்ப first loop-ல நாம array முழுக்க traverse பண்ணுறோம். 
// ஒவ்வொரு element-க்கும் check பண்ணுறோம்: அந்த number 0 இல்லனா, அதை insertpos position-ல வைத்து விடுறோம். 
// அப்புறம் insertpos-ஐ increment பண்ணுறோம். இதனால எல்லா non-zero numbers முன்னாடி compact ஆக fill ஆகிடும்.

// உதாரணத்துக்கு [0,1,0,3,12]:
// 1 வந்தா → position 0-ல போகும்
// 3 வந்தா → next position
// 12 வந்தா → next position
// இதனால் array முன்னாடி [1,3,12,...] மாதிரி ஆகும்.

// இப்ப second loop-ல நாம insertpos-ல இருந்து array முடிவு வரை எல்லா values-யும் 0 ஆக்குறோம். ஏன்னா leftover positions எல்லாம் zero-ஆ fill ஆகணும்.

// Final-ஆ array:
// [1,3,12,0,0]

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
// short explanation in tamil:
// ஒவ்வொரு number-யும் sequence start point-ஆ இருக்குதா check பண்ணி, 
// அங்கிருந்து continuous numbers count பண்ணி longest length track பண்ணுறோம்.

// Brief explanation in Tamil:
// இந்த problem-ல நாம “longest consecutive sequence” கண்டுபிடிக்கணும். 
// அதாவது array-ல இருக்குற numbers-ல தொடர்ச்சியாக வர்ற series (like 1,2,3,4) எவ்வளவு நீளம்னு find பண்ணணும். 
// Important point என்னன்னா, numbers unordered-ஆ இருக்கலாம்.
// இதுக்கு நாம முதல்ல array-ஐ Set-ஆ convert பண்ணுறோம். இதனால duplicates remove ஆகிடும், மேலும் எந்த number இருக்குன்னு O(1)-ல check பண்ண முடியும்.
// இப்ப முக்கிய logic start ஆகுது. நாம Set-ல உள்ள ஒவ்வொரு number-யும் loop பண்ணுறோம். ஆனா எல்லா number-லயும் sequence start பண்ணக்கூடாது. 
// அதனால ஒரு smart check பண்ணுறோம்: “இந்த number-க்கு முன்னாடி (num - 1) இருக்குதா?” இல்லனா தான் இது ஒரு sequence start point. 
// அதாவது left side-ல previous number இல்லனா தான் இது starting number.
// இப்ப அந்த starting number-ல இருந்து sequence count பண்ண ஆரம்பிக்கிறோம். 
// ஒரு variable current வைத்து, அதோட next number (current + 1) Set-ல இருக்குதா check பண்ணுறோம். 
// இருக்கும்வரை current-ஐ increment பண்ணிக்கிட்டு length-ஐ increase பண்ணுறோம். இதே மாதிரி தொடர்ச்சியான numbers count ஆகும்.
// ஒரு sequence முடிஞ்சதும், அந்த sequence length-ஐ longest உடன் compare பண்ணி maximum value update பண்ணுறோம்.
// இப்படி எல்லா valid starting points-ல இருந்து sequences check பண்ணி முடிச்சா, final-ஆ longest consecutive sequence length கிடைக்கும்.

// உதாரணத்துக்கு [100,4,200,1,3,2]:
// sequence: 1,2,3,4 → length = 4
// மற்ற numbers isolated

// Final answer = 4.

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
// short explanation in tamil:
// ஒரு window மாதிரி string-ஐ scan பண்ணுறோம், repeat வந்தா left side move பண்ணி remove பண்ணுறோம், 
// always unique characters மட்டும் வைத்துக்கிட்டு maximum length track பண்ணுறோம்.

// Brief explanation in Tamil:
// இந்த problem-ல நாம “longest substring without repeating characters” கண்டுபிடிக்கணும். 
// அதாவது string-ல ஒரே character repeat ஆகாமல் இருக்கும் longest continuous part-ன் length என்னனு தெரிஞ்சுக்கணும்.
// இதுக்கு நாம sliding window approach use பண்ணுறோம். 
// அதுல முக்கியமா இரண்டு pointers இருக்கும்: left மற்றும் right. இது window-வ மாதிரி work பண்ணும். 
// ஆரம்பத்தில இரண்டும் 0-ல start ஆகும். அதே நேரத்துல ஒரு Set use பண்ணுறோம், அதுல unique characters மட்டும் store பண்ணுவோம்.
// இப்ப நாம right pointer-ஐ move பண்ணி string முழுக்க traverse பண்ணுறோம். 
// ஒவ்வொரு character-க்கும் check பண்ணுறோம் — அந்த character already set-ல இருந்தா, அதாவது repeat வந்துடுச்சுன்னா, நாம window-ஐ shrink பண்ணணும்.
// அதுக்காக left pointer-ஐ move பண்ணி, set-ல இருந்து characters-ஐ delete பண்ணிக்கிட்டே வர்றோம், duplicate remove ஆகுற வரைக்கும்.
// ஒரு duplicate இல்லாத window கிடைச்சவுடனே, அந்த new character-ஐ set-ல add பண்ணுறோம். இப்ப நம்ம current window valid (repeat இல்லாத substring) ஆகிடும்.
// அதுக்கப்புறம் ஒவ்வொரு step-லயும் current window size என்னனு கணக்கிடுறோம். 
// அது தான் right - left + 1. இதை maxlength-ல compare பண்ணி பெரிய value-யை store பண்ணிக்கிறோம்.
// இப்படி full string traverse பண்ணி முடிக்கும்போது, maxlength-ல தான் answer இருக்கும்.

// உதாரணத்துக்கு "abcabcbb":
// "abc" → length 3 (best)
// அதுக்கு மேல repeat வந்துடும்

// Final answer = 3.

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
// short explanation in tamil:
// முதல்ல எல்லா characters-க்கும் count எடுத்து வைச்சுட்டு, அப்புறம் string-ஐ திரும்ப scan பண்ணி first count = 1 இருக்குற index-ஐ return பண்ணுறோம்.

// Brief explanation in Tamil:
// இந்த problem-ல நாம ஒரு string கொடுக்கப்பட்டிருக்கும்.
// அதுல முதல் முறையாக ஒரே ஒரு தடவை மட்டும் வரும் character-ஐ (first unique character) கண்டுபிடிக்கணும். 
// அதோட index return பண்ணணும். இல்லனா -1 return பண்ணணும்.
// முதலில் நாம ஒரு object (count) எடுத்துக்கிறோம். இது ஒரு frequency map மாதிரி வேலை செய்யும். 
// அதாவது string-ல உள்ள ஒவ்வொரு character எத்தனை முறை வந்திருக்குன்னு store பண்ணும். 
// முதல் loop-ல நாம string முழுக்க iterate பண்ணி, ஒவ்வொரு character-க்கும் count increment பண்ணுறோம். 
// உதாரணத்துக்கு "leetcode"ன்னா, l=1, e=3, t=1, c=1, o=1, d=1 மாதிரி values store ஆகும்.
// இப்ப second step start ஆகுது. இங்க நாம மீண்டும் string-ஐ left to right loop பண்ணுறோம். 
// ஏன்னா first unique character வேண்டும்னா order important. 
// ஒவ்வொரு index-ல இருக்குற character-க்கு count map-ல value check பண்ணுறோம். 
// அந்த character-க்கு count === 1 இருந்தா, அதுதான் முதல் unique character ஆகும். 
// அதனால உடனே அந்த index return பண்ணிடுறோம்.
// ஒரு வேளை முழு string traverse பண்ணியும் ஒரே unique character கிடைக்கலனா, -1 return பண்ணுறோம்.

// உதாரணத்துக்கு:
// "leetcode" → l தான் முதல் unique → index 0
// "loveleetcode" → v தான் first unique → index 2

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
// short explanation in tamil:ஒவ்வொரு point-லயும் நாம decide பண்ணுறோம்
//  — இங்கிருந்து new start பண்ணலாமா இல்ல previous sum-ஓட continue பண்ணலாமா
//  — அதுல best answer track பண்ணுறோம்.

// Brief explanation in Tamil:
// இந்த problem-ல நாம “maximum subarray sum” கண்டுபிடிக்கணும்.
// அதாவது array-ல continuous-a வர்ற numbers-ல எந்த subarray அதிக sum தருதோ அதைக் கண்டுபிடிக்கணும்.
// முதலில் நாம இரண்டு variables use பண்ணுறோம்: currentSum மற்றும் maxSum. 
// ஆரம்பத்தில இரண்டையும் array-ல முதல் element-ஆ set பண்ணுறோம். 
// ஏன்னா subarray empty ஆக இருக்க முடியாது, அதனால first element-ல இருந்து start பண்ணுறோம். 
// இப்ப நாம second element முதல் loop start பண்ணுறோம்.
// ஒவ்வொரு step-ல நாம ஒரு decision எடுக்கணும்: “இந்த number-ஐ current subarray-க்கு add பண்ணலாமா? இல்லா இந்த number-ல இருந்து fresh-a new subarray start பண்ணலாமா?” இதுக்காக தான் Math.max(nums[i], currentSum + nums[i]) use பண்ணுறோம். 
// இதுல current element alone பெரியதா இருந்தா new start பண்ணிடுவோம், இல்லனா old sum-க்கு add பண்ணுவோம்.
// இப்படி ஒவ்வொரு step-ல currentSum update ஆகும். 
// அதே நேரத்துல இதுவரை வந்த maximum sum என்னனு track பண்ண maxSum-ஐ use பண்ணுறோம். 
// ஒவ்வொரு iteration-லயும் maxSum-ஐ currentSum-உடன் compare பண்ணி பெரிய value store பண்ணிடுவோம்.
// இப்படி full array traverse பண்ணி முடிச்சா, maxSum-ல தான் maximum subarray sum இருக்கும்.
// உதாரணத்துக்கு [-2,1,-3,4,-1,2,1,-5,4] இந்த array-ல best subarray [4,-1,2,1] அதோட sum = 6. அதுதான் final answer.


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
// short explanation in tamil:
// Array sort பண்ணாம, frequency count பண்ணி, பெரிய number-ல இருந்து k reduce பண்ணிட்டு போய் answer கண்டுபிடிக்கிறோம்.

// Brief explanation in Tamil:
// இந்த problem-ல நாம “kth largest element” கண்டுபிடிக்கணும். 
// Normal-ஆ sort பண்ணாம, fast-ஆ solve பண்ண counting method use பண்ணிருக்கோம். 
// முதலில் array-ல இருக்குற எல்லா numbers-க்கும் minimum value என்ன, maximum value என்னன்னு கண்டுபிடிக்கிறோம். 
// இதனால நமக்கு total range தெரியும். அடுத்து அந்த range அளவுக்கு ஒரு புதிய array (dp) create பண்ணுறோம். 
// இந்த dp array ஒரு frequency box மாதிரி. அதாவது ஒவ்வொரு number எத்தனை முறை வந்திருக்குன்னு store பண்ணும். 
// அதுக்காக nums array-ல உள்ள ஒவ்வொரு number-யும் loop பண்ணி, அந்த number-க்கு corresponding index-ல (num - min) position-ல +1 increment பண்ணுறோம். 
// இப்ப dp array-ல எல்லா numbers-க்கும் count ready ஆயிடும்.
// அடுத்து முக்கிய logic start ஆகுது. 
// நாம பெரிய number-ல இருந்து small number நோக்கி traverse பண்ணுறோம். 
// அதாவது dp array-யை reverse direction-ல loop பண்ணி போறோம். 
// ஏன்னா நமக்கு kth largest வேண்டியது, அதனால பெரிய values first consider பண்ணணும். 
// ஒவ்வொரு index-ல இருக்கும் frequency value-யை k-ல இருந்து கழிக்கிறோம். 
// அதாவது அந்த number எத்தனை times வந்திருக்கோ, அவ்வளவு k reduce ஆகும். 
// இப்படியே போகும்போது k value 0 அல்லது negative ஆகிடும் moment தான் நமக்கு answer கிடைச்சுடுச்சு என்று அர்த்தம். 
// அந்த time-ல அந்த index-க்கு min சேர்த்து original number-ஐ return பண்ணுறோம். இதுதான் kth largest element.