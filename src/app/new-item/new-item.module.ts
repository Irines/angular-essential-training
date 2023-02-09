import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form.component";
import { newItemsRouting } from "./new-item.routing";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        newItemsRouting
    ],
    declarations: [
        MediaItemFormComponent
    ]
})
export class NewItem {

}