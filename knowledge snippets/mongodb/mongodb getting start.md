## connecting

right now, i have started the mongo services. what's next?

i need to into the cli, it's simple, just type `mongosh`.

but how to connect mongo service through software?

[`mongosh "mongodb://localhost:27017"` equals `mongosh`](https://www.mongodb.com/docs/mongodb-shell/connect/#connect-to-a-local-deployment-on-the-default-port)

mongodb is the service name? like http, whatever.
localhost is the ip address, 27017 is the default port. Basically we can replace localhost to a remote host.

--username, --authenticationDatabase for connecting with authentication

### connecting in Nest.js or node.js
we can start from here -> https://www.mongodb.com/docs/drivers/node/current/
it includes all we should know

`await client.connect()`

```javascript
const mongoUri = 'mongodb://localhost:27017/';
export const dbClient = new MongoClient(mongoUri);
```

Connecting is easy in Node.js, but how do you set it up in a NestJS project?

So, here is the documentation: https://docs.nestjs.com/techniques/mongodb.

then test the connection ~~

## CRUD

### creating

- creating a database
- creating a collection
`use database name` and `db.xxx` will automatically create the db and collections.

- creating a schema
	- is it legal that a collection includes multiple schema? 
		- Basically, there is no physical entity called "schema" in a collection in MongoDB. It is simply an abstraction.
- creating a document
	- insert one
	- insert multiple

With Mongoose, everything is derived from a [Schema](https://mongoosejs.com/docs/guide.html). Let's get a reference to it and define our kittens.
So far so good. We've got a schema with one property, `name`, which will be a `String`. The next step is compiling our schema into a [Model](https://mongoosejs.com/docs/models.html).
A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:

Schema appears to be an abstract class in JavaScript, while Model is the class.

**implementation**
```javascript
const kittySchema = new mongoose.Schema({
  name: String
});
```
```javascript
const Kitten = mongoose.model('Kitten', kittySchema);
```
```javascript
const silence = new Kitten({ name: 'Silence' });
silence.save().then(() => ...)
```
###  Reading

- find one document
- Find multiple documents and use a query to learn about the conditions.
- Learn about JOIN queries.

### Updating

### Deleting

- delete a document

## cleanup in nest.js