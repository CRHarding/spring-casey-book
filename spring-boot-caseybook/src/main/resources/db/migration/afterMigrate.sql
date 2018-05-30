INSERT INTO USERS (USER_NAME, FIRST_NAME, LAST_NAME, EMAIL, LOCATION, ABOUT_ME)
VALUES
    ('CRHarding', 'Casey', 'Harding', 'casey.r.harding@gmail.com', 'New York, New York', 'I love making apps named after myself!'),
    ('RBritt', 'Ryan', 'Brit', 'r.britt@gmail.com', 'New York, New York', 'I like to program...'),
    ('Doodeitstom', 'Tom', 'Choe', 't.choe@gmail.com', 'New York, New York', 'I used to own a donut shop. Now I hate donuts'),
    ('SSontag', 'Susan', 'Sontag', 's.sontag@gmail.com', 'New York, New York', 'Youve never heard of me, have you?'),
    ('SBeauvoir', 'Simone', 'De Beauvoir', 's.beauvoir@gmail.com', 'New York, New York', 'You dont even read, bro');

INSERT INTO FRIENDS (STATUS, SENT_REQUEST, RECEIVED_REQUEST, SENT_REQUEST_USER_NAME, RECEIVED_REQUEST_USER_NAME)
VALUES
    (2, 1, 2, 'CRHarding', 'RBritt'),
    (2, 1, 3, 'CRHarding', 'Doodeitstom'),
    (1, 2, 3, 'RBritt', 'Doodeitstom'),
    (1, 1, 4, 'CRHarding', 'SSontag'),
    (3, 2, 4, 'RBritt', 'SSontag'),
    (1, 5, 2, 'SBeauvoir', 'RBritt'),
    (1, 5, 3, 'SBeauvoir', 'Doodeitstom'),
    (1, 5, 4, 'SBeauvoir', 'SSontag'),
    (1, 5, 1, 'SBeauvoir', 'CRHarding');

INSERT INTO POSTS (POSTER_ID, POSTER_USER_NAME, TITLE, POST_TEXT)
VALUES
    (1, 'CRHarding', 'First Post!', 'This is my first post!'),
    (2, 'RBritt', 'Best...app..every!', 'I love this app!'),
    (3, 'Doodeitstom', 'Hello world!', 'Friend me to find out more!'),
    (1, 'CRHarding', 'I wish I were more interesting...', 'This is my second post!'),
    (5, 'SBeauvoir', 'I really like this app!', 'One of the better social media apps that Ive encountered'),
    (4, 'SSontag', 'Ive seen better...', 'Seriously. What does everyone see in this app? Its a buncha fluff...');

INSERT INTO COMMENTS (COMMENTER_ID, POST_ID, COMMENTER_USER_NAME, COMMENT_TEXT)
VALUES
    (2, 1, 'RBritt', 'Welcome to Casey Book!'),
    (3, 1, 'Doodeitstom', 'Awesome! Welcome!'),
    (1, 2, 'CRHarding', 'Im glad you like it!'),
    (2, 3, 'RBritt', 'Im friending ya!');