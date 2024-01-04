# Overview

(official website)[https://rxjs.dev/guide/overview]

## What it is?

> RxJS is a library for composing asynchronous and event-based programs by using observable sequences

how to understand the quote?

the official say you can think of it as lodash for events. well, it's still a little abstract for me to understand.

what i say it is main mission is for handling events and data flow in js.
its features like unix shell

- Composition
- streaming flow

it's like tubes, data regard as flow, and you can do some operations on it.

> All I/O devices, such as networks, disks, and terminals, are modeled as files, and all input and output is performed by reading and writing the appropriate files. This elegant mapping of devices to files allows the Linux kernel to export a simple, low- level application interface, known as Unix I/O, that enables all input and output to be performed in a uniform and consistent way.

-- CSAPP, page 926

if not clear, just image it as a pipeline, data flow in it, and you can do some operations on it.
first, you should specify the source of data, then you can do some operations on it, like filter, map, reduce, etc.
finally, you can subscribe to the data flow, and do something with the data, like storing it to database, or render it to the screen.

## usage scenarios

link: <https://angular.io/guide/observables>

Observables are a technique for event handling, asynchronous programming, and handling multiple values emitted over time.

The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of state changes. This pattern is similar (but not identical) to the publish/subscribe design pattern.

after read the chapter: basic usage and terms. reader should have a basic understanding of "observer", "observable" and "subscription".

- event handler
- http request
- router
- form control

## basic practices

create observables
error handling

the primer way to create observable is using `new Observable()`, it's like a react useEffect hook...

[the ability to manipulate streams of async data in a loosely coupled way is perhaps the most important aspect of RxJS. [example]](https://angular.io/guide/rx-library#loosely-coupled-transformations)

most observables are `unicast`.
relative topics: how to turn it into `multicast`?

[a example: type-ahead suggestions](https://angular.io/guide/practical-observable-usage#type-ahead-suggestions)

[cheat sheet for comparing with Promise](https://angular.io/guide/comparing-observables#cheat-sheet)

## essential concepts

if get understand the content above, you can skip this part. but it's worth to review all the concepts that learned before.

The essential concepts in RxJS which solve async event management are:

- Observable: represents the idea of an invokable collection of future values or events.
- Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
- Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.
- Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
- Subject: is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
- Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.
