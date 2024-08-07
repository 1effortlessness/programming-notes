# Guide for beginner

## the key concepts of Mongodb

reference: https://www.mongodb.com/basics 

### document

what it is?

document data model, the formal name for the data structure used by MongoDB. Like I am a human, document is the data object.

its characteristics:
- json-format
- support nest document

### collections

a group of document, metaphorically, it's like a school class, each student is a document, and the class is a collection.

features:
- no need for same schema
- the relationship between collections and database: n - 1

### replica set

why we need it?

high availability, data redundancy, and read scalability. Make sure the data is always available.

features:
- automatic failover
- data redundancy
- disaster recovery
- read scalability
- a group of mongod processes that maintain the same data set

### sharding

sharding is for scaling out the data, it's a distributed system for data, here is a metaphor description:
there is a large collections of books, countless, and we want to store them into different libraries, each library is a shard, and the books are the data.

### indexes

improving query speed, like the index in the book, you can find the content quickly.

### aggregation pipeline

a powerful tool for data processing, it's like a pipeline, you can process the data step by step.