import { BackgroundController } from "./Controllers/BackgroundController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new WeatherController();
  
  backgroundController = new BackgroundController
}

window["app"] = new App();
