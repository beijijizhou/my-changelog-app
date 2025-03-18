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

