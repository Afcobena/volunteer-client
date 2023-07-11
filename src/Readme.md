# Backlog Quest

<br>

## Description

This is an app for create and collaborate for volunteering. Here you will can create new proposals for diferents categorys.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start playing into competition
-  **Login:** As a user I can login to the platform so that I can play competitions
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Proposal** As a user I can add Proposal to my backlog
-  **Edit Proposal** As a user I can edit the Proposal, so I can add scores
-  **Delete Proposal** As a user I can delete Proposal from my backlog
-  **View Proposals** As a user I can see all the Proposal y los detalles.
-  **Add elements** As a user I can add Collaborates to my backlog
-  **Edit Collaborates** As a user I can edit the Collaborates, so I can add scores
-  **Delete Collaborates** As a user I can delete Collaborates from my backlog
-  **View Collaborates** As a user I can see all the Collaborates y los comentarios.



-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start creating and managing my backlog
-  **Login:** As a user I can login to the platform so that I can start creating and managing my backlog
-  **Logout:** As a user I can logout from the platform so no one else can modify my information
-  **Toogle media** As a user I can toogle between different types of media
-  **Add elements** As a user I can add elements to my backlog
-  **Delete elements** As a user I can delete elements from my backlog
-  **Mark elements** As a user I can mark elements in my backlog as done
-  **Random element** As a user I can get a random element from my backlog
-  **Check profile** As a user I can check my profile and stats

## User profile

- see my profile
- see my proposals
- see my collaborate

<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions | Behavior                                                     |
| ------------------------- | --------------------           | ----------- | ------------------------------------------------------------ |
| `/`                       | Home                     | public `<Route>`            | Home page                                        |
| `/signup`                 | SignupPage                     | public `<Route>`    | Signup form, link to login, navigate to login after signup |
| `/login`                  | LoginPage                      | public `<Route>`     | Login form, link to signup, navigate to homepage after login  |
| `/logout`                 | n/a                            | public `<Route>`  | Navigate to homepage after logout, expire session             |
| `/proposals`         | Proposals | user only `<PrivateRoute>`  | Shows all proposals backlog                                |
| `/proposal/:id/details`          | Proposal | user only `<PrivateRoute>`  | Shows Proposal details backlog                                    |
| `'/profile'`          | NavBar | user only `<PrivateRoute>`  | Shows your profile                                    |

          

## Components

- AddForm

- Collaborate

- CollaborationList

- IsPrivate

- NavBar

- SearchBar

- UserCollabList
 

## Services

- Auth Service
  - auth.signupService(user)
  - auth.loginService(user)
  - authverifyService()

<br>


# Server / Backend


## Models

User model

```javascript
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },

    email: {
      type: String,
      unique: true,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },

    proposal: {
      type: Schema.Types.ObjectId,
      ref: "Proposal",
    },

    collaborate: {
      type: Schema.Types.ObjectId,
      ref: "Collaborate",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
```



Proposal model

```javascript
 const proposalSchema = new Schema(
  {
    

    date: {
      type: String
    },

    title: {
      type: String,
      unique: true,
      required: true,
    },

    category: {
      type: String,
      enum: arrCategory,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    collaborate: {
      type: Schema.Types.ObjectId,
      ref: "Collaborate",
    },
  },
  
  {
    timestamps: true,
  }
);

const Proposal = model("Proposal", proposalSchema);
```


Collaborate model

```javascript
 const collaborateSchema = new Schema(
  {
    category: {
      type: String,
      enum: arrCollaborations,
      required: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    proposal: {
      type: Schema.Types.ObjectId,
      ref: "Proposal",
    },

    text: {
      type: String,
    }

  },
  
  {
    timestamps: true,
  }
);

const Collaborate = model("Collaborate", collaborateSchema);
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/verify`           | Saved session                | 200            | 404          | 

| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          |
| POST        | `/auth/auth/verify`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| POST        | `/search/add`                 | {platform, title, type, id}  |                | 400          | Add new backlog element and add to user                                               |
| GET         | `series`             |                              |                | 400          | Show series elements                                           |
| GET         | `/backlog/films`              |                              |                |              | Show film elements                                           |
| GET         | `/backlog/games`              |                              |                |              | Show games elements                                          |
| GET         | `/media/:id`                        |                              | 201            | 400          | Show specific element                                        |
| PUT         | `/media/:id`                 |                              | 200            | 400          | edit element                                                 |
| DELETE      | `/media/:id`                 |                              | 201            | 400          | delete element                                               |
| GET         | `/done/series`                |                              |                | 400          | Show series elements                                         |
| GET         | `/done/films`                 |                              |                |              | Show film elements                                           |
| GET         | `/done/games`                 |                              |                |              | Show games elements                                          |



<br>


## Links


### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Afcobena/volunteer-client)

[Server repository Link](https://github.com/Afcobena/volunteer-server)

[Deployed App Link](https://volunteer-now.netlify.app)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1zndKZ8DC-_i391alptPKsAKanCSXTrLVL39L3xtEjz8/edit?usp=sharing)