import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { TwitchIntegrationComponent } from './twitch-integration/twitch-integration.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'twitch', component: TwitchIntegrationComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
