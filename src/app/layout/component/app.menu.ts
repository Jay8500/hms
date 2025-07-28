import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { LoginserviceService } from '../../pages/service/loginservice.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];
    public getService = inject(LoginserviceService);
    async ngOnInit() {
        let data = await this.getService.getDocumentPermissionsForUser(this.getService.getLocalKeys('id'));
        if (data.length > 0) {
            let isDashboard = data.filter((doc: any) => doc['docid'] == 5);
            if (isDashboard.length > 0) {
                this.model.push({
                    label: 'Home',
                    items: [
                        {
                            label: isDashboard[0]['docname'],
                            // icon: 'd',
                            routerLink: [`/${isDashboard[0]['page_url']}`]
                        }
                    ]
                });
            }
            let isNoDashboard = data.filter((doc: any) => doc['docid'] != 5);
            if (isNoDashboard.length > 0) {
                let createModules: any = {
                    label: 'Modules',
                    items: []
                };
                isNoDashboard.forEach((element: any) => {
                    createModules.items.push({
                        label: element['docname'],
                        // icon: 'pi pi-fw pi-home',
                        routerLink: [`/${element['page_url']}`]
                    });
                });
                this.model.push(createModules);
            }
        }
        return;
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/home/dashboard'] }]
            },
            {
                label: 'Modules',
                items: [
                    // { label: 'Employees', icon: 'pi pi-fw pi-id-card', routerLink: ['/home/uikit/formlayout'] },

                    { label: 'Registrations', icon: 'pi pi-fw pi-pen-to-square', routerLink: ['/home/hms/registration'] },
                    { label: 'Appointment', icon: 'pi pi-fw pi-pen-to-square', routerLink: ['/home/hms/appointment'] },
                    { label: 'Billing', icon: 'pi pi-fw pi-pen-to-square', routerLink: ['/home/hms/billing'] },
                    // { label: 'IP Admissions', icon: 'pi pi-fw pi-list', routerLink: ['/home/uikit/ip-admissions'] },
                    { label: 'Employees Info', icon: 'pi pi-fw pi-table', routerLink: ['/home/hms/employeelist'] },
                    { label: 'Inventory Management', icon: 'pi pi-fw pi-table', routerLink: ['/home/hms/inventory'] },
                    { label: 'Settings', icon: 'pi pi-fw pi-table', routerLink: ['/home/hms/settings'] }
                    // { label: 'Patients', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/home/uikit/button'] },
                    // { label: 'Scheduling', icon: 'pi pi-fw pi-calendar', class: 'rotated-icon', routerLink: ['/home/uikit/button'] },
                    // { label: 'Inventory', icon: 'pi pi-fw pi-table', routerLink: ['/home/uikit/table'] },
                    // { label: 'Billings', icon: 'pi pi-fw pi-list', routerLink: ['/home/uikit/list'] },
                    // { label: 'Settings', icon: 'pi pi-fw pi-clone', routerLink: ['/home/uikit/formlayout'] },

                    // { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    // { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    // { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    // { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    // { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    // { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    // { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    // { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    // { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    // { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            }
            // {
            //     label: 'Pages',
            //     icon: 'pi pi-fw pi-briefcase',
            //     routerLink: ['/pages'],
            //     items: [
            //         {
            //             label: 'Landing',
            //             icon: 'pi pi-fw pi-globe',
            //             routerLink: ['/landing']
            //         },
            //         {
            //             label: 'Auth',
            //             icon: 'pi pi-fw pi-user',
            //             items: [
            //                 {
            //                     label: 'Login',
            //                     icon: 'pi pi-fw pi-sign-in',
            //                     routerLink: ['/auth/login']
            //                 },
            //                 {
            //                     label: 'Error',
            //                     icon: 'pi pi-fw pi-times-circle',
            //                     routerLink: ['/auth/error']
            //                 },
            //                 {
            //                     label: 'Access Denied',
            //                     icon: 'pi pi-fw pi-lock',
            //                     routerLink: ['/auth/access']
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Crud',
            //             icon: 'pi pi-fw pi-pencil',
            //             routerLink: ['/pages/crud']
            //         },
            //         {
            //             label: 'Not Found',
            //             icon: 'pi pi-fw pi-exclamation-circle',
            //             routerLink: ['/pages/notfound']
            //         },
            //         {
            //             label: 'Empty',
            //             icon: 'pi pi-fw pi-circle-off',
            //             routerLink: ['/pages/empty']
            //         }
            //     ]
            // },
            // {
            //     label: 'Hierarchy',
            //     items: [
            //         {
            //             label: 'Submenu 1',
            //             icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2',
            //             icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Get Started',
            //     items: [
            //         {
            //             label: 'Documentation',
            //             icon: 'pi pi-fw pi-book',
            //             routerLink: ['/documentation']
            //         },
            //         {
            //             label: 'View Source',
            //             icon: 'pi pi-fw pi-github',
            //             url: 'https://github.com/primefaces/sakai-ng',
            //             target: '_blank'
            //         }
            //     ]
            // }
        ];
    }
}
