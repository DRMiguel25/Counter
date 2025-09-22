// Importa la función que arranca toda la app (en lugar de usar AppModule)
import { bootstrapApplication } from '@angular/platform-browser';

// Importa la configuración global de la app (incluye rutas, providers, FormsModule…)
import { appConfig } from './app/app.config';

// Importa el componente raíz que se debe bootstrappear
import { AppComponent } from './app/app.component';

// Arranca la aplicación de Angular indicando el componente raíz y la configuración.
// Si hay algún error al arrancar, lo muestra en consola.
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
