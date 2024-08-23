# GitHub Finder

GitHub Finder is a web application that allows users to search for GitHub profiles using a username. The app retrieves and displays details about the GitHub user, such as their profile picture, name, username, bio, and location, using the GitHub API.

## Demo
[https://github.com/vishaljavare4/GitHub_Finder.git](#) — Check out the repository of the project.

[https://vishaljavare4.github.io/GitHub_Finder/](#) — Check out the live version of the project.

## Features

- **Search Functionality**: Input a GitHub username to retrieve and display the user's profile details.
- **User Information Display**: Shows the user's profile picture, name, username, bio, and location.
- **Error Handling**: Displays user-friendly error messages if the GitHub username is not found.
- **Light/Dark Theme**: Switch between light and dark themes.
- **Responsive Design**: The app is fully responsive, ensuring it looks good on all screen sizes.
- **Animations**: Subtle animations enhance user experience, including a playful loading animation when fetching data.

## Usage

1. Enter a GitHub username into the search bar.
2. Click the "Search" button or press "Enter".
3. The app will fetch and display the user's GitHub profile details.
4. If the user is not found, a clear and concise error message will be displayed.

## Project Structure

The project is structured in a modular way, making it easy to maintain and extend. Key directories and files include:

- `src/`: Contains the source code of the application.
  - `components/`: Reusable components such as `SearchBar`, `UserProfile`, and `ErrorNotification`.
  - `services/`: Contains the `api.js` file, which handles GitHub API requests.
  - `styles/`: Contains all the CSS files for styling the application.
  - `App.js`: The main component that orchestrates the application.
  - `index.js`: The entry point of the application.

## API Integration

This project integrates with the GitHub API to fetch user data based on the username provided. The API is accessed via a GET request to the following endpoint:

https://api.github.com/users/${username}


### Handling API Requests

- The app makes an API request when the user submits a GitHub username.
- The response is parsed, and the relevant user information is displayed.
- If the username does not exist, the app handles the error gracefully by showing an error message.

## UI Design

The application’s UI was designed with the following principles in mind:

- **Clean and Modern Layout**: The interface is straightforward, making it easy for users to search for GitHub profiles.
- **Responsive Design**: Ensures that the application is usable on various devices, from mobile phones to desktops.
- **Color Scheme**: Uses a cohesive color palette to ensure visual appeal and ease of use. Includes a dark and light mode for user preference.

## Error Handling

Error handling is a critical part of the application:

- **User Not Found**: If a username does not exist, the application displays a friendly error message.
- **Network Errors**: In case of network issues, the app provides an appropriate message to the user.
- **Input Validation**: The search bar validates input to prevent empty submissions.
