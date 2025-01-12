# FullStackDevProjects
Basic HTML Projects to Advance Full Stack Development Project.
Now 8 Projects are done.



@ 02.Interactive Webpages

# Favorite Color Select

This is a simple web application that allows users to select their favorite color from a dropdown menu. Upon selection, the application displays a message indicating the chosen color and dynamically updates the text and background styles.

## Directory Name

**Favorite Color Select**

## Features

- A dropdown menu with three color options: Red, Green, and Blue.
- Dynamic text and style changes based on the selected color.
- Event handling using JavaScript to capture user input.
- Inline CSS for styling elements.

## Project Files

The project contains the following files:

1. **HTML (index.html):**  
   The main structure of the web page with a dropdown menu and an interactive paragraph.

2. **CSS (fcs.css):**  
   Defines the styling for the dropdown and the background of the web page.

3. **JavaScript (fcs.js):**  
   Handles the logic to dynamically update the content and styles based on the user's selection.

## Code Explanation

### HTML

```html
<select id="colorOption">
    <option selected disabled>Select Colors</option>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
</select>
<p id="ptext"></p>
