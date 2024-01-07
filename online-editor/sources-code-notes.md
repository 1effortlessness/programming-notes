# notes

## preface

question1: what happen after you press a key?
question2: how to support collaboration?
question3: what's the principles behind the plugins design?
question4: how to handle Chinese input method and emoji input? check `editor.js`

## what happen after you press a key?

when user press a key, three event should be cared about: `beforeinput`, `input`, `keydown`.

in slate-react, it's:

- onDOMBeforeInput
- onKeyDown
- onInput

first: **onDOMBeforeInput**

1. `onUserInput()`: track user input, pass

2. handle dom selection event, update editor status

```tsx
scheduleOnDOMSelectionChange.flush()
onDOMSelectionChange.flush()
```

what the code do?

- update the focus status
- handle selection

(all the operations is managed by editor object)

3. handle different insert type event && update editor status

```tsx
        const isCompositionChange =
          type === 'insertCompositionText' || type === 'deleteCompositionText'

        // COMPAT: use composition change events as a hint to where we should insert
        // composition text if we aren't composing to work around https://github.com/ianstormtaylor/slate/issues/5038
        if (isCompositionChange && ReactEditor.isComposing(editor)) {
          return
        }
```

take notes, the situation of composing is handled specially on onComposition events.

[all inputTypes for check](https://w3c.github.io/input-events/#interface-InputEvent-Attributes)

it's just the simple scenario that user press a key such as 'e', the inputType is `insertText`.

call the function `editor.insertText()` to insert the text.

```tsx
export const insertText: EditorInterface['insertText'] = (
  editor,
  text,
  options = {}
) => {
  const { selection, marks } = editor

  if (selection) {
    if (marks) {
      const node = { text, ...marks }
      Transforms.insertNodes(editor, node, {
        at: options.at,
        voids: options.voids,
      })
    } else {
      Transforms.insertText(editor, text, options)
    }

    editor.marks = null
  }
}
```

[it's import to understand the concepts of locations in slate.js](https://docs.slatejs.org/concepts/03-locations)

Path [1, 2] means that in the data tree of slate, it refers to the third child of the second node.

great, for now, we know what happens after user press a key, slate insert a text node, and update the editor status like selection, focus, etc.

external knowledge:

the core function: apply.

```ts
Transforms.transform(editor, op) // do the actual operation
editor.operations.push(op) // push the operation to the operation stack
```

the code of inserting text

```ts
// transform/general/applyToDraft
    case 'insert_text': {
      const { path, offset, text } = op
      if (text.length === 0) break
      const node = Node.leaf(editor, path)
      const before = node.text.slice(0, offset)
      const after = node.text.slice(offset)
      node.text = before + text + after

      if (selection) {
        for (const [point, key] of Range.points(selection)) {
          selection[key] = Point.transform(point, op)!
        }
      }

      break
    }
```

### however, this is just half of the story

the other half is about the rendering and events notification.

rendering entry: useChildren
events notification entry: `<Slate />`

userChildren -> `<ElementComponent />`

then element component will render the children of the element node recursively.

```ts
// the Slate params interface
{
  editor: ReactEditor
  initialValue: Descendant[]
  children: React.ReactNode
  onChange?: (value: Descendant[]) => void
  onSelectionChange?: (selection: Selection) => void
  onValueChange?: (value: Descendant[]) => void
}
```

onChange / onSelectionChange / onValueChange are what we need to care about.

every time the editor call `apply`, it will call the onChange function which will trigger the listener functions above.
