# Backend Repo

### Base URL: `https://dvs-bw-lambda.herokuapp.com/`

## Endpoints

 ### Register/Login
 Method | Endpoint | Description 
 ------ | -------- | -----------
 POST | `api/auth/register` | Accepts `username`, `password`, and optional `admin` boolean, creates a user on the `users` table, and returns the id (referred hereafter as `user_id`), username, tokenized password, and admin status. Admin status defaults to 0/false; this was included in case we wanted to write some admin tools as stretch.
 POST | `api/auth/login` | Accepts `username` and `password` and returns the username and user_id. If username and passwords match, sets cookie and session to the logged in user.

 #### Accepted Register/Login Schema
 ```
{
    username: string,
    password: string
}
 ```

 ***

### Calculator
 Method | Endpoint | Description 
 ------ | -------- | -----------
 GET | `api/calc` | Requires cookie/session. Only retrieves data for the logged in user.

 #### Accepted Schema
 ```
{
   
}
 ```