

/*module.exports={


      ordenar(arr){
        
        return arr
    }
}*/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
class StringIterator {
    constructor(compressedString) {
        this.data = [];
        this.i = 0; // Pointer to track position in data array
        
        let regex = /([a-zA-Z])(\d+)/g;
        let match;
        
        while ((match = regex.exec(compressedString)) !== null) {
            this.data.push([match[1], parseInt(match[2])]); // Store [char, count]
        }
    }

    next() {
        if (!this.hasNext()) return " "; // If no more characters, return space

        let [char, count] = this.data[this.i];

        if (count === 1) {
            this.i++; // Move to next character set
        } else {
            this.data[this.i][1]--; // Reduce the count
        }

        return char;
    }

    hasNext() {
        return this.i < this.data.length;
    }
}

function isBadVersion(version) {
    return version >= 3;
}

export const prueba = {
    isOneBitCharacter(bits) {
    
},
    findShortestSubArray(nums) {
        let count = {};      // Stores frequency of each number
        let firstIndex = {}; // Stores first occurrence index of each number
        let lastIndex = {};  // Stores last occurrence index of each number
        let degree = 0;      // Stores the maximum frequency found
    
        // Step 1: Populate the data structures
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
    
            // Update count (frequency of num)
            count[num] = (count[num] || 0) + 1;
    
            // Store first occurrence if not already stored
            if (firstIndex[num] === undefined) firstIndex[num] = i;
    
            // Always update last occurrence
            lastIndex[num] = i;
    
            // Update the degree of the array
            degree = Math.max(degree, count[num]);
        }
    
        // Step 2: Find the smallest subarray for the most frequent numbers
        let minLength = nums.length;
    
        for (let num in count) {
            if (count[num] === degree) {
                let length = lastIndex[num] - firstIndex[num] + 1;
                minLength = Math.min(minLength, length);
            }
        }
    
        return minLength;
    },
    countBinarySubstrings(s) {
   
    let result=0;
    let prev=0;
    let curr=1;
    for(let i=1;i<s.length;i++){
        if(s[i]===s[i-1]){
            curr++;
        }else{
            result+=Math.min(prev,curr);
            prev=curr;
            curr=1;
        }
    }
    return result+Math.min(prev,curr);
    },
    hasAlternatingBits(n ) {
    let btyte=n.toString(2);
    for(let i=0;i<btyte.length-1;i++){
        if(btyte[i]===btyte[i+1]){
            return false;
        }
    }
    return true;
    },
    calPoints(operations) {
        let result = [];

        for (let i = 0; i < operations.length; i++) {
            if(operations[i] === "C") {
                result.pop();
            }else if(operations[i] === "D") {
                result.push(result[result.length - 1] * 2)
            }else if(operations[i] === "+") {
                result.push(result[result.length - 1] + result[result.length - 2])
            }
            else {
                result.push(parseInt(operations[i]))
            }

        }
        return result.reduce((acc, val) => acc + val, 0);
    },
    validPalindrome(s) {
        function isPalindrome(str, left, right) {
            while (left < right) {
                if (str[left] !== str[right]) return false;
                left++;
                right--;
            }
            return true;
        }
    
        let left = 0;
        let right = s.length - 1;
    
        while (left < right) {
            if (s[left] !== s[right]) {
                // Try skipping either left or right character and check if it's a palindrome
                return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
            }
            left++;
            right--;
        }
    
        return true;
    },
    findLengthOfLCIS(nums) {
        let result=0;
        let count=1;
        for(let i=0;i<nums.length;i++){
            if(nums[i]<nums[i+1]){
                count++;
            }else{
                result=Math.max(result,count);
                count=1;
            }
        }
        return result;
    },
    findSecondMinimumValue(root) {
        if (!root) return -1;
    
    let minVal = root.val;
    let secondMin = Infinity;
    
        function dfs(root) {
            if (!node) return;

            if (minVal < node.val && node.val < secondMin) {
                secondMin = node.val;
            }
            
            dfs(node.left);
            dfs(node.right);
        }

    dfs(root);
    return secondMin === Infinity ? -1 : secondMin
    },
     findSecondMinimumValue(root) {
        let result= new Set();
        function bfs(root){
            if(root==null) return;
            bfs(root.left);
            bfs(root.right);
            result.add(root.val);
        }
        bfs(root);

        let arr=Array.from(result);
        arr.sort((a,b)=>a-b);
        return arr[1]||-1;
    },
    imageSmoother(img) {
        const m = img.length;
        const n = img[0].length;
        const result = new Array(m).fill().map(() => new Array(n).fill(0));

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                let sum = 0;
                let count = 0;
                for (let x = i - 1; x <= i + 1; x++) {
                    for (let y = j - 1; y <= j + 1; y++) {
                        if (x >= 0 && x < m && y >= 0 && y < n) {
                            sum += img[x][y];
                            count++;
                        }
                    }
                }
                result[i][j] = Math.floor(sum / count);
            }
        }

        return result;    
    },
    judgeCircle(moves) {
       let stack=[];
         for(let i=0;i<moves.length;i++){
              if(moves[i]==="U"){
                stack.push(1);
              }else if(moves[i]==="D"){
                stack.pop();
              }else if(moves[i]==="L"){
                stack.push(2);
              }else if(moves[i]==="R"){
                stack.pop();
              }
         }
            return stack.length===0;
    },

    judgeCircle(moves) {
        let x = 0, y = 0;
        for (let move of moves) {
            if (move === 'U') y++;
            else if (move === 'D') y--;
            else if (move === 'L') x--;
            else if (move === 'R') x++;
        }
        return x === 0 && y === 0;
     
    },
    findTarget(root, k) {
        let set = new Set();
        function dfs(node) {
            if (!node) return false;
            if (set.has(k - node.val)) return true;
            set.add(node.val);
            return dfs(node.left) || dfs(node.right);
        }
        return dfs(root);
    },
    findErrorNums(nums){
        let set=new Set(nums);
        let sum=0;
        let duplicate=0;
        let n=nums.length;
        for(let i=0;i<n;i++){
            sum+=nums[i];
        }
        let duplicateSum=Array.from(set).reduce((acc,val)=>acc+val,0);
        duplicate=sum-duplicateSum;
        let missing=(n*(n+1)/2)-duplicateSum;
        return [duplicate,missing];
    },
    findMaxAverage(nums, k) {
        let max = -Infinity;
        let sum = 0;
        for (let i = 0; i < k; i++) {
            sum += nums[i];
        }
        max = Math.max(max, sum);
        for (let i = k; i < nums.length; i++) {
            sum += nums[i] - nums[i - k];
            max = Math.max(max, sum);
        }
        return max / k;
    },
    findMaxAverage(nums, k) {
        let result=0;
            for(let i=0;i<nums.length;i++){
                let temp=0;
                for(let j=i;j<i+k;j++){
                    temp+=nums[j];
                }
                result=Math.max(result,temp);
                if(i+k===nums.length){
                    break;
                }
            }
            return result/k;
    },
     averageOfLevels2(root) {
        if (!root) return [];
    
        const result = [];
        const queue = [root]; // Initialize the queue with the root node
    
        while (queue.length > 0) {
            let levelSum = 0; // Sum of nodes at the current level
            const levelCount = queue.length; // Number of nodes at the current level
    
            for (let i = 0; i < levelCount; i++) {
                const node = queue.shift(); // Dequeue the front node
                levelSum += node.val; // Add the value of the current node
    
                // Add the children of the current node to the queue
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
    
            // Calculate the average for the current level
            result.push(levelSum / levelCount);
        }
    
        return result;
    },
    averageOfLevels(root) {
        const levelSums = [];  // Stores the sum of nodes at each level
        const levelCounts = []; // Stores the count of nodes at each level
    
        // Helper function to perform DFS
        function dfs(node, level) {
            if (!node) return;
    
            // If this is the first time visiting this level, initialize it
            if (levelSums.length <= level) {
                levelSums[level] = 0;
                levelCounts[level] = 0;
            }
    
            // Add the current node's value to the sum for this level
            levelSums[level] += node.val;
            levelCounts[level] += 1;
    
            // Recurse on the left and right children
            dfs(node.left, level + 1);
            dfs(node.right, level + 1);
        }
    
        // Start DFS from the root at level 0
        dfs(root, 0);
    
        // Calculate the averages for each level
        const averages = levelSums.map((sum, i) => sum / levelCounts[i]);
        return averages;
    },
    smallestPositiveinteger(arr){
        let set = new Set(arr);
        let i = 1;
        while (set.has(i)) {
            i++;
        }
        return i;
    },
    maximumProduct2(nums) {
        let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
      let min1 = Infinity, min2 = Infinity;
      
      for (let num of nums) {
          if (num > max1) {
              max3 = max2;
              max2 = max1;
              max1 = num;
          } else if (num > max2) {
              max3 = max2;
              max2 = num;
          } else if (num > max3) {
              max3 = num;
          }
          
          if (num < min1) {
              min2 = min1;
              min1 = num;
          } else if (num < min2) {
              min2 = num;
          }
      }
      
      return Math.max(max1 * max2 * max3, min1 * min2 * max1);
    },
    maximumProduct(nums) {
        let sortNum=nums.sort((a,b)=>a-b);
        let len=nums.length;
        let result1=sortNum[len-1]*sortNum[len-2]*sortNum[len-3];
        let result2=sortNum[0]*sortNum[1]*sortNum[len-1];
        return Math.max(result1,result2);
        
    },
    mergeTrees(root1, root2) {
    
        function tbt(root1, root2){
            if(root1==null) return root2;
            if(root2==null) return root1;
            root1.val+=root2.val;
            root1.left=tbt(root1.left,root2.left);
            root1.right=tbt(root1.right,root2.right);
            return root1;
        }
        return tbt(root1,root2);
    },
    canPlaceFlowers2(flowerbed, n){
        let len=flowerbed.length;
        for(let i=0;i<len;i++){
            let left=i===0?0:flowerbed[i-1];
            let right=i===len-1?0:flowerbed[i+1];
            if(left===0 && right===0 && flowerbed[i]===0){
                flowerbed[i]=1;
                n--;
            }
        }
        return n<=0;
    },
    canPlaceFlowers(flowerbed, n) {
        let temp=n;
        for(let i=0;i<flowerbed.length;i++){
                if(flowerbed[i]===1){
                    temp++;
                }
            }
        if(n+(n-1)>flowerbed.length) return false;
        for(let i=0;i<flowerbed.length;i++){
            if(flowerbed[i]===0){
                if((flowerbed[i-1]===0 || flowerbed[i-1]===undefined) && (flowerbed[i+1]===0 || flowerbed[i+1]===undefined)){
                    flowerbed[i]=1;
                    n--;
                    if(n<=0){
                        return true;
                    }
                }
            }
        }
        return n<=0;
    },
    findRestaurant(list1, list2) {
    let result= new Map();

    for(let i=0;i<list1.length;i++){
           if(list2.includes(list1[i])){
               result.set(list1[i],i+list2.indexOf(list1[i]));
           }
        
        }
        let min=Infinity;
        let arr=[];

        for(let [key,value] of result){
            if(value<min){
                min=value;
                arr=[key];
            }else if(value===min){
                arr.push(key);
            }
        }
        return arr;

    },
    maxCount(m, n, ops) {
        for (let op of ops) {
            m = Math.min(m, op[0]);
            n = Math.min(n, op[1]);
        }
        return m * n;
    },
    findLHS2(nums) {
        let tmpSort=nums.sort((a,b)=>a-b);
        let result=0;
        let count=1;
        let prevCount=0;
        for(let i=1;i<tmpSort.length;i++){
            if(tmpSort[i]===tmpSort[i-1]){
                count++;
            }else if(tmpSort[i]===tmpSort[i-1]+1){
                prevCount=count;
                count=1;
            }else{
                prevCount=0;
                count=1;
            }
            result=Math.max(result,prevCount+count);
        }
        return result;
    },
    findLHS(nums) {
        let result = 0;
        let map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        for (let [key, value] of map) {
            if (map.has(key + 1)) {
                result = Math.max(result, value + map.get(key + 1));
            }
        }
        return result;
    },
    distributeCandies2(candyType) {
        let can= new Set(candyType);
        return Math.min(can.size,candyType.length/2);
    },
    distributeCandies(candyType) {
    let canHash= new Map();
        for(let i=0;i<candyType.length;i++){
            canHash.set(candyType[i],(canHash.get(candyType[i])||0)+1);
        }
    if(canHash.size>=candyType.length/2){
        return candyType.length/2;
    }else{
        return canHash.size;
    }
    },
    issubtre2(root, subRoot) {
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        if (node.val === subRoot.val && isSameTree(node, subRoot)) {
            return true;
        }
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    function isSameTree(node, subNode) {
        if (!node && !subNode) return true;
        if (!node || !subNode) return false;
        if (node.val !== subNode.val) return false;
        return isSameTree(node.left, subNode.left) && isSameTree(node.right, subNode.right);
    }
    return false;

    },
    isSubtree(root, subRoot) {
        let result = false;
        function isomtree(node, subNode) {
                if(node==null && subNode==null) return true;
                if(node==null || subNode==null) return false;
                if(node.val!==subNode.val) return false;
                return isomtree(node.left,subNode.left) && isomtree(node.right,subNode.right);  
        }
        function dfs(node){
            if(node==null) return false;
            if(node.val===subRoot.val && isomtree(node,subRoot)){
                return true;
            }
            return dfs(node.left) || dfs(node.right);
        }
        return dfs(root);

    },
    matrixReshape(mat,r, c) {
        if(mat.length*mat[0].length!==r*c) return mat;
        let result=[];
        let index=0;
        let col=0;

        for(let i=0;i<r;i++){
            result.push([]);
        }
        for(let i=0;i<mat.length;i++){
            for(let j=0;j<mat[0].length;j++){
                result[index][col]=mat[i][j];
                col++;
                if(col===c){
                    index++;
                    col=0;
                }
            }
        }
        return result;
    },
    findTilt(root) {
    let result = 0;
   function dtt(root){
        if(root==null) return 0;
        let left=dtt(root.left);
        let right=dtt(root.right);
        result+=Math.abs(left-right);
        return left+right+root.val;
    }

    dtt(root);

    return result;
    },
    arrayPairSum(nums) {//561. Array Partition
    let result=0;
    let temp=[]
    let order=nums.sort((a,b)=>a-b);
    for(let i=0;i<order.length;i+=2){
        result+=order[i];
    }
    return result;
    },
    reverseWords(s) {//557. Reverse Words in a String III
        let result = "";
        result= s.split(" ").map(word=>word.split("").reverse().join("")).join(" ");
        return result;
    },
    checkRecord(s) {
        if (s.includes("LLL")) return false;
        if(s.split("A").length>2) return false;
        return true;
    },
    diameterOfBinaryTree(root ) {//543. Diameter of Binary Tree
        let result = 0;
        function dfs(node) {
            if (node == null) return 0;
            let left = dfs(node.left);
            let right = dfs(node.right);
            result = Math.max(result, left + right);
            return Math.max(left, right) + 1;
        }
        dfs(root);
        return result;
    },
    reverseStr2(s, k) {
        let result = "";
    
    for (let i = 0; i < s.length; i += 2 * k) {
        let start = i;
        let end = Math.min(i + k, s.length); // Ensure we don't go out of bounds
        
        // Reverse first k characters
        result += s.slice(start, end).split("").reverse().join("");
        
        // Append the next k characters unchanged
        start = end;
        end = Math.min(i + 2 * k, s.length);
        result += s.slice(start, end);
    }
    
    return result; 
    },
    reverseStr(s, k) {
        let result="";
        for(let i=0;i<s.length;i+=2*k){
            result+=s.slice(i,i+k).split("").reverse().join("")+s.slice(i+k,i+2*k);
        }
        return result;
    },
    minDiffInBST(root) {
        let result=Infinity;
        let prev=null;
       function tbs(root){
            if(root==null) return;
            tbs(root.left);
            if(prev!=null){
                result=Math.min(result,root.val-prev);
            }
            prev=root.val;
            tbs(root.right);
        }
        tbs(root);
        return result;
    },
    findLUSlength(a, b) {
        if (a === b) return -1;
        return Math.max(a.length, b.length);
    },
    findLUSlength2(a, b) {
    if(a===b) return -1;
    let copy=a;
    for(let i=a.length;i>=0;i--){
        if(b.includes(a)) return b.length - a.length;
        a.slice(0,i);
    }
    if(a.length<b.length) {
        return b.length;
    }else{
        return a.length;
    }
    },
    detectCapitalUse(word) {
        let reg= /^[A-Z]*$|^[a-z]*$|^[A-Z][a-z]*$/;
        return reg.test(word);
    },
    checkPerfectNumber(num) {
        let result=false;
        if(num<2) return false;
        let sum=1;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i===0){
                sum+=i;
                if(i!==num/i){
                    sum+=num/i;
                }
            }
        }
        return sum===num;
    },
    findRelativeRanks2(score){
        let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
        let pointer = 0;
        let result = [];
        for (let i = 0; i < score.length; i++) {
            let max = Math.max(...score);
            let index = score.indexOf(max);
            if (pointer < 3) {
                result[index] = medals[pointer];
            } else {
                result[index] = (pointer + 1).toString();
            }
            pointer++;
            score[index] = -1;
        }
        return result;
    },
    findRelativeRanks(score) {
        let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
        let sorted = [...score].sort((a, b) => b - a);
        let map = new Map();
        for (let i = 0; i < sorted.length; i++) {
            map.set(sorted[i], i + 1);
        }
        return score.map((s, i) => (map.get(s) <= 3 ? medals[map.get(s) - 1] : map.get(s).toString()));

       

        },
    convertToBase7(num) {
    let result="";
    let negative=false;
    if(num===0) return "0";
    if(num<0){
        negative=true;
        num=Math.abs(num);
    }
    while(num>0){
        result=num%7+result;
        num=Math.floor(num/7);
    }
    return negative?"-"+result:result;

    },
    findMode2(root){
        let result = []
        let count = 1
        let maxCount = 0
        let pre = null
        function inorder(node) {
            if (!node) return
            inorder(node.left)
            // 
            if (pre && node.val === pre.val) {
                count++
            } else {
                count = 1
            }
            if (count > maxCount) {
                maxCount = count
                result = []
                result.push(node.val)
            }else if (count === maxCount) {
                result.push(node.val)
            }
            pre = node
            inorder(node.right)
        }
    
        inorder(root)
        return result
    
    },
    findMode(root) {
    let result=new Map();
    let max=0;
    let arr=[];

    function dfs(node){
        if(node==null) return null;
        dfs(node.left);
        dfs(node.right);
        result.set(node.val,(result.get(node.val)||0)+1);
        max=Math.max(max,result.get(node.val));
    }
    dfs(root);
    for(let [key,value] of result){
        if(value==max){
            arr.push(key);
        }
    }
    return arr;
    },
    findWords2(words) {
        const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
        const result = [];
        for (const word of words) {
            const row = rows.find(row => row.includes(word[0].toLowerCase()));
            if (word.slice(1).split('').every(char => row.includes(char.toLowerCase()))) {
                result.push(word);
            }
        }
        return result;
    },
    findWords(words) {
        let firstLet="";
        let secondLet="";
        let result=[];
        let row1="qwertyuiop";
        let row2="asdfghjkl";
        let row3="zxcvbnm";
        for(let i=0;i<words.length;i++){
            let word=words[i].toLowerCase();
            if(word.length===1){
                result.push(words[i]);
                continue;
            }
            firstLet=row1.includes(word[0])?"row1":row2.includes(word[0])?"row2":"row3";
            for(let j=1;j<word.length;j++){
                if(row1.includes(word[j])){
                    secondLet="row1";
                }else if(row2.includes(word[j])){
                    secondLet="row2";
                }else if(row3.includes(word[j])){
                    secondLet="row3";
                }
                if(firstLet!==secondLet){
                    break;
                }
            }
            if(firstLet===secondLet){
                result.push(words[i]);
            }
        }
        return result;
    },
    nextGreaterElement(nums1, nums2) {
        let result = [];
        for(let i=0;i<nums1.length;i++){
            let index=nums2.indexOf(nums1[i]);
            let next=-1;
            for(let j=index+1;j<nums2.length;j++){
                if(nums2[j]>nums1[i]){
                    next=nums2[j];
                    break;
                }
            }
            result.push(next);
        }
        return result;
    },
    findPoisonedDuration(timeSeries, duration) {
        let apunt=timeSeries[0]+(duration-1);
        let total=duration;
        for(let i=1;i<timeSeries.length;i++){
            if(timeSeries[i]<=apunt){
                total+=timeSeries[i]+duration-1-apunt;
            }else{
                total+=duration;
            }
            apunt=timeSeries[i]+duration-1;
        }
        return total;
    },
    constructRectangle(area) {
        let width = Math.floor(Math.sqrt(area));
        while (area % width !== 0) {
            width--;
        }
        return [area / width, width];
        

    },
    findMaxConsecutiveOnes(nums) {
        let sum=0;
        let max=0;
        for(let i=0;i<nums.length;i++){
            if(nums[i]===1){
                sum++;
            }else{
                max=Math.max(max,sum);
                sum=0;
            }
        }
        return Math.max(max,sum);
    },
    licenseKeyFormatting(s , k) {
        let cleaned = s.replace(/-/g, "").toUpperCase();
    
        let firstGroupSize = cleaned.length % k;
        let result = [];
    
        // Add first group (if it exists)
        if (firstGroupSize > 0) {
            result.push(cleaned.substring(0, firstGroupSize));
        }
    
        // Add remaining groups of size k
        for (let i = firstGroupSize; i < cleaned.length; i += k) {
            result.push(cleaned.substring(i, i + k));
        }
    
        return result.join("-");
    },
    findComplement2(num) {
        let mask = num.toString(2);
        let result = '';
        for (let i = 0; i < mask.length; i++) {
            result += mask[i] === '0' ? '1' : '0';
        }

        return parseInt(result, 2);
    },
    findComplement(num) {
        let mask = num.String(2).replace(/0/g, '1').replace(/1/g, '0');

        return parseInt(mask, 2) & num;
    },
    islandPerimeter(grid) {
        let perimeter = 0;
    
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    perimeter += 4; // Initialize perimeter of a single land cell
    
                    // Subtract 2 for each adjacent land cell
                    if (i > 0 && grid[i - 1][j] === 1) {
                        perimeter -= 2;
                    }
                    if (j > 0 && grid[i][j - 1] === 1) {
                        perimeter -= 2;
                    }
                }
            }
        }
    
        return perimeter;
    },
    hammingDistance2(x, y) {
        let result = 0;
        let n=x^y;
        while(n>0){
            result+=n&1;
            n>>=1;
        }
        return result;
    },
    hammingDistance(x, y) {
    let result = 0;
    let sizex = x.toString(2);
    let sizey = y.toString(2);
    let max = Math.max(sizex.length, sizey.length);
    let min = Math.min(sizex.length, sizey.length);
    return max - min;
    },
    repeatedSubstringPattern2(s) {
        const doubledString = (s + s).slice(1, -1);
        return doubledString.includes(s);
    },
    repeatedSubstringPattern(s) {
    let size=s.length;
    let i=1;
    while(size>1 && (i<=(size/2))){
        let sub=s.slice(0,i);
        let count=s.replaceAll(sub,"");
        if(count===""){
            return true;
        }
        i++;

    }
    return false;
    },
    findContentChildren2(g, s) {
        let gs = g.sort((a, b) => a - b);
        let ss= s.sort((a, b) => a - b);
        let result=0;
        let i=0;
        let j=0;
        while(i<gs.length && j<ss.length){
            if(gs[i]<=ss[j]){
                result++;
                i++;
            }
            j++;
        }
        return result;
    },
    findContentChildren(g, s) {//brute force
        let gs = g.sort((a, b) => a - b);
        let ss= s.sort((a, b) => a - b);
        let result=0;
        for(let i=0;i<gs.length;i++){
            for(let j=0;j<ss.length;j++){
                if(gs[i]<=ss[j]){
                    result++;
                    ss.splice(j,1);
                    break;
                }
            }
        }
        return result;
    },
    findDisappearedNumbers2(nums){
        let result=[];
        let set=new Set(nums);
        for(let i=1;i<=nums.length;i++){
            if(!set.has(i)){
                result.push(i);
            }
        }
        return result;
    },
    findDisappearedNumbers(nums) {
    let result=[];
    for(let i=1;i<=nums.length;i++){
        
       if(!nums.includes(i)){
            //  nums.delete(i)
           result.push(i) 
       }
    }
    return result;    
    },
    arrangeCoins2(n){
        let rows = 0; // Number of complete rows
        let coinsUsed = 0; // Total coins used so far
    while (n >= coinsUsed + 1) {
        rows++; // Increment the row count
        coinsUsed++; // Increment coins needed for the current row
        n -= coinsUsed; // Subtract coins used for this row
    }

    return rows;
    },  
    arrangeCoins(n) {
        let result = 0; 
        let i = 1;
        while (n >= i) {
            n -= i;
            i++;
            result++;
        }
        return result;
    },
    countSegments(s) {
      let count = 0;
      let inWord = false;
      for(let i=0;i<s.length;i++){
          if(s[i]!==' ' && !inWord){
              inWord=true;
              count++;
          }else if(s[i]===' '){
              inWord=false;
          }
      }
      return count;
    },
    wordSqare(words) {

        for(let i=0;i<words.length;i++){
            for(let j=0;j<words[i].length;j++){
                if(words[i][j]!==words[j][i]){
                    return false;
                }
            }
        }
        return true;
    },
    addStrings(num1, num2) {
        let result = '';
        let carry = 0;

        let i = num1.length - 1;
        let j = num2.length - 1;

        while (i >= 0 || j >= 0 || carry > 0) {
            const digit1 = i >= 0 ? num1[i] - '0' : 0;
            const digit2 = j >= 0 ? num2[j] - '0' : 0;

            const sum = digit1 + digit2 + carry;
            result = (sum % 10) + result;
            carry = Math.floor(sum / 10);

            i--;
            j--;

        }
        return result;
    },
    thirdMax(nums) {
        let result= new Set(nums);
        let arr=Array.from(result);
        arr.sort((a,b)=>b-a);
        if(arr.length<3){
            return arr[0];
        }
        return arr[2];
    },
    fizzBuzz(n){
        let result=[];
        for(let i=1;i<=n;i++){
            if(i%3===0 && i%5===0){
                result.push("FizzBuzz")
            }else if(i%3===0){
                result.push("Fizz")
            }else if(i%5===0){
                result.push("Buzz")
            }else{
                result.push(i.toString())
            }

        }

        return result;
    },
    longestPalindrome(s) {
        let result=0;
        let map=new Map();
        for(let i=0;i<s.length;i++){
            if(map.has(s[i])){
                map.set(s[i],map.get(s[i])+1);
            }else{
                map.set(s[i],1);
            }
        }
        let odd=false;
        for(let value of map.values()){
            if(value%2===0){
                result+=value;
            }else{
                result+=value-1;
                odd=true;
            }
        }
        return odd?result+1:result;
    },
    toHex(num) {
        if (num === 0) return '0';
        const hex = '0123456789abcdef';
        let result = '';
        while (num !== 0) {
            result = hex[num & 15] + result;
            num >>>= 4;
        }
        return result;
    },
    sumOfLeftLeaves(root) {
        let result=0;
        function ldt(root){
            if(root==null) return null;
            if(root.left!=null && root.left.left==null && root.left.right==null){
                result+=root.left.val;
            }
            ldt(root.left);
            ldt(root.right);
            return result;
        }
        return ldt(root)
    },
    sumOfLeftLeaves2(root) {
        let sum = 0;
        function dfs(node, isLeft) {
            if (!node) return;
            if (!node.left && !node.right && isLeft) {
                sum += node.val;
            }
            dfs(node.left, true);
            dfs(node.right, false);
        }
        dfs(root, false);
        return sum;
    },
    readBinaryWatch2(turnedOn) {
        const results = [];
    
        // Loop through all possible hours (0-11) and minutes (0-59)
        for (let hour = 0; hour < 12; hour++) {
            for (let minute = 0; minute < 60; minute++) {
                // Count the total number of 1s in hour and minute
                const totalBits = countBits(hour) + countBits(minute);
                
                // If the number of 1s matches `turnedOn`, add the time
                if (totalBits === turnedOn) {
                    // Format the time as "H:MM"
                    results.push(`${hour}:${minute.toString().padStart(2, '0')}`);
                }
            }
        }
                // Helper function to count the number of 1s in a binary representation
        function countBits(num) {
            return num.toString(2).split('1').length - 1;
        }

        return results;
    },
    readBinaryWatch(turnedOn) {
        if(turnedOn>7) return []
        let result = [];
        let hours = [8, 4, 2, 1];
        let minutes = [32, 16, 8, 4, 2, 1];
    
        for (let i = 0; i <= turnedOn; i++) {
            let possibleHours = generateDigits(hours, i, 0, 11);
            let possibleMinutes = generateDigits(minutes, turnedOn - i, 0, 59);
            for (let hour of possibleHours) {
                for (let minute of possibleMinutes) {
                    result.push(`${hour}:${minute < 10 ? '0' + minute : minute}`);
                }
            }
        }
        function generateDigits(digits, count, start, limit) {
            let result = [];
            function backtrack(start, count, sum, limit) {
                if (count === 0) {
                    result.push(sum);
                    return;
                }
                for (let i = start; i < limit; i++) {
                    backtrack(i + 1, count - 1, sum + digits[i], limit);
                }
            }
            backtrack(0, count, 0, digits.length);
            return result;
        }
    
    return result;
    },
    isSubsequence2(s, t) {
        let i = 0;
        let j = 0;
        while (i < s.length && j < t.length) {
            if (s[i] === t[j]) {
                i++;
            }
            j++;
        }
        return i === s.length;
        
    },
    isSubsequence(s, t) {
        for(let i=0;i<s.length;i++){
            if(!t.includes(s[i])){
                return false;
            }
            t=t.slice(t.indexOf(s[i])+1)
        }
        return true;

    },
    findTheDifference2(s, t) {
        let asciiValueOfT = 0;
        let asciiValueOfS = 0;
        
        for (let i = 0; i < t.length; i++) {
            if (i < s.length) {
                asciiValueOfS += s.charCodeAt(i);
            }
            asciiValueOfT += t.charCodeAt(i);
        }
    
        return String.fromCharCode(asciiValueOfT - asciiValueOfS)
    },
    findTheDifference(s, t) {
        for (let i = 0; i < s.length; i++) {
            if(t.includes(s[i])){
                t=t.replace(s[i],"")
            }else{
                return s[i]
            }
        }
        return t;
    },
    firstUniqChar2(s) {
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }
        for (let i = 0; i < s.length; i++) {
            if (map.get(s[i]) === 1) {
                return i;
            }
        }
        return -1;
    },
    firstUniqChar(s) {
        const map = new Set();
        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                map.delete(s[i]);
            } else {
                map.add(s[i]);
            }
        }
        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                return i;
            }
        }
        return -1;
    },
    canConstruct(ransomNote, magazine) {
        if(ransomNote.length>magazine.length) return false;
        for(let i=0;i<ransomNote.length;i++){
            if(!magazine.includes(ransomNote[i])){
                return false;
            }
            magazine=magazine.replace(ransomNote[i],"");
        }
        return true;
    },
  guessNumber(n) {
    let left=0;
    let right=n;

    while(left<=right){
        const mid = Math.floor((left + right) / 2);
        const result = guess(mid);

        if (result === 0) {
            return mid; // Found the number
        } else if (result === -1) {
            right = mid - 1; // The number is lower
        } else {
            left = mid + 1; // The number is higher
        }
    }

    return -1; // Should not reach here if input is valid
},
    isPerfectSquare2(num) {
        let left = 1;
        let right = num;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const square = mid * mid;
            if (square === num) {
                return true;
            } else if (square < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    },
    isPerfectSquare(num) {
        function isPerfectSquare(num, low = 1, high = num) {
            if (num < 1) return false; // Negative numbers and 0 are not perfect squares.
        
            if (low > high) return false; // Base case: no perfect square found.
        
            const mid = Math.floor((low + high) / 2);
            const square = mid * mid;
        
            if (square === num) {
                return true; // Found the perfect square.
            } else if (square > num) {
                return isPerfectSquare(num, low, mid - 1); // Recur to the left half.
            } else {
                return isPerfectSquare(num, mid + 1, high); // Recur to the right half.
            }
        }
        return isPerfectSquare(num);
    },
     numberOfPatterns(m, n) {
        // Precompute skip requirements between points
        const skip = Array.from({ length: 10 }, () => Array(10).fill(0));
        skip[1][3] = skip[3][1] = 2;
        skip[1][7] = skip[7][1] = 4;
        skip[3][9] = skip[9][3] = 6;
        skip[7][9] = skip[9][7] = 8;
        skip[1][9] = skip[9][1] = skip[3][7] = skip[7][3] = 5;
        skip[2][8] = skip[8][2] = skip[4][6] = skip[6][4] = 5;
    
        console.log(skip)
        const visited = Array(10).fill(false);
    
        // Backtracking function
        function dfs(curr, remaining) {
            if (remaining < 0) return 0; // Too few points
            if (remaining === 0) return 1; // Valid pattern found
    
            visited[curr] = true;
            let count = 0;
    
            for (let next = 1; next <= 9; next++) {
                // If the next point is not visited and either:
                // - No skip is required or the skipped point has already been visited
                if (!visited[next] && (skip[curr][next] === 0 || visited[skip[curr][next]])) {
                    count += dfs(next, remaining - 1);
                }
            }
    
            visited[curr] = false; // Backtrack
            return count;
        }
    
        let totalPatterns = 0;
    
        for (let i = m; i <= n; i++) {
            // Start patterns from 1, 2, 5 and multiply symmetric cases
            totalPatterns += dfs(1, i - 1) * 4; // Symmetric cases: 1, 3, 7, 9
            totalPatterns += dfs(2, i - 1) * 4; // Symmetric cases: 2, 4, 6, 8
            totalPatterns += dfs(5, i - 1);     // Unique case: 5
        }
    
        return totalPatterns;
    },
    
    intersect(nums1, nums2) {
        let result =[];
        for(let num of nums1){
            if(nums2.includes(num)){
                result.push(num);
                nums2.splice(nums2.indexOf(num),1);
            }
        }
        return result;
    },
    intersection(nums1, nums2) {
        let result = [];
        let s1= new Set(nums1);
        let s2= new Set(nums2);
        for(let num of s1){
            if(s2.has(num)){
                result.push(num);
            }
        }
        return result;
    },
    tictactorToe(board) {
        class TicTacToe {
            constructor(n) {
                this.n = n;
                this.rows = Array(n).fill(0);      // Track row counts
                this.cols = Array(n).fill(0);      // Track column counts
                this.diag = 0;                     // Main diagonal count
                this.antiDiag = 0;                 // Anti-diagonal count
            }
        
            move(row, col, player) {
                const toAdd = player === 1 ? 1 : -1;
        
                // Update row and column counters
                this.rows[row] += toAdd;
                this.cols[col] += toAdd;
        
                // Update diagonal counters if applicable
                if (row === col) this.diag += toAdd;          // Main diagonal
                if (row + col === this.n - 1) this.antiDiag += toAdd; // Anti-diagonal
        
                // Check if any counter reaches n or -n
                if (Math.abs(this.rows[row]) === this.n ||
                    Math.abs(this.cols[col]) === this.n ||
                    Math.abs(this.diag) === this.n ||
                    Math.abs(this.antiDiag) === this.n) {
                    return player; // Return the winner
                }
        
                return 0; // No winner yet
            }
        }
        return new TicTacToe(board);        
    },
     topKFrequent(nums, k){
        let result = [];
        let map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        const sortedNums = Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a));
        for (let i = 0; i < k; i++) {
            result.push(sortedNums[i]);
        }
        return result;
        
    },
    movingAverage(size){
        class MovingAverage {
            constructor(size) {
                this.size = size; // Maximum size of the window
                this.queue = [];  // Queue to store the last k elements
                this.sum = 0;     // Current sum of elements in the queue
            }
        
            next(val) {
                // Add new value to the sum and queue
                this.queue.push(val);
                this.sum += val;
        
                // If the queue exceeds the size, remove the oldest value
                if (this.queue.length > this.size) {
                    this.sum -= this.queue.shift();
                }
        
                // Return the moving average
                return this.sum / this.queue.length;
            }
        }
        
       return new MovingAverage(size);
        
    },
    reverseVowels2(s ) {
        const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'])
        let resul =''
        let start=0
        let end = s.length -1
        const sArray = s.split("")
    
        while(start<end){
    
            if(vowels.has(sArray[start])){
                if(vowels.has(sArray[end])){
                    const temp = sArray[start]
                    sArray[start] = sArray[end]
                    sArray[end] = temp
                    start++
                    end--
                }else{
                    end--
                }
            }else{
                start++
            }
        }
        return sArray.join('')
        },
    reverseVowels(s) {
        const arr = s.split('');
        let left = 0;
        let right = arr.length - 1;
    
        while (left < right) {
            // Move left pointer until a vowel is found
            while (left < right && ! s[left].match(/[aeiou]/i)) {
                left++;
            }
    
            // Move right pointer until a vowel is found
            while (left < right && ! s[right].match(/[aeiou]/i)) {
                right--;
            }
    
            // Swap the vowels
            [arr[left], arr[right]] = [arr[right], arr[left]];
    
            // Move pointers
            left++;
            right--;
        }
    
        return arr.join('');
         
    },

    isPowerOfFour(n) {
        if(n<1) return false
        while(n>1){
            if(n%4!==0) return false
            n=n/4
        }
        return true
    },
     countBitsNaive(n) {
        const result = []; // To store the count of 1s for each number
        
        for (let i = 0; i <= n; i++) {
            let count = 0;
            let num = i;
            
            // Count the number of 1s in the binary representation of `num`
            while (num > 0) {
                count += num & 1; // Add 1 if the least significant bit is 1
                num >>= 1;        // Right shift `num` to process the next bit
            }
            
            result.push(count);
        }
        
        return result;
    },
    countBits2(n){
        let result = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            result[i] = result[i >> 1] + (i & 1);
        }
        return result;
    },
    countBits(n){
        let result = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            result[i] = result[i >> 1] + (i & 1);
        }
        return result;
    },
    isPowerOfThree3(n ) {//326. Power of Three
        if (n <= 0) return false;
        while (n > 1) {
            if (n % 3 !== 0) return false;
            n = n / 3;
        }
        return true;
    },
    isPowerOfThree2(n ) {//326. Power of Three
        let x=3;
        if (x <= 0 || n <= 1) return false;
        let maxPowerOfN = 1;
        while (maxPowerOfN <= Number.MAX_SAFE_INTEGER / n) {
            maxPowerOfN *= n; // Find the largest power of n within safe limits
        }
        return maxPowerOfN % x === 0;
    },
    isPowerOfThree(n ) {//326. Power of Three
        return n > 0 && 1162261467 % n === 0;
    },
    rangeQueryInmutable2(nums) {
        class NumArray {
            
            constructor(nums) {
                this.nums=nums;
                this.acumulate= new Array(nums.length);
                this.acumulate[0]=nums[0];
                for(let i=1;i<nums.length;i++){
                    this.acumulate[i]=this.acumulate[i-1]+nums[i];
                }
            }
        
            sumRange(left, right) {

                return left===0?this.acumulate[right]:this.acumulate[right]-this.acumulate[left-1];
            }
        }
        return new NumArray(nums);
    },
    rangeQueryInmutable(nums) {
        class NumArray {
            
            constructor(nums) {
                this.nums=nums;
            }
        
            sumRange(left, right) {
                let sum=0;
                for(let i=left;i<=right;i++){
                    sum+=this.nums[i]
                }
                return sum
            }
        }
        return new NumArray(nums);
    },
     generatePossibleNextMoves(s) {
        const results = [];
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] === '+' && s[i + 1] === '+') {
                const newState = s.slice(0, i) + '--' + s.slice(i + 2);
                results.push(newState);
            }
        }
        return results;
    },
     canWinNim(n) {//292. Nim Game
        return !(n%4==0)
        },
    worldPattern2(pattern, s) {
        const words = s.split(" ");
        if (pattern.length !== words.length) return false;
        const map = new Map();
        
        for (let i = 0; i < pattern.length; i++) {
            if (map.has(pattern[i])) {
                if (map.get(pattern[i]) !== words[i]) return false;
            } else {
                if (Array.from(map.values()).includes(words[i])) return false;
                map.set(pattern[i], words[i]);
            }
        }
        return true;
    },
    wordPattern(pattern, s) {
        const words=s.split(" ");
        if(pattern.length!==words.length) return false;
        const map= new Map();
        const set= new Set();
        for(let i=0;i<pattern.length;i++){
            if(map.has(pattern[i])){
                if(map.get(pattern[i])!==words[i]) return false;
            }else{
                if(set.has(words[i])) return false;
                map.set(pattern[i],words[i]);
                set.add(words[i]);
            }
        }
        return true;
    },
     solutionIsBad(n) {
        
         function eje(n) {
            let left = 1, right = n;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (isBadVersion(mid)) {
                    right = mid; // Move to the left side
                } else {
                    left = mid +1; // Move to the right side
                }
            }
            return left; // `left` points to the first bad version
            
        };
        return eje(n)
    },
    missingNumber(nums) {//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
    let max=(nums.length*(1+nums.length))/2;
    let sum=0;
        for(let i=0;i<nums.length;i++){
            sum+=nums[i];
        }
        return max-sum;
    },
     isUgly(n) {//An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.
     if(n<=0) return false;
        if(n==1) return true;
        if(n%2==0) return this.isUgly(n/2);
        if(n%3==0) return this.isUgly(n/3);
        if(n%5==0) return this.isUgly(n/5);
        
        return false;
        },
    addDigits2(num){
        if (num.toString().length<=1) return num
        return 1 + (num - 1) % 9;
        
    },
    addDigits(num){
        if (num.toString().length<=1) return num
        let ope=num.toString();
        let result=0
        for (let i = 0; i < ope.length; i++) {
          
            result =result+ Number(ope[i]);
            
        }
        return this.addDigits(result);
    },
    binaryTreePaths3(root) {
        if (!root) return [];

    const result = [];
    const stack = [[root, `${root.val}`]];

    while (stack.length > 0) {
        const [node, path] = stack.pop();

        // If it's a leaf node, add the path to the result
        if (!node.left && !node.right) {
            result.push(path);
        }

        // Push the right and left child nodes with updated paths
        if (node.right) {
            stack.push([node.right, `${path}->${node.right.val}`]);
        }
        if (node.left) {
            stack.push([node.left, `${path}->${node.left.val}`]);
        }
    }

    return result;
    },
    binaryTreePaths2(root) {
        let result = [];
        function dfs(node, path) {
            if (node === null) return;
            path += node.val;
            if (node.left === null && node.right === null) {
                result.push(path);
            } else {
                path += '->';
                dfs(node.left, path);
                dfs(node.right, path);
            }
        }
        dfs(root, '');
        return result;
    },
     binaryTreePaths(root ) {
        let arrReult=[]       
        function binaryTreeREcur(root,leaft){
            if(root==null) return null
            leaft=leaft+root.val

            if(root.left===null && root.right===null){ 
                arrReult.push(leaft)
            }else{
                leaft=leaft+"->"
            let left=binaryTreeREcur(root.left,leaft)
            let right=binaryTreeREcur(root.right,leaft) 
            }
        }
        binaryTreeREcur(root,"")
        return arrReult
    },
    canAttendMeetings(intervals) {
        // Step 1: Sort intervals by start time
        intervals.sort((a, b) => a[0] - b[0]);
    
        // Step 2: Check for overlaps
        for (let i = 0; i < intervals.length - 1; i++) {
            if (intervals[i][1] > intervals[i + 1][0]) {
                return false; // Overlap found
            }
        }
    
        return true; // No overlaps
    },
    StrobogrammaticNum(num){
        const strobogrammaticMap = {
            '0': '0',
            '1': '1',
            '6': '9',
            '8': '8',
            '9': '6'
        };

        if(num===2||num===3||num==4||num==5||num==7) return false
        let left=0
        let right=num.length-1
        while (left <= right) {
            const leftChar = num[left];
            const rightChar = num[right];
            if (
                !strobogrammaticMap.hasOwnProperty(leftChar) ||
                strobogrammaticMap[rightChar] !== leftChar
            ) {
                return false;
            }
    
            left++;
            right--;
        }
    
        return true;
    },
    intToRoman(num) {
        const valueMap = [
            { value: 1000, symbol: 'M' },
            { value: 900, symbol: 'CM' },
            { value: 500, symbol: 'D' },
            { value: 400, symbol: 'CD' },
            { value: 100, symbol: 'C' },
            { value: 90, symbol: 'XC' },
            { value: 50, symbol: 'L' },
            { value: 40, symbol: 'XL' },
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
        ];
    
        let result = '';
    
        for (const { value, symbol } of valueMap) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
    
        return result;
    },
    shortestDistance(wordsDict, word1, word2) {
        let index1 = -1;
        let index2 = -1;
        let minDistance = Infinity;
    
        for (let i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i] === word1) {
                index1 = i;
            }
            if (wordsDict[i] === word2) {
                index2 = i;
            }
            if (index1 !== -1 && index2 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(index1 - index2));
            }
        }
    
        return minDistance;
    },
    isAnagram2(s, t) {
        if (s.length !== t.length) return false;
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
            map.set(t[i], (map.get(t[i]) || 0) - 1);
        }
        for (let count of map.values()) {
            if (count !== 0) return false;
        }
        return true;
    },
     isAnagram(s, t) {//con un set no funciona si tiene los mismos letras
        if(s.length!=t.length) return false
        let com= new Set();
        let com2= new Set();
        for(let i=0;i<s.length;i++){
            com.add(s[i])
            com2.add(t[i])
        }
       // com.forEach(element => { el bucle foreach no detiene la iteracion
       for (let element of com) {         
            if(!com2.has(element)){
                return false;
            }
        };
        return true;
    },
    isPalindrome2(head){
        let prev = null;
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            let next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;
        }
        if (fast !== null) {
            slow = slow.next;
        }
        while (slow !== null) {
            if (slow.val !== prev.val) {
                return false;
            }
            slow = slow.next;
            prev = prev.next;
        }   
        return true;
    },
     isPalindrome( listN ) {
        let auxArr=[]
        while(listN!=null){
            auxArr.push(listN.val)
            listN=listN.next;
        }
        let apu1=0;
        let apun2=auxArr.length-1;
        
        for(let i=0;i<Math.abs(auxArr.length/2);i++){
            if(auxArr[apu1]==auxArr[apun2]){
                apu1++;
                apun2--;
            }else{
                return false
            }
        }
        return true;
    },
    myQueue() {
        class MyQueue {
            constructor() {
                this.q1 = [];
            }
        
            push(x) {
                this.q1.push(x);
            }
        
            pop() {
               return this.q1.shift();
            }
        
            peek() {
                return this.q1[0];
            }
        
            empty() {
                return this.q1.length === 0;
            }
        }
        return new MyQueue();
    },
    isPowerOfTwo2(n) {
        if (n <= 0) return false;
        return (n & (n - 1)) === 0;
    },
     isPowerOfTwo(n) {
        if (n <= 0) return false;
        let cont=0;
        let operation=0;
        while(operation<=n){
            operation=Math.pow(2, cont)
            cont++
            if(operation===n) return true
            
        }
        return false;
    },
     summaryRanges(nums) {
       let result=[]
       let start=0;
       let end=0;
       for(let i=0;i<nums.length;i++)
       {
        if( nums[i]+1!==nums[i+1]){
            end=i
            if(start===end){
                result.push(nums[start].toString())
            }else{
                result.push(nums[start].toString()+"->"+nums[end].toString())
            }
            start=i+1
        }
       }
       return result
    },
    invertTree2(root){
        let val=[];
        let aux= new TreeNode();
        function invertTreezux(root){
            if(root==null) return null;
            val.push(root.val)
            aux=root.left;
            root.left=root.right;
            root.right=aux;
            console.log(val)
            invertTreezux(root.left);
            invertTreezux(root.right);
            return root;

        }
    return invertTreezux(root);
    },
    invertTree(root){
        if(root==null) return null;
        debugger;
        let left= this.invertTree(root.left);
        let right= this.invertTree(root.right);
        root.left=right;
        root.right=left;
        return root;
    },
    implStackQueues2(){
        class MyStack {
            constructor() {
                this.q1 = [];
                this.q2 = [];
            }
        
            push(x) {
                this.q1.push(x);
            }
        
            pop() {
                while (this.q1.length > 1) {
                    this.q2.push(this.q1.shift());
                }
                const poppedElement = this.q1.shift(); // The last element in q1
                [this.q1, this.q2] = [this.q2, this.q1]; // Swap queues
                return poppedElement;
            }
        
            top() {
                while (this.q1.length > 1) {
                    this.q2.push(this.q1.shift());
                }
                const topElement = this.q1[0]; // Peek the last element
                this.q2.push(this.q1.shift()); // Move it to q2
                [this.q1, this.q2] = [this.q2, this.q1]; // Swap queues
                return topElement;
            }
        
            empty() {
                return this.q1.length === 0;
            }
        }
    },
    implStackQueues(){

        class MyStack {
            constructor() {
                this.queue=[];
            }
        
            push(x){
                this.queue.push(x);
            }
        
            pop() {
                this.queue.pop();
            }
        
            top() {
                return this.queue[this.queue.length-1]
            }
        
            empty() {
                return this.queue.length==0;
            }
        }
    return new MyStack();     
    },
    countNodes2(root) {
        let count=0;;
        function countNodesTmp(root){
            if(root==null) return 0;
            console.log(count)
           return count=1+countNodesTmp(root.left)+countNodesTmp(root.right);
         
        }
        
        return  countNodesTmp(root);
        
    },
    countNodes(root) {
        if (root === null) return 0;
        return 1 + this.countNodes(root.left) + this.countNodes(root.right);
    },
    containsNearbyDuplicateSet(nums,k) {
        let result = false;
        let set = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) {
                result = true;
            }
            set.add(nums[i]);
            if (set.size > k) {
                set.delete(nums[i - k]);
            }
        }
        return result; 
    },
    containsNearbyDuplicate2(nums,k) {
        let result = false;
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
                result = true;
            }
            map.set(nums[i], i);
        }
        return result; 
    },
     containsNearbyDuplicate(nums,k) {
    let result = false;

    for (let i = 0; i < nums.length; i++) { 
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                result = true;
            }
        }
    }
    return result;
},
     containsDuplicate(nums) {
        let dupli= new Map();
            for(let i=0;i<nums.length;i++){
                if(dupli.has(nums[i])){
                    return true;
                }
                dupli.set(nums[i],1);
            }
            return false;
    },
    containsDuplicate2(nums) {
        let dupli= new Set();
        for(let i=0;i<nums.length;i++){
            if(dupli.has(nums[i])){
                return true;
            }
            dupli.add(nums[i]);
        }
        return false;
    },
    reverseList2(head) {
        // Base case: if head is null or only one node, return head
        if (head === null || head.next === null) {
            return head;
        }
        
        // Reverse the rest of the list
        let newHead = this.reverseList2(head.next);
        
        // Re-link the current node
        head.next.next = head;
        head.next = null;  // Set the current node's next to null (new tail)
    
        return newHead;  // Return the new head of the reversed list
    },
 reverseList(head) {

    if (head === null) return null;
    let prev = null;
    let current = head;
    let next = head.next;
    while(current !== null){
        current.next = prev;
        prev = current;
        current = next;
        if(next !== null){
            next = next.next;
        }
    }
    return prev;
},
    isIsomorphic2(s, t) {
        const mapS = new Array(256).fill(-1);
        const mapT = new Array(256).fill(-1);
        const length = s.length;
        for (let i = 0; i < length; i++) {
            const sChar = s.charCodeAt(i);
            const tChar = t.charCodeAt(i);
            if (mapS[sChar] !== mapT[tChar]) return false;
            mapS[sChar] = mapT[tChar] = i;
        }
        return true;
    },
     isIsomorphic(s, t) {
        if (s.length !== t.length) return false;
        const mapS = new Map();
        const mapT = new Map();
        for (let i = 0; i < s.length; i++) {
            if (mapS.has(s[i]) && mapS.get(s[i]) !== t[i]) return false;
            if (mapT.has(t[i]) && mapT.get(t[i]) !== s[i]) return false;
            mapS.set(s[i], t[i]);
            mapT.set(t[i], s[i]);
        }
      
        return true;
    },
     removeElements(head , val) {
        if (head === null) return null;
        head.next = this.removeElements(head.next, val);
        if(head.val === val){
            let temp = head.next;
            if(temp !== null){
                console.log(temp.val)
            }
         
            return temp;
        }else{
            console.log(head.val)
            return head;
        }
       /*  console.log(head.val)
        return head.val === val ? head.next : head; */


    },
    isHappy2(n) {//if i want to find a cycle slow and fast pointer
        function digitSquareSum(n) {
            let sum = 0;
            while (n > 0) {
                let digit = n % 10;
                sum += digit * digit;
                n = Math.floor(n / 10);
            }
            return sum;
        }

        let nums= new Set();
        while(n!=1 && !nums.has(n)){
            nums.add(n);
            n=digitSquareSum(n);
        }
        return n===1;
    },
    isHappy(n) {
        function digitSquareSum(n) {
            let sum = 0;
            while (n > 0) {
                let digit = n % 10;
                sum += digit * digit;
                n = Math.floor(n / 10);
            }
            return sum;
        }

        let slow = n;
        let fast = n;
        do {
            slow = this.digitSquareSum(slow);
            fast = this.digitSquareSum(this.digitSquareSum(fast));
        } while (slow != fast);
        return slow == 1;

       

    },   
     hammingWeight(n) {
        /*  Given a positive integer n, write a function that returns the number of 
set bits
 in its binary representation (also known as the Hamming weight). */
        return (n.toString(2).match(/1/g) || []).length; 
    },
     hammingWeight2(n) {
        let result = 0;
        let str = n.toString(2);
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '1') {
                result++;
            }
        }
        return result; 
    },
    reverseBits2(n) {//convert the number to vinary an the reverse 43261596
        let result = 0;
        let power = 0;
           while (n > 0) {
               result = result * 2 + (n % 2);
               n = Math.floor(n / 2);
               power++;
           }
           return result * Math.pow(2, 32 - power);
   
    },
     reverseBits(n) {//reverse the bit "00000010100101000001111010011100"
         let result = 0;
         let power = 0;
        let changeNumber = n.toString();
        for(let i=0;i<changeNumber.length-1;i++){
    
            result+=Number(changeNumber[i])*Math.pow(2,power);	
            
            power++;
        }
        return result;
    },
     titleToNumber(letter) {
        let result = 0;
        for (let i = 0; i < letter.length; i++) {
            result = result * 26 + letter.charCodeAt(i) - 64;
        }
        return result;
    },
    TwoSum() {
        

        function TwoSum() { 
           
            this.numCounts = new Map();  // Initialize an empty HashMap
        }
        
        TwoSum.prototype.add=function (number) {
            // Increment the count of the number in the HashMap
            this.numCounts.set(number, (this.numCounts.get(number) || 0) + 1);
        }
    
        TwoSum.prototype.find=function (value) {
            for (let num of this.numCounts.keys()) {
                let complement = value - num;
                
                if (complement === num) {  // Special case: pair with the same number
                    if (this.numCounts.get(num) > 1) return true;
                } else if (this.numCounts.has(complement)) {
                    return true;
                }
            }
            return false;  // No pair found
        }
        
        return new TwoSum();
        
    },
    
    convertToTitle(column){
        let result ="";
        while(column>0){
            column--;
            result = String.fromCharCode(65+column%26)+result;
            column = Math.floor(column/26);
        }
        return result;
    },
    findMissingRanges(nums, lower, upper) {
        let result = [];
        let prev = lower - 1;  // Initialize previous element outside the lower bound
        
        for (let i = 0; i <= nums.length; i++) {
            let curr = (i < nums.length) ? nums[i] : upper + 1;  // Include the upper bound check
            
            if (curr - prev >= 2) {  // There's a gap
                result.push(formatRange(prev + 1, curr - 1));  // Add missing range
            }
            
            prev = curr;  // Move to the next number
        }
        
        return result;
    },
    
    // Helper function to format the range
     formatRange(start, end) {
        return (start === end) ? `${start}` : `${start}->${end}`;
    },
     getIntersectionNode2(headA, headB) {
        let p1 = headA;
        let p2 = headB;
    
        while (p1 !== p2) {
            p1 = (p1 === null) ? headB : p1.next;
            p2 = (p2 === null) ? headA : p2.next;
            console.log(p1, p2)
        }
    
        return p1;  // This could be the intersection node or null
    },
    getIntersectionNode(headA, headB) {
        let a1 = headA;
        let b1 = headB;
        //compara dos arreglos si son iguales
        if (headA === null || headB === null) return null;
        let lengthA=0;
        let lengthB=0;
        while(a1!==null){
            lengthA++;
            a1=a1.next;
        }
        while(b1!==null){
            lengthB++;
            b1=b1.next;
        }
        for(let i=0;i<Math.abs(lengthA-lengthB);i++){
            if(lengthA>lengthB){
                headA=headA.next;
            }else{
                headB=headB.next;
            }
        }
        while(headA!==null && headB!==null){
            if(headA===headB) return headA.val;
            headA=headA.next;
            headB=headB.next;
        }

        return null;
    },
     read4(buf, n) {
        let buf4 = new Array(4);  // Temporary buffer of size 4
        let readTotal = 0;        // Total characters read so far
        
        while (readTotal < n) {
            let count = read4(buf4);  // Read up to 4 characters
            
            if (count === 0) break;   // End of file (EOF) reached
            
            // Copy characters from buf4 to buf (up to n characters)
            for (let i = 0; i < count && readTotal < n; i++) {
                buf[readTotal++] = buf4[i];
            }
        }
        return readTotal;
    },
    postorderTraversal(root) {
        
        let stack = [root];
        let result = [];
        while (stack.length > 0) {
            const node = stack.pop();
            if (node !== null) {
                result.unshift(node.val);
                stack.push(node.left,node.right);
               
            }
        }

        return result;
    },
     preorderTraversal(root) {
        let result=[];
        function orderTraversal(root){
            if(root==null) return;
            result.push(root.val);
            orderTraversal(root.left);
            orderTraversal(root.right);
        }
        
        orderTraversal(root);
        return result;
        
    },
     hasCycle(head) {
        let slow = head;     // Initialize slow pointer
        let fast = head;     // Initialize fast pointer
    
        while (fast !== null && fast.next !== null) {
            slow = slow.next;          // Move slow by 1 step
            fast = fast.next.next;     // Move fast by 2 steps
    
            if (slow === fast) {       // If they meet, a cycle exists
                return true;
            }
        }
        return false;  
    },
    singleNumber(nums) {
        let result = 0;
        for (let num of nums) {
            result ^= num; // XOR each number with the result
        }
        return result;
    },
    palindrome(s) {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    return cleaned === cleaned.split('').reverse().join('');
    },
    maxProfit(prices) {
        if (prices.length < 2) return 0;

            let minPrice = prices[0]; // Minimum price seen so far
            let maxProfit = 0;        // Maximum profit achieved so far

            for (let i = 1; i < prices.length; i++) {
                const currentProfit = prices[i] - minPrice;
                maxProfit = Math.max(maxProfit, currentProfit); // Update max profit if better profit found
                minPrice = Math.min(minPrice, prices[i]);       // Update minimum price if a lower one is found
            }

            return maxProfit;
    },
    generatePascalTriangleRow(rowIndex) {
        const row = [1]; // Start with the first element as 1

        for (let j = 1; j <= rowIndex; j++) {
            row.push((row[row.length - 1] * (rowIndex - j + 1)) / j);
        }

        return row;
    },
    generatePascalTriangle(numRows) {
        const result = [];
    
        for (let i = 0; i < numRows; i++) {
            const row = Array(i + 1).fill(1); // Create a row of length (i+1) filled with 1s
    
            // Calculate intermediate values for the row
            for (let j = 1; j < i; j++) {
                row[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
    
            result.push(row); // Add the row to the result
        }
    
        return result;
    },
    hasPathSum(root, targetSum){
        if(root== null) return false;
        if(root.left ==null && root.right==null && root.val ==targetSum) return true;
        return this.hasPathSum(root.left, targetSum-root.val) || this.hasPathSum(root.right, targetSum-root.val);
    },
    minDepth(root) {
        function depth(root) {
            if (root == null) return 0;

            if (root.left == null && root.right == null) return 1;
            if (root.left == null) return 1 + depth(root.right);
            if (root.right == null) return 1 + depth(root.left);
            let val1 = depth(root.left);
            let val2 = depth(root.right);
            return 1 + Math.min(val1, val2);

        }

        return depth(root);
    },
    // Iterative
    minDepth(root) {
        let queue = [root].filter(Boolean);
        let level = 1;
        while (queue.length > 0) {
            const temp = [];

            while (queue.length > 0) {
                const node = queue.pop();
                if (!node.left && !node.right) {
                    return level;
                }

                if (node.left) {
                    temp.push(node.left);
                }
                if (node.right) {
                    temp.push(node.right);
                }

            }
            level++;
            queue = temp;
        }

        return 0;
    },
    isBalanced(root) {
        function checkHeight(node) {
            if (node === null) return 0;

            const leftHeight = checkHeight(node.left);
            if (leftHeight === -1) return -1;  // Left subtree is unbalanced

            const rightHeight = checkHeight(node.right);
            if (rightHeight === -1) return -1;  // Right subtree is unbalanced

            if (Math.abs(leftHeight - rightHeight) > 1) return -1;  // Current node is unbalanced
            let result = 1 + Math.max(leftHeight, rightHeight)
            return result;
        }

        return checkHeight(root) !== -1;
    },
    sortedArrayToBSTAsc(nums) {//ascending order array to binary tree
        if (nums.length === 0) return null;

        function helper(left, right) {
            if (left > right) return null;

            const mid = Math.floor((left + right) / 2);
            const root = new TreeNode(nums[mid]);

            root.left = helper(left, mid - 1);
            root.right = helper(mid + 1, right);

            return root;
        }

        return helper(0, nums.length - 1);
    },
    ortedArrayToBSTIterative(nums) {//iteravive sortin array to binary tree

        if (nums.length === 0) return null;



        const mid = Math.floor(nums.length / 2);
        const root = new TreeNode(nums[mid]);

        const stack = [{ node: root, left: 0, right: nums.length - 1 }];

        while (stack.length > 0) {
            const { node, left, right } = stack.pop();
            const mid = Math.floor((left + right) / 2);

            // Left child
            if (mid - 1 >= left) {
                const leftMid = Math.floor((left + mid - 1) / 2);
                node.left = new TreeNode(nums[leftMid]);
                stack.push({ node: node.left, left, right: mid - 1 });
            }

            // Right child
            if (mid + 1 <= right) {
                const rightMid = Math.floor((mid + 1 + right) / 2);
                node.right = new TreeNode(nums[rightMid]);
                stack.push({ node: node.right, left: mid + 1, right });
            }
        }

        return root;
    },
    sortedArrayToBST(nums) {
        function Treenode(val, left, right) {
            this.val = (val === undefined ? 0 : val)
            this.left = (left === undefined ? null : left)
            this.right = (right === undefined ? null : right)
        }
        //Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
        if (nums.length == 0) {
            return null;
        }
        let mid = Math.floor(nums.length / 2);
        let root = new Treenode(nums[mid]);
        root.left = this.sortedArrayToBST(nums.slice(0, mid));
        root.right = this.sortedArrayToBST(nums.slice(mid + 1));
        return root;
    },
    maxTreeDepth(root) {

        function maxDepth(root) {
            if (root === null) return 0;
            let leftDepth = 0;
            let rightDepth = 0;

            leftDepth = maxDepth(root.left);
            rightDepth = maxDepth(root.right);

            console.log(leftDepth, leftDepth)
            return Math.max(leftDepth, rightDepth) + 1;
        }
        return maxDepth(root);
    },
    isSymmetricIterati(root) {
        if (root === null) return true;

        const queue = [[root.left, root.right]];

        while (queue.length > 0) {
            const [left, right] = queue.shift();

            // If both are null, continue with the next pair
            if (left === null && right === null) continue;

            // If one is null or values don't match, not symmetric
            if (left === null || right === null || left.val !== right.val) return false;

            // Enqueue the children in mirror order
            queue.push([left.left, right.right]);
            queue.push([left.right, right.left]);
        }

        return true;
    },
    isSymmetric(root) {
        if (root === null) return true;

        function isMirror(left, right) {
            // Base case: both nodes are null
            if (left === null && right === null) return true;

            // If one of the nodes is null or their values are different
            if (left === null || right === null || left.val !== right.val) return false;

            // Check mirroring of subtrees
            return isMirror(left.left, right.right) && isMirror(left.right, right.left);
        }

        return isMirror(root.left, root.right);
    },
    isSameTree(p, q) {

        function compare(p, q) {
            if (p === null && q === null) return true;
            if (p === null || q === null) return false;
            if (p.val !== q.val) return false;

            return compare(p.left, q.left) && compare(p.right, q.right);   // Traverse right subtree


        }

        return compare(p, q);
    },
    inorderTraversalWh(root) {
        const result = [];
        const stack = [];
        let current = root;

        while (current !== null || stack.length > 0) {
            // Reach the leftmost node of the current node
            while (current !== null) {
                console.log("current", current.val)
                stack.push(current);
                current = current.left;
            }

            // Current is now null, so pop from stack
            console.log("stack1", stack)
            current = stack.pop();
            console.log("stack2", stack)
            console.log("current", current)
            result.push(current.val); // Visit the node

            // Visit the right subtree
            current = current.right;
        }

        return result;
    },
    inorderTraversal(root) {
        let result = [];

        function traverse(node) {

            if (node == null) return;

            traverse(node.left);
            result.push(node.val);
            traverse(node.right)

        }
        traverse(root)
        return result;

    },
    deleteDuplicates(list) {
        let current = list;
        while (current !== null && current.next !== null) {
            if (current.val === current.next.val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return list;
    },
    climbStairs(n) {
        if (n <= 2) return n;  // Base cases

        let oneStepBefore = 2;
        let twoStepsBefore = 1;
        let totalWays = 0;

        for (let i = 3; i <= n; i++) {
            totalWays = oneStepBefore + twoStepsBefore;
            twoStepsBefore = oneStepBefore;
            oneStepBefore = totalWays;
        }

        return totalWays;
    },
    mySqrt(x) {
        if (x < 2) return x; // For 0 and 1, the square root is the number itself

        let left = 1;
        let right = x;
        let result = 0;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const square = mid * mid;

            if (square === x) {
                return mid; // Exact square root found
            } else if (square < x) {
                result = mid; // Update result to the current mid
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result; // Return the floor of the square root
    },
    quickSorting(arr, start, end) {
        //log(n)
        if (arr.length <= 1) {
            return arr;
        }
        if (start < end) {
            let index = this.partition(arr, start, end);
            this.quickSorting(arr, start, index - 1);
            this.quickSorting(arr, index + 1, end);
        }

        return arr;

    }, partition(arr, start, end) {
        console.log("partition")
        let pivot = arr[end];
        let index = start;
        for (let i = start; i < end; i++) {
            if (arr[i] < pivot) {
                let temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;
                index++;
            }
        }
        let temp = arr[end];
        arr[end] = arr[index];
        arr[index] = temp;
        return index;
    },
    sumTwobinary(a, b) {
        //Given two binary strings a and b, return their sum as a binary string.
        //let a1 = parseInt(a, 2)
        //let b1 = parseInt(b, 2)
        // return (a1 + b1).toString(2)

        let i = a.length - 1;
        let j = b.length - 1;
        let carry = 0;
        let result = '';

        while (i >= 0 || j >= 0 || carry > 0) {
            const bitA = i >= 0 ? parseInt(a[i], 2) : 0;
            const bitB = j >= 0 ? parseInt(b[j], 2) : 0;
            const sum = bitA + bitB + carry;

            result = (sum % 2) + result;  // Append the current bit to result
            carry = Math.floor(sum / 2);  // Calculate the carry

            i--;
            j--;
        }

        return result;
    },
    mergeSort(arr) {
        //O(n log n)
        if (arr.length === 1) {
            return arr
        }
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        return this.merge(
            this.mergeSort(left),
            this.mergeSort(right)
        )
    }, merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    },
    insertionSort(arr) { //n^2
        for (let i = 1; i < arr.length; i++) {
            let value = arr[i];
            let hole = i;
            while (hole > 0 && arr[hole - 1] > value) {
                arr[hole] = arr[hole - 1]
                hole = hole - 1;
            }
            arr[hole] = value;
        }
        return arr;
    },
    bubleSort(arr) {    //n^2
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i; j++) {
                if (arr[j] > arr[j + 1]) {//change the order
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },
    selectionSort(arr) {
        //O(n^2)
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {//change the order
                    min = j;
                }
            }
            if (i != min) {
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        return arr;
    },
    //66. Plus One
    plusOne(digits) {
        let size = digits.length;
        for (let i = size - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            } else {
                digits[i] = 0;
            }
            digits.unshift(1);
            return digits;
        }
    },
    //58. Length of Last Word Easy Topics Companies Given a string s consisting of words and spaces, return the length of the last word in the string.
    lengthOfLastWord(s) {

        let size = s.length;
        let lastworld = "";
        let palabra = false;
        for (let i = size - 1; i >= 0; i--) {
            console.log(s[i])
            if (s[i] != ' ') {

                palabra = true;
                lastworld = lastworld + s[i];
            } else if (palabra == true) {
                return lastworld.length;
            }
        }
        return lastworld.length;

    },
    //35. Search Insert Position--Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order
    searchInsertPo(nums, target) {

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right + 1;


    },
    majorityElement(nums) {
        let m = new Map();
        for (let i = 0; i < nums.length; i++) {

            if (m.has(nums[i])) {
                m.set(parseInt(nums[i]), m.get(parseInt(nums[i])) + 1)
            } else {
                m.set(parseInt(nums[i]), 1)
            }

        }
        let maxItem = 0;
        let maxCount = 0;
        m.forEach((count, element) => {
            if (count > maxCount) {
                maxCount = count;
                maxItem = element;
            }
        })
        return maxItem;

    },
    removeDuplicates2(nums) {
        let num = 0;
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], 0);
        }

        for (let i = 0; i < nums.length; i++) {

            if (map.get(parseInt(nums[i])) <= 1) {
                map.set(nums[i], map.get(parseInt(nums[i])) + 1)
                num++;

            }

        }
        console.log(map)
        let agrega = 0;
        for (let [key, value] of map) {
            for (let j = 0; j < map.get(key); j++) {

                nums[agrega] = parseInt(key)
                agrega++;

            }
        }
        console.log(nums)
        return num;
    },
    mergetwoorderArrays(nums1, m, nums2, n) {
        let arrAux = nums1.slice(0, m);
        nums2 = nums2.slice(0, n);
        nums1.length = m + n;
        console.log(nums1.length)
        console.log(arrAux)
        console.log(nums2)
        if (m == 0) {
            for (let i = 0; i < nums1.length; i++) {
                nums1[i] = nums2[i]
            }
        } else if (n != 0) {
            let apun0 = 0;
            let apun2 = 0;
            for (let i = 0; i < nums1.length; i++) {
                if (arrAux[apun0] <= nums2[apun2] || nums2[apun2] == undefined) {
                    nums1[i] = arrAux[apun0];
                    console.log("apun0", apun0)
                    apun0++

                } else {
                    nums1[i] = nums2[apun2];
                    console.log("apun2", apun2)
                    apun2++

                }

            }
        }
        console.log(nums1)
    },
    ordenar(arr) {
        //retorna carpeta que tenga mas archivos sin repetir
        let arrtmpFolders = {};
        let arrtmp2Nombres;
        let nombrTepFol;
        let nombrTepFil;


        for (let i = 0; i < arr.length; i++) {
            const regex = new RegExp('goto');
            const regex2 = new RegExp('create');
            if (regex.test(arr[i])) {
                nombrTepFol = arr[i].replace("goto ", "")
                arrtmpFolders[nombrTepFol] = 0;

                arrtmp2Nombres = {};
            } else if (regex2.test(arr[i])) {
                nombrTepFil = arr[i].replace("create ", "")
                arrtmp2Nombres[nombrTepFil] = 0;
                arrtmpFolders[nombrTepFol] = Object.keys(arrtmp2Nombres).length;
            }


        }
        console.log(arrtmpFolders)
        let result = Object.keys(arrtmpFolders).reduce(function (a, b) { return arrtmpFolders[a] > arrtmpFolders[b] ? a : b });
        //console.log(result)
        return result
    },

    solution(inputString) {
        //voltea el texto dentro de parentesis papa(par)no
        let liminteInicial = 0;
        let limiteFinal = 0;
        let encontro = 0;
        let i = 0;
        let textVolteado = "";
        while (inputString.search(/\(/) != -1) {
            if (inputString[i] === "(") {
                liminteInicial = i;
            }
            if (inputString[i] === ")") {
                limiteFinal = i;
                inputString = remplazaletras(liminteInicial, limiteFinal, inputString)
                //console.log(inputString)
                i = 0;
            } else {
                i++;
            }

        }


        function remplazaletras(inicio, final, text) {
            textVolteado = text.slice(inicio + 1, final)
            textVolteado = textVolteado.split("").reverse().join("");
            //console.log(inicio,final,textVolteado)

            return text.slice(0, inicio) + textVolteado + text.slice(final + 1)
        }

        return inputString
    },
    solution3(inputString) {
        ////voltea el texto dentro de parentesis papa(par)no
        while (inputString.includes('(')) {
            inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => {
                console.log(_)
                console.log(str)
                return [...str].reverse().join('')
            }
            )
                ;
        }
        return inputString;
    },
    solution4(ops) {
        //  suma los elementos del array , si es C elimina el anterior, D duplica por dos el anterior, + sumalos anteriores
        let result = null;
        let tempArray = [];
        for (let i = 0; i < ops.length; i++) {
            if (ops[i] === "C") {
                tempArray.pop()
            } else if (ops[i] === "D") {
                tempArray.push(tempArray[tempArray.length - 1] * 2)
            } else if (ops[i] === "+") {
                tempArray.push(parseInt(tempArray[tempArray.length - 2]) + parseInt(tempArray[tempArray.length - 1]))
            } else {
                tempArray.push(ops[i])
            }
        }
        result = tempArray.reduce((sum, a) => parseInt(sum) + parseInt(a))
        return result;
    },
    solution5(ops) {
        //Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
        let regEx = /\{\}|\[\]|\(\)/
        let bandera = true
        while (ops.length >= 0) {
            // console.log(regEx.test(ops)) 
            if (regEx.test(ops)) {
                ops = ops.replace(/\{\}|\[\]|\(\)/, "")
                //  console.log(ops)
                if (ops.length == 0) {
                    return true
                }
            } else {
                return false
            }
        }
        return true;

    },
    rotarMatriz(matriz, veces) { //con cruz
        //Rota una matriz menos la cruz de la matriz
        let matrizFinal = []
        for (let i = 0; i < matriz.length; i++) {
            matrizFinal.push([])
            for (let j = 0; j < matriz[0].length; j++) {

                //rota centido horario
                if (i == j) {//no se mueve la cruz
                    matrizFinal[i].push(matriz[i][j])
                } else if (i == (matriz.length - 1) - j) {
                    matrizFinal[i].push(matriz[i][j])
                } else {
                    matrizFinal[i].push(matriz[(matriz.length - j) - 1][i])
                }

            }
        }
        return matrizFinal
    }, deposit(n1, n2, n3) {
        //You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.
        //Example
        //For deposit = 100, rate = 20, and threshold = 170, the output should be
        //solution(deposit, rate, threshold) = 3.

        console.log("depo")
        let cont = 0;
        let rateN = (n2 / 100) + 1;
        while (n1 < n3) {
            n1 = n1 * rateN
            cont++;
        }
        return cont
    }, ordensoloDiferent1function(inputArray) {
        //Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.
        //For inputArray = ["aba", "bbb", "bab"], the output should besolution(inputArray) = false.
        function comparaPalabra(st, st2) {
            console.log(st, st2)
            if (st === st2) {
                return false
            }
            if (st.length != st2.length) {
                if (st.length != st2.length - 1 || st.length != st2.length - 1) {
                    console.log(st.length, st2.length)
                    return false
                }
            }
            let diferences = 0;
            for (let i = 0; i < st.length; i++) {
                if (st[i] !== st2[i]) {
                    diferences++;
                }

            }
            return diferences <= 1
        }

        let tempArr = new Array();
        tempArr.push(inputArray)


        let bandera = false;
        let apunt1 = 0;
        let arrresult = []
        let cont2 = 0;
        let cont0 = 1;
        let apunt4 = 0;
        while (tempArr[0].length >= 2) {

            if (comparaPalabra(tempArr[apunt4][0], tempArr[apunt4][cont0])) {

                if (tempArr[0].length == 2) {
                    bandera = true;
                    break;
                }

                arrresult.push(new Array)
                arrresult.push(new Array)
                for (let i = 0; i < tempArr[0].length; i++) {
                    if (i !== 0) {
                        arrresult[0].push(tempArr[0][i])
                    }
                }
                cont2++;
                for (let i = 0; i < tempArr[0].length; i++) {
                    if (i !== cont0) {
                        arrresult[1].push(tempArr[0][i])
                    }
                }
                cont2++;
                cont0 = 1;


                tempArr = arrresult;
                arrresult = [];
                /*    if(){
                        apunt4++;
                    }*/

            } else {

                bandera = false;
                cont0++;
                if (cont0 == tempArr[0].length) {
                    tempArr.shift();
                    cont0 = 1;
                }

                if (tempArr.length == 0) {
                    break;
                }
            }

        }
        return bandera
    }, solutionorden(a) {//el mismo que el de arriba
        for (let i = 0; i < a.length; i++) {
            let remaining = findNext(a[i], a);
            if (remaining.length === 0) return true;
        }
        return false;

        function findNext(current, a) {
            if (a.length === 0) return a;
            for (let i = 0; i < a.length; i++) {
                if (differsByOneChar(current, a[i])) {
                    let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i + 1)));
                    if (remaining.length === 0) return remaining;
                }
            }
            return a;
        }

        function differsByOneChar(s1, s2) {
            let mismatches = 0;
            for (let i = 0; i < s1.length; i++) {
                if (s1[i] !== s2[i]) mismatches++;
                if (mismatches > 1) break;
            }
            return mismatches === 1;
        }
    }, mergeTwoLists(list1, list2) {

        function head(val, next) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }

        let nuelist = new head(null)

        let current = nuelist;

        console.log("ini")
        console.log(list1.val)
        if (!list1) {
            console.log("1")
            console.log(list2)
            return list2;
        }

        if (!list2) {
            console.log("2")
            console.log(list1)
            return list1;
        }

        while (list1 && list2) {

            if (list1.val <= list2.val) {
                current.next = list1
                list1 = list1.next;
            } else {
                current.next = list2
                list2 = list2.next;
            }
            current = current.next;
            console.log("nuelist")
            console.log(nuelist)
            console.log("current")
            console.log(current)

        }
        let notNull = list1 || list2;

        current.next = notNull


        return nuelist.next;

    }, removeDuplicates(nums) {//remuebe duplicados con un apuntador
        let j = 0;//
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] != nums[j]) {
                nums[j + 1] = nums[i];
                j++;
                console.log(nums)
            }
        }

        return j + 1;
    }, cartas(k) {
        console.log("cartas", k)
        let cartas = {};
        k.forEach(el => (cartas[el] = cartas[el] + 1 || 1))
        console.log(cartas)
        Object.keys(cartas).forEach(key => {
            if (cartas[key] > 1) delete cartas[key]

        })
        console.log(cartas)
        let sum = 0;
        Object.keys(cartas).forEach(key => {
            sum += parseInt(key)

        })
        return sum
    },

    reverseLinklist(num) {//lista reversa

        class LinkedList {
            constructor(value) {
                this.head = {
                    value: value,
                    next: null
                };
                this.tail = this.head;
                this.length = 1;
            }
            append(value) {
                const newNode = {
                    value: value,
                    next: null
                }
                //console.log(newNode)
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
                return this;
            }
            prepend(value) {
                const newNode = {
                    value: value,
                    next: null
                }
                newNode.next = this.head;
                this.head = newNode;
                this.length++;
                return this;
            }
            printList() {
                const array = [];
                let currentNode = this.head;
                while (currentNode !== null) {
                    array.push(currentNode.value)
                    currentNode = currentNode.next
                }
                return array;
            }
            insert(index, value) {
                //Check for proper parameters;
                if (index >= this.length) {
                    console.log('yes')
                    return this.append(value);
                }

                const newNode = {
                    value: value,
                    next: null
                }
                const leader = this.traverseToIndex(index - 1);
                const holdingPointer = leader.next;
                leader.next = newNode;
                newNode.next = holdingPointer;
                this.length++;
                return this.printList();
            }
            traverseToIndex(index) {
                //Check parameters
                let counter = 0;
                let currentNode = this.head;
                while (counter !== index) {
                    currentNode = currentNode.next;
                    counter++;
                }
                return currentNode;
            }
            remove(index) {
                // Check Parameters      
                const leader = this.traverseToIndex(index - 1);
                const unwantedNode = leader.next;
                leader.next = unwantedNode.next;
                this.length--;
                return this.printList();
            }
            reverse() {
                if (!this.head.next) {
                    return this.head;
                }
                let first = this.head;
                this.tail = this.head;
                let second = first.next;

                while (second) {
                    console.log("first", first)
                    const temp = second.next;
                    console.log("temp", temp)
                    second.next = first;
                    first = second;
                    second = temp;
                    console.log("second", first)
                }

                this.head.next = null;
                this.head = first;
                return this.printList();
            }
        }
        return new LinkedList(num)
    }
}

