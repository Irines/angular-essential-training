import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from "./directives/favorite.directive";
import { CategoryListPipe } from "./pipes/category-list.pipe";
import { lookupLists, lookupListsToken } from "./providers";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { MockXHRBackend } from "./mock-xhr-backend";
import { routing } from "./app.routing";
// HttpXhrBackend uses XMLHttpRequest to send requests to a backend server.

@NgModule({
  imports: [BrowserModule, HttpClientModule, routing],
  declarations: [AppComponent, MediaItemComponent, MediaItemListComponent, FavoriteDirective, CategoryListPipe],
  bootstrap: [AppComponent],
  providers: [
    { provide: lookupListsToken, useValue: lookupLists},
    { provide: HttpXhrBackend, useClass: MockXHRBackend}
  ]
})
export class AppModule {}
