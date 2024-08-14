# Inspirational Homepage

Inspirational Homepage is a React-based web application designed to uplift your day by combining beautiful imagery, motivational quotes, weather updates, and goal tracking all on one personalized homepage. It provides a seamless and interactive experience to keep you motivated and informed every day.

## Purpose

The purpose of Inspirational Homepage is to create a personalized, inspiring start to your day. With weather updates, motivational quotes, and the ability to track daily goals, this app aims to be the perfect homepage for users who want to stay motivated and organized.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Redux Toolkit**: State management for handling weather data, goals, and user preference.
- **Material-UI**: For consistent and modern UI components.
- **Axios**: For making HTTP requests to fetch weather data and background images.
- **Lodash**: Utility functions, such as debouncing API requests.
- **LocalStorage**: For persisting user data like goals and theme preferences.
- **CSS**: For styling and responsive design.

## Features

1. **Motivational Quotes**: Display a random quote each day to inspire users.
2. **Dynamic Background Images**: Beautiful background images that change daily or can be manually cycled.
3. **Weather Updates**: Real-time weather information based on your location or a manually entered city.
4. **Daily Goals**: Add, complete, and delete goals to keep track of your daily tasks.
5. **Dark Mode/Light Mode**: Toggle between dark and light themes based on user preference.
6. **Responsive Design**: Works seamlessly across different devices and screen sizes.
7. **API Request Optimization**: Debounced API requests to minimize load times and improve performance.
8. **Customizable Experience**: Users can manually set their location and personalize their homepage.
9. **Accessibility**: Implemented ARIA labels and semantic HTML for better accessibility.

## Future Work

1. **User Authentication**: Allow users to sign in and save their preferences across devices.
2. **Advanced Goal Tracking**: Add features like recurring goals, reminders, and progress tracking.
3. **Integration with External APIs**: Expand to include news, calendar events, or fitness tracking data.
4. **Widget Customization**: Let users customize the layout and choose which widgets appear on their homepage.
5. **Community Features**: Allow users to share their favorite quotes or background images with others.

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/makrischaralampos/inspirational-homepage.git
cd inspirational-homepage
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the application**:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Usage

- **Homepage**: Upon opening, you'll see a background image, a motivational quote, weather details, and your daily goals.
- **Weather**: Enter your city in the search bar and click "Get Weather" to fetch the weather data.
- **Goals**: Add goals using the input field, and manage them directly on the homepage.
- **Theme Toggle**: Use the switch in the header to toggle between light and dark modes.

## Contributing

I welcome contributions! Whether you're fixing bugs, adding new features, or improving the documentation, your help is appreciated.

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for your feature or bug fix:

```bash
git checkout -b feature-name
```

3. **Make your changes**, commit, and push them:

```bash
git commit -m "Description of your changes"
git push origin feature-name
```

4. **Open a Pull Request** on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Issues & Feature Requests

If you encounter any issues or have ideas for new features, please open an issue on GitHub.

## Contact

For any questions, feel free to reach out to me via email at mcshooter23@gmail.com.
