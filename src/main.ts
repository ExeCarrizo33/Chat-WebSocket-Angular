import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'globalthis/polyfill';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// Define global en el entorno del navegador
if (typeof global === 'undefined') {
  (window as any).global = window;
}


