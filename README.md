
<h3>
Inspired by davidgilbertson/elements.js attempt to replicate JSX with vanillajs
</h3>
<h2> This is the first implementation of creating html with vanillajs</h2>

<ul>
	<li>Each element is rendered</li>
	<li>the rendered element  are resolved and the promise is  put into an array</li>
	<li>The array is then looped and first element is considered as the parent element</li>
	<li>with each iterable element it acts as a parent element and appends the next element as its child</li>
	<li>the whole dom is then put into a promise and then resolved so that event listeners could be added </li>
</ul>























