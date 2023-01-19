GraphQL Notes

- GraphQL is a layer between the front and the backend. 
- GraphQL is not a database. It functions as an API, or a query API tool. 
- There are two types of requests: a query and a mutation. 
- A query is of course a GET; mutations include PUT, DELETE, POST, possibly more. They may not be labeled this, but it's the same idea. 
- This is a basic way of thinking of it. 
- Anything that involves getting data is a QUERY; anything involving changing or adding data is a MUTATION. 
- If using the front end GraphQL, there is no direct request to the backend. It is a layer. 
- It is thus used for scaling by big companies, where an express API is created that already has GraphQL incorporated. 
- Very different from REST; rather than just an endpoint, method, request, GraphQL exists as a layer between. 
- Only ONE endpoint in a GQL base as compared to REST. I.e. - /user, /followers, /posts = REST, /graphql = GraphQL. 
- GraphQL also tries to deal with the issue of over and underfetching data. I.e. retrieving EVERYTHING on a user when you simply want to return a username. Or underfetching, where you let backend determine what kind of data the frontend wants- want vice versa.
- GraphQL allows for more specificity. 
- One of the most costly things in a website is fetching the data from the frontend- GraphQL helps you get just what you need. 