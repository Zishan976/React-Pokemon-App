# React Pokemon App

This is a React application that displays a list of Pokemon with search and pagination functionality.

## Features

- Fetches Pokemon data from the PokeAPI.
- Client-side search to filter Pokemon by name.
- Client-side pagination to navigate through the list of Pokemon.
- Responsive and styled UI.

## Deployment

To deploy this app on Render:

1. Push your project to a Git repository (GitHub, GitLab, etc.).
2. Create a new Web Service on Render.
3. Connect your Git repository to Render.
4. Set the build command to:
   ```
   npm install && npm run build
   ```
5. Set the publish directory to:
   ```
   build
   ```
6. Deploy the service and access your live app via the provided URL.

## Development

To run the app locally:

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open your browser at `http://localhost:3000` (or the port specified).

## Notes

- Pagination and search are implemented client-side.
- The app fetches 150 Pokemon from the PokeAPI on load.
- Styling uses CSS variables and is responsive.

## License

MIT License
