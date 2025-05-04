import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';

export const appRoutes: Routes = [
    { path: 'landing', component: Landing },
    {
        path : '',
        pathMatch : 'full',
        redirectTo : 'landing'
    },
    {
        path: 'home',
        component: AppLayout,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'hms', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            // { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
   
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
