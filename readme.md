# Restaurant List Project

## Project Title
**Restaurant List**

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kellyontheboat/restaurantsList.git
   cd restaurantsList
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Features
- View a list of restaurants.
- Input keywords to search for matching restaurant names and categories.
- View detailed information about a specific restaurant.

## How to Use
1. Access the home page by navigating to [http://localhost:3000](http://localhost:3000).
2. Browse through the list of restaurants.
3. Use the search functionality to find restaurants based on keywords.
4. Click on a restaurant to view its details.

## API Reference
The project uses a local JSON file (`restaurant.json`) to store restaurant data. The API endpoints include:

- **`/`**: Redirects to the `/restaurants` route.
- **`/restaurants`**: Displays the list of restaurants.
- **`/search`**: Handles keyword-based restaurant search.
- **`/restaurants/:id`**: Displays details of a specific restaurant based on the provided ID.

## License
This project is licensed under the [MIT License](LICENSE).

**Note:** Ensure that Node.js and npm are installed on your machine before running the application. You may need additional configuration or setup depending on your development environment.