# Inspirational Homepage

## Purpose of the Project

The Inspirational Homepage is a dynamic web application designed to provide users with an uplifting and motivational start to their day. It combines current weather information, beautiful background images, inspirational quotes, and a space for users to write and manage their daily goals. This app serves as a fancy to-do list with added features to inspire and organize users.

## Technologies Used

- **Frontend**:

  - React: For building the user interface.
  - Redux: For state management.
  - CSS: For styling the components.

- **APIs**:

  - OpenWeather API: For fetching current weather data.
  - Quotable API: For fetching inspirational quotes.
  - Unsplash API: For fetching beautiful background images.

- **Deployment**:
  - Netlify: For deploying the application and making it accessible online.
  - Git & GitHub: For version control and code hosting.

## Features

- **Current Weather**:

  - Displays the current weather information for the user's location.

- **Inspirational Images**:

  - Shows a beautiful background image fetched from Unsplash.
  - Allows users to cycle through multiple fetched images.

- **Inspirational Quotes**:

  - Displays a new inspirational quote each time the page is refreshed.

- **Goals Management**:
  - Users can write down their goals for the day.
  - Users can mark goals as complete.
  - Users can delete goals.

## Future Work

- **User Authentication**:

  - Allow users to create accounts and log in to save their goals and preferences.

- **Customizable Backgrounds**:

  - Let users upload their own background images or choose from different categories.

- **Weather Forecast**:

  - Provide a weather forecast for the upcoming days.

- **Daily Reminders**:

  - Implement a reminder feature to notify users on their goals.

- **Enhanced UI/UX**:
  - Continuously improve the user interface and experience based on user feedback and best practices.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- A GitHub account.
- API keys for OpenWeather, Quotable, and Unsplash.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/makrischaralampos/inspirational-homepage.git
   cd inspirational-homepage
   ```

2. Install depedencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:

   ```
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key
   REACT_APP_QUOTES_API_KEY=your_quotes_api_key
   REACT_APP_UNSPLASH_API_KEY=your_unsplash_api_key
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
