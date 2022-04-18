1. how to add comments on css?
   <br/>
   /\* comment \*/ is used to add comments in css
   <br/>
1. Why do we use pseudo-class?
   <br/>
   pseudo-class is used to define a special state of an element such as hover or active.
   <br/>
1. How is specificity applied?
   <br/>
   IF two or more selectors change the same property of an element, the selector with the highest specificity value is applied.
   <br/>
1. What method allows an element to be moved from its current position?
   <br/>
   the position property paired with top, bottom, right, or left property can be used to move an element.
   <br/>
1. what properties does flex model have?
   <br/>
   Flex has a lot of properties some of them are:
   i. flex-grow
   i. flex-shrink
   i. flex-basis
   i. flex-wrap
   i. flex, it is a shorthand for flex-grow, flex-shrink, and flex-basis.
   <br/>
1. What is the difference between flex and grids?
   <br/>
   Flex and Grid can both be used for creating both 1D and 2D designs but the basic difference between flex and grid is that grid is specificly made for 2D layouts while flex is for 1D. This means grid is suited for creating overall layout for the website while flex is for creating content boxes.
   <br/>
1. Give an example where we have to use grids and where you have to use flexbox?
   <br/>
   Grid can be used where a specific layout or structure needs to be created where as Flex can be used where you want everything to be flexible.
   <br/>
1. Give an example where you cannot use flexbox, and you can only use grids?
   <br/>
   IF while using flexbox you disable some of the flexibility, its better to use grids.
   <br/>
1. What are combinators? give examples of how you can use them
   <br/>
   Combinators are something that define the relation between selectors.

   1. " " descendant selector or space can be used to select all the descendants of an element.
   2. ">" child selector can be used to select just the immediate child element.
   3. "+" adjacent sibling selector can be used to select sibling elements or the elements that are right next to the preceding selector.
   4. "~" general sibling selector can be used to select all the next siblings of specified element.

    <br/>
1. What does object-fit do?
   <br/>
   object-fit is used to specify the alignment of elements content such as <img> or <video> withing the element's box.
   <br/>
1. What does rotate do?
   <br/>
   rotate is a transform property which is used to rotate the element by a specified amount.
   <br/>
1. What rule can be used to define animations
   <br/>
   @keyframes rule specifies the animation code.
   <br/>
1. When working with attribute selectors, how can you select elements which contain a particular attribute value?
   <br/>
   [attribute*="value"] selector is used to select elements whose attribute value contains a specified value.
   <br/>
1. What does @media do?
   <br/>
   @media attribute specifies what media or device the linked document is optimized for.
   <br/>
1. What can be used to override properties of an element
   <br/>
   !important is used to override properties
   <br/>
1. How can you select every alternate elements in a list of elements using css?
   <br/>
   :nth-child(2n) Selector is used to select even alternate elements and :nth-child(2n-1) Selector is used to select odd alternate elements.
   <br/>
1. What is the ranking of selectors with respect to specificity
   <br/>
   Inline style has the highest priority and specificity value of 1000
   IDs have a specificity value of 100
   Classes, pseudo-classes, attribute selectors have a specificity value of 10
   Elements and pseudo-elements have a specificity value of 1
   <br/>
1. how can we apply same styles to multiple selectors?
   <br/>
   we can use "," to seperate the selectors that have the same styles.
   <br/>
1. What are the differences between relative and absolute in CSS?
   <br/>
   relative position in CSS places an element relative to its current position without changing anything around it, whereas absolute position places the element relative to its parent's position and it also affects the elements around it.
   <br/>
