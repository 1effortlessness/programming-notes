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

