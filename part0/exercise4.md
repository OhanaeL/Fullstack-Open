```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>browser: User enters text into the text field and presses "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note with new note 
    activate server
    server-->>browser: status code 302 (URL Redirect)
    deactivate server

    Note right of browser: The browser refreshes

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
    server-->>browser: [{ "content": "hello", "date": "2025-1-2" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```