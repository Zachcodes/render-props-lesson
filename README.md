1. Start by creating the components folder then create MyComponent and StateTracker

2. Then build out the StateTracker component explaining what its doing

- class that keeps its own state and methods 

- it's concerned with handlechange and updating state and we have a name value set

- it returns this.props.render invoked and passes through an object as the argument

3. now build out MyComponent 

- show that the function takes in props but renders out stateTracker.

- we pass a render props whose value is a function that returns some jsx 

- when state tracker returns its object we can access any values on that object we want to in the return of the render props function in MyComponent. We can also access any props values we want from where wer render out my component in app.js 

4. Lastly render out MyComponent with a title prop in App.js

5. create Filter and People components in the component folder 

6. build out people showing that you're creating an array and explain this could fetch from an api or the browser cache 

- the class will set up some original state people and original people 

- it creates a method set people that will set state and then renders out this.props invoked passing through an object with methods and values 

7. build out Filter.js

- export default the wrapper function and explain that it allows us to access all of the values from the People component render and then pass those values on to Filter so it can access it in class Methods 

- then build out filter explaining it's basically the same as the hoc example