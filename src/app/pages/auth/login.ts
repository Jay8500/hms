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
                <div class="flex items-center justify-center mb-8">
                    <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-blue-600 dark:text-purple-400">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Welcome to HMS!</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Your a step closer to continue...</p>

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

                <p-button label="Log In" styleClass="w-full mt-8 bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700" (onClick)="onLogin()" [loading]="loading"></p-button>
            </div>
        </div>
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
        };
        this.loading = false;
    }
}
