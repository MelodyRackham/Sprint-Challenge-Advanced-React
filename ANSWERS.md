1. Why would you use class component over function components (removing hooks from the question)?

If you need to use lifecycle hooks, you must use class components. If you need state in your component, it’s also necessary to use class components.

2. Name three lifecycle methods and their purposes.

Mounting - putting elements into the DOM (example method is “constructor”)

Updating - A component is updated whenever there is a change in the component's state or props. (Example method is “getDerivedStateFromProps”)

Unmounting - when a component is removed from the DOM
(Example method would be “componentWillUnmount”)

3. What is the purpose of a custom hook?

Custom hooks are helpful for reusing stateful logic. This could be setting up a subscription and remembering the current value.

4. Why is it important to test our apps?

Testing determines whether the app can be successfully downloaded, executed and interacted with the supporting back-end content infrastructure.
