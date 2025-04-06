import { Component, inject } from '@angular/core';
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
interface State {
    name: string;
    code: string;
}
interface Patient {
    name: string;
    gender: string;
    dob: Date;
    admissionType: string;
}
@Component({
    selector: 'inventory',
    standalone: true,
    imports: [CommonModule, InputTextModule, ChipModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, RadioButtonModule, SelectButtonModule, CalendarModule, InputMaskModule, TableModule, TabsModule, TagModule],
    providers: [ProductService],
    template: ` <div class="card">
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
                                    <th style="min-width:4rem">
                                        <div class="flex items-center">
                                            Reorder Unit
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
                                    <th style="min-width:20rem">
                                        <div class="flex items-center">
                                            Description
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
                                    <td>
                                        {{ inventoryItems.reorderPoint }}
                                    </td>
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
                                    <td>
                                        {{ inventoryItems.description }}
                                    </td>
                                </tr>
                            </ng-template>
                            <ng-template #emptymessage>
                                <tr>
                                    <td colspan="4" class="text-center">No Items found.</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </div>
                </p-tabpanel>
                <p-tabpanel value="1">
                    <p-fluid>
                        <div class="flex mt-8">
                            <div class="card flex flex-col gap-6 w-full">
                                <div class="font-semibold text-xl">Item</div>
                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="firstname2">Name</label>
                                        <input pInputText id="firstname2" type="text" [(ngModel)]="firstname" />
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="lastname2">Code</label>
                                        <input pInputText id="lastname2" type="text" [(ngModel)]="middle" />
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="lastname2">Category</label>
                                        <input pInputText id="lastname2" type="text" [(ngModel)]="lastname" />
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label>Category</label>
                                        <div class="flex gap-4">
                                            <div class="flex align-items-center">
                                                <p-radioButton name="admissionType" value="OP" [(ngModel)]="admissionType" inputId="op"></p-radioButton>
                                                <label for="op" class="ml-2">Pharmaceuticals</label>
                                            </div>
                                            <div class="flex align-items-center">
                                                <p-radioButton name="admissionType" value="IP" [(ngModel)]="admissionType" inputId="ip"></p-radioButton>
                                                <label for="ip" class="ml-2">Medical Supplies</label>
                                            </div>
                                            <div class="flex align-items-center">
                                                <p-radioButton name="admissionType" value="IP" [(ngModel)]="admissionType" inputId="ip"></p-radioButton>
                                                <label for="ip" class="ml-2">Medical Equipment</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="emergencyContactName">Stock Level</label>
                                        <input pInputText id="emergencyContactName" type="text" [(ngModel)]="emergencyContactName" />
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="emergencyContactNumber">Measurement Unit</label>
                                        <input pInputText id="emergencyContactNumber" type="text" [(ngModel)]="emergencyContactNumber" />
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-col gap-2 w-full">
                                        <label for="mrn">Reorder Unit</label>
                                        <input pInputText id="mrn" type="text" [(ngModel)]="mrn" style="width: 150px;" />
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="insuranceProvider">Supplier</label>
                                        <input pInputText id="insuranceProvider" type="text" [(ngModel)]="insuranceProvider" />
                                    </div>
                                </div>

                                <div class="flex flex-wrap">
                                    <label for="address">Location</label>
                                    <textarea pTextarea id="address" rows="4" [(ngModel)]="address"></textarea>
                                </div>

                                <div class="flex gap-4 justify-conent-between">
                                    <button pButton label="Create Item" class="p-button-sm" (click)="register()" [disabled]="isFormDisabled()"></button>
                                    <button pButton label="Cancel" (click)="cancel()" [disabled]="isFormDisabled()" class="p-button-sm p-button-secondary ml-2"></button>
                                </div>
                            </div>
                        </div>
                    </p-fluid>
                </p-tabpanel>
            </p-tabpanels>
        </p-tabs>
    </div>`
})
export class Inventory {
    public _productService = inject(ProductService);

