# AI-Powered Study Planner

## Overview

The AI Study Planner is a Next.js application that leverages the Groq API to generate detailed and personalized study plans for users. By inputting topics and the number of available study days, users can receive a structured breakdown of topics, resources, and recommendations. The application provides a seamless user experience with an intuitive interface and responsive design.

## Features

1. Interactive Input: Users can enter their study topics and set the number of days for the study plan.

2. Groq API Integration: Utilizes the llama-3.3-70b-versatile model from Groq API for generating study plans.

3. Responsive Design: Optimized for all screen sizes, providing a great user experience on mobile, tablet, and desktop devices.

4. Customizable UI: Beautiful, modern design with features like gradient backgrounds, shadows, and smooth interactions.

## Technologies Used

### Frontend:

1. Next.js: Framework for building the user interface.

2. React: Library for creating dynamic UI components.

3. CSS Modules: For styling the application.

### Backend:

1. Groq API:

2. Model: llama-3.3-70b-versatile

3. Used to generate personalized and accurate study plans.

4. Vercel: For deploying the Next.js application.

## How to Use

### Prerequisites

1. Node.js and npm installed on your system.

2. A Groq API key for making requests.

3. Git installed to manage source control.

### Steps to Set Up Locally

1. Clone the Repository:
```bash
git clone <repository-url>
cd ai-study-planner
```

2. Install Dependencies:
```bash
npm install
```

3. Set Up Environment Variables:
Create a .env.local file in the root directory and add the following:
```bash
GROQ_API_KEY=your_groq_api_key
```

4. Run the Development Server:
```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the application.

5. Deploying on Vercel

    i. Connect to GitHub Repository:

    ii. Push your local repository to GitHub.

    iii. Go to Vercel and create a new project.

    iv. Link your GitHub repository to the Vercel project.

    v. Set Environment Variables on Vercel:

    vi. In the Vercel dashboard, navigate to Settings > Environment Variables.

    vii. Add your GROQ_API_KEY.

    viii. Deploy: Vercel will automatically detect the Next.js app and deploy it.

Once deployed, access your app via the provided Vercel URL.

## Folder Structure

```bash
├── pages
│   ├── index.js         // Home page of the application
│   └── api
│       └── generate-plan.js  // Backend API route to call the Groq API
├── public               // Static files
├── styles
│   ├── global.css       // Global styles for the application
├── .env.local.example   // Example environment variable file
├── .gitignore           // Files and folders to ignore in Git
├── package.json         // Project configuration and dependencies
└── README.md            // Documentation for the project
```

## Example Usage

1. Open the application.

2. Enter the topics you want to study (e.g., "React, Node.js, CSS").

3. Specify the number of days available for the study plan (e.g., "7").

4. Click on Generate Plan.

5. View the generated study plan in a structured format.

6. Contributing

## We welcome contributions! Please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Commit your changes and push them to your fork.

4. Create a pull request describing your changes.

## License

This project is licensed under the MIT License.