domexp
======

A text processing utility for html documents

# What is domexp?

domexp is like regular expressions for HTML documents. Using CSS selector syntax, the utility find all elements matching that selector and optionally allows them to be processed in a second phase. Think `s/foo/bar/g`, but with more intelligence helping you find what you're searching for.

While querying elements via jQuery/Sizzle in the browser is quite common, I have yet to find a utility that easily allows one to perform similar operations in an IDE, text editor, or via shell commands (if you know of something please let me know so I can stop wasting time!).

The long-term goal is to provide a fast, simple tool that can be hooked into the likes of vim, sublime, visual studio, or build system to easily process DOM elements.

## Stuff you could do with such a tool:
- Find all usages of a class, attribute, or fragment across all of your templates
- Build code quality and refactoring utilities
- Quickly and simply manipulate documents/templates that render differently per deployment configuration (e.g. diagnostic info in dev mode but not in production) without using server-side rendering (or a more heavyweight preprocessor when building a static site)

## Requirements

Currently, the only requirement is that you have node installed. This is because we will be using sizzle (hopefully) to query the HTML and perform replacement operattions.

## Examples

These examples are theoretical but demonstrate the spirit of what domsed is trying to accomplish:

### regex-like syntax

File before:
```html
<!-- input.html -->
<div>
 <span class='odd'>Item 1</span>
 <span>Item 2</span>
 <span class='odd'>Item 3</span>
</div>
```
Command:
```bash
domexp "span" input.html
Found 3 occurrences of '<span>':
  line 3 <span class='odd'>...</span>
  line 5 <span class='odd'>...</span>
```

### more to come!
