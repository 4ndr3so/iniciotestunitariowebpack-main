 
 // LeetCode Problem: 1399. Count Largest Group
 function countLargestGroup(n: number): number {
    const map: Map<number, number> = new Map();

    // Group numbers by digit sum
    for (let i = 1; i <= n; i++) {
        const sum = digitSum(i);
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    // Find the largest group size
    let maxSize = 0;
    for (const count of map.values()) {
        if (count > maxSize) {
            maxSize = count;
        }
    }

    // Count how many groups have the max size
    let result = 0;
    for (const count of map.values()) {
        if (count === maxSize) {
            result++;
        }
    }

    return result;
}

// Helper function to compute digit sum
function digitSum(num: number): number {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}