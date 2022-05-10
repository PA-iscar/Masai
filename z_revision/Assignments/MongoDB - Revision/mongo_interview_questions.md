1. What is SQL Databases?
   <br/>
   Ans: SQL stands for Structured Query Language. It's used for relational databases. A SQL database is a collection of tables that stores a specific set of structured data.
   <br/>

2. What is NoSQL Databases?
   <br/>
   Ans: A NoSQL database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.
   <br/>

3. What are some companies who uses Mongo, what type of applications are these?
   <br/>
   Ans: Some of the companies that use MongoDB are "Royal Bank of Scotland", "comparethemarket", "Shutterfly", "cure.fit", "Forbes". These are applications across various industries.
   <br/>

4. What is the difference between SQL and NoSQL databases?
   <br/>
   Ans:

   | SQL                     | NoSQL                                               |
   | ----------------------- | --------------------------------------------------- |
   | This is realational     | This is non-relational                              |
   | Has a predefined schema | Has a dynamic schema                                |
   | Are vertically scalable | Are Horizontally scalable                           |
   | Are Table Based         | Are document, key-value, graph or wide-column based |

   <br/>

5. What are some features of MongoDB?
   <br/>
   Ans: MongoDB supports field queries, range queries, and regular expression searches. Queries can return specific fields and also account for user-defined functions. This is made possible because MongoDB indexes BSON documents and uses the MongoDB Query Language (MQL).
   Replication for better data availability and stability. In MongoDB, replica sets are employed. A primary server or node accepts all write operations and applies those same operations across secondary servers, replicating the data. If the primary server should ever experience a critical failure, any one of the secondary servers can be elected to become the new primary node. And if the former primary node comes back online, it does so as a secondary server for the new primary node.
   via horizontal scaling features like replication and sharding, MongoDB supports large-scale load balancing.
   <br/>

6. What are aggregate queries?
   <br/>
   Ans: Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
   <br/>

7. What are pipelines in aggregation?
   <br/>
   Ans: The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
   <br/>

8. How do you do aggregate queries?
   <br/>
   Ans: To create an aggregation pipeline, you can use can use MongoDB's aggregate() method. This method uses a syntax that is fairly similar to the find() method used to query data in a collection, but aggregate() accepts one or more stage names as arguments.

   ```JS
   db.users.aggregate([
    { stage 1}, $project
    { stage 2}, $match
    { stage 3}, $group
    { stage 4}, $sort
    ]);
   ```

   <br/>

9. How can you group by a particular value in MongoDB?
   <br/>
   Ans: The $group stage groups the documents by item to retrieve the distinct item values.

   ```JS
   query = db.collection.aggregate([

       {
       "$group": { "_id": "$your_field", #GROUP BY your_field
                   "count": {"$sum":1} }   #COUNT(*)
       },

       { "$match": { "count": { "$gt": N } } } #HAVING COUNT(*) > N
   ])
   ```

    <br/>

10. How can you paginate on MongoDB?
    <br/>
    Ans: Using skip and limit method, we can paginate the mongoDB data.
    <br/>

11. How can you sort in MongoDB?
    <br/>
    Ans: Using sort method, we can sort the mongoDB data.
    <br/>

12. What is indexing in MongoDB? Why do we need to use indexing? What are pros and cons for indexing?
    <br/>
    Ans: Indexes are special data structures that stores some information related to the documents such that it becomes easy for MongoDB to find the right data file.
    Indexing makes columns faster to query by creating pointers to where data is stored within a database.
    <br/>
    | Pros | Cons |
    |----|----|
    | Their use in queries usually results in much better performance. | Every time data changes in the table, all the indexes need to be updated. |
    | They make it possible to quickly retrieve (fetch) data. | Indexes need disk space. |
    | They can be used for sorting. A post-fetch-sort operation can be eliminated. | The more indexes you have, more disk space is used. |
    | Unique indexes guarantee uniquely identifiable records in the database. | Index decreases the performance on inserts, updates and deletes. |

    <br/>

13. Write the query for indexing a field in MongoDB?
    <br/>
    Ans: The createIndex() method only creates an index if an index of the same specification does not already exist.

    ```JS
        collection.createIndex( { name : -1 }, function(err, result) {
            console.log(result);
            callback(result);
        }
    ```

    <br/>

14. What is the data structure used for indexing?
    <br/>
    Ans: MongoDB indexes use a B-tree data structure.
    <br/>

15. Are values sorted in indexes?
    <br/>
    Ans: When an index has a key with multiple data types, the index is sorted according to the BSON type sort order. If an index key contains an array, the document is sorted according to the type of the first array element.
    <br/>

16. What are Replica Sets in MongoDB?
    <br/>
    Ans: A replica set in MongoDB is a group of mongod processes that maintain the same data set. Replica sets provide redundancy and high availability, and are the basis for all production deployments.
    <br/>

17. Explain the structure of ObjectID in MongoDB.
    <br/>
    Ans: An ObjectId in MongoDB is a 12-byte BSON type.
    In the 12-byte structure, the first 4 bytes of the ObjectId represent the time in seconds since the UNIX epoch.
    The next 3 bytes of the ObjectId represent the machine identifier.
    The next 2 bytes of the ObjectId represent the process ID.
    And the last 3 bytes of the ObjectId represent a random counter value.
    <br/>

18. By default, which index is created by MongoDB for every collection?
    <br/>
    Ans: MongoDB creates a unique index on the \_id field during the creation of a collection by default. The \_id index prevents clients from inserting two documents with the same value for the \_id field.
    <br/>

19. In which format MongoDB represents document structure?
    <br/>
    Ans: In MongoDB, the data records are stored as BSON documents. Here, BSON stands for binary representation of JSON documents, although BSON contains more data types as compared to JSON. The document is created using field-value pairs or key-value pairs and the value of the field can be of any BSON type.
    <br/>

20. What is the limitation of a document in MongoDB?
    <br/>
    Ans: Maximum document size or limit for one document is 16Mb.
    <br/>

21. What is the difference between MongoDB and Redis database?
    <br/>
    Ans: MongoDB is a document-oriented, disk-based database optimized for operational simplicity, schema-free design and very large data volumes. Redis is an in-memory, persistent data structure store that enables developers to perform common operations with minimal complexity and maximum performance.
    <br/>

22. How can you add references between multiple collections?
    <br/>
    Ans: 
