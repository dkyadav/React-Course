# Introduction to Bootstrap 5

### Intro

-   Newest version of Bootstrap
-   Not supporting of jQuery and is replaced with vanilla JavaScript.
-   Bootstrap 5 now uses flexbox, instead of floats, to handle the layout.

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

```

### Importatnt concept

-   Containers
    .container-sm|md|lg|xl
    [container](container.html)
    p => padding from 1 to 5
    m => margin from 1 to 5

-   Grid system [Example](https://www.w3schools.com/bootstrap5/tryit.asp?filename=trybs_grid_ex_structure&stacked=h)
-   colors
-   Text alignment (class: text-left, text-center, text-right)
-   collapsable [Example](https://www.w3schools.com/bootstrap5/tryit.asp?filename=trybs_collapsible_in&stacked=h)
-   navs [Example](https://www.w3schools.com/bootstrap5/tryit.asp?filename=trybs_nav_align&stacked=h)
-   navbars (class="collapse navbar-collapse", followed by an id that matches the data-bs-target)
-   carousel
-   modal
-   forms and validations (was-validated, needs-validation)
-   flex

### CSS FLEX
    Flexible responsive layout structure without using float or positioning.
    class name: flex
    flex-direction(column,column-reverse,*row,row-reverse)
    flex-wrap (wrap,*nowrap,wrap-reverse) on the basis of width of child divs
    flex-flow (combines flex-direction flex-wrap)
    justify-content (center,*flex-start,flex-end,space-around,space-between)
    align-items (works on height: center,flex-start,flex-end,*stretch,baseline)
    align-content (dependent on flex-wrap: wrap; and bigger heights => \*stretch,space-between,space-around,center,flex-start,flex-end)

To align both text and div in center use

```
<style>
.flex-container {
display: flex;
justify-content: center;
align-items: center;
height: 300px;
background-color: DodgerBlue;
}

.flex-container > div {
background-color: #f1f1f1;
color: white;
width: 100px;
height: 100px;
}
</style>
<div class="flex-container">
  <div></div>
</div>
```
[Center example](center.html)



---

</details>
