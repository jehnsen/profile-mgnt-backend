
# ----------------------------------------------------------------
# BACKEND (Nodejs API)
# ----------------------------------------------------------------


# How to setup
--------------

1. Install the required dependencies.
    ex. `npm install` or `yarn install`

2. Enter your mongodb connection settings and port in `.env` file.
        `MONGODB_URI`-`your-mongodb-connectionstring`
        `PORT`=`3001`

2. Run the app `npm start`
    - `the app will run on PORT 3001`

--------------------------------
### Bug Identification and Fixes 
--------------------------------

1. Combining server, database configurations, and API logic in a single index file leads to spaghetti code, making maintenance difficult. Splitting code into different files promotes modularity, making each file represent a specific module or feature of the application, thereby enhancing understanding and maintainability. This practice adheres to the principle of `separation of concerns`, ensuring that each part of the code is responsible for a distinct aspect of the application, such as database models, routes, or middleware. It also facilitates `reusability`, allowing code to be reused across different parts of the application without duplication, such as utility functions or middleware. Additionally, smaller files are easier to maintain and debug, as issues can be more easily located and fixed in specific files rather than a large, monolithic one. This approach also supports scalability, allowing new features to be added without making the main file unwieldy as the application grows. 
2. Mongoose connection options like `useNewUrlParser` and `useUnifiedTopology` are deprecated. Use `mongoose.set()`.
3. MongoDb connection string was exposed, it should be placed in `.ENV`
4. Redundant calls to `getAllProfiles` in `getProfileById`.
5. No input sanitization and error handling in async functions
6. No data validation middlewares
7. Unnecessary export `export { UserProfile }` in index.ts

--------------------------------
## Performance Optimizations
--------------------------------
1. I implemented `node-cache` to improve performance through caching frequently accessed data. However, for larger, distributed applications, a more robust solution like Redis may be necessary to handle greater scale and offer additional features such as persistence and replication.

2. I used `async/await` with `try-catch` for better error handling and avoid nested callbacks.

3. I used `express-rate-limit` npm package to limit the number of requests a client can make to the server within a specific timeframe. This helps to mitigate brute-force attacks, DDoS attacks, and other types of abusive behaviors.

4. I added custom middleware error handler for async functions. Adding an error-handling middleware centralizes error management, enhances debugging, improves user experience by providing friendly error messages, ensures graceful handling of unexpected issues, and maintains the continuation of the middleware chain. This makes the application more robust, maintainable, and secure

5. Created custom middelwares for rate limiting, error handling for async functions and profile input validation
    ex.`429 response:`
    {
        "error": "You have been rate limited, please try again later."
    }

--------------------------------
## Identifying Other Issues 
--------------------------------
1. I used the `Model-Controller-Service Pattern` (or MVC) for code organization. By organizing code using this pattern, we achieve a clean separation of concerns, making the application easier to develop, maintain, and scale. This structure also enhances code reusability and simplifies debugging and testing.

2. Treating data from the frontend as unsafe is a fundamental security practice in web development. By treating all input data as potentially harmful, we should implement necessary checks and safeguards to protect the application from various attacks.

    - I Implemented XSS (Cross-Site Scripting) protection using `xss-clean` library to prevent Cross-site scripting attacks by removing or encoding potentially malicious scripts. 
    This is an example of sanitized input from request payload:
    ex. 
    sanitized: `{"name": "&lt;script>alert('XSS');&lt;/script>"}`
    unsanitized input: `<script>alert('XSS');</script>`
    - I also used `Helmet` for setting appropriate HTTP headers to provide extra layer of security against common web vulnerabilities. Setting up these security headers correctly is crucial for enhancing the security the application & mitigate various types of attacks, including `XSS`, `clickjacking`, and `man-in-the-middle` attacks.

3. Using an ORM like Mongoose helps prevent `SQL injection` attacks through parameterized queries, abstraction of database operations, validation and sanitization, robust error handling, and promotion of security best practices. These features collectively ensure that user inputs are handled securely, significantly reducing the risk of injection attacks and improving the security of the application.

## Recommendations for Future Improvement
# ---------------------------------------
1. Set-up a continuous integration and deployment pipeline to automate deployment, ensuring consistent code quality and quicker release cycles.
2. Need to use a better caching solution like `Redis` and have a separate Redis server instance running, which the application can connect to for caching, pub/sub, and other use cases.
3. Create a docker setup and deploy in docker container 
4. For a comprehensive and flexible validation and sanitization capabilities `express-validator` is highly recommended. It integrates seamlessly with Express.js and supports detailed error handling, and enhances the security of the application by protecting against common vulnerabilities. Combining `express-validator` with `xss-clean` ensures that the application can  handle input safely and effectively.
5. As the application grows, implementing `Microservice Architecture` for backend API services like Node.js can significantly enhance scalability, flexibility, fault isolation, deployment independence, maintainability, resource optimization, and team productivity. This modular approach aligns well with the dynamic and asynchronous nature of Node.js, making it an ideal fit for building robust, scalable, and maintainable web applications.
6. Adding authentication and authorization to the API enhances security by ensuring that only authenticated users can access the API and that users have the correct permissions to perform actions
7. Implementing database optimization techniques, such as indexing, can significantly enhance the performance and efficiency of frequently accessed collections. Indexing helps speed up query processing by creating data structures that allow for faster retrieval of records. Determine which fields are most often used in queries and filter conditions and Add indexes to these fields to speed up query performance.
8. Create unit tests to avoid bugs in the production environment

### Optional Enhancements
--------------------------
1. Added custom validations and security checks against XSS attacks, SQL injection, and other  security vulnerabilities in the application. Adding rate limiting will help mitigate brute-force attacks, DDoS attacks and other types of abusive behaviors.
2. Created a CRUD functionality for users

* Due to time constraints during the exam, I was unable to implement the Authentication and Authorization features in the application. While these features are crucial for securing access and managing user permissions, they were omitted to focus on other aspects of the application within the limited time available. :-)