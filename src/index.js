//npm run test
// npx webpack-dev-server



import {prueba} from "./app/app"


const tarea1=["goto BucketA",
                "create FileA",
                "create FileB",
                "create FileA",
                "create FileC",
                "create FileA",
                "goto BuketB",
                "goto BucketC",
                "create FileA",
                "create FileB",
                "create FileC",]


const tarea=["goto BucketA",
                "create FileA",
                "create FileB",
                "create FileA",
                "create FileC",
                "create FileD",
                "goto BucketB",
                "goto BucketC",
                "create FileA",
                "create FileB",
                "create FileC",
                "goto BucketD",
                "create FileA",
                "create FileB",
                "create FileA",
                "create FileB",
                "create FileB",
                "goto BucketE",
                "create FileA",
                "create FileB",]
const matriz=
            [[1, 2, 3, 4, 5],
             [6, 7, 8, 9, 10],
             [11,12,13,14,15],
             [16,17,18,19,20],
             [21,22,23,24,25]  ]

const matPrub=["ab", 
             "bb", 
             "aa"]
const matPrub2=["aba", 
             "bbb", 
             "bab"]
const matprub3=["abc", 
             "bef", 
             "bcc", 
             "bec", 
             "bbc", 
             "bdc"]
const matprub4=["abc", 
             "abx", 
             "axx", 
             "abc"]
function Treenode(val, left, right) {
                this.val = (val===undefined ? 0 : val)
                this.left = (left===undefined ? null : left)
                this.right = (right===undefined ? null : right)
            }
function ListNode(val, next) {
                this.val = (val===undefined ? 0 : val)
                this.next = (next===undefined ? null : next)
            }

let tree1=new Treenode(1, new Treenode(2, new Treenode(4), new Treenode(5)), new Treenode(3, new Treenode(6), new Treenode(7)))
let tree2=new Treenode(1, new Treenode(2, new Treenode(4), new Treenode(5)), new Treenode(3, new Treenode(6), new Treenode(7)))
let tree3=new Treenode(1, new Treenode(2, new Treenode(4), new Treenode(5)), new Treenode(3, new Treenode(6)))
let treeLeaft=new Treenode(1, new Treenode(2, new Treenode(4), new Treenode(5)), new Treenode(3))
let treebalanced=new Treenode(3, new Treenode(9), new Treenode(20, new Treenode(15),new Treenode(7,null,null)))

let list5=new Treenode(4, new Treenode(2, new Treenode(1),new Treenode(3)),new Treenode(7,new Treenode(6),new Treenode(9)))//5

let pathash=new Treenode(4, new Treenode(8,new Treenode(2)), new Treenode(9, null ,new Treenode(3)));
let inorderTraversal= new Treenode(1,new Treenode(2,new Treenode(4),new Treenode(5,new Treenode(6),new Treenode(7))),new Treenode(3,null,new Treenode(8,new Treenode(9))))

let tree3symetri=new Treenode(1, new Treenode(2, new Treenode(3), new Treenode(4)), new Treenode(2, new Treenode(4), new Treenode(3)))
let list1=new ListNode(1, new ListNode(2, new ListNode(4,new ListNode(4,new ListNode(5,new ListNode(5,new ListNode(6,new ListNode(7))))))))
let list2=new ListNode(4, new ListNode(5, new ListNode(6)))//3
let list3=new ListNode(1, new ListNode(2, new ListNode(3, list2)))//5
let list6=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(2,new ListNode(1)))))
let list4=new ListNode( 3, list2)//4
let listinter=new ListNode( "O", new ListNode("U"))//4
let lista=new ListNode( "A", new ListNode("E",new ListNode("I",listinter)))//4
let listb=new ListNode( "F", listinter)//4
let listRemove=new ListNode( 1,new ListNode(2,new ListNode( 6,new ListNode( 3,new ListNode( 4,new ListNode( 5,new ListNode( 6)))))))//4
//prueba.ordenar(tarea)
//console.log(prueba.solution4(["5","2","C","D","+","5","C","+"]))

//console.log(console.log(prueba.removeDuplicates([0,0,1,1,1,2,2,3,3,4])))
const k= "2 3 1 3".split(" ").map(n => parseInt(n))

const arra=[1,3,5,7,9,13,15,27]
const target=10;
const text="a"
const num=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
const num2=[-10,-3,0,5,9]
const a="11"
const b="1"
const root = [3,9,20,null,null,15,7]
let sumTarget=14
let prices = [7,7,5,4,5,4,9,2,1,2,1]
let num2Dup=[1,2,3,4,8,6,1,5,1]
const intervals =[[15, 30], [5, 10], [3, 4]];
let nums = [9,6,4,2,3,5,7,0,1];
//let inmu=prueba.rangeQueryInmutable([-2, 0, 3, -5, 2, -1])
//console.log();
//console.log(inmu.sumRange(2,5));
//console.log(prueba.intersect([1,2,2,1],[2,2]))
//console.log(prueba.isAnagram("anagram","nagaram"))
console.log(prueba.firstUniqChar("aabb")); // Output: 9
//console.log(prueba.numberOfPatterns(4, 5)); // Output: 9

//console.log(prueba.reverseVowels2("IceCreAm"))
/* const movingAverage = prueba.movingAverage(3);
console.log(movingAverage.next(1)); // Output: 1.0
console.log(movingAverage.next(10)); // Output: 5.5
console.log(movingAverage.next(3)); // Output: 4.66667
console.log(movingAverage.next(5)); // Output: 6.0 */
//console.log(prueba.StrobogrammaticNum("106901"))
/* console.log(prueba.isPowerOfTwo(8))
let quee=prueba.myQueue()
quee.push(1)
quee.push(2)
console.log(quee.peek())
console.log(quee.pop())
console.log(quee.empty()) */
//let quee=prueba.implStackQueues()

//quee.push("1")
//quee.push("2")
//console.log(quee.top())
//console.log(quee.top())
//console.log(quee.empty())
/* let twoSumaa= prueba.TwoSum();
twoSumaa.add(1);  // {1: 1}
twoSumaa.add(3);  // {1: 1, 3: 1}
twoSumaa.add(5);  // {1: 1, 3: 1, 5: 1}
console.log(twoSumaa.find(4));  // true (1 + 3)
console.log(twoSumaa.find(7));  // false (no pair sums to 7) */
/* console.log(prueba.titleToNumber("AZ")) */
//console.log(prueba.countNodes2(tree3))
//twoSum.add(1);  // {1: 1}


//console.log(prueba.getIntersectionNode2(lista,listb))
//console.log(prueba.hasPathSum(pathash,sumTarget))
//console.log(prueba.generatePascalTriangle(5))
//console.log(prueba.generatePascalTriangleRow(3))


//console.log(prueba.maxTreeDepth(tree3symetri));

//console.log(prueba.isSameTree(tree1,tree3));

//console.log( prueba.mergetwoorderArrays([-1,0,0,3,3,3,0,0,0],6,[1,2,2],3));
//console.log( prueba.cartas(k));


//console.log(prueba.solution("papa(par)no"))
//console.log(prueba.solution3("papa(par)no"))
//console.log(prueba.solution5("()[]}"))
//console.log(prueba.rotarMatriz(matriz))
//console.log(prueba.deposit(100,20,170))
//console.log(prueba.solutionorden(matPrub))
//console.log(prueba.mergeTwoLists(list1,list2))