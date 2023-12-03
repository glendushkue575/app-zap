/*
Filename: AdvancedWebApp.js

This code demonstrates an advanced web application that includes multiple modules and uses various techniques such as closures, arrow functions, async/await, and error handling.
*/

// Module 1: User Manager (managing user-related operations)
const userManager = (() => {
  let users = [];

  const listUsers = () => {
    console.log("Listing all users...");
    users.forEach(user => console.log(user));
  }

  const addUser = (user) => {
    users.push(user);
    console.log(`User '${user}' added successfully.`);
  }

  const deleteUser = (user) => {
    const index = users.indexOf(user);
    if (index > -1) {
      users.splice(index, 1);
      console.log(`User '${user}' deleted successfully.`);
    } else {
      console.log(`User '${user}' not found.`);
    }
  }

  return {
    listUsers,
    addUser,
    deleteUser
  };
})();

// Module 2: Weather Service (fetching weather-related data)
const weatherService = (() => {
  const API_KEY = "your_api_key";

  const getWeather = async (city) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
      const data = await response.json();
      console.log(`Weather in ${city}: ${data.current.condition.text}`);
    } catch (error) {
      console.error("Error retrieving weather data:", error);
    }
  };

  return {
    getWeather
  };
})();

// Module 3: Logging Service (handling application logs)
const loggingService = (() => {
  const logError = (message) => {
    console.error(`[ERROR]: ${message}`);
  }

  const logInfo = (message) => {
    console.log(`[INFO]: ${message}`);
  }

  return {
    logError,
    logInfo
  };
})();

// Main Application
(async () => {
  loggingService.logInfo("Starting the application...");

  userManager.listUsers();

  userManager.addUser("John Doe");
  userManager.addUser("Jane Smith");

  userManager.listUsers();

  userManager.deleteUser("John Doe");

  userManager.listUsers();

  await weatherService.getWeather("London");

  loggingService.logInfo("Application finished.");
})();
