import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const newItemsRoutes: Routes = [
    {path: '', component: MediaItemFormComponent}
]

export const newItemsRouting = RouterModule.forChild(newItemsRoutes);