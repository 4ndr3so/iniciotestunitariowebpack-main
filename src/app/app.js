
/*module.exports={


      ordenar(arr){
        
        return arr
    }
}*/
export const prueba = {
    sortedArrayToBST(nums) {
        function Treenode(val, left, right) {
            this.val = (val===undefined ? 0 : val)
            this.left = (left===undefined ? null : left)
            this.right = (right===undefined ? null : right)
        }
        //Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
        if(nums.length==0){
            return null;
        }
        let mid=Math.floor(nums.length/2);
        let root=new Treenode(nums[mid]);
        root.left=this.sortedArrayToBST(nums.slice(0,mid));
        root.right=this.sortedArrayToBST(nums.slice(mid+1));
        return root;
    },
    maxTreeDepth(root){
        
        function maxDepth(root) {
        if (root === null) return 0;
        let leftDepth=0;
        let rightDepth=0;
        
         leftDepth = maxDepth(root.left);
         rightDepth = maxDepth(root.right);
    
         console.log(leftDepth,leftDepth)
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
    isSameTree(p, q){
    
        function compare(p, q) {
            if (p === null && q === null) return true;
            if (p === null || q === null) return false;
            if (p.val !== q.val) return false;
            
            return compare(p.left,q.left) && compare(p.right,q.right);   // Traverse right subtree

            
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
                console.log("current",current.val)
                stack.push(current);
                current = current.left;
            }
    
            // Current is now null, so pop from stack
            console.log("stack1",stack)
            current = stack.pop();
            console.log("stack2",stack)
            console.log("current",current)
            result.push(current.val); // Visit the node
    
            // Visit the right subtree
            current = current.right;
        }
    
        return result;
    },
     inorderTraversal(root) {
       let result=[];

       function traverse(node){

        if(node==null) return;

        traverse(node.left);
        result.push(node.val);
        traverse(node.right)

            }
        traverse(root)
        return result;
       
    },
 deleteDuplicates(list){
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
    mySqrt(x)  {
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
    quickSorting(arr,start,end) {
        //log(n)
        if (arr.length <= 1) {
            return arr;
        }
        if(start<end){
            let index= this.partition(arr,start,end);
            this.quickSorting(arr,start,index-1);
            this.quickSorting(arr,index+1,end);
        }
       
        return arr;

    },partition(arr,start,end){
        console.log("partition")
        let pivot=arr[end];
        let index=start;
        for(let i=start;i<end;i++){
            if(arr[i]<pivot){
                let temp=arr[i];
                arr[i]=arr[index];
                arr[index]=temp;
                index++;
            }
        }
        let temp=arr[end];
        arr[end]=arr[index];
        arr[index]=temp;
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
    },merge(left, right) {
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
        for(let i=1;i<arr.length;i++){
            let value=arr[i];
            let hole=i;
            while(hole>0 && arr[hole-1]>value){
                arr[hole]=arr[hole-1]
                hole=hole-1;
            }
            arr[hole]=value;
        }
        return arr;
    },
    bubleSort(arr) {    //n^2
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length-i;j++){
                if(arr[j]>arr[j+1]){//change the order
                    let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    },
    selectionSort(arr) {
        //O(n^2)
        for(let i=0;i<arr.length;i++){
            let min=i;
            for(let j=i+1;j<arr.length;j++){
                if(arr[j]<arr[min]){//change the order
                    min=j;
                }
            }
            if(i!=min){
                let temp=arr[i];
                arr[i]=arr[min];
                arr[min]=temp;
            }
        }
        return arr;
    },
    //66. Plus One
    plusOne(digits) {
        let size=digits.length;
        for(let i=size-1;i>=0;i--){
            if(digits[i]<9){   
                digits[i]++;
                return digits;
            }else{
                digits[i]=0;
            }
            digits.unshift(1);
            return digits;
        }
    },
    //58. Length of Last Word Easy Topics Companies Given a string s consisting of words and spaces, return the length of the last word in the string.
    lengthOfLastWord(s) {
       
        let size=s.length;
        let lastworld="";
        let palabra=false;
        for(let i=size-1;i>=0;i--){
            console.log(s[i])
            if(s[i]!=' '){
                
                palabra=true;
                lastworld=lastworld+s[i];
            }else if(palabra==true){
                return lastworld.length;
            }
        }
        return lastworld.length;

    },
    //35. Search Insert Position--Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order
    searchInsertPo(nums,target) {
       
        let left=0;
        let right=nums.length-1;

        while(left<=right){
            const mid=Math.floor((left+right)/2);
            if(nums[mid] == target){
                return mid;
            }else if(nums[mid]<target){
               left=mid+1;
            }else {
               right=mid-1;
            }
        }
        return right+1;
        

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

        function ListNode(val, next) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }

        let nuelist = new ListNode(null)

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

