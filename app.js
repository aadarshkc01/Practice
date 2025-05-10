const express = require("express")
const app = express()

app.get("/books", (req,res)=>{
    res.json({
        message : "This is home page"
    })
})

app.post("/books", (req,res) =>{
    res.json({
        message : "user added successfully"
    })
})
app.patch("/books", (req,res) =>{
    res.json({
        message : "user updated successfully"
    })
})
app.delete("/books", (req,res) =>{
    res.json({
        message : "user deleted successfully"
    })
})

// const { Sequelize, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');

// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('User', {
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true, // Ensures valid email format
//     },
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       len: [3, 20], // Restricts username length
//     },
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       len: [8, 100], // Ensures password length
//     },
//   },
// }, {
//   hooks: {
//     beforeCreate: async (user) => {
//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(user.password, salt); // Hash password before storing
//     },
//   },
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   console.log('User table created!');
// })();

// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('User', {
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       isValidPassword(value) {
//         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!regex.test(value)) {
//           throw new Error('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
//         }
//       },
//     },
//   },
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   console.log('User table created!');
// })();

// In Sequelize, **validation** ensures that data meets specific criteria before being saved to the database. This prevents incorrect or unexpected values from being stored.

// ### **Example of Validation in Sequelize**
// Imagine you're building a **user registration system** where users must provide a valid email address.

// #### **Defining the Model with Validation**
// ```javascript
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('User', {
//   firstName: {
//     type: DataTypes.STRING,
//     validate: {
//       len: [3, 20], // Ensures name length is between 3 and 20 characters
//     },
//   },
//   email: {
//     type: DataTypes.STRING,
//     validate: {
//       isEmail: true, // Ensures the email format is valid
//     },
//   },
// });

// (async () => {
//   await sequelize.sync({ force: true });

//   try {
//     await User.create({ firstName: 'Jo', email: 'invalid-email' });
//   } catch (error) {
//     console.log('Validation Error:', error.errors.map(e => e.message));
//   }
// })();
// ```
// ### **Real-World Use Case**
// Consider an **e-commerce platform** where users register with an email and password. Using Sequelize validation:
// - **Ensures emails are correctly formatted** before storing them.
// - **Prevents weak passwords** by enforcing length and complexity rules.
// - **Restricts usernames** to a certain length to maintain consistency.

// Would you like more advanced validation techniques, such as custom validators? 🚀
  
// Yes! `sequelize.define` is used to define models in Sequelize, which represent tables in the database. When you define a model, it specifies the table name, columns, data types, and constraints.

// ### **Example Usage**
// ```javascript
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('User', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     validate: {
//       isEmail: true,
//     },
//   },
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   console.log('User table created!');
// })();
// ```
// ### **What Happens Behind the Scenes?**
// - **Defines a model (`User`) that represents a table.**  
// - **Maps the attributes to table columns.**  
// - **Creates the table in the database using `sequelize.sync()`.**  

// Would you like to learn how to define relationships between tables, like `One-To-Many` or `Many-To-Many`? 🚀

// To store **email, username, and password** securely in a database using Sequelize, you should follow best practices for authentication, including **password hashing** and **validation**.

// ### **Defining the User Model with Authentication Checks**
// ```javascript
// const { Sequelize, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');

// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('User', {
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true, // Ensures valid email format
//     },
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       len: [3, 20], // Restricts username length
//     },
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       len: [8, 100], // Ensures password length
//     },
//   },
// }, {
//   hooks: {
//     beforeCreate: async (user) => {
//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(user.password, salt); // Hash password before storing
//     },
//   },
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   console.log('User table created!');
// })();
// ```

// ### **Authentication Process**
// To authenticate a user, compare the hashed password stored in the database with the password provided during login.

// ```javascript
// const authenticateUser = async (email, password) => {
//   const user = await User.findOne({ where: { email } });
//   if (!user) return console.log('User not found');

//   const isValid = await bcrypt.compare(password, user.password);
//   if (isValid) {
//     console.log('Login successful!');
//   } else {
//     console.log('Invalid password');
//   }
// };
// ```

// ### **Best Practices**
// - **Use bcrypt** to hash passwords before storing them.
// - **Validate email and username** to prevent incorrect data.
// - **Implement JWT (JSON Web Token)** for secure authentication.
// - **Use environment variables** to store sensitive data like database credentials.

// Would you like to see how to implement JWT authentication for login sessions? 🚀

// To enforce password complexity in Sequelize, you can use **custom validation** to require special characters, numbers, uppercase, and lowercase letters.

// ### **Example: Password Validation in Sequelize**
// ```javascript
// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('User', {
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       isValidPassword(value) {
//         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!regex.test(value)) {
//           throw new Error('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
//         }
//       },
//     },
//   },
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   console.log('User table created!');
// })();
// ```

// ### **How It Works**
// - The **regular expression (`regex`)** ensures:
//   - At least **one lowercase letter** (`[a-z]`).
//   - At least **one uppercase letter** (`[A-Z]`).
//   - At least **one number** (`\d`).
//   - At least **one special character** (`[@$!%*?&]`).
//   - Minimum **8 characters** in length.

// Would you like to integrate this validation with **password hashing** for better security? 🚀

// validate:{
// isEven(value){
//     if(parseInt(value) %2 !===0)
//         console.log("Only even number is allowwed!")
// },
// isEmail : true,
// }


app.listen("5000", ()=>{
    console.log("Server/ nodejs project has started successfully at 5000")
})
