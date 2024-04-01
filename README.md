Welcome to the Health Ecosystem App repository! This repository contains a React Native based mobile application with a Node.js backend. The purpose of this app is to provide a health ecosystem for patients, hospitals, and government entities to maintain transparency and facilitate the provision of free scheme benefits to those in need, as launched by the government.

Features
Patient Management: Patients can register, login, and manage their health records securely.
Hospital Integration: Hospitals can register, manage patient records, and interact with government schemes.
Government Schemes: Government entities can manage schemes, verify patients, and ensure transparency in benefit distribution.
Transparency: The application aims to provide transparency in healthcare services, ensuring that benefits reach those in need.
Technologies Used
React Native: Frontend framework for building mobile applications.
Node.js: Backend environment for server-side logic.
Express.js: Web application framework for Node.js.
MongoDB: Database system used for storing application data.
Firebase Authentication: For secure user authentication.
Redux: State management library for React applications.
Setup Instructions
To run this application locally, follow these steps:

Clone the repository: git clone <repository_url>
Navigate to the project directory: cd health-ecosystem-app
Install dependencies for frontend and backend:
Frontend: cd frontend && npm install
Backend: cd backend && npm install
Configure backend environment variables:
Create a .env file in the backend directory.
Define environment variables like DB_URI, PORT, etc. Refer to .env.example for guidance.
Start the backend server: npm start inside the backend directory.
Start the frontend development server: npm start inside the frontend directory.
Access the application in your browser or mobile device using the provided URLs.
