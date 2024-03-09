## Interview Questions & Answers

1. **Question:** What is TypeScript, and how is it different from JavaScript?
   **Answer:** TypeScript is an extension of JavaScript that provides advantages such as static typing.

2. **Question:** Can you explain the difference between "interface" and "type" in TypeScript?
   **Answer:** Interfaces and types are both used to declare custom types in TypeScript, but interfaces can be extended and implemented by classes while types cannot be extended or implemented.

3. **Question:** Can you give an example of how to use generics in TypeScript?
   **Answer:**

    ```
    let newFunction = function(x: string, y: string):string {
        return x + y;
    }
    newFunction("hey", "world");
    ```

4. **Question:** What is the difference between an "unknown" and "any" type in TypeScript?
   **Answer:** "any" type in TypeScript is a type that accepts any type so it is very likely that unexpected error will occur after application development but when we use "unknown" type the compiler checks types at runtime.

5. **Question:** Can you give an example of how to use enums in TypeScript?
   **Answer:**

    ```
    enum Roles {
        Admin = 'admin',
        Seller = 'seller',
        Customer = 'customer',
    }

    let user: Roles = Roles.Admin;

    if (user === Roles.Admin) {
        console.log("Welcome, Admin!");
    }
    ```

6. **Question:** What is the "as" keyword used for in TypeScript?
   **Answer:** The as keyword is a type assertion in Typescript. By using a type assertion, we may instruct the compiler to consider any as a number or string.

7. **Question:** Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
   **Answer:** The "in" operator also acts as a type-specific narrowing expression. To determine whether a property is present in an object, use the in operator. And, the "typeof" keyword returns the type of an identifier in TypeScript. We can use that to check the type of a variable.
