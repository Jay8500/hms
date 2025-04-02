import { Component, inject, OnInit } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { SupabasedbService } from '../service/supabasedb.service';
import { PhotoService } from '../service/photo.service';
import { CommonModule } from '@angular/common';
// import { RevenueStreamWidget } from './components/revenuestreamwidget';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, NotificationsWidget, CommonModule],
    providers: [PhotoService],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <!-- <div *ngFor="let d of items;">{{ d.name}}</div> -->
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-recent-sales-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <!-- <app-revenue-stream-widget /> -->
                <app-notifications-widget />
            </div>
        </div>
    `
})
export class Dashboard implements OnInit {
    public _supabaseService = inject(PhotoService);
    public items: any = [];
    async ngOnInit() {
        this.items = await this._supabaseService.getItems();
    }

}
