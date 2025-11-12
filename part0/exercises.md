
# Full Stack Course Part 0 - Exercise Solutions

## Exercise 0.4: New note diagram

This diagram shows what happens when a user creates a new note on the traditional notes page by filling in the form and clicking Save.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: The server adds the new note to the notes array
    server-->>browser: HTTP 302 Redirect to /notes
    deactivate server

    Note right of browser: The browser follows the redirect and reloads the notes page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

---

## Exercise 0.5: Single page app diagram

This diagram shows what happens when a user navigates to the single-page app version of the notes application.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

---

## Exercise 0.6: New note in Single page app diagram

This diagram shows what happens when a user creates a new note in the single-page app version. Unlike the traditional version, the page does not reload.

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types a note and clicks Save button

    Note right of browser: The browser executes the form submit event handler

    Note right of browser: The event handler prevents default form submission

    Note right of browser: A new note object is created and added to the notes array

    Note right of browser: The page is rerendered to show the new note

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: The server receives the JSON data and adds the note to the database
    server-->>browser: HTTP 201 Created
    deactivate server

    Note right of browser: The browser stays on the same page, no reload occurs
```

---

## Key Differences Between Traditional and SPA Approaches

### Traditional Web App (Exercise 0.4):
- Form submission triggers a full page reload
- Server responds with HTTP 302 redirect
- Browser makes multiple new requests (HTML, CSS, JS, JSON)
- All resources are re-fetched from the server

### Single Page App (Exercise 0.6):
- Form submission is handled by JavaScript
- No page reload occurs
- Only one POST request is sent to the server
- The page is updated dynamically using the DOM-API
- Server responds with HTTP 201 (no redirect)
- Much more efficient and provides a smoother user experience

