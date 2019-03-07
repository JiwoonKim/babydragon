---
path: "/frontend/7"
date: '2018-03-05'
title: "Frontend Focus 07 - CSS"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'css']
---

> understanding CSS

- [reference](https://internetingishard.com/)

### CSS
- provides __presentational information__ of how the content is presented to the user
- it defines the __design__ of your page, determining things like font size, margins, colors, etc.

#### CSS Hierarchy 
in rendering order: the lower orders override previous ones
- the browser's default stylesheet
- user-defined stylesheets
- external stylesheets (.css file)
- page-specific styles (< style> within html)
- inline styles

#### Selectors
- __type selector__: specify the tag
- __class__: use `.class` attribute
    - by far the __most versatile__ and come w/ the least amount of drawbacks
    - standard naming convention to use _all lowercase and hyphens_
- __id__: use `#id` attribute
    - __can't reuse the styles at all__ so generally the use of it is frowned upon; use classes instead
- __pseudo-class__: use stateful information
    - ex. `:link`, `:visited`, `:hover`, `:active`, `:last-of-type`

#### CSS Specificity
not all CSS selectors are created equal
- __specificity order__ (the higher, it overrides others)
    - id
    - pseudo-class
    - class
    - type selector (tag)
- [__BEM__](http://getbem.com/introduction/) : attempts to make CSS rules more resuable by making _everything a class selector_, which _eliminates potential for specificity issues_

#### Units of Measurement
- __px__(pixel): 
    - for __spacing and layout__; not for font-size since it is not responsive
- __em__: sizes _relative to parent_'s unit
- __rem__: sizes _relative to root html_ element's unit
    - use for font-size and spacing (margin and padding)

### Layouts
the fundamental task of laying out a page is just __moving a bunch of nested boxes around__
- __box model__ (all elements)
- __block__ vs __inline__ elements
- __floats__ (horizontal layout)
- __flexbox__ (full control)
- __advanced positioning__

### Box Model
set of rules that determine the dimensions of __every element__ (_both inline and block_) in a web page
- all elements have _border, margin, and padding_
- margin collapses: tip is to __stick to a bottom-only or top-only margin convention__
- alignment: __auto-margin__ for _center alignment_, __floats__ for _left/right alignment_, __flexbox__ for _complete control over alignment_
- it's good practice to __override browser's default__ styles
```css
/* good practice for default styles*/
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
}
/* sets box sizes to include the border size*/
```

### Block & Inline elements
- `Block`:
    - __width__: automatically set to _width of parent container_
    - __height__: _based on the content_ it contains
    - align: __floats__ _for left/right_, __auto-margins__ _for center_
- `Inline`:
    - __width__: _based on the content_ it contains
    - height: __don't affect vertical spacing__
    - align: use __text-align__
- __Overriding default display__: set `display` property

### Floats
`float` gives control over the __horizontal position__ of an element 

#### Float Element :
- __aligns__ the element `left` or `right` of their parent element
- __stack things horizontally__
- if not enough room, it __automatically pops down to next line__

#### Surrounding Elements: 
- __flow around__ float
- __no contribution to the height__ of their container element
    - bcuz floated boxes are removed from normal flow of the page
- vertical layout might not be as expected

#### incorporate floats into the height of their container
- `clear`: forcing elements to ignore floats
    - used for __elements after floats__ within the same container 
- `overflow`: make it recognize the height of any floated element it contains
    - used for the __container containing floats__

그림 추가하기 from link below of (clear and overflow image)
- [example & detailed explanation](https://internetingishard.com/html-and-css/floats/)
```css
/* use overflow to recognize heights of floats */
.middle {
        overflow: hidden;
}
/* use floats to align horizontally */
.sidebar {
        float: left;
        width: 20%;
}
.content {
        float: left;
        width: 80%;
}
/* use clear to align back vertically*/
.footer {
        clear: both;
}
```
float-based layouts have mostly been __replaced w/ Flexbox in modern websites__

### Flexbox
__flexbox__ is an alternative to Floats for defining the layout
- gives __complete control__ over _alignment, direction, order, and size of the boxes_
- __use flexbox to layout as much as possible__, __reserving floats for__ when you need text to flow around a box (like a __magazine__)

#### Flex Container:
- set `display: flex` __to container__
- __align items horizontally__: `justify-content` property to container
    - `center`, `flex-start`, `flex-end`
    - `space-around`, `space-between`
- __align items vertically__:  `align-items` property to container
    - `center`, `flex-start`, `flex-end`
    - `stretch`(create equal-height columns), `baseline`
- __wrap flex items__: `flex-wrap`
    - w/o wrap, flex-items 컨테이너 밖으로 튀어나올 수 있음
- __render items direction__: `flex-direction`
    - default horizontal: `row`, `row-reverse`
    - vertical: `column`, `column-reverse`
    - beware that the direction changes:
    - flex direction alignment 관련 이미지 추가 from [here](https://internetingishard.com/html-and-css/flexbox/)
    - very __useful for responsive design__
```css
/* flexbox containing grid centers grid on page */
.grid-container {
            display: flex;
            justify-content: center;
}
/* flexbox for grid: centers and wraps items */
.grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
}
```

#### Flex Items:
- __set order of an item__: `order`
    - default value: `0`
    - __increase__ to move item to the _right_
    - __decrease__ to move item to the _left_
- __change the vertical alignment of an item__: `align-self`
    - __overrides__ the align-item value from its container
    - `center`, `flex-start`, `flex-end`, `stretch`, `baseline`
- __flex individual items__: `flex: #` or `flex: initial`
    - gives full control over __how flex items fit into their containers__
    - justify-content merely distributes space _between_ items
- __dividing flex items in a container__: `margin: auto`
    - alternative to an extra < div> when aligning a group of items to left/right of a container

the flexbox layout should not be used to gently tweaking element positions or preventing them from interacting with the rest of the page (which follows to advanced positioning techniques)

### Advanced Positioning