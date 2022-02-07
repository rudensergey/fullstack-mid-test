# FullStack Mid Test

### The Challenge
The challenge is split into two parts. Depending on where your strengths lie feel free to tackle 1 or both of the tasks.

We use NextJS, both the BE and FE tasks can be accomplished in the same application boilerplate. Therefore, we have leveraged API routes for the BE task and the standard pages structure for the FE task.

#### BE Task
Create a custom rest API to pre-filter all required data needed. The required data includes getting all Alive, Morty characters along with all of their associated data types Origin, Location and Episode data from the Rick and Mort API. https://rickandmortyapi.com/. Please ensure you read the docs thoroughly https://rickandmortyapi.com/documentation.

The interfaces in the codebase will show you what the data structure **must** look like, if you need to extend them, feel free! However, the original structure must stay unchanged.

#### FE Task
Build a simple UI to list all characters using the mockdata provided and using the basic wireframes provided. There is mockdata for the character listing page and for the individual character page. The pages themselves have been added.

##### Please ensure your work checks all the points below – it’s what we will be looking out for

- Your chosen method for fetching and aggregating data. (BE only)
- Chosen folder structure
- The layout should be based on the wireframes provided.
- Final work (whether complete or part complete) should be submitted in a git repository. (ideally we would like to see a commit history of some sort). With a README.md file, so we can run the app locally and test it ourselves.
- For the BE task **DO NOT use the Rick and Morty JavaScript library**. We want to see how you architect aggregating data.
- The site should be built using HTML, CSS and JavaScript (TypeScript), and as far as styling is concerned: SCSS, Post CSS, CSS Modules, and CSS-in-JS are all encouraged.
- The FE task should be built using responsive techniques.

### Taking things further:
(Not a requirement but if you think it will help us assess your skill level and passion).  If you have the time, here are some suggestions to enhance the app:

- Add eslint and a config
- Add prettier and a config
- Unit tests
- Use path aliases for TS
- Introduce a build pipeline using Github CI / Circle CI or other CI tools.
- Responsive images (FE task)
- Performance optimisation (add a cache layer) - BE Task



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
