import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Importe le module racine de l'application
import { environment } from './environments/environment'; // Importe les configurations d'environnement

if (environment.production) {
  enableProdMode(); // Active le mode production si l'environnement est en production
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));