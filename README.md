# Project - 1 (React, Authorization, roles, hooks)
**Mohammed Shoman** • 3 Aug

## ScreenShots

### SignIn and SignUp Pages
![Screenshot](https://github.com/SalmanIyad/GSG-TT9-Project-Gamers-Website/assets/110406908/a372c036-ea0a-472c-a14f-2edb7e35b307)
![Screenshot](https://github.com/SalmanIyad/GSG-TT9-Project-Gamers-Website/assets/110406908/4e8b365e-f46e-4119-922d-b77f453e5480)

### HomePage
![Screenshot](https://github.com/SalmanIyad/GSG-TT9-Project-Gamers-Website/assets/110406908/ba96228f-cebb-4af8-88e0-9cb994b33130)
![Screenshot](https://github.com/SalmanIyad/GSG-TT9-Project-Gamers-Website/assets/110406908/45a2656e-c0e1-48db-acfc-701d944ae84e)

### UsersPage
![Screenshot](https://github.com/SalmanIyad/GSG-TT9-Project-Gamers-Website/assets/110406908/cde22dc8-9852-40f0-a965-cbb72a4f4e27)
![Screenshot](https://github.com/SalmanIyad/GSG-TT9-Project-Gamers-Website/assets/110406908/7a2eec1d-0aa6-4b94-ab25-56f45e407aed)


## Pages

### Login
- Form with two inputs (email and password).
- The user should enter a valid email and password (validated with yup).
- Pressing submit will show a loading state and move to the home page if authorized.
- If not authorized, it should display an error message.

### Signup
- Form with four inputs (username, email, password, and repeat password).
- The user should provide a valid username, email, and matching password and repeat password (validated with yup).
- Pressing submit will show a loading state and move to the home page if authorized.
- If not authorized, it should display an error message.

### Home Page
- Sidebar with logout and theme toggle (additional settings button for admins).
- Header displays the username and profile picture. Clicking on it navigates to the profile page.

### Profile Page
- Displays user info, including the header and sidebar.
- Design to be customized.

### Admin Page
- Visible only to admins.
- Clicking on the settings icon in the sidebar navigates to the admin page.
- Contains a user list with pagination and search.

## Roles
- Guest: Can view only (login, signup).
- User: Can view only (home, profile).
- Admin: Can view only (home, profile, admin).

## Routing
- Home Page → `/` (First page for authorized users).
- Login Page → `/auth/login` (Entry page when opening the app for the first time).
- Signup Page → `/auth/signup`.
- Profile Page → `/profile` (Clicking on profile picture in the header).
- Admin Page → `/admin/users` (Clicking on settings icon in the sidebar).

## Endpoints
- API_URL: `https://react-tt-api.onrender.com/api/`.
- Login:
  - Path: `/users/login`.
  - Method: POST.
  - Body: email, password.
  - Role: Guest.
- Signup:
  - Path: `/users/signup`.
  - Method: POST.
  - Body: name, email, password.
  - Role: Guest.
- Profile:
  - Path: `/users/profile`.
  - Method: GET.
  - Headers: Authorization: Bearer token.
  - Roles: Admin, User.
- Users:
  - Path: `/users`.
  - Method: GET.
  - Headers: Authorization: Bearer token.
  - Role: Admin only.
  - Query:
    - q: Search keyword (default is empty, returns all data).
    - page: Page number (default is 1).
    - size: Size of page (default is 10).
- Delete User:
  - Path: `/users/:id`.
  - Method: DELETE.
  - Headers: Authorization: Bearer token.
  - Role: Admin only.

## Technologies
- axios.
- react router.
- yup validation.
- react hook form.

## Requirements
- UI pixel perfect.
- Integration with APIs.
- Dark and light themes.
- Clean and scalable code.
- Reusable components.
- No hard coding (everything is a constant).
- Reusable hooks (useThemeContext, useAuth and useAuthContext, etc...).
- useReducer for large state management.
- Loading, error handling, confirmation dialogues.

## Notes
- DO NOT USE ANY THIRD PARTY LIBRARY EXCEPT THE MENTIONED.
- Test your code before pushing to GitHub.
- Use meaningful commits.
- Deploy your work on Netlify.


### Figma Designs

- [login Form - Figma Design](https://www.figma.com/file/EY9Z67LbWSA)

- [Gamers Page - Figma Design](https://www.figma.com/file/6Co5vT8rQcKTpPS9nlJ2nf/Game-Layout-PS-GAMES-(Community)?node-id=1%3A2&mode=dev)

## Deployment

- [Netlify Deployment](https://gsg-tt9-project-gamers-website.netlify.app/)