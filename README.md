
## Project Overview

This website is designed to summarize changelogs from GitHub repositories. As a developer, GitHub is one of the most common tools used, and when working on large codebases, it becomes tedious and time-consuming to go through all the commit messages. This website simplifies that process and saves time by automatically summarizing commit messages into meaningful changelogs.

# React + TypeScript + Vite

## Installation and Setup

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install dependencies using npm:
  ```sh
  npm install
  ```

### Running the Application
- Start the development server:
  ```sh
  npm run dev
  ```

## Environment Variables
For local development, create a `.env` file and define the following variables:
```env
VITE_API_FRONTEND_URL='http://localhost:5173'
VITE_API_BACKEND_URL=''
VITE_API_LOCAL_CLIENT_ID='YOUR_GITHUB_CLIENT_ID'
```
> **Note:** The GitHub Client ID is required for authentication.

## Product Decisions
- Users can log in using GitHub authentication.
- The application follows the **Single Page Application (SPA)** architecture for a seamless user experience.
- A clean and minimal UI allows users to toggle additional information when needed.
- Provides immediate user feedback, such as loading states and notifications.
- Users can edit and add changelogs as standard operations.
- **Deleting changelogs is restricted**:
  - Generally, changelogs should remain once published, as they serve as historical records.
  - Editing is preferred over deletion for modifications.
  - The only scenario where deletion is allowed is when the latest changelog needs to be merged with an upcoming one.
  - The delete feature is fully implemented but only made visible for future use if a valid need arises.
- **For first-time users**:
  - Users are required to create their changelogs first.
  - When they return for a new changelog, based on the date of the previous changelog, commits after that date will be provided automatically. This eliminates the need for users to track commit history.
  - This creates a sense of "sunk cost," as users may prefer to stay with the app due to the importance of their historical records for changelogs.

  

## Technical Decisions

### Deployment
- **Vercel**: Chosen for its fast deployment speed and generous free-tier service, outperforming alternatives like Render, AWS, and Heroku.

### Development Stack
- **Vite**: Offers significantly better performance than Create React App, making it an optimal choice for modern web development.
- **TypeScript**: Ensures improved code quality, readability, and maintainability through static typing.
- **Tailwind CSS**: Simplifies styling compared to traditional CSS.
- **Zustand**: Used for global client state management, facilitating better component decoupling.
- **React Query**: Manages server state efficiently and keeps data fresh.
- **Axios**: Chosen over Fetch for easier configuration of authorization headers, particularly for GitHub authentication.
- **React-Quill**: Enables users to customize changelogs efficiently.

### Code Structure
- Follows a modular approach, keeping files small and manageable for easier editing and troubleshooting.

## To-Do List
- Add a calendar feature for changelogs.
- Integrate Elasticsearch for easier searching of existing changelogs.

