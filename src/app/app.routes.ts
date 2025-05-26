import { RouterModule, Routes } from '@angular/router';
import { ExperiencieComponent } from './experiencie/experiencie.component';
import { ProjectComponent } from './project/project.component';
import { ContacComponent } from './contac/contac.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {path: '', component: ContacComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }