# Travel-Journal-ReactJS 🗾
Creating a **`Travel Journal`** using `ReactJS`



<!-- ## [Live Preview](https://hmjatt.github.io/Travel-Journal-ReactJS/) -->

<!-- ![This is an image]()
![This is an image]() -->

### About ℹ️
<!-- 
A clone of **`Airbnb Experiences`** page, created to practice `ReactJS`. It comprises of some static images and a list of `Experiences` created dynamically from data in an `array`. While creating this project I learned about `React Props`, `Creating Components from an Array`, using `Mapping Components`, etc. After creating the project, deployed it to `github-pages` :bird: Feel free to reach me at [Twitter](https://twitter.com/hmjatt/) :ocean: -->

### Technologies Used 💻

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a> &emsp; <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/js/js_es6.asp" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/792f7fce1ff8bfac6d0524a21b69161cdc6080a3c4e39979f21d5f8489d6fdd3/68747470733a2f2f692e626c6f67732e65732f3534356366382f6573362d6c6f676f2f6f726967696e616c2e706e67" alt="ES6" width="50" height="50"/> </a> &emsp; <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactJS" width="50" height="50"/> </a> &emsp; <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png" alt="figma" width="70" height="50"/> </a>

## Includes the following features/components ⚙️

    - NPM
    - ReactJS
    - Custom Components
    - create-react-app
    - Figma
    - github-pages

## Usage 🤓

```
cd travel-journal

```

```
npm install

```

```
npm start

```

## Steps I followed to complete this project 🪜
<!-- 
1. ### Initialize Project 🎍

    - [x] Initailize the project using `npx create-react-app digital-business-card` which will create a complete **React App** pre-configured and pre-installed with all the dependencies.
    - [x] Import **`Poppins`** font from google fonts.

2. ### Organize components 🗄️

    - [x] Create a `components` folder inside `src` directory.
    - [x] Create **custom components** inside `components` folder.
    - [x] Create an `images` folder inside `src` directory and move images/logos inside it.

3. ### Clean directory🧹

    - [x] Delete **unnecessary** files from directory and format code with `Prettier`.

4. ### Navbar Component 🧩

    - [x] Create **`Navbar`** component and basic JSX elements for it.
    - [x] Add appropriate `className`s to elements in `Navbar` component.
    - [x] Add `airbnb.svg` image to `Navbar` component.
    - [x] Import **Navbar** component inside `App` component.
    - [x] Style `Navbar` component.

6. ### Card Component 🧩

    - [x] Create **`Card`** component and basic JSX elements for it.
    - [x] Add appropriate `className`s to elements in `Card` component.
    - [x] Add `photo-grid.png` image to `Card` component.
    - [x] Import **`Card`** component inside `App` component.
    - [x] Add basic style to `Card` component.

7. ### Footer Component 🧩

    - [x] Create **`Footer`** component and basic JSX elements for it.
    - [x] Import **Footer** component inside `App` component.
    - [x] Style `Card` component.

8. ### Pass Props To Card Component🎴

    - [x] Hardcode the _props_ for **`Card`** component and pass _props_ to **`Card`**.

9. ### Map Experiences Data Into Components 🗺️

    - [x] Create a file called `data.js`, which contains an _array of objects_. It reperesents the data that will be used inside **`Card`** component.
    - [x] Import _images_ for **`Card`** component.
    - [x] Use _.map_ to iterate over _array of objects_ inside `data.js` to create **`Card`** components.
    - [x] When we _.map_ over _array of objects_ in **`App`** component, Add _key prop 🗝️ (`key={item.id}`)_ when passing _props_ to **`Card`** components. This will get rid of this warning :

    ```
    ⚠️ react_devtools_backend.js:4026 Warning: Each child in a list should have a unique "key" prop.
    Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
    at Card (http://localhost:3000/main.5c1f9e47e1f13a06e783.hot-update.js:27:18)
    at App

    ```

10. ### Make App Responsive 🎨

    - [x] Add _flexbox_ style to `Card` component.
    - [x] App is responsive upto this point. :smiley:

11. ### Sold Out/Location Badge 〰️

    - [x] Add a `Sold Out` badge element for **`Card`** component and style it.
    - [x] Use _condititonal rendering_ in **`Card`** component to render `SOLD OUT` badge only if `openSpots: 0` and if `location: "Online"` render `ONLINE` instead. Comapare against _keys_ inside _array of objects_ in `data.js`.

12. ### Pass object as props(Option #1) 📟

    - [x] Pass entire object when we _.map_ over _array of objects_ in **`App`** component using _item_ as _key_ and _array of objects_ as its _value_.
    - [x] Access the object that is passed as prop in **`Card`** component, where _item_ is _key_ and _array of objects_ are its _values_.

13. ### Spread object as props(Option #2) 📼

    - [x] We can make use of `{...item}` [Spread in Object Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals), which takes properties of our _object_ and create a separate prop for each _key_ in _object_. _Value_ of _props_ can be accessed using `props.key` syntax, where _key_ is an actual _key_ in `data.js`. This is an alternate to instead of creating our own _prop_ called _item_ to which we pass our entire _object_, **`Pass object as props(Option #1)`** is used in this project.

14. ### Prepare for Deployment 🪢

    - [x] Add More than 3 items inside **`Card`** component by updating `data.js`.
    - [x] Delete **unnecessary** files from directory and format code with `Prettier`.
    - [x] Test for _Responsiveness_ and make changes if need be.
    - [x] Add links to `Live Preview` and _screenshots_.

15. ### Deploy 📤

    - [x] Use Official Documentation([link](https://create-react-app.dev/docs/deployment/#github-pages)) to push project to **GitHub Pages** 🎆🎆🎆 -->

## Links to content that helped me with this project 🔗

<!-- 1. The Odin Project

    - [React Introduction](https://www.theodinproject.com/lessons/node-path-javascript-react-introduction)
    - [React State & Props](https://www.theodinproject.com/lessons/node-path-javascript-state-and-props)

2. Figma Design

    - [Digital Business Card](https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A1)

3. Scrimba

    - [Learn React](https://scrimba.com/learn/learnreact)

4. React Official Documentation

    - [React Hello World Example](https://reactjs.org/docs/hello-world.html)
    - [Introduction To JSX](https://reactjs.org/docs/introducing-jsx.html)
    - [Rendering Elements In React](https://reactjs.org/docs/rendering-elements.html)
    - [Components and Props](https://reactjs.org/docs/components-and-props.html)
    - [Deployment to **gh-pages**](https://create-react-app.dev/docs/deployment/#github-pages)

5. YouTube

    - [ReactJS Basics Video Series From Academind](https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS)
    - [ReactJS Tutorial Video Series From Codevolution](https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2)
    - [React & Webpack 4 From Scratch - No CLI from Traversy Media](https://www.youtube.com/watch?v=deyxI-6C2u4)
    - [The introduction to React you've been missing - Kent C. Dodds(explains how React works under the hood)](https://www.youtube.com/watch?v=SAIdyBFHfVU)

6. FreeCodeCamp

    - [React Props Cheatsheet(Article by Reed Barger)](https://www.freecodecamp.org/news/react-props-cheatsheet/)

7. MDN
    - [Spread in Object Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) -->

#### Quote ✒️
<!-- 
    “A ship in port is safe, but that’s not what ships are built for.”
    — Grace Hopper

> :anchor: :desktop_computer: :motorway: -->