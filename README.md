# Full Stack Open 2024

This repository contains my exercise solutions for the [Full Stack Open](https://fullstackopen.com/) course by the University of Helsinki.

## About the Course

Full Stack Open is a comprehensive introduction to modern web development with JavaScript. The course covers:

- React
- Redux
- Node.js
- MongoDB
- GraphQL
- TypeScript

The main focus is on building single-page applications with ReactJS that use REST APIs built with Node.js.

## Course Progress

### Part 0: Fundamentals of Web apps ✅
- [x] 0.1–0.3: Basic HTML, CSS, forms
- [x] 0.4–0.6: Request/response and SPA behavior via sequence diagrams

### Part 1: Introduction to React ✅
- [x] a) Introduction to React  
  - Vite-based React setup
  - Function components and JSX
  - Composition and props
  - JSX rules (single root, capitalization, etc.)

- [x] b) JavaScript  
  - Modern JS syntax: `const`/`let`, arrow functions
  - Arrays and objects (map/filter, destructuring)
  - Basic classes and `this`
  - Course info exercises using arrays/objects

- [x] c) Component state, event handlers  
  - `useState` and basic stateful components
  - Event handlers (`onClick`) and handler functions
  - Lifting state and passing handlers to children
  - Refactoring into smaller components

- [x] d) A more complex state, debugging React apps  
  - Managing state with multiple `useState`, objects, and arrays
  - Immutable updates (spread, `concat`, `map`)
  - Async state updates and derived values
  - Conditional rendering (`History`, empty vs non-empty UI)
  - Debugging with console, DevTools, React DevTools
  - Hook rules and event handler patterns
  - Exercises: `unicafe` and `anecdotes` apps

### Part 2: Communicating with server
- [x] 2a) Rendering a collection, modules  
  - Rendering collections with `Array.map` and keys
  - Avoiding index-based keys
  - Extracting list items into components (e.g. `Note`)
  - Splitting components into modules
  - Course info extended with `reduce` and multiple courses

- [x] 2b) Forms  
  - Form state with `useState`
  - Controlled inputs (`value` + `onChange`)
  - Handling submit with `onSubmit` / `preventDefault`
  - Immutable list updates and simple filtering
  - Phonebook: add names, prevent duplicates, add numbers, filter, component extraction

- [x] 2c) Getting data from server  
  - JSON Server as a mock backend
  - Adding dependencies with npm (`axios`, `json-server`)
  - Basic Axios usage and promises
  - Data loading in `useEffect` with dependency arrays
  - Phonebook: initial data from backend

- [x] 2d) Altering data in server  
  - REST-style operations: `GET`, `POST`, `PUT`, `DELETE`
  - Creating and updating resources with Axios
  - Updating local state immutably after server changes
  - Extracting HTTP logic into a `services` module
  - Promise chaining and error handling (`.catch`)
  - Phonebook: create, update, delete, and sync with backend

- [x] 2e) Adding styles to React app  
  - Global CSS via imported stylesheet
  - Class-based styling with `className`
  - Notification component with conditional render + timeout
  - Inline styles with JS style objects
  - Phonebook + Notes: basic styling and user-facing notifications
  - Countries app: RESTCountries + weather API (with env-based API key)
- [x] 2a) Rendering a collection, modules  
  - Using `console.log` effectively for debugging (and VS Code snippets)
  - Reviewing JavaScript array methods (`map`, `filter`, `find`, `reduce`)
  - Rendering collections in React with `Array.map`
  - Keys in lists: why `key` is needed and why not to use array indexes
  - Extracting list items into their own component (e.g. `Note`)
  - Splitting components into separate modules and importing them
  - Debugging broken props / components with `console.log`
  - Web developer’s oath: console open, small steps, don’t pile on broken code
  - Exercises 2.1–2.5: extending Course info, `reduce`, multiple courses, separate `Course` module

  - [x] 2b) Forms  
  - Moving data into component state with `useState` (notes in `App`)
  - Handling form submission with `onSubmit` and `event.preventDefault()`
  - Controlled components: input `value` bound to state + `onChange` handler
  - Updating arrays in state immutably with `concat`
  - Simple random data / IDs and resetting form fields after submit
  - Filtering displayed items with derived state (`showAll`, `notesToShow`, `filter`)
  - Conditional UI in text and behavior (toggle “show all / important”)
  - Exercises 2.6–2.10: start Phonebook app, prevent duplicates, add numbers, filter by name, refactor into components

- [x] 2c) Getting data from server  
  - Using JSON Server as a mock backend (`db.json`, `npx json-server`, `npm run server`)
  - Browser as a runtime: async I/O, event loop, non-blocking behavior
  - npm dependencies vs devDependencies (`axios`, `json-server`, `package.json` scripts)
  - HTTP requests with Axios, promises, and `.then` for handling async responses
  - Loading data inside components with `useEffect` and dependency arrays
  - Rendering server-fetched data and understanding render → effect → re-render flow
  - Overview of the development runtime: Vite dev server, browser, json-server
  - Exercise 2.11: load initial Phonebook data from json-server using Axios + `useEffect`

- [x] 2d) Altering data in server  
  - REST basics: resources, collection URLs (`/notes`), item URLs (`/notes/:id`), methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)
  - Sending data to server with Axios `post` and updating local state from `response.data`
  - Toggling note importance:
    - Find note, create immutable copy with spread (`{ ...note, important: !note.important }`)
    - Send update via `PUT` and update state with `map` replacement
  - Extracting backend calls into a service module (`services/notes.js`):
    - `getAll`, `create`, `update` functions
    - Returning promises that resolve directly to `response.data`
    - ES6 object literal shorthand (`export default { getAll, create, update }`)
  - Promises and errors:
    - Promise states (pending / fulfilled / rejected)
    - Chaining `.then` and handling failures with `.catch`
    - Handling backend errors in UI and syncing state (e.g. remove item if server says 404)
  - Full stack developer's oath:
    - Use console, Network tab, inspect backend state, small steps, lots of logging
  - Exercises 2.12–2.15 (Phonebook):
    - 2.12: Save new persons to backend
    - 2.13: Extract backend logic into its own service module
    - 2.14: Delete persons (HTTP `DELETE`, `window.confirm`)
    - 2.15*: Update existing person’s number via `PUT` when name already exists

    - [x] 2e) Adding styles to React app  
  - Global CSS via imported stylesheet (`index.css` from `main.jsx`)
  - Basic CSS rules: element selectors vs class selectors, using `className` in React
  - Styling list items and components specifically via CSS classes (e.g. `.note`)
  - Notification component:
    - Conditional rendering (`if (message === null) return null`)
    - Error/success styling via CSS class (e.g. `.error`)
    - Timed messages with `setTimeout` and state reset
  - Inline styles in React:
    - `style={...}` with JS objects (`fontStyle`, not `font-style`)
    - Simple example `Footer` component with inline styles
  - React philosophy: co-locating structure, behavior, and styling inside components
  - Edge cases & `useEffect` notes:
    - Initial state null vs `[]`, conditional rendering to avoid crashes
    - Dependency array usage: `[]` vs `[currency]` example with exchange rate API
  - Exercises 2.16–2.20:
    - 2.16: Success notifications in Phonebook
    - 2.17*: Error notifications when backend ops fail
    - 2.18–2.20*: Countries app (RESTCountries + weather API, filtering, “show” buttons, env vars)

### Part 3: Programming a server with NodeJS and Express
- [ ] Not started

### Part 4: Testing Express servers, user administration
- [ ] Not started

### Part 5: Testing React apps
- [ ] Not started

### Part 6: Advanced state management
- [ ] Not started

### Part 7: React router, custom hooks, styling app with CSS and webpack
- [ ] Not started

### Part 8: GraphQL
- [ ] Not started

### Part 9: TypeScript
- [ ] Not started

### Part 10: React Native
- [ ] Not started

### Part 11: CI/CD
- [ ] Not started

### Part 12: Containers
- [ ] Not started

### Part 13: Using relational databases
- [ ] Not started

## Repository Structure
