# Progress Bars Collection (Single Element, HTML/CSS/JS)

A progress bar concept where we grab a `<progress />` element and create a multi-element construction under the hood. This construction is easy to use and to style.

[Check The Live Demo](https://codepen.io/nat-davydova/full/qBgvVbQ)

<img width="444" alt="image" src="https://github.com/nat-davydova/progress-bars-collection/assets/52240221/4db1d24f-4719-4f93-8778-16a69abd08c0">
<br/>
<img width="444" alt="image" src="https://github.com/nat-davydova/progress-bars-collection/assets/52240221/2bb9171e-4fc6-45c7-9718-c3bd4e1778fc">

## How To Use
* copy `src/styles.css` into your folder and add it into your HTML code like this:
  
  ```html
    <link rel="stylesheet" href="src/style.css">
  ```
* if you don't need all the file, you should copy all the CSS code from the file after:
  
  ```css
  /* PROGRESS STYLES: YOU NEED THEM!!! */
  ```
  and before Example #1 styles marked like that:

  ```css
  /* EXAMPLE #1 */
  ```

  and insert in your own styles file. Also copy styles of example you prefer or you could write your own;
  
* add `<progress />` into your code like this:
  ```html
  <!-- there can be example 1-4 classname if you want predefined styles or your own classname -->
  <div class="example-1 progress-bars">
    <progress max="100" value="25" data-title="SEO">25%</progress>
    <progress max="100" value="50" data-title="Graphic Design">50%</progress>
    ... <!-- there could be as many bars as you need -->
  </div>
  ```
* all the `<progress />` attributes are crucial and you should add all of them;
  

## Stack
* HTML5
* CSS3
* JS (ES6+)
* Vite
