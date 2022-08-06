import { BackgroundController } from "./Controllers/BackgroundController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new WeatherController()
  
  backgroundController = new BackgroundController()

  quoteController = new QuoteController()

  todoController = new ToDoController()
}

window["app"] = new App();
