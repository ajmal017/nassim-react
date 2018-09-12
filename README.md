# Nassim React Frontend
- Frontend for a stock trading app.

## Developing data in component (see `Transaction` example)
1. Do everything with fake data in JSX
2. Create an object with fake data in state and overwrite all the fake data with the state
3. Refactor all in different components - break down to smaller components
4. Call external API
	- `ComponentDidMount()`
	- `this.setState()` with the call result

## Stack
- Frontend: React, Redux
- Styling: [React-Bootstrap](https://react-bootstrap.github.io/)
- Authentication: Google Sign-in, Facebook Sign-in
- Backend: [Nassim API](https://github.com/elainechan/nassim-api)
- Database: MongoDB Atlas, Google Cloud
- Deployment: Heroku, Netlify, Travis CI
- Testing: Enzyme

## Planning
- [ ] [Data model and data flow diagrams](https://www.lucidchart.com/invitations/accept/a3d05af8-7701-45f3-9d95-aea6e53bf1fe)
	- [x] Data model
	- [ ] Data flow
- [x] [User flow and class diagrams](https://www.lucidchart.com/invitations/accept/b753933a-e61a-419a-bb17-512399382754) - click tabs on the bottom to toggle between user flow diagram and class diagram
	- [x] [Buy and Sell mindmap](https://www.mindmeister.com/1142330199?t=X3o3zAO1xb)
	- [x] Buy
	- [x] Sell
	- [x] Sign up
	- [x] Sign in
- [ ] Page mockups
	- [ ] [Header and Footer]()
	- [ ] Home
	- [ ] Landing
	- [x] Market View
		- [x] [grid view](https://wireframe.cc/6lapy6)
		- [x] [list view](https://wireframe.cc/8Wsa4O)
	- [x] [Stock](https://wireframe.cc/OLjSTq)
	- [ ] [Transactions]()
	- [ ] [Portfolio]()
	- [ ] [Account]()

## Setup
- [x] Create React app
- [x] Install npm modules
	- [x] react-dom
	- [x] react-router-dom
	- [x] dotenv
- [x] Set up common components 
	- [x] Header
	- [x] Main
	- [x] Footer
- [x] Set up generic pages
	- [x] Home
	- [x] Landing
	- [x] About
- [x] Set up CSS library
- [ ] Set up Enzyme for testing

## Wireframe
### Core Components
- [x] Auth
	- [x] Register
	- [x] Login
- [x] General
	- [x] Header
	- [x] Main
	- [x] Footer
- [ ] Home
- [ ] Landing
- [ ] Account
	- [ ] Email
	- [ ] Password
	- [ ] Balance
	- [ ] Assets
- [ ] Stock
	- [ ] Buy
	- [ ] Sell
- [ ] Portfolio
- [ ] Transaction
### Authentication
- [x] Sign up
- [x] Sign in
- [ ] Google sign-in - [reference](https://developers.google.com/identity/sign-in/web/sign-in)
- [ ] Facebook sign-in - [reference](https://developers.facebook.com/docs/facebook-login/web)
- [ ] GitHub sign-in
- [ ] LinkedIn sign-in



### Notes
- See [notes](https://github.com/elainechan/nassim-react/blob/master/notes.md) for external APIs and libraries.