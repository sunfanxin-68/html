//利用递归求 1～n 的阶乘  1*2*3*4.。。
function fn(n) {
    if (n === 1) {
        return 1;
    }
    return n * fn(n - 1);
}
console.log(fn(4));

//利用递归函数求斐波那契兔子序列（ 1，1，2，3，5，8，13，21）
function fb(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fb(n - 1) + fb (n - 2) 

}
console.log(fb(7));