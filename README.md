# "Blargh" (Blog) -
onomatopoeia- "Blargh"- has been used in pop culture for two things.
1. The sound one makes while sea sick. 
2. The sound a pirate makes. 

In this context it is used as a pun with the rhyme for blog. 
Blogs and copywriting have a tendency to ramble on. A newer phrase for this is "word vomit". So, "Blargh", and "Blog" are related in this instance. 

I apologize for being punchy. Its late, I'm exhausted and pushing very hard to get this completed. 

## Description
This is a blog site. When logged in users can utilize it kind of like reddit or twitter. they can make posts and comment on posts. 

## Install
There are essential dependencies. Run your terminal with the cmd, "npm run install", or "npm i".


## Usage
Make sure you have mysql installed.

in the terminal you'll do this:
mysql -u root
source db/schema.sql
show databases;
use techy_blargh_db
exit
- you'll then need to seed the database.
node seeds/index.js
-then start the server.
npm run start
-then cmd click the PORT hyperlink. (should run on PORT 3003)

## Picture
<img width="1586" alt="Screenshot 2024-01-09 at 5 32 54 PM" src="https://github.com/NikWhit/Blargh/assets/135679785/dbbfd75b-2121-4a2a-b796-eeeac43a4163">


## Credits
I credit those who wrote the code to the lesson materials. 
UofU-VIRT-FSF-PT-06-2023-U-LOLC-main/14-MVC/01-Activities/28-Stu_Mini-Project
    This is where I pulled a majority of my code and organization for the code. 


## Credit to AI Help for Order of Operations
I also used ChatGPT. It gave me a cognizant order of operations. Here are is a copy/paste of the exact message it returned me. 

I didn't use any code generated by ChatGPT, only this outline of order of operations. 
  
"
To implement this CMS-style blog site with MVC architecture, you can follow these general steps:

1. **Design the Database:**
   Create a database schema to store information such as users, blog posts, comments, etc. You might have tables like `Users`, `BlogPosts`, `Comments`, etc.

2. **Set Up Models:**
   Create model classes for users, blog posts, and comments. These models will interact with the database and represent the data in your application.

3. **Create Controllers:**
   Implement controllers for handling different actions in your application. You may have controllers for user authentication, managing blog posts, comments, etc.

4. **Implement Views:**
   Develop views for different pages, such as the homepage, dashboard, blog post details, user authentication, etc. Use these views to present information to the users and receive user input.

5. **Implement User Authentication:**
   Integrate a user authentication system to handle user sign up, sign in, and log out functionalities.

6. **Add Authorizations:**
   Implement authorization checks to ensure that users can only perform actions they are allowed to, e.g., editing or deleting their own posts.

7. **Implement Session Management:**
   Handle user sessions to keep track of logged-in users and their activities. Implement idle timeout functionality as described in the user story.

8. **Handle Comments:**
   Implement functionality to add, view, and manage comments on blog posts.

9. **Implement CRUD Operations:**
   Implement Create, Read, Update, and Delete (CRUD) operations for blog posts.

10. **Navigation:**
    Implement navigation links and ensure that users are directed to the correct pages based on their actions.

11. **Styling and UI Design:**
    Apply styles and design your UI to make it user-friendly. Consider using a responsive design for better usability on different devices.

12. **Testing:**
    Thoroughly test your application to ensure that it meets the acceptance criteria. Test user authentication, CRUD operations, session management, and other functionalities.

Remember to use a reliable and secure framework for your MVC application. Popular choices include ASP.NET MVC for C#/.NET applications, Django for Python applications, or Laravel for PHP applications. These frameworks provide tools and conventions to help you implement MVC architecture effectively.
"




