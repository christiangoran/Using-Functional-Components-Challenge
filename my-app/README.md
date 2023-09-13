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
