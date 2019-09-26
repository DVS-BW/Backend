# Backend Repo

### Base URL: `https://dvs-bw-lambda.herokuapp.com/`

## Endpoints

 ### Register/Login
 Method | Endpoint | Description 
 ------ | -------- | -----------
 POST | `api/auth/register` | Accepts `username`, `password`, and optional `admin` boolean, creates entries on the `users` and `calc` tables, and returns the user id, username, tokenized password, and admin status. Admin status defaults to 0/false; this was included in case we wanted to write some admin tools as stretch.
 POST | `api/auth/login` | Accepts `username` and `password` and returns the username and id. If username and passwords match, sets cookie and session to the logged-in user.
 GET | `api/auth/logout` | Destroys session if exists.

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
 PUT | `api/calc` | Requires cookie/session. It accepts the entire calculator state. The request is stringified and saved to the `calc` table along with the `user_id` defined in the current session.
 GET | `api/calc` | Requires cookie/session. The response object can be used 1:1 as the calculator state.

 #### Accepted Schema

 ```
 {
    totalCost: 0,
    health: {
        monthly_health_expenses: 0,
        medication_costs: 0,
        health_insurance_costs: 0,
        miscellaneous_expenses: 0,
        isHealthEditing: false
    },
    food: {
        monthly_costs: 0,
        stock_up: 0,
        dineout: 0,
        isFoodEditing: false
    },
    security: {
        monthly_security: 0,
        phone_change: 0,
        extra_security: 0,
        locks_change: 0,
        isSecurityEditing: false
    },
    transportation: {
        monthly_trans: 0,
        rent: 0,
        utilities: 0,
        moving: 0,
        isTransEditing: false
    },
    debt: {
        credit_card: 0,
        personal_loan: 0,
        car_loan: 0,
        mortgage: 0,
        student_loans: 0,
        other: 0,
        isDebtEditing: false
    }
}
 ```

 ### ADMIN/TESTING

 Method | Endpoint | Description 
 ------ | -------- | -----------
 GET | `api/calc/test` | Displays `calc` table containing all users.

