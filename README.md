# Weather App

A modern weather application built with React.js frontend and Node.js backend that allows users to search for current weather information by city.

## Features

- 🌤️ Search for weather data by city name
- 🌡️ Display temperature, description, humidity, wind speed, and pressure
- 🎨 Beautiful, responsive UI with weather icons
- ⚡ Real-time weather data from OpenWeatherMap API
- 📱 Mobile-friendly design

## Technologies Used

- **Frontend**: React.js with Vite
- **Backend**: Node.js with Express
- **API**: OpenWeatherMap API
- **Styling**: CSS3 with modern design

## Project Structure

```
weather-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Styling
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML template
│   ├── vite.config.js     # Vite configuration
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   ├── server.js          # Express server
│   ├── .env.example       # Environment variables template
│   └── package.json       # Backend dependencies
└── package.json           # Root package.json with scripts
```

## Setup Instructions

### 1. Clone and Navigate to Project

```bash
git clone <your-repo-url>
cd weather
```

### 2. Install Dependencies

Install all dependencies for both client and server:

```bash
npm run install-deps
```

Or install manually:

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
cd ..
```

### 3. Set up OpenWeatherMap API

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your API key from the dashboard
3. Copy the environment file template:
   ```bash
   cp server/.env.example server/.env
   ```
4. Edit `server/.env` and add your API key:
   ```
   OPENWEATHER_API_KEY=your_actual_api_key_here
   PORT=5000
   ```

### 4. Run the Application

#### Option 1: Run both client and server together (Recommended)
```bash
npm run dev
```

#### Option 2: Run client and server separately

Terminal 1 (Server):
```bash
npm run server
```

Terminal 2 (Client):
```bash
npm run client
```

### 5. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## Usage

1. Open the app in your browser at http://localhost:3000
2. Enter the name of any city in the search bar
3. Click "Search" or press Enter
4. View the weather information including:
   - Current temperature and "feels like" temperature
   - Weather description with icon
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure

## API Endpoints

- `GET /api/weather/:city` - Get weather data for a specific city
- `GET /api/health` - Health check endpoint

## Error Handling

The app handles various error scenarios:
- Invalid city names
- Network connectivity issues
- Invalid or missing API keys
- Server errors

## Responsive Design

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for learning and development purposes.

## Troubleshooting

### Common Issues

1. **"API key not configured" error**
   - Make sure you've created the `.env` file in the `server/` directory
   - Verify your API key is correct and active

2. **"City not found" error**
   - Check the spelling of the city name
   - Try using the full city name or include country code (e.g., "London,UK")

3. **Connection refused errors**
   - Ensure both client and server are running
   - Check that ports 3000 and 5000 are not being used by other applications

4. **Dependencies issues**
   - Delete `node_modules` folders and run `npm run install-deps` again
   - Make sure you have Node.js version 16 or higher installed

## Support

If you encounter any issues or have questions, please check the troubleshooting section above or create an issue in the repository.
