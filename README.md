# Earth-Quake

## Introduction
**Earth-Quake** is a responsive web application that displays the latest earthquake information in New Zealand. It leverages the GeoNet API to fetch earthquake data and uses OpenStreetMap to visualize the locations of these quakes on an interactive map. Users can see a list of recent earthquakes and view details such as magnitude, time, depth, and location. When a user hovers over a list item, a pin on the map highlights the corresponding earthquake location.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)


## Installation
To set up the Earth-Quake application locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/oliverEddy/Earth-Quake.git
    cd my-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    npm start
    ```

## Usage
After installation, you can access the application by navigating to `http://localhost:3000` in your web browser. The home page will display a list of the latest earthquakes in New Zealand, along with their details.

### Viewing Earthquake Details
- **List View**: Shows recent earthquakes with details like magnitude, time, depth, and location.
- **Map View**: Displays an interactive map with pins for each earthquake. Hover over a list item to highlight the corresponding pin on the map.

## Features
- **Latest Earthquakes**: Displays the most recent quakes fetched from the GeoNet API.
- **Significant Earthquakes**: Option to view significant earthquake data.
- **Interactive Map**: Uses OpenStreetMap to display quake locations with interactive pins.
- **Responsive Design**: Optimized for various devices and screen sizes.

## Dependencies
- **GeoNet API**: For fetching earthquake data.
- **OpenStreetMap**: For displaying map and pins.
- **React**: JavaScript library for building user interfaces.
- **Leaflet**: Open-source JavaScript library for interactive maps.

## Configuration
No specific configuration is required. Ensure you have a stable internet connection to fetch data from the APIs.

## Documentation
For detailed API documentation, refer to:
- [GeoNet API Documentation](https://api.geonet.org.nz/)
- [OpenStreetMap Documentation](https://www.openstreetmap.org/)

