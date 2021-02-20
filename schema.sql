-- schema 
DROP DATABASE IF EXISTS blogX;
CREATE DATABASE blogX;
USE blogX;


-- table for users

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(75) NOT NULL,
    lastName VARCHAR(75) NOT NULL,
    username VARCHAR(75) NOT NULL UNIQUE,
    email VARCHAR(75) NOT NULL UNIQUE,
    imageUrl VARCHAR(4000) NOT NULL,
    bday VARCHAR(75) NOT NULL,
    password VARCHAR(150) NOT NULL, 
    PRIMARY KEY(id)
);

-- table for a posts 
CREATE TABLE blogs (
    post_id INT NOT NULL AUTO_INCREMENT,
    id int,
    -- post_id
    title VARCHAR(75) NOT NULL,
    body LONGTEXT NOT NULL,
    createdAt datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(post_id),
     FOREIGN KEY (id) REFERENCES users(id)
);

-- to run this schema you need to type this following code.
--  mysql -u root -p<schema.sql
-- 
insert into users(firstName,lastName,username,email,imageUrl,bday,password)values(
    "fakhreddine","messaoudi","lucifer","fakhri19971998@gmail.com","https://media.tenor.com/images/0134abc9714d4005c210b912ac512064/tenor.png",
    " 2021-02-10",
    "$2b$10$EKM.jyLhHTBhWQZ8i4dHvuoksWuj0DmUH6P8dyGUMrPs1izchs8.i"
);
insert into users(firstName,lastName,username,email,imageUrl,bday,password)values(
    "fakhreddine","messaoudi","luciferr","fakhri19971998r@gmail.com","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYJKg3F67LWMN5kE4gSz0j6-M0Bik7ps6hA&usqp=CAU",
    " 2021-02-10",
    "$2b$10$EKM.jyLhHTBhWQZ8i4dHvuoksWuj0DmUH6P8dyGUMrPs1izchs8.i"
);
INSERT INTO blogs (id,title, body)
VALUES(1,
        'Time management',
       "`Hi guys, I’m going to talk about some points that a lot of us missing in life, by beginning with the most common question, “ what is time management?”, benefits of having that skill, what are the killer tips to overcome procrastination then some tips might help you to implement and improve that skill, even if you do not have it, then prepare yourself to get that skill

First of all, What is time management? “Time management” refers to the way that you organize and plan how long you spend on specific activities

For example: let’s say that you have to prepare for tomorrow's exams, you have to take your dog out, you have laundry, then you have to meet your girlfriend

here is the skill of time management that you need to implement to solve all of these tasks at the right time

otherwise, you will find yourself lost and having a huge problem and you will miss everything

Now let me give you guys some of the benefits that you will earn when you get that skill: Greater productivity and efficiency

A better professional reputation

Less stress

Increased opportunities for advancement

Greater opportunities to achieve important life and career goals

Sounds good, isn’t it? if you have that skill then you are good and you are good to get even better and if not here what you need to do first

You need to understand the reasons why you are procrastinating before you can begin to tackle it

For instance, are you avoiding a particular task because you find it boring or unpleasant? If so, take steps to get it out of the way quickly, so that you can focus on the aspects of your job or the other activities that you find more enjoyable

Since you know that you are procrastinating, let’s see some quick tips that might help you to get yourself out of this shit

Fill your day with low-priority tasks

Leave an item on your To-Do list for a long time, even though it’s important

“it might sound a bit silly or weird but trust me it will help”

Read emails several times over without making a decision on what to do with them

“you really need to take your take to make a decision and not to regret it later” Start a high-priority task and then go off to make a coffee

“even if you do not like a coffee just go anywhere and rest your mind a bit, do something you enjoy after that”

Fill your time with unimportant tasks that other people ask you to do, instead of getting on with the important tasks already on your list

finally, Wait to be in the “right mood,” or wait for the “right time” to tackle a task

Now we are done with that, I really hope that you enjoyed my article, also I will do my best to share my knowledge with you guys and I hope I did not make it so long if so go wash your face and grub a cuppa! Comment below if you have anything to add`"
    );
       INSERT INTO blogs (id,title, body)
VALUES(1,
        'How do you win a negotiation against someone!',
        "`First of all, I will give you guys some tips that I personally use in my daily day during the hacking time with different pairs, Or let's say, coworkers ”
Tips: when you have an idea and you want to convince your pair, you need to be really ready to deliver it in a good way, you may ask me how? I will tell you how
let's say you have a great project idea and you have the worst pair in the world, also he does only what he has in his mind, he does not care about what you are going to say, the key to getting that person mind is to trick him by making him believe that you are interested in his idea, by the way, if he has a good idea you need to be the one who must be convinced, Alright, so as I said, you can use some adding words like “add to that, let’s look how can we improve your idea to be better, and so on”, you can ask him a confusing question about his idea and if he does not answer that means he does not know what he is talking about, so he does not have some advantages about his idea, here is your best time to implement your idea and show off your advantages idea and how can you both work on your idea and make it together
In this way, he will feel that you are forcing him to work on yours, but he will think that you are inviting him to make that idea together and he will listen to you
I tried to make these tips as simple as I could, also I hope that I deliver a clear message for you guys
If you have any idea, comment below!!`"
    );
    INSERT INTO blogs (id,title, body)
VALUES(2,
        'The différence between arrays and linked lists/Hash table
',
        "`First of all, we will be defining what is an array : An array is a kind of data structure that can hold for us some data type like booleans, strings, numbers, and even array itself or object and those other kinds of data, also null or undefined
The array is stored such that the position of each element can be computed from its index tuple by a mathematical formula
The array store the data as linear storage
Secondly, a linked list is another data structure, you basically can think of it as a box of elements that can be anywhere in the memory
The thing is that the linked list has a beginner part which is the “head” and it will be ending up with the tail which is the last part of the linked list
every box in this data are pointing to each other starting from the head going to the next box and the next box and so on until it will be pointed to the tail
the great thing about a linked list is when you want to add something you just create a new “node” which is this box that we talked about and point the tail of the previous node with the head of that node and Its tail will be pointing to the next head of the next node
if you want to delete a node you can simply change the point from the previous one and point it to the next node ( tail ) then it will be deleted
we do it this way because the linked list is considered as a chain of nodes
nodes are more useful than the array when we will be having a huge data to store because it is way optimal to iterate over it than the array
Finally, I will explain what is a Hash table, How it is working
first of all, I want you to imagine that the hash table is a big box that has an array inside it as storage data and another little box a secure function, you may not understand what is a secure function, I actually call it that way because this function does some a good stuff for us, so what do you think that this kind of data has that name, hash means encrypting data that will be stored inside its storage
let me try to explain what is going on inside the hash table
so whenever we want to add (insert) a specific element, let’s say we want to add “cat” as a key and its value will be “cute”, it will return undefined
the cat will be passed to this secure function to change it and make it a number in the array that will be stored according to the index and then the value will be saved right next to the index
whenever you want to get an element from the hashing table, you will pass the key again which is “cat” then the hash table will take and pass it to the ‘security function’ that will transfer it again as the same number that it has been save as
then will go directly to the index and give you back the next element which is the value that you’re looking for
comment below if you have anything else to add`"
    );