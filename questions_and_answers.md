<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:   B `ReferenceError: greetign is not defined` ?

<i>gretting is variable name and it's has no value.greetign is another variable and its has object but object havent any value. Thats why its result will be ReferenceError: greeting is not defined</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: `"12"`?

<i>Javascript is logical and functional language.thats why it will behave auto correction. Here sum function get 2 parameter. one of string "2" another 1 number. JavaScript will perform type coercion and convert the number 1 to a string in order to concatenate it with the string "2". The result of this concatenation is the string "12". So, the function returns "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']` ?

<i>  have an array called food with four emoji elements. Then, you create an object info with a property favoriteFood that initially references the first element of the food array, which is "🍕".

AFter, if change the info.favoriteFood property to "🍝", but this does not affect the food array. That why, when you console.log(food), it will output the original array, which is ['🍕', '🍫', '🥑', '🍔']. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `Hi there, undefined` ?

<i>Here, function sayHi axpect a parameter. when I call sayHi with console.log(sayHi()); but here value is not priovide then I get result its undefined. and sayHi function also return string text " Hi there," so the result is B.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
``

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3 ?

<i>num if nums array value is  number means truthy. then count value will be 1++  and it will contunue then we get result 3.</i>

</p>
</details>