    stateOptions: any[] = [
        { label: 'All', value: 'all' },
        { label: 'IP', value: 'IP' },
        { label: 'OP', value: 'OP' }
    ];
    value: string = 'all';
    inventoryItemsInfo: any = [
        {
            name: 'Amoxicillin 250mg Capsules',
            code: 'AMOX-250-CAP',
            category: 'Pharmaceuticals',
            currentStockLevel: 350,
            unitOfMeasurement: 'Strip (10 Capsules/ Strip)',
            reorderPoint: 100,
            location: 'Main Pharmacy, Shelf C4',
            expiryDate: this.calculateAge(new Date(2026, 6, 31)),
            supplierName: 'Apollo Pharma Distributors',
            description: null
        },
        {
            name: 'Surgical Gloves (Size 7)',
            code: 'SG-L-07',
            category: 'Medical Supplies',
            currentStockLevel: 180,
            unitOfMeasurement: 'Pair',
            reorderPoint: 50,
            location: 'Operation Theater Store, Cabinet 2',
            expiryDate: this.calculateAge(new Date(2027, 0, 15)),
            supplierName: 'SurgiCare India',
            description: null
        },
        {
            name: 'Normal Saline Solution (500ml)',
            code: 'NSS-500ML',
            category: 'Medical Supplies',
            currentStockLevel: 280,
            unitOfMeasurement: 'Bottle',
            reorderPoint: 70,
            location: 'General Ward Store, Shelf B1',
            expiryDate: this.calculateAge(new Date(2025, 8, 15)),
            supplierName: 'MedLife Supplies',
            description: null
        },
        {
            name: 'Digital Thermometer',
            code: 'DIGI-THERM-01',
            category: 'Medical Equipment',
            currentStockLevel: 28,
            unitOfMeasurement: 'Each',
            reorderPoint: 10,
            location: 'Nursing Station, Equipment Rack',
            expiryDate: this.calculateAge(new Date(2025, 8, 15)),
            supplierName: 'HealthTech Instruments',
            description: null
        }
    ];
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

    firstname: string = '';
    lastname: string = '';
    middle: string = '';
    address: string = '';
    state: State | undefined; // { name: 'New York', code: 'NY' };
    zip: string = '';
    admissionType: string = 'OP'; // Default to Outpatient
    dob: Date | undefined; // new Date(1990, 0, 15);
    phoneNumber: string = '';
    email: string = '';
    emergencyContactName: string = '';
    emergencyContactNumber: string = '';
    gender: string = '';
    bloodGroup: string = 'A+';
    // New Fields
    mrn: string = '';
    occupation: string = '';
    insuranceProvider: string = '';
    insuranceNumber: string = '';
    admittingDoctor: string = '';
    roomNumber: string = '';
    visitingDepartment: string = '';
    appointmentTime: Date | undefined;

    register(): void {
        // Implement your registration logic here
        // console.log('Registration Data:', {
        //     firstname: this.firstname,
        //     lastname: this.lastname,
        //     address: this.address,
        //     state: this.state,
        //     zip: this.zip,
        //     admissionType: this.admissionType,
        //     dob: this.dob,
        //     phoneNumber: this.phoneNumber,
        //     email: this.email,
        //     emergencyContactName: this.emergencyContactName,
        //     emergencyContactNumber: this.emergencyContactNumber,
        //     gender: this.gender,
        //     bloodGroup: this.bloodGroup,
        // });
        // You can send this data to your backend API
    }

    cancel() {}

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
            this.inventoryItemsInfo = parsePatients.filter((inventoryItems: any) => inventoryItems.admissionType === this.value);
        }
    }

    isFormDisabled(): boolean {
        return !(
            this.firstname &&
            this.lastname &&
            this.address &&
            this.state &&
            this.zip &&
            this.admissionType &&
            this.dob &&
            this.phoneNumber &&
            this.email &&
            this.emergencyContactName &&
            this.emergencyContactNumber &&
            this.gender &&
            this.bloodGroup &&
            this.mrn &&
            this.occupation &&
            this.insuranceProvider &&
            this.insuranceNumber &&
            this.admittingDoctor &&
            this.roomNumber &&
            this.visitingDepartment &&
            this.appointmentTime
        );
    }
}
