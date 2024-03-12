# My notes

[original article](https://medium.com/@jessgreb01/how-to-read-code-6ce2d0930f84)

## Purpose of reading code

- to find bugs
- to find interactions
- to review
- to see the interface
- to learn! 

## Not linear

>  We can read in execution order, but we won't know where we're going more than one call site down.

more than one call site down: we can't predict the future.

breakpoint early for tracing down the functions.
breakpoint in deep for watching the execution of call stacks.

## Detail

recognize the interfaces and glues.

### what is glue code?

the things, are that they do work ..., like in node with an event, in promises by ...

interface do specific work.

### what is interface-defining code?

interface defining code is usually more complex.

### implementation

lifetime of a variable, how it is used, how it is changed.
how it fits into the larger whole. (how to understand the sentence?) --> relationship with other modules.

### Process entailment

entailment is hard to understand, process entailment means the process of the code, code A can lead to code B. That it is.

like asking yourself: if we're here, how did we get here?

### Algorithms

read comments for getting know what does the code do, and why.

It's tough to read code, at least, you should know the data structure of the algorithm.

### Configuration

It can let you know how many degrees of freedom you have.

### Tasking

read but no idea...

### Reading messy code

use formatting tools, like prettier, uglify, etc.

### Look for guards and coercions

coercions: convert a value to another type.

Find the boundaries of an interface ... ?

## Summary

To be honest, it's an obscure article for me, to many metaphors and abstract things. Maybe it's because my developing experience is not enough. 