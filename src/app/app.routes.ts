import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home
    { path: 'home', component: HomeComponent },
    { path: 'applications', component: ApplicationsComponent },
    { path: 'contact', component: ContactusComponent },
    { path: 'about', component: AboutusComponent },

];
