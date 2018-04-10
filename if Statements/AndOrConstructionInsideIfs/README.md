# And/Or inside If statements

Multiple bugs inside this code:

- line 9 -> check for equality was mentioned wrong, was setiing variabe instead (x = y instead of x === y)
> Error Message:

- problem with i variable, instead of calculating it gets set as NaN (was input values which were not strings and .length does not work if object is not a string)

Play with the example [right here](https://goo.gl/ojck2y).

### Index
* [Solution](#solution)
* [Buggy Code](#buggy-code)
* [Test Cases](#test-cases)
* [Fix](#fix)
* [Resources](#resources)
* [The Challenge](direct link to the challenge issue)

___

## Solution



[TOP](#hoisting-inside-a-function)
___

## Buggy Code

[import, 1.js](./bug.js)

[TOP](#hoisting-inside-a-function)

___

## Test Cases

[import, test-cases.js](./test-cases.js)

[TOP](#hoisting-inside-a-function)

___

## Fix


[import, fix.js](./fix.js)

[TOP](#hoisting-inside-a-function)

___


## Resources

* [A Guide to Hoisting](https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d)



[TOP](#resources)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
