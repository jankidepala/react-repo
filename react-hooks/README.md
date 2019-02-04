This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### UseState()

Hooks -> 
Context - 
 const ExampleContext = createContext();
useContext - that allows us to drastically simplify the above example, and when combined with useState, allows us to build the same component in a semantic manner:
      const {color, setColor} = useContext(ExampleContext);

lazy(): lazy is a new API in React to aid in code splitting and importing components into your scripts — very easily.

SUSPENSE -> rror catcher, which allows us to define fallback JSX if part of the content it is wrapping has not loaded. If you think of a try catch block, the catch block is our Suspence fallback, and everything within <Suspense></Suspense> is our try block. This example feels a bit contrived as catch blocks should generally not execute business logic, but the underlying process is very similar.
feature allows you to defer rendering part of your application tree until some condition is met (for example data from an endpoint or a resource is loaded).

CUSTOM HOOKS -> Starts with use
setSomething() - UI rerenders -> setState()

USEEFFECT- handles lifecycle events directly inside function components. Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount

CONCURRENT MODE - allows it to work on multiple tasks (renders) at the same time. tasks can be switched between according on their priority, on a real-time basis.

## Material-ui

Typography -
-- variants include body1, title, display2, and so on. 
-- align - center the text horizontally, and gutterBottom which adds a bottom margin
