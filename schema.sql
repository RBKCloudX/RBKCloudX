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
    title VARCHAR(275) NOT NULL,
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

finally, Wait to be in the right mood, or wait for the “right time” to tackle a task

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