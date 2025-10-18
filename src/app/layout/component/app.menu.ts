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
    }
}
