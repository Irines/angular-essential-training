import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

// platformBrowserDynamic function is used to bootstrap(load) the root module on the platform(browser)
// passing the root module to the bootstrapModule
platformBrowserDynamic().bootstrapModule(AppModule);
