# Backend Repo

### Base URL: `https://dvs-bw-lambda.herokuapp.com/`

## Endpoints

 ### Register/Login
 Method | Endpoint | Description 
 ------ | -------- | -----------
 POST | `api/auth/register` | accepts `username`, `password`, and optional `admin` boolean, creates a user on the `users` table, and returns the id (referred hereafter as `user_id`), username, tokenized password, and admin status. 
 POST | `api/auth/login` | accepts `username` and `password` and returns the username and user_id. If username and passwords match, sets cookie and session to the logged in user.

 #### Accepted Register/Login Schema
 ```
{
    username: string,
    password: string,
    admin: integer //defaults to 0, 1 for admin. OPTIONAL: included in case we had time to build a set of admin tools.
}
 ```
