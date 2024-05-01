
# TweetX

Implemented a social media web application where users can connect and share thoughts amongst each other. 

**Note:** Visit [tweetx-backend](https://github.com/ranepaarth/react-assignment-tweetx-backend) to install and setup the backend for this repository.

[Live Demo](https://tweetx-deploy.vercel.app/auth/login)


https://github.com/ranepaarth/react-assignment-tweetx/assets/130083485/7d500ce2-ed07-47ff-8789-366336977197

## Features

- Secured Authentication
- Forgot password
- CRUD functionality (for tweets)
- Connecting Users (follow/ unfollow another user)
- Searching Users (to connect or view their profile)
- Bookmark (help users to bookmark tweets of their choice)
- Like & dislike functionality (for tweets)



## Tech Stack

- [React / TailwindCSS](https://tailwindcss.com/docs/guides/vite)
- [React hook form](https://react-hook-form.com/get-started)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)


## Installation
1. Clone the repository: `git clone https://github.com/ranepaarth/react-assignment-tweetx.git`
2. Navigate to the project directory: `cd react-assignment-tweetx`
3. Install the dependencies: `npm install`
#### Environment Variables
Add a .env file in the root directory and follow  
```
# To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code.

# For development http://localhost:3000
# After deployment this will cahnge to your domain: e.g. https://example.com
VITE_API_URL

```

## Usage
1. Start development server `npm run dev`
2. Open your Browser and visit [http://localhost:5173](http://localhost:3000/auth/login) to view the website

## Concepts covered

- [X]  Configure store and create API slices
- [X]  State management with redux-toolkit
- [X]  Custom hooks 
- [X]  Prefetching with redux-toolkit
- [X]  Form field validation using [react-hook-form](https://react-hook-form.com/get-started)

## Deploy on Vercel

Create a `vercel.json` file in the root of the project.
Add the below lines of code inside your `vercel.json` file to configure your website for vercel deployment.

```
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

Check out our [Vite on Vercel](https://vercel.com/docs/frameworks/vite) for more details.
