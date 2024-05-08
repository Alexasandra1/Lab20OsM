const assert = require('assert');
const { findMinMax } = require('./findMinMax');

function runTest(testName, testFunc) {
    try {
        testFunc();
        console.log(`Тест '${testName}' прошел успешно.`);
    } catch (error) {
        console.error(`Тест '${testName}' не прошел. Ошибка: ${error.message}`);
    }
}

runTest('Тест на три положительных числа', function() {
    let result = findMinMax(1.2, 3.4, 2.2);
    assert.deepEqual(result, {max: 3.4, min: 1.2});
});

runTest('Тест на три отрицательных числа', function() {
    let result = findMinMax(-1.2, -3.4, -2.2);
    assert.deepEqual(result, {max: -1.2, min: -3.4});
});

runTest('Тест на два положительных и одно отрицательное число', function() {
    let result = findMinMax(1.2, -3.4, 2.2);
    assert.deepEqual(result, {max: 2.2, min: -3.4});
});

runTest('Тест на число и ноль', function() {
    let result = findMinMax(0, -3.4, 2.2);
    assert.deepEqual(result, {max: 2.2, min: -3.4});
});

runTest('Тест на три нуля', function() {
    let result = findMinMax(0, 0, 0);
    assert.deepEqual(result, {max: 0, min: 0});
});

runTest('Тест на максимальное значение типа float и два других числа', function() {
    let result = findMinMax(Number.MAX_VALUE, -3.4, 2.2);
    assert.deepEqual(result, {max: Number.MAX_VALUE, min: -3.4});
});

runTest('Тест на минимальное значение типа float и два других числа', function() {
    let result = findMinMax(Number.MIN_VALUE, 3.4, 2.2);
    assert.deepEqual(result, {max: 3.4, min: Number.MIN_VALUE});
});

runTest('Тест на два максимальных значения типа float', function() {
    let result = findMinMax(Number.MAX_VALUE, Number.MAX_VALUE, 2.2);
    assert.deepEqual(result, {max: Number.MAX_VALUE, min: 2.2});
});

runTest('Тест на два минимальных значения типа float', function() {
    let result = findMinMax(Number.MIN_VALUE, Number.MIN_VALUE, 2.2);
    assert.deepEqual(result, {max: 2.2, min: Number.MIN_VALUE});
});

runTest('Тест на максимальное и минимальное значения типа float', function() {
    let result = findMinMax(Number.MAX_VALUE, Number.MIN_VALUE, 2.2);
    assert.deepEqual(result, {max: Number.MAX_VALUE, min: Number.MIN_VALUE});
});
