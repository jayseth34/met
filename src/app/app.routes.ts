import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductsComponent } from './components/products/products.component';
import { DescriptionComponent } from './components/description/description.component';
import { ResourcesComponent } from './components/resources/resources.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home
    { path: 'home', component: HomeComponent },
    { path: 'applications', component: ApplicationsComponent },
    { path: 'contact', component: ContactusComponent },
    { path: 'about', component: AboutusComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'resources/:videoId', component: ResourcesComponent }, // Route with a parameter
    { path: '', redirectTo: '/resources/lNuSZiRGXco', pathMatch: 'full' }, 
    { path: 'product-description/:id', component: DescriptionComponent } // Route for product description

];
