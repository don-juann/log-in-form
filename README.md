# Simple Login and Registration System

This is a simple login and registration system built using Node.js, Express.js, and MongoDB. It allows users to register with a username and password and log in with their credentials.

## Project Structure

- `index.ejs`: HTML template for the login page.
- `register.ejs`: HTML template for the registration page.
- `config.js`: Configuration file for connecting to MongoDB and defining the user schema.
- `index.js`: Main server file containing routes for handling login, registration, and server setup.

## Installation

1. Clone the repository:

git clone https://github.com/don-juann/login-registration-system.git

2. Navigate to the project directory:

cd login-registration-system

3. Install dependencies:

npm install

4. Set up MongoDB:
- Make sure you have MongoDB installed and running locally on port `27017`.
- If MongoDB is running on a different port or host, update the connection string in `config.js`.

5. Start the server:

npm start

6. Access the application in your browser at `http://localhost:3000`.

## Usage

- Visit `http://localhost:3000` to access the login page.
- If you don't have an account, click on the "Create Account" link to register.
- After registering, you can log in with your credentials.
- Upon successful login, you'll be redirected to a success page.
- If the login credentials are incorrect, you'll be notified accordingly.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Author

-Zhan Kazikhanov (Astana IT University)

