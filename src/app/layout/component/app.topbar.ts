import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
// import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { Menu } from 'primeng/menu';
import { LoginserviceService } from '../../pages/service/loginservice.service';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { NameInitialsPipe } from '../../name-initials.pipe';
// AppConfigurator
@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [CommonModule, StyleClassModule, Menu, ButtonModule, ChipModule, NameInitialsPipe],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="flex items-center" href="#">
                <img src="../assets/product_images/my.png" alt="CureTrack Logo" class="img-height" />
                <!-- <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20"> CureTrack </span> -->
            </a>
        </div>
        <div class="layout-topbar-actions">
            <p-chip class="!py-0 !pl-0 !pr-2 cursor-pointer" (click)="menu.toggle($event)">
                <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
                    {{ loginSer.getLocalKeys('username') | nameInitials }}
                </span>
                <span class="font-medium"> {{ loginSer.getLocalKeys('username') | uppercase }} </span>
            </p-chip>
            <p-menu #menu [model]="itemss" [popup]="true" />
        </div>
    </div>`,
    styles: `
        .img-height {
            height: 65px !important;
        }
    `
})
export class AppTopbar {
    items!: MenuItem[];
    itemss: MenuItem[] | undefined;
    constructor(
        public layoutService: LayoutService,
        public _router: Router,
        public loginSer: LoginserviceService
    ) {
        this.itemss = [
            {
                label: 'Manage',
                items: [
                    // {
                    //     label: 'Settings',
                    //     icon: 'pi pi-cog'
                    // },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        command: () => {
                            this._router.navigateByUrl('/auth/login');
                            this.loginSer.signOut();
                        }
                    }
                ]
            }
        ];
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
