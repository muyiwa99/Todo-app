# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

Screenshot provided in 'Screens' folder

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- Conduct research on similar projects to see how different individuals went about implementing the challenge.
- Break the project down into various steps
- Started by implementing the structure(HTML) and styling(SCSS) to get visual of how the site looks.
- Made the site mobile responsive
- Started implementing the JS
- Ran various tests to ensure i was happy with the finished product

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

This project was quite challenging as i had never built anything as complex before and i actually underestimated how difficult it was which led to some issues, mostly time management, But this will help me massively going forward as i learnt how important it is to plan ahead.

The complexity of the project allowed me to learn a wide variety of JS methods such as EventListeners, Spread operator, various types of functions,
Arrays, DOM events, forEach loop, Ternary operators, AppendChild method, Splice method, push method, Switch statements, if statements and many more. Utilizing these helped me to gain an insight as to how they could be used in real world projects

- I used a switch statement to return the 3 types of tasks statuses depending on the case type.

```js
function taskStatus(tasks, status) {
  switch (status) {
    case "active":
      return tasks.filter((task) => !task.completed);

    case "completed":
      return tasks.filter((task) => task.completed);

    case "all":
    default:
      return tasks;
  }
}
```

- Using the Appendchild method to order how the classes are stacked to ensure it matches up with the Scss.

```js
taskList.appendChild(listItem);
listItem.appendChild(divOne);
listItem.appendChild(deleteButton);
divOne.appendChild(divTwo);
divTwo.appendChild(checkbox);
divTwo.appendChild(spanCheck);
divOne.appendChild(taskLabel);
```

- This section of code creates a new task which is then spread into the 'tasks' array with the text inputted by the user.

```js
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && taskInput.value.trim() !== "") {
    tasks = [...tasks, { text: taskInput.value.trim(), completed: false }];
    renderTasks();
    taskInput.value = "";
  }
});
```

- I used this section to get the screen size and update it in real time, so when the page is resized the correct images are displayed

```js
const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
```

### Continued development

This project helped me gain a great insight into a lot of JS principles, but i'm sure i could i have used these to achieved more and write more efficient and DRY code which i'll put great emphasis on going forward.

I was able to complete all sections of the challenge bar the Drag and drop section which i struggled with. I'll be implementing more basic challenges to understand how that works and will then implementing it on an updated version of this challenge.

### Useful resources

## Author

- LinkedIN - [Muyiwa Areola](https://www.your-site.com)
- Frontend Mentor - [@Muyiwa99](https://www.frontendmentor.io/profile/muyiwa99)
- Github - [@muyiwa99](https://github.com/muyiwa99)

## Acknowledgments

I wanna give a massive thanks to my brain for showing a great Level of patience when completing this challenge and more importantly the development community for providing millions of resources which were extremely helpful when completing this challenge.
