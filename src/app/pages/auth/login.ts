import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
// import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { SupabasedbService } from '../service/supabasedb.service';
import { LoginserviceService } from '../service/loginservice.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        ButtonModule,
        CommonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        FormsModule,
        RouterModule,
        RippleModule,
        //  AppFloatingConfigurator,
        ToastModule
    ],
    providers: [LoginserviceService, MessageService],
    template: `
        <p-toast />
        <!-- <app-floating-configurator /> -->
        <div class="bg-gradient-to-br from-blue-100 to-purple-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center p-8 rounded-3xl shadow-2xl bg-white dark:bg-gray-900 max-w-md w-full">
                <div class="flex items-center justify-center">
                    <a class="flex items-center" href="#">
                        <img src="../assets/product_images/hs.png" alt="CureTrack Logo" class="mb-2 img-height" />
                        <!-- <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20"> CureTrack </span> -->
                    </a>
                </div>
                <!-- <h2 class="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Welcome to HMS!</h2> -->
                <!-- <p class="text-gray-600 dark:text-gray-400 mb-6">Your a step closer to continue...</p> -->

                <div class="grid grid-cols-1">
                    <div>
                        <label for="email1" class="block text-sm font-medium text-gray-700 dark:text-gray-300">User</label>
                        <input
                            pInputText
                            id="email1"
                            type="text"
                            placeholder="Username"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                            [(ngModel)]="username"
                        />
                    </div>

                    <div class="mt-4">
                        <label for="password1" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <p-password id="password1" [(ngModel)]="password" placeholder="Password" [toggleMask]="true" styleClass="mt-1 block w-full" [fluid]="true" [feedback]="false" />
                    </div>
                </div>

                <div class="flex items-center justify-between mt-6" *ngIf="false">
                    <div class="flex items-center">
                        <p-checkbox [(ngModel)]="checked" id="rememberme1" binary class="mr-2"></p-checkbox>
                        <label for="rememberme1" class="text-sm text-gray-600 dark:text-gray-400">Remember me</label>
                    </div>
                    <span class="text-sm font-medium text-blue-600 dark:text-purple-400 cursor-pointer">Forgot password?</span>
                </div>

                <p-button
                    label="Log In"
                    styleClass="w-full mt-8 bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700"
                    (onClick)="onLogin()"
                    [loading]="loading"
                    [disabled]="[null, '', undefined].includes(password) && [null, '', undefined].includes(username)"
                ></p-button>
            </div>
        </div>
    `,
    styles: `
        .img-height {
            height: 159px !important;
        }
    `
})
export class Login {
    username: string = 'admin';
    password: string = 'admin';
    checked: boolean = false;
    public loading: boolean = false;
    constructor(
        private supabaseService: LoginserviceService,
        private router: Router,
        private messageService: MessageService
    ) {}

    loginError: string | null = null;
    async onLogin() {
        this.loading = true;
        this.loginError = null;
        const { success, error } = await this.supabaseService.loginDirect(this.username, this.password);

        if (success) {
            console.log('Login successful');
            this.router.navigate(['/home/dashboard']);
        } else {
            this.messageService.add({ severity: 'warn', summary: 'Invalid Credentials', detail: error.message });
            // console.error('Login error:', error);
            // this.loginError = error.message;
        }
        this.loading = false;
    }
}
