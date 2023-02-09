import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from "./directives/favorite.directive";
import { CategoryListPipe } from "./pipes/category-list.pipe";
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { lookupLists, lookupListsToken } from "./providers";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { MockXHRBackend } from "./mock-xhr-backend";
// HttpXhrBackend uses XMLHttpRequest to send requests to a backend server.

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, MediaItemComponent, MediaItemListComponent, FavoriteDirective, CategoryListPipe, MediaItemFormComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: lookupListsToken, useValue: lookupLists},
    { provide: HttpXhrBackend, useClass: MockXHRBackend}
  ]
})
export class AppModule {}
