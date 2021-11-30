# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @julia-gatina/lotide`

**Require it:**

`const _ = require('@julia-gatina/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: compares two arrays for a perfect match and prints result as message;
* `function2(assertEqual)`: comapres two given values for a perfect match;
* `function3(assertObjectsEqual)`: compares two objects and checks if their keys and kay values are equal;
* `function4(countLetters)`: counts how many times each characted appears in a given sentence;
* `function5(countOnly)`: counts only those values of an array that are set to true;
* `function6(findKey)`: returns the first key of the matched element, that meets the present criteria;
* `function7(findKeyByValue)`: finds key of an object that has a matching value;
* `function8(head)`: returns head of an array;
* `function9(letterPositions)`: returns all the indices (zero-based positions)of each character in a string;
* `function10(map)`: returns a new array based on the results of the callback function;
* `function11(middle)`: returns 'middle' value/s of an array;
* `function12(tail)`: returns the 'tail' of an array, i.e. everything but the 'head'
* `function13(takeUntil)`: returns a slice of array with elements taken from the beginning until a callback function returns true;
* `function14(without)`:returns a new array with only those elements from source that are not present in the itemsToRemove array.
