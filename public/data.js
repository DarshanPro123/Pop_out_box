const reactInterviewQuestions = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, primarily maintained by Facebook. It allows developers to create reusable UI components.",
  },
  {
    question: "What are components in React?",
    answer:
      "Components are the building blocks of a React application. They can be either class-based or functional and manage their own state and lifecycle.",
  },
  {
    question: "What is the difference between state and props?",
    answer:
      "State is a local data storage that is mutable and managed within a component, while props are immutable data passed from parent to child components.",
  },
  {
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, and useContext.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It gets transpiled to JavaScript by tools like Babel.",
  },
  {
    question: "What is the purpose of useEffect?",
    answer:
      "The useEffect hook allows you to perform side effects in functional components, such as fetching data or directly interacting with the DOM after rendering.",
  },
  {
    question: "What are controlled components?",
    answer:
      "Controlled components are form elements whose value is controlled by React state. They update the state on user input, ensuring the component reflects the current value.",
  },
  {
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize updates by calculating changes before applying them to the real DOM.",
  },
  {
    question: "How do you handle events in React?",
    answer:
      "Events in React are handled using camelCase syntax. You pass a function as an event handler, which receives an event object when triggered.",
  },
  {
    question: "What is prop drilling?",
    answer:
      "Prop drilling refers to the process of passing data through many layers of components via props, which can become cumbersome in deeply nested component trees.",
  },
];

export default reactInterviewQuestions;
