// test 1.22 + 5.6 x 1.3
// test "x3"
// test "."
// test ".3"
// test "00000000"
// test "0/0"
// test "0.3 + 0.6"
// test "0.6 / 3"
// test "-3" right after hitting equal
// test "9 x -3"
// add error notification for NaN and infinity
// fix previous input not showing after warning
// fix isNaN
// test (1/999999999999)

// var test = (0/3);
// console.log(isFinite(Number(test.toString())));

// var i = 100000000000;
// var j = i * i;
// var k = eval('0.00000188167 / 3');
// var l = k.toString().length;
// console.log(k);
// console.log(l);
// var m = eval('0.00000188167 / Math.pow(3, 5)');
// var n = m.toString().length;
// console.log(m);
// console.log(n);
// var o = undefined;
// console.log(o.length);
// var p = '12345';
// console.log(p);
// p += '.' + '5783' + 'e' + '-17';
// console.log(p);
// var test = -Math.pow(10, 2);
var test = 1/0;
console.log(test == undefined);
// console.log(eval("0/0"));