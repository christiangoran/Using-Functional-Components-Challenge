# REACT an introduction

Create a repository and start a workspace

1. npx create-react-app my-app --use-npm

2. Enter the new react folder you created

cd my-app

3. Type "npm start"

   - If starting a server doesn't work, try:
   - nvm install 16.18.0
   - nvm use 16.18.0

4. Then you create a new component by creating a new \*.js file. In this case

- FunctionalGreetings.js

  1. Begin by importing react from 'react'
  2. Create a function called FunctionalGreeting
  3. Write the code that is supposed to be exported
  4. Then export the code
     - export default FunctionalGreeting

5. Import the functionalgreeting function into the App.js

   - import FunctionalGreeting from "./component/FunctionalGreeting"

6. Write in the component in the App-function
   - <FunctionalGreeting />

## Duplicating component

7. To create more components, duplicate FunctionalGreeting.js and change its name and then repeat 4-6 again.

## Creating Props

1. Add a "class" and properties to a component in App.js

   - greeting="Hello Nice to MEET YOU"

2. Add "props" as an argument to the function in FunctionalGreetingWithProps.js

3. Wherever you want the property to be used write in: - {props.greeting}
   And it will show on the page

4. I can add more props if I want like:
   - age="32" name="Christian"

## Using CSS Modules with React

Important: The convention for naming CSS files linked to specific React components is: 'component.module.css', e.g. FunctionalGreeting.module.css.

As you complete the exercises as you go through this module, you should remember to:

    Within the component file, import the appropriate css file, e.g. import css from "./css/Sidebar.module.css"
    Add the className to the outermost div in the component file e.g. < div className = {css.sidebar} >
    Note: After adding our classname and link to the css module, your code output in the preview window should change to look like the example given above.

## Stateful Components

While functional components can simply return the JSX to be rendered,  
classes don't have the ability to return anything.
For this reason, all class components must define a render() method which returns the JSX.

To access props in a stateful class component you need to use "this" before props.

- {this.props.greeting}

<img src="my-app/src/image/statefulcomponents.png">

In the stateful component class, we will add a constructor, which is a special method that is always called when the class is first instantiated.
While state can be defined elsewhere, the constructor is where state is usually defined  
in class components. To define the state in the constructor, we can simply define this.state,  
and set it equal to an empty object. That means as soon as this class is instantiated,  
it will automatically have a property called state which we can access and manipulate as required.

#### So to add state to a class component we must:

1.  Define a constructor
2.  Call super
3.  Add initial state object inside the constructor

    super(props);
    this.state = {
    introduction: "Hello!",
    buttonText: "Exit",
    };

#### Updating the state

1. We add an onClick-attribute to our element
2. Make it call the method we want to use
3. Define the method in the component
4. Finally add a this.setState() and pass it an object containing the state values that we want to replace.
5. (NOTE) setState is an asynchronous function, meaning it will run in the background while other code continues to run in the foreground. How you deal with this? Add a **callback function**

#### Callback function

Anytime you need to run some code after the state update is complete, place the code in a callback function as the second parameter to setState, NOT immediately after the setState call. If you place it after the setState call like we did in the with the console.log without "new state", the code may execute before the state update is finished.

handleClick() {
this.setState(
{
introduction: "Goodbye!",
buttonText: "Enter",
},
() => {
console.log("Callback function log executing after setState is finished", this.state.introduction);
console.log("Callback function log executing after setState is finished", this.state.buttonText);
}
);
console.log(this.state.introduction);
console.log(this.state.buttonText);
}

In this example the "new state" console.log will execute after the

<img src="my-app/src/image/callbackfunction.png">

<img src="my-app/src/image/updatingstate.png">

<img src="my-app/src/image/stepstoupdatestate.png">

<img src="my-app/src/image/cheatsheet.png">

## Key and index

Always put a key so every element can be identified within the component. As far as which element the key goes on, always put the key on the outermost element that will be repeated.

And when using keys as props, do not use the word key since this is used by React.
