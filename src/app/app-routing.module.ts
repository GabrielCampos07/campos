import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'choose-language',
  },
  {
    path: 'choose-language',
    loadChildren: () =>
      import('./choose-language/choose-language.module').then(
        (m) => m.ChooseLanguageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
