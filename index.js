const MyReact = () => {
  let state = []; // array to store state values

  let index = 0; // index to track the current hook position

  const useState = (initialValue) => {
    const locaHookIndex = index; // store the current index for this hook
    index++; // increment index for the next hook call

    if (state[locaHookIndex] === undefined) {
      state[locaHookIndex] = initialValue; // setting initial value for state
    }

    const setterFunction = (newState) => {
      state[locaHookIndex] = newState; // setting new value for state
    }

    return [state[locaHookIndex], setterFunction];
  }

  // render function
  const render = (component) => {
    index = 0; // reset index for re-renders
    return component();
  }

  return {
    useState,
    render,
  }
}

const { useState, render } = MyReact();

const MyComponent = () => {
  const [counter, setCounter] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);

  console.log(counter);
  console.log(isSubmit);

  if (counter === 1) {
    setCounter(2);
  }

  if (!isSubmit) {
    setIsSubmit(true);
  }
}

render(MyComponent); // Initial render of the component
render(MyComponent); // Simulate component re-rendering

