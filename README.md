# Test System

This application is a test system for conducting timed tests. It is implemented using React with TypeScript, React Router, and Tailwind CSS.

## Features

- Welcome page with a button to start the test.
- Test page displaying questions, progress bar, and timer.
- Mandatory selection of an answer for each question.
- Automatic test completion when time runs out, redirecting to the results page.
- Results page displaying the user's answers or a message indicating that the user did not answer any questions in time.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/eugenepokalyuk/react-madsoft.git
    cd react-madsoft
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm run start
    ```

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

<img src="https://skillicons.dev/icons?i=react,ts,tailwind" />

## Project Structure

```
src/
├── assets/
│   └── fonts
├── components/
│   ├── App - Main application component containing the routing.
│   ├── Footer - Component for the footer of the test page with the "Submit" button.
│   ├── Header - Component for the header of the test page with the timer.
│   ├── ProgressBar - Component to display the progress bar.
│   └── Question - Component to display a question and answer options.
├── pages/
│   ├── ResultPage - Component to display the results page.
│   ├── TestPage - Component to display the test page.
│   └── WelcomePage - Component to display the welcome page.
├── index.css
└── index.tsx - Application entry point.
```

## Features

- Saves test progress and remaining time in `localStorage` for recovery upon page reload.
- Uses Tailwind CSS for styling components.
- Handles time expiration and automatically redirects to the results page with a message indicating that time has expired.

## Future Improvements

- Add various types of questions (e.g., questions with images, videos, etc.).
- Implement an admin panel for editing and adding questions.
- Localize the application to support multiple languages.