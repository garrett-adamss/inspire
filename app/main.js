import { BackgroundController } from "./Controllers/BackgroundController.js";
import { ClockController } from "./Controllers/ClockController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new WeatherController()
  
  backgroundController = new BackgroundController()

  quoteController = new QuoteController()

  todoController = new ToDoController()

  clockController = new ClockController()
}

window["app"] = new App();
