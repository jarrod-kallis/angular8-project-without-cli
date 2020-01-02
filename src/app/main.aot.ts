import '../polyfills';

import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

// Angular will generate this file
import { AppModuleNgFactory } from './app.module.ngfactory';

// Turns off some warning messages
enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);