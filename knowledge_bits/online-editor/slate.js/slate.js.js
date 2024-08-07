# slate.js

## my goals

- learn the basic rendering principles of an online editor through reading the source code of slate.js

## questions

records of questions I have when reading the source code.

1. how to isolate the css styles in the editor from the outside styles?

## what i understand after reading the official docs?

just sections: get started and concepts.

consume about 3 hours to get through all the basic concepts of slate.js, but it also benefits me about what an online editor is, its features.

how to use it?

`<Slate>` as a context provider, controller model and a wrapper of editor.
`<Editable>` is the rendering area. all the config about the editor is passed to `<Editable>` as props.

slate has many really cool ideas like plugins, and the flexible data schema. custom block is easy to implement.

event handler for user input, selection, formatting, undo/redo, copy/paste, drag/drop, insert, delete, move, save.

`Transform` is a very import concept in Slate. it's about all the modification of data and selection.

data passing from in and out is clear. the scheme is simple, a js object, like dom tree, has children property.

also it show a basic practice about using yjs to implement collaborate editing. plugins is really powerful and customizable.

i spent less time on the reading of concepts, accept them without too much thinking. the reason is i just need a glance of the concepts, and i will understand them when i read the source code or when i use it.

what's next?

the next objective is:

- reading the source code
- create a simple project from scratch to implement the core features of slate.js?
- add a custom plugin for practicing?
- Can we learn from the design of the data scheme in slate.js for our own editor? give the answer by yourself
- tell the difference between slate.js and head leo's editor.js

## debug the source code

read first: <https://docs.slatejs.org/general/contributing>
read code is not enough, we need to clone the code and try to change something, that's visual.

look at the simplest example

```jsx
<Slate editor={editor} initialValue={initialValue}>
  <Editable placeholder="Enter some plain text..." />
</Slate>
```

why the editable component can be editable? `contentEditable` is set to true.

## concepts about slate

### normalizing

what it is?
for uniforming data structure
it has some basic rules, like: all element nodes must contain at least one text node child; inline nodes cannot be the first or last child of a parent block.

[link](https://docs.slatejs.org/concepts/11-normalizing)

for better understanding of what the doc said. reader have to understand block & inline node.

`editor.isInline` decides whether a node is inline or not. (it's a function to handle all the nodes)

`normalizedNode` is a function to add custom constraints to the node.
it looks like a tube, all the nodes will go through it, and the nodes will be changed according to the rules. like a title node can not be deleted, it must occupy the first line of the editor.

> great idea design!

`Multi-pass Normalizing` is a little obscure, marked and back to it later.

Remember that every element, even if it's empty, has at least one child. Slate will check and add an empty text node to the children before doing any normalizing.

normalizing seems like a validation for each node, but you have to add an operation for the invalid node.

**recursively render elements**