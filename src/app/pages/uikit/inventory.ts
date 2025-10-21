import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ProductService } from '../service/product.service';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChipModule } from 'primeng/chip';
import { LoginserviceService } from '../service/loginservice.service';
import { LoaderService } from '../../loader.service';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';
import { Toast, ToastModule } from 'primeng/toast';

interface State {
    name: string;
    code: string;
}
interface Patient {
    name: string;
    gender: string;
    dob: Date;
    in_item_category_id: string;
}
@Component({
    selector: 'inventory',
    standalone: true,
    imports: [CommonModule, InputTextModule, ChipModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, RadioButtonModule, SelectButtonModule, CalendarModule, InputMaskModule, TableModule, TabsModule, TagModule, ToastModule],
    providers: [ProductService, MessageService],
    template: `
        <div class="card my-height">
            <p-tabs value="0">
                <p-tablist>
                    <p-tab value="0">Inventory Items</p-tab>
                    <p-tab value="1">Create Item</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <div style="height: 441px; overflow-y: auto;">
                            <p-table [value]="inventoryItemsInfo" stripedRows>
                                <ng-template pTemplate="header">
                                    <tr>
                                        <!-- <th style="min-width:1rem">
                                        <div class="flex items-left">
                                            <p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" aria-labelledby="basic" (onChange)="onGetType()" />
                                        </div>
                                    </th> -->
                                        <th style="min-width:20rem">Item Name</th>
                                        <th style="min-width:10rem">
                                            <div class="flex items-center">
                                                Code
                                                <p-columnFilter type="text" field="code" display="menu" />
                                            </div>
                                        </th>
                                        <th style="min-width:15rem">
                                            <div class="flex items-center">
                                                Category
                                                <!-- <p-columnFilter field="bloodGroup" matchMode="equals" display="menu">
                                                <ng-template #filter let-values let-filter="filterCallback">
                                                    <p-select [(ngModel)]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                        <ng-template let-option #item>
                                                            <p-tag [value]="option.value" severity="warn"></p-tag>
                                                        </ng-template>
                                                    </p-select>
                                                </ng-template>
                                            </p-columnFilter> -->
                                            </div>
                                        </th>
                                        <th style="min-width:10rem">
                                            <div class="flex items-center">
                                                Stock Level
                                                <!-- <p-columnFilter field="bloodGroup" matchMode="equals" display="menu">
                                                <ng-template #filter let-values let-filter="filterCallback">
                                                    <p-select [(ngModel)]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                        <ng-template let-option #item>
                                                            <p-tag [value]="option.value" severity="warn"></p-tag>
                                                        </ng-template>
                                                    </p-select>
                                                </ng-template>
                                            </p-columnFilter> -->
                                            </div>
                                        </th>
                                        <th style="min-width:10rem">
                                            <div class="flex items-center">
                                                Measurement (Unit)
                                                <!-- <p-columnFilter field="bloodGroup" matchMode="equals" display="menu">
                                                <ng-template #filter let-values let-filter="filterCallback">
                                                    <p-select [(ngModel)]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                        <ng-template let-option #item>
                                                            <p-tag [value]="option.value" severity="warn"></p-tag>
                                                        </ng-template>
                                                    </p-select>
                                                </ng-template>
                                            </p-columnFilter> -->
                                            </div>
                                        </th>

                                        <th style="min-width:20rem">
                                            <div class="flex items-center">
                                                Location
                                                <!-- <p-columnFilter field="bloodGroup" matchMode="equals" display="menu">
                                                <ng-template #filter let-values let-filter="filterCallback">
                                                    <p-select [(ngModel)]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                        <ng-template let-option #item>
                                                            <p-tag [value]="option.value" severity="warn"></p-tag>
                                                        </ng-template>
                                                    </p-select>
                                                </ng-template>
                                            </p-columnFilter> -->
                                            </div>
                                        </th>
                                        <!-- <th style="min-width:4rem">
                                        <div class="flex items-center">Expiry Date</div>
                                    </th> -->
                                        <th style="min-width:20rem">
                                            <div class="flex items-center">
                                                Supplier
                                                <!-- <p-columnFilter field="bloodGroup" matchMode="equals" display="menu">
                                                <ng-template #filter let-values let-filter="filterCallback">
                                                    <p-select [(ngModel)]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                        <ng-template let-option #item>
                                                            <p-tag [value]="option.value" severity="warn"></p-tag>
                                                        </ng-template>
                                                    </p-select>
                                                </ng-template>
                                            </p-columnFilter> -->
                                            </div>
                                        </th>
                                    </tr>
                                </ng-template>
                                <ng-template pTemplate="body" let-inventoryItems>
                                    <tr>
                                        <td>
                                            <p-chip class="!py-0 !pl-0 !pr-4 mt-2">
                                                <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
                                                    {{ inventoryItems.name.slice(0, 1) }}
                                                </span>
                                                <span class="ml-2 font-medium"> {{ inventoryItems.name }} </span>
                                            </p-chip>
                                            <!-- <div style="margin-left:15px;margin-top:3px" class="flex flex-row">
                                            <div class="flex">
                                                <p-tag [value]="inventoryItems.gender" [severity]="inventoryItems.gender == 'Male' ? 'success' : 'danger'"></p-tag>
                                            </div>
                                            <div class="flex font-semibold text-sm mt-1 ml-2">
                                                <div>
                                                    <div class="text-sm">{{ inventoryItems.dob | date: 'dd MMM yyyy' }}</div>
                                                    <div class="text-xs">{{ inventoryItems.dobText }}</div>
                                                </div>
                                            </div>
                                        </div> -->

                                            <!-- <p-tag [value]="inventoryItems.gender" [severity]="inventoryItems.gender == 'Male' ? 'success' : 'danger'"></p-tag>
                                        <div class="flex flex-row justify-content-between font-semibold text-sm mt-1 ml-2">
                                            {{ inventoryItems.dob | date: 'dd MMM yyyy' }}
                                        </div>
                                        {{ inventoryItems.dobText }} -->
                                        </td>
                                        <td class="text-right">
                                            {{ inventoryItems.code }}
                                        </td>
                                        <td>
                                            {{ inventoryItems.category }}
                                        </td>
                                        <td>
                                            {{ inventoryItems.currentStockLevel }}
                                        </td>
                                        <td>
                                            {{ inventoryItems.unitOfMeasurement }}
                                        </td>
                                        <!-- <td>
                                            {{ inventoryItems.reorderPoint }}
                                        </td> -->
                                        <td>
                                            {{ inventoryItems.location }}
                                        </td>
                                        <!-- <td>
                                        <div class="flex font-semibold text-sm mt-1 ml-2">
                                            <div>
                                                <div class="text-sm">Expiry Date</div>
                                                <div class="text-xs">{{ inventoryItems.expiryDate }}</div>
                                            </div>
                                        </div>
                                    </td> -->
                                        <td>
                                            {{ inventoryItems.supplierName }}
                                        </td>
                                        <!-- <td>
                                            {{ inventoryItems.description }}
                                        </td> -->
                                    </tr>
                                </ng-template>
                                <ng-template #emptymessage>
                                    <tr>
                                        <td colspan="7" class="text-center">No Items found.</td>
                                    </tr>
                                </ng-template>
                            </p-table>
                        </div>
                    </p-tabpanel>
                    <p-tabpanel value="1">
                        <p-fluid>
                            <div class="flex mt-2">
                                <div class="card flex flex-col gap-6 w-full">
                                    <div class="flex flex-col md:flex-row gap-6">
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="firstname2">Name</label>
                                            <input pInputText id="firstname2" type="text" [(ngModel)]="in_item_name" />
                                        </div>
                                    </div>

                                    <div class="flex flex-col md:flex-row gap-6">
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label>Category</label>
                                            <div class="flex gap-4">
                                                <div class="flex align-items-center">
                                                    <p-radioButton name="in_item_category_id" value="10" [(ngModel)]="in_item_category_id" inputId="op"></p-radioButton>
                                                    <label for="op" class="ml-2">Pharmaceuticals</label>
                                                </div>
                                                <div class="flex align-items-center">
                                                    <p-radioButton name="in_item_category_id" value="12" [(ngModel)]="in_item_category_id" inputId="ip"></p-radioButton>
                                                    <label for="ip" class="ml-2">Medical Supplies</label>
                                                </div>
                                                <div class="flex align-items-center">
                                                    <p-radioButton name="in_item_category_id" value="13" [(ngModel)]="in_item_category_id" inputId="ip"></p-radioButton>
                                                    <label for="ip" class="ml-2">Medical Equipment</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex flex-col md:flex-row gap-6">
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="in_stock_level">Stock Level</label>
                                            <input pInputText id="in_stock_level" type="text" [(ngModel)]="in_stock_level" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="in_measurement_unit">Measurement Unit</label>
                                            <input pInputText id="in_measurement_unit" type="text" [(ngModel)]="in_measurement_unit" />
                                        </div>
                                    </div>

                                    <!-- <div class="flex flex-col md:flex-row gap-6">
                                        <div class="flex flex-col gap-2 w-full">
                                            <label for="mrn">Reorder Unit</label>
                                            <input pInputText id="mrn" type="text" [(ngModel)]="mrn" style="width: 150px;" />
                                        </div>
                                    </div> -->

                                    <div class="flex flex-col md:flex-row gap-6">
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="in_supplier">Supplier</label>
                                            <input pInputText id="in_supplier" type="text" [(ngModel)]="in_supplier" />
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap">
                                        <label for="in_supplier_location">Suupplier Location</label>
                                        <textarea pTextarea id="in_supplier_location" rows="4" [(ngModel)]="in_supplier_location"></textarea>
                                    </div>

                                    <div class="flex gap-4 justify-conent-between">
                                        <button pButton label="Create Item" class="p-button-sm" (click)="saveItem()" [disabled]="isFormDisabled()"></button>
                                        <button pButton label="Cancel" (click)="cancel()" [disabled]="isFormDisabled()" class="p-button-sm p-button-secondary ml-2"></button>
                                    </div>
                                </div>
                            </div>
                        </p-fluid>
                    </p-tabpanel>
                </p-tabpanels>
            </p-tabs>
        </div>
        <p-toast />
    `
})
export class Inventory implements OnInit {
    public _productService = inject(ProductService);

    stateOptions: any[] = [
        { label: 'All', value: 'all' },
        { label: 'IP', value: 'IP' },
        { label: 'OP', value: 'OP' }
    ];
    value: string = 'all';
    inventoryItemsInfo: any = [];
    filteredPatients: any = JSON.stringify(this.inventoryItemsInfo);
    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];
    statuses: any[] = [
        { label: 'O+', value: 'O+' },
        { label: 'O-', value: 'O-' },
        { label: 'B+', value: 'B+' },
        { label: 'B-', value: 'B-' },
        { label: 'A+', value: 'A+' },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' },
        { label: 'A-', value: 'A-' }
    ];
    status: any[] = [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
        { label: 'Deleted', value: 'Deleted' }
    ];

    states: State[] = [
        { name: 'New York', code: 'NY' },
        { name: 'California', code: 'CA' },
        { name: 'Texas', code: 'TX' }
        // Add more states as needed
    ];
    dropdownItem = null;
    bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    in_item_id = null;
    in_item_name: string = '';
    lastname: string = '';
    middle: string = '';
    in_supplier_location: string = '';
    state: State | undefined; // { name: 'New York', code: 'NY' };
    zip: string = '';
    in_item_category_id: string = 'OP'; // Default to Outpatient
    dob: Date | undefined; // new Date(1990, 0, 15);
    phoneNumber: string = '';
    email: string = '';
    in_stock_level: string = '';
    in_measurement_unit: string = '';
    gender: string = '';
    bloodGroup: string = 'A+';
    // New Fields
    mrn: string = '';
    occupation: string = '';
    in_supplier: string = '';
    insuranceNumber: string = '';
    admittingDoctor: string = '';
    roomNumber: string = '';
    visitingDepartment: string = '';
    appointmentTime: Date | undefined;
    public logSrvc = inject(LoginserviceService);
    public _lodSrvce = inject(LoaderService);
    private messageService = inject(MessageService);

    async ngOnInit() {
        this._lodSrvce.show();
        this.inventoryItemsInfo = [];
        try {
            let inventoryItems = await this.logSrvc.getAllInventoryItems();
            if (inventoryItems.length > 0) {
                _.forEach(inventoryItems, (itm: any) => {
                    let invItems = {
                        item_id: itm.item_id,
                        name: itm.item_name,
                        code: itm.item_code,
                        category: 'Pharmaceuticals', //item_category_id
                        currentStockLevel: itm.stock_level,
                        unitOfMeasurement: itm.measurement_unit,
                        // reorderPoint: 100,
                        expiryDate: this.calculateAge(new Date(2026, 6, 31)),
                        supplierName: itm.supplier,
                        location: itm.supplier_location
                        // description: null
                    };
                    this.inventoryItemsInfo.push(invItems);
                });
            }
        } catch (e) {
            this._lodSrvce.hide();
        }
        this._lodSrvce.hide();
    }

    async saveItem() {
        try {
            this._lodSrvce.show();
            const saveRegistration = await this.logSrvc.saveInventoryItems({
                in_item_id: this.in_item_id,
                in_item_name: this.in_item_name,
                in_item_category_id: this.in_item_category_id,
                in_stock_level: this.in_stock_level,
                in_measurement_unit: this.in_measurement_unit,
                in_supplier: this.in_supplier,
                in_supplier_location: this.in_supplier_location,
                record_status: 'A'
            });
            if (saveRegistration) {
                this.messageService.add({ severity: 'success', summary: 'Item', detail: `Item is saved successfully ` });
                this.cancel();
            } else {
            }
        } catch (e) {
            this.messageService.add({ severity: 'success', summary: 'Item', detail: `Unable to process your request, try again!!!` });

            this._lodSrvce.hide();
        }
        this._lodSrvce.hide();
    }

    cancel() {
        this.in_item_id = null;
        this.in_item_name = '';
        this.in_item_category_id = '';
        this.in_stock_level = '';
        this.in_measurement_unit = '';
        this.in_supplier = '';
        this.in_supplier_location = '';
    }

    calculateAge(dob: Date): any {
        const today = new Date();
        const birthDate = new Date(dob);

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
            if (days < 0) {
                const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                days += lastDayOfMonth;
                months--;
                if (months < 0) {
                    months = 11;
                }
            }
        } else if (days < 0) {
            const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            days += lastDayOfMonth;
            months--;
            if (months < 0) {
                months = 11;
            }
        }

        return `${years} Y ${months} M ${days} D`;
    }

    onGetType() {
        if (this.value === 'all') {
            this.inventoryItemsInfo = [...JSON.parse(this.filteredPatients)];
        } else {
            console.log(this.filteredPatients);
            let parsePatients = JSON.parse(this.filteredPatients);
            this.inventoryItemsInfo = parsePatients.filter((inventoryItems: any) => inventoryItems.in_item_category_id === this.value);
        }
    }

    isFormDisabled(): boolean {
        return !(this.in_item_name && this.in_supplier_location && this.in_item_category_id && this.in_stock_level && this.in_measurement_unit && this.in_supplier);
    }
}
