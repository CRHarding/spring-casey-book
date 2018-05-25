INSERT INTO USERS (USER_NAME, FIRST_NAME, LAST_NAME, EMAIL, LOCATION)
VALUES
    ('CRHarding', 'Casey', 'Harding', 'casey.r.harding@gmail.com', 'New York, New York'),
    ('RBritt', 'Ryan', 'Brit', 'r.britt@gmail.com', 'New York, New York'),
    ('Doodeitstom', 'Tom', 'Choe', 't.choe@gmail.com', 'New York, New York');

INSERT INTO FRIENDS (STATUS, SENT_REQUEST, RECEIVED_REQUEST, SENT_REQUEST_USER_NAME, RECEIVED_REQUEST_USER_NAME)
VALUES
    (0, 1, 2, 'CRHarding', 'RBritt'),
    (1, 1, 3, 'CRHarding', 'Doodeitstom');

INSERT INTO POSTS (POSTER_ID, POSTER_USER_NAME, POST_TEXT)
VALUES
    (1, 'CRHarding', 'This is my first post!'),
    (2, 'RBritt', 'I love this app!'),
    (3, 'Doodeitstom', 'Friend me to find out more!'),
    (1, 'CRHarding', 'This is my second post!');

INSERT INTO COMMENTS (COMMENTER_ID, POST_ID, COMMENTER_USER_NAME, COMMENT_TEXT)
VALUES
    (2, 1, 'RBritt', 'Welcome to Casey Book!'),
    (3, 1, 'Doodeitstom', 'Awesome! Welcome!'),
    (1, 2, 'CRHarding', 'Im glad you like it!'),
    (2, 3, 'RBritt', 'Im friending ya!');