Idea of react - compose web app in components. Normally, code is a set of ordered instructions ("do this, then do this, then this, etc."), but with react we are saying that "this is what we want the end result to look like," and we are providing the components of the page to break down the individual parts of the application.

How to think about react - think of what you want the end result to look like, then think of what the components will be, forming sort of a heirarchical structure.

Index.html and main.jsx are linked to each other. The script tag in index.html links the source of the app to the main.jsx file. Everything renders inside of the div root.

In app.jsx, the App function is a component which is being exported. When a function starts with a capital letter, it is a component, and the component returns jsx, which is basically html.

We have to use className instead of class in jsx files, because class is a reserved keyword. Same with htmlFor, instead of for.

In components, you can only every return 1 element. So you can't return a form element with code inside it as well as an h1 element, for example. To get around this, you can use a fragment (an emply tag, i.e. <>, </>).

setNewItem updates the newItem variable, and then reruns the entire component with the new value (reruns the jsx). When you change a state varible, it always rerenders the component.

onSumbit is an event listener.

Whenever there is any type of data where we want to rerender the component (new item, todos), we put them inside of state.

Anytime you want to use a current value, it's important to use a function (setTodos).

Components must end in .jsx.