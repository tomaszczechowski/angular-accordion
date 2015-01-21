# Angular asccordion <img src="https://img.shields.io/packagist/l/doctrine/orm.svg" />
> Light and simply UI accordion module for AngularJS

### Compatibility
- IE Browsers: IE8+, Others
- Angular: 1.2.28+

### Setup
- place it into scripts directory of your application
- in accordion directives set parameter "templateUrl" relative to module path

### Options

+ **one-open (default: true):**
Open more then one collapsible element at a time.

```html
<accordion one-open="false">
    ...
</accordion>
```

+ **open-class (default: open):**
CSS classes added to opened collapsible elements.

```html
<accordion open-class="accordion-open-class">
    ...
</accordion>
```

+ **close-class (default: close):**
CSS classes added to closed collapsible elements.

```html
<accordion close-class="accordion-closed-class">
    ...
</accordion>
```

+ **init-open (default: false):**
Open collapsible element after initially rendering on page.

```html
<accordion>
    <accordion-item init-open="true">...</accordion-item>
</accordion>
```

+ **header:**
Header of collapsible element.

```html
<accordion>
    <accordion-item header="Element 1" init-open="true">...</accordion-item>
    <accordion-item header="Element 2">...</accordion-item>
</accordion>
```

### Example

```html
<accordion open-class="accordion-item-open" close-class="accordion-item-close" one-open="true">
  <accordion-item header="Header 1" init-open="true">...</accordion-item>
  <accordion-item header="Header 2">...</accordion-item>
  <accordion-item header="Header 3">...</accordion-item>
</accordion>
```

### Release notes
- 0.1.0 Accordion first acting version
