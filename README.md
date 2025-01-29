# React To-Do List with Bun

A simple To-Do List application built with React and Bun. This app allows users to add, mark as complete, and remove tasks. The application uses localStorage to persist the to-do items, and it features prioritization with icons.

## Features

- **Add new tasks** to the list.
- **Mark tasks as complete**.
- **Remove tasks** from the list.
- **Priority system** to categorize tasks.
- **LocalStorage** integration to persist tasks even after a page refresh.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Bun**: A modern JavaScript runtime used for development and build.
- **Bootstrap**: A popular CSS framework used for styling.
- **React Icons**: Used for displaying icons (e.g., add, remove, priority).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zoelabbb/todo-apps-reatcxbunjs.git
   cd react-todo-bun
   ```

2. Install dependencies using Bun:

   ```bash
   bun install
   ```

3. Run the development server:

   ```bash
   bun dev
   ```

   Your app should now be running on `http://localhost:3000`.

## Building for Production

To build the app for production, run the following command:

```bash
bun build src/main.tsx --outdir dist
```

This will create a production build of your app in the `dist` folder.

## Deploy to Vercel

1. Install the Vercel CLI if you haven't already:

   ```bash
   npm install -g vercel
   ```

2. Deploy your app:

   ```bash
   vercel --prod
   ```

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
