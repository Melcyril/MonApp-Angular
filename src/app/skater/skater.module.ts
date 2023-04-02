import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSkaterComponent } from './list-skater/list-skater.component';
import { DetailSkaterComponent } from './detail-skater/detail-skater.component';
import { BorderCardDirective } from './border-card.directive';
import { SkaterSponsorColorPipe } from './skater-sponsor-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { SkaterService } from './skater.service';
import { FormsModule } from '@angular/forms';
import { SkaterFormComponent } from './skater-form/skater-form.component';
import { EditSkaterComponent } from './edit-skater/edit-skater.component';
import { AddSkaterComponent } from './add-skater/add-skater.component';
import { SearchSkaterComponent } from './search-skater/search-skater.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const skaterRoutes: Routes=[
  {path: 'edit/skater/:id', component: EditSkaterComponent,canActivate:[AuthGuard]},
  {path: 'skater/add', component: AddSkaterComponent,canActivate:[AuthGuard]},
  {path: 'skaters', component: ListSkaterComponent,canActivate:[AuthGuard]},
  {path: 'skater/:id', component: DetailSkaterComponent,canActivate:[AuthGuard]}
  
]

@NgModule({
  declarations: [
    ListSkaterComponent,
    DetailSkaterComponent,
    BorderCardDirective,
    SkaterSponsorColorPipe,
    SkaterFormComponent,
    EditSkaterComponent,
    AddSkaterComponent,
    SearchSkaterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(skaterRoutes)
  ],
  providers:[SkaterService]
})
export class SkaterModule { }
