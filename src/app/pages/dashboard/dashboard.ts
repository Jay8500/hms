import { Component, inject, OnInit } from '@angular/core';
// import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
// import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { SupabasedbService } from '../service/supabasedb.service';
import { PhotoService } from '../service/photo.service';
import { CommonModule } from '@angular/common';
import { LoginserviceService } from '../service/loginservice.service';
// import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { Observable, Subscription } from 'rxjs'; // Import Subscriptio
@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, BestSellingWidget, CommonModule],
    providers: [PhotoService],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <!-- <div *ngFor="let d of items;">{{ d.name}}</div> -->
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <!-- <app-recent-sales-widget /> -->
                <app-best-selling-widget />
            </div>
            <!-- <div class="col-span-12 xl:col-span-6"> -->
            <!-- <app-revenue-stream-widget /> -->
            <!-- <app-notifications-widget /> -->
            <!-- </div> -->
        </div>
    `
})
export class Dashboard implements OnInit {
    public _supabaseService = inject(PhotoService);
    public _supabaseHimsService = inject(LoginserviceService);
    private subscription: Subscription | undefined; // Add a Subscription

    public items: any = [];
    public getAllDocs: any = [];
    async ngOnInit() {
        this.items = await this._supabaseService.getItems();
        this.getAllDocs = await this._supabaseHimsService.getDoc(); // Store the Observable
        console.log(this.getAllDocs);
        // this.subscription = this.getAllDocs.subscribe({
        //     // Store the subscription
        //     next: (data: any) => {
        //         // this.documents = data;
        //         // this.loading = false; // Set loading to false when data is received
        //         // this.error = null;
        //         console.log('Documents:', data); // Log the data to the console
        //     },
        //     error: (err:any) => {
        //         // this.error = err.message || 'Failed to fetch documents';
        //         // this.loading = false;
        //         // this.documents = null; // Clear old data
        //         console.error('Error fetching documents:', err);
        //     }
        // });
    }
}
