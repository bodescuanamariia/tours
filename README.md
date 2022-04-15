# Getting Started with React Hooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## useState & useEffect
This project is an example of using react hooks: **useState** and **useEffect**

### useState
The useState function returns an array which contains two items **tours** and **setTours**.
The tours is the variable which will store our tours list and setTours is an updater function which will be responsible to update the tours. 
Once we'll fetch the tours from api, the setTours function is called and pass tours as an argument the array received.
[see code snippet below]
🔗 https://github.com/bodescuanamariia/tours/blob/3b8549d3b83e828ddc33e031421700c3172d9ebc/src/App.js#L7-L27

Also, setTours function is called when 'not interseted' button is clicked.
[see code snippet below]
🔗 https://github.com/bodescuanamariia/tours/blob/3b8549d3b83e828ddc33e031421700c3172d9ebc/src/App.js#L10-L13


### useEffect
UseEffect takes a function which can contain any kind of operation including side effects (in this case fetch function). 
⛔ **Any kind of side effect is not allowed inside the render method** (or inside the function in case of a functional component). So any kind of side effect should be used inside useEffect.
UseEffect also takes a second argument as an array [], in this array you can pass variables. When any of this variable updates it will cause the useEffect to run again. Because we passed **an empty array** our **useEffect will only run once** throughout the life of our component. 
⛔ **If we didn’t pass the second this will cause useEffect to run after every render.** 
[see code snippet below]
🔗 https://github.com/bodescuanamariia/tours/blob/3b8549d3b83e828ddc33e031421700c3172d9ebc/src/App.js#L29-L31
