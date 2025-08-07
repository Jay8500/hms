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
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChipModule } from 'primeng/chip';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { ActivatedRoute, Router } from '@angular/router';
import { NameInitialsPipe } from '../../name-initials.pipe';
import { LoginserviceService } from '../service/loginservice.service';
import { ProductService } from '../service/product.service';

interface BillItem {
    serviceName: string;
    quantity: number;
    unitPrice: number;
    total: number;
}

@Component({
    selector: 'app-billing',
    standalone: true,
    imports: [CommonModule, InputTextModule, ChipModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, NameInitialsPipe, RadioButtonModule, SelectButtonModule, CalendarModule, InputMaskModule, TableModule, TabsModule, TagModule, InputNumberModule, CardModule],
    providers: [ProductService],
    template: `<div class="card">
        <!-- Header with Back Navigation -->
        <div class="billing-header mb-4" *ngIf="isNavigatedFromAppointment">
            <div class="flex justify-content-between align-items-center">
                <div class="flex align-items-center">
                    <button pButton icon="pi pi-arrow-left" class="p-button-text p-button-plain mr-3" 
                            (click)="goBack()" title="Back to Appointments"></button>
                    <div>
                        <h2 class="text-2xl font-bold text-primary mb-0">Patient Billing</h2>
                        <p class="text-color-secondary mt-1 mb-0">Generate bill for {{ appointmentData?.patientName }}</p>
                    </div>
                </div>
                <div class="patient-quick-info" *ngIf="appointmentData">
                    <p-card class="p-2">
                        <div class="flex align-items-center">
                            <span class="bg-primary text-primary-contrast rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-3">
                                {{ appointmentData.patientName | nameInitials }}
                            </span>
                            <div>
                                <div class="font-semibold">{{ appointmentData.patientName }}</div>
                                <div class="text-sm text-color-secondary">{{ appointmentData.department }} • {{ appointmentData.doctor }}</div>
                            </div>
                        </div>
                    </p-card>
                </div>
            </div>
        </div>

        <p-tabs [value]="isNavigatedFromAppointment ? '1' : '0'">
            <p-tablist>
                <p-tab value="0">Bills & Payments</p-tab>
                <p-tab value="1">Create Bill</p-tab>
            </p-tablist>
            <p-tabpanels>
                <p-tabpanel value="0">
                    <div style="height: 441px; overflow-y: auto;">
                        <p-table [value]="bills" stripedRows>
                            <ng-template pTemplate="header">
                                <tr>
                                    <th style="min-width:1rem">
                                        <div class="flex items-left">
                                            <p-selectbutton [options]="paymentStatusOptions" [(ngModel)]="filterValue" optionLabel="label" optionValue="value" aria-labelledby="basic" (onChange)="onGetType()" />
                                        </div>
                                    </th>
                                    <th style="min-width:20rem">Patient Name</th>
                                    <th style="min-width:4rem">
                                        <div class="flex items-center">
                                            Bill Date
                                            <p-columnFilter type="date" field="billDate" display="menu" />
                                        </div>
                                    </th>
                                    <th style="min-width:4rem">
                                        <div class="flex items-center">
                                            Bill Amount
                                            <p-columnFilter type="numeric" field="totalAmount" display="menu" />
                                        </div>
                                    </th>
                                    <th style="min-width:4rem">
                                        <div class="flex items-center">
                                            Paid Amount
                                            <p-columnFilter type="numeric" field="paidAmount" display="menu" />
                                        </div>
                                    </th>
                                    <th style="min-width:4rem">Balance</th>
                                    <th style="min-width:4rem">
                                        <div class="flex items-center">
                                            Payment Status
                                            <p-columnFilter field="paymentStatus" matchMode="equals" display="menu">
                                                <ng-template #filter let-values let-filter="filterCallback">
                                                    <p-select [(ngModel)]="filterValue" [options]="paymentStatuses" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                        <ng-template let-option #item>
                                                            <p-tag [value]="option.value" [severity]="option.label == 'Paid' ? 'success' : option.label == 'Partial' ? 'warn' : 'danger'"></p-tag>
                                                        </ng-template>
                                                    </p-select>
                                                </ng-template>
                                            </p-columnFilter>
                                        </div>
                                    </th>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="body" let-bill>
                                <tr>
                                    <td class="text-center">
                                        <p-tag [value]="bill.billType" [severity]="bill.billType == 'OP' ? 'info' : 'warn'"></p-tag>
                                    </td>
                                    <td>
                                        <p-chip class="!py-0 !pl-0 !pr-4 mt-2">
                                            <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center"
                                            style="font-size: xx-small;">
                                                {{ bill.patientName | nameInitials }}
                                            </span>
                                            <span class="ml-2 font-medium"> {{ bill.patientName }} </span>
                                        </p-chip>
                                        <div style="margin-left:15px;margin-top:3px" class="flex flex-row">
                                            <div class="flex">
                                                <p-tag [value]="bill.billNumber" severity="secondary"></p-tag>
                                            </div>
                                            <div class="flex font-semibold text-sm mt-1 ml-2">
                                                <div>
                                                    <div class="text-sm">{{ bill.department }}</div>
                                                    <div class="text-xs">{{ bill.doctor }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        {{ bill.billDate | date: 'dd MMM yyyy' }}
                                    </td>
                                    <td class="text-right">
                                        {{ bill.totalAmount | currency }}
                                    </td>
                                    <td class="text-right">
                                        {{ bill.paidAmount | currency }}
                                    </td>
                                    <td class="text-right">
                                        {{ (bill.totalAmount - bill.paidAmount) | currency }}
                                    </td>
                                    <td>
                                        <p-tag [value]="bill.paymentStatus" [severity]="bill.paymentStatus == 'Paid' ? 'success' : bill.paymentStatus == 'Partial' ? 'warn' : 'danger'"></p-tag>
                                    </td>
                                </tr>
                            </ng-template>
                            <ng-template #emptymessage>
                                <tr>
                                    <td colspan="7" class="text-center">No Bills found.</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </div>
                </p-tabpanel>
                <p-tabpanel value="1">
                    <p-fluid>
                        <div class="flex mt-8">
                            <div class="card flex flex-col gap-6 w-full">
                                <div class="font-semibold text-xl">Create Bill</div>
                                
                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="patient">Patient</label>
                                        <p-select id="patient" [(ngModel)]="selectedPatient" [options]="patients" optionLabel="name" placeholder="Select Patient" class="w-full" [disabled]="isNavigatedFromAppointment"></p-select>
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="billDate">Bill Date</label>
                                        <p-calendar inputId="billDate" [(ngModel)]="billDate" [showIcon]="true" dateFormat="mm/dd/yy"></p-calendar>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="billNumber">Bill Number</label>
                                        <input pInputText id="billNumber" type="text" [(ngModel)]="billNumber" placeholder="Auto-generated" readonly />
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label>Bill Type</label>
                                        <div class="flex gap-4">
                                            <div class="flex align-items-center">
                                                <p-radioButton name="billType" value="OP" [(ngModel)]="billType" inputId="op"></p-radioButton>
                                                <label for="op" class="ml-2">OP (Outpatient)</label>
                                            </div>
                                            <div class="flex align-items-center">
                                                <p-radioButton name="billType" value="IP" [(ngModel)]="billType" inputId="ip"></p-radioButton>
                                                <label for="ip" class="ml-2">IP (Inpatient)</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="department">Department</label>
                                        <p-select id="department" [(ngModel)]="department" [options]="departments" placeholder="Select Department" class="w-full" [disabled]="isNavigatedFromAppointment"></p-select>
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="doctor">Doctor</label>
                                        <p-select id="doctor" [(ngModel)]="doctor" [options]="doctors" placeholder="Select Doctor" class="w-full" [disabled]="isNavigatedFromAppointment"></p-select>
                                    </div>
                                </div>

                                <div class="font-semibold text-lg">Services & Items</div>
                                <div style="max-height: 300px; overflow-y: auto;">
                                    <p-table [value]="billItems">
                                        <ng-template pTemplate="header">
                                            <tr>
                                                <th>Service/Item</th>
                                                <th>Quantity</th>
                                                <th>Unit Price</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </ng-template>
                                        <ng-template pTemplate="body" let-item let-i="rowIndex">
                                            <tr>
                                                <td>
                                                    <p-select [(ngModel)]="item.serviceName" [options]="services" placeholder="Select Service" class="w-full"></p-select>
                                                </td>
                                                <td>
                                                    <p-inputNumber [(ngModel)]="item.quantity" [min]="1" (onInput)="calculateItemTotal(item)" styleClass="w-full"></p-inputNumber>
                                                </td>
                                                <td>
                                                    <p-inputNumber [(ngModel)]="item.unitPrice" mode="currency" currency="USD" (onInput)="calculateItemTotal(item)" styleClass="w-full"></p-inputNumber>
                                                </td>
                                                <td>
                                                    {{ item.total | currency }}
                                                </td>
                                                <td>
                                                    <button pButton icon="pi pi-trash" class="p-button-sm p-button-danger" (click)="removeItem(i)"></button>
                                                </td>
                                            </tr>
                                        </ng-template>
                                    </p-table>
                                </div>
                                
                                <div class="flex justify-content-between">
                                    <button pButton label="Add Item" icon="pi pi-plus" class="p-button-sm p-button-secondary" (click)="addItem()"></button>
                                    <div class="font-semibold text-lg">
                                        Total Amount: {{ getTotalAmount() | currency }}
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="discount">Discount (%)</label>
                                        <p-inputNumber id="discount" [(ngModel)]="discount" [min]="0" [max]="100" suffix="%" (onInput)="calculateFinalAmount()"></p-inputNumber>
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="tax">Tax (%)</label>
                                        <p-inputNumber id="tax" [(ngModel)]="tax" [min]="0" [max]="50" suffix="%" (onInput)="calculateFinalAmount()"></p-inputNumber>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="insuranceCoverage">Insurance Coverage</label>
                                        <p-inputNumber id="insuranceCoverage" [(ngModel)]="insuranceCoverage" mode="currency" currency="USD" (onInput)="calculateFinalAmount()"></p-inputNumber>
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="finalAmount">Final Amount</label>
                                        <input pInputText id="finalAmount" [value]="finalAmount | currency" readonly />
                                    </div>
                                </div>

                                <div class="font-semibold text-lg">Payment Information</div>
                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="paymentMethod">Payment Method</label>
                                        <p-select id="paymentMethod" [(ngModel)]="paymentMethod" [options]="paymentMethods" placeholder="Select Payment Method" class="w-full"></p-select>
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="paidAmount">Paid Amount</label>
                                        <p-inputNumber id="paidAmount" [(ngModel)]="paidAmount" mode="currency" currency="USD" (onInput)="calculatePaymentStatus()"></p-inputNumber>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="paymentStatus">Payment Status</label>
                                        <input pInputText id="paymentStatus" [value]="paymentStatus" readonly />
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="balanceAmount">Balance Amount</label>
                                        <input pInputText id="balanceAmount" [value]="(finalAmount - paidAmount) | currency" readonly />
                                    </div>
                                </div>

                                <div class="flex flex-wrap">
                                    <label for="notes">Notes</label>
                                    <textarea pTextarea id="notes" rows="3" [(ngModel)]="notes" placeholder="Additional notes or remarks"></textarea>
                                </div>

                                <div class="flex gap-4 justify-content-between">
                                    <div class="flex gap-2">
                                        <button pButton label="Generate Bill" class="p-button-sm" (click)="generateBill()" [disabled]="isFormDisabled()"></button>
                                        <button pButton label="Save Draft" class="p-button-sm p-button-secondary" (click)="saveDraft()"></button>
                                    </div>
                                    <div class="flex gap-2">
                                        <button pButton label="Cancel" (click)="cancel()" class="p-button-sm p-button-secondary"></button>
                                        <button pButton label="Proceed to Assessment" class="p-button-sm p-button-success" 
                                               (click)="proceedToAssessment()" 
                                               [disabled]="paymentStatus !== 'Paid'" 
                                               *ngIf="isNavigatedFromAppointment">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p-fluid>
                </p-tabpanel>
            </p-tabpanels>
        </p-tabs>
    </div>`,
    styles: [`
        .billing-header {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .patient-quick-info {
            min-width: 250px;
        }
    `]
})
export class BillingComponent implements OnInit {
    public _productService = inject(ProductService);
    public loginService = inject(LoginserviceService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    // Navigation state
    isNavigatedFromAppointment: boolean = false;
    appointmentData: any = null;

    paymentStatusOptions: any[] = [
        { label: 'All', value: 'all' },
        { label: 'Paid', value: 'Paid' },
        { label: 'Partial', value: 'Partial' },
        { label: 'Unpaid', value: 'Unpaid' }
    ];
    
    filterValue: string = 'all';
    bills: any = [];
    
    paymentStatuses: any[] = [
        { label: 'Paid', value: 'Paid' },
        { label: 'Partial', value: 'Partial' },
        { label: 'Unpaid', value: 'Unpaid' }
    ];

    patients: any[] = [
        { name: 'John Doe', value: 'john-doe' },
        { name: 'Jane Smith', value: 'jane-smith' },
        { name: 'Ahmed Khan', value: 'ahmed-khan' }
    ];

    departments: string[] = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'General Medicine'];
    doctors: string[] = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Davis'];
    services: string[] = ['Consultation', 'Lab Test', 'X-Ray', 'MRI', 'Medication', 'Surgery', 'Physiotherapy'];
    paymentMethods: string[] = ['Cash', 'Card', 'Bank Transfer', 'Insurance', 'Cheque'];

    // Form fields
    selectedPatient: any;
    billDate: Date = new Date();
    billNumber: string = 'BILL-' + Math.floor(Math.random() * 10000);
    billType: string = 'OP';
    department: string = '';
    doctor: string = '';
    billItems: BillItem[] = [{ serviceName: '', quantity: 1, unitPrice: 0, total: 0 }];
    discount: number = 0;
    tax: number = 0;
    insuranceCoverage: number = 0;
    finalAmount: number = 0;
    paymentMethod: string = '';
    paidAmount: number = 0;
    paymentStatus: string = 'Unpaid';
    notes: string = '';

    public filteredBills: any;

    async ngOnInit() {
        // Check if navigated from appointment
        this.route.queryParams.subscribe(params => {
            if (params['from'] === 'appointment') {
                this.isNavigatedFromAppointment = true;
                this.appointmentData = {
                    appointmentId: params['appointmentId'],
                    patientName: params['patientName'],  
                    patientId: params['patientId'],
                    department: params['department'],
                    doctor: params['doctor'],
                    appointmentDate: params['appointmentDate']
                };
                
                // Pre-fill form with appointment data
                this.prefillFormWithAppointmentData();
            }
        });

        // Load sample bills
        const sampleBills = [
            {
                patientName: 'John Doe',
                billDate: new Date('2024-01-15'),
                billNumber: 'BILL-1001',
                billType: 'OP',
                department: 'Cardiology',
                doctor: 'Dr. Smith',
                totalAmount: 1500,
                paidAmount: 1500,
                paymentStatus: 'Paid',
                paymentMethod: 'Card'
            },
            {
                patientName: 'Jane Smith',
                billDate: new Date('2024-01-16'),
                billNumber: 'BILL-1002',
                billType: 'IP',
                department: 'Neurology',
                doctor: 'Dr. Johnson',
                totalAmount: 5000,
                paidAmount: 2500,
                paymentStatus: 'Partial',
                paymentMethod: 'Insurance'
            }
        ];
        
        this.bills = sampleBills;
        this.filteredBills = JSON.stringify(this.bills);
    }

    prefillFormWithAppointmentData(): void {
        if (this.appointmentData) {
            // Find and set patient
            this.selectedPatient = this.patients.find(p => p.name === this.appointmentData.patientName);
            
            // Set department and doctor
            this.department = this.appointmentData.department;
            this.doctor = this.appointmentData.doctor;
            
            // Add default consultation service
            this.billItems = [{ 
                serviceName: 'Consultation', 
                quantity: 1, 
                unitPrice: 150, 
                total: 150 
            }];
            
            this.calculateFinalAmount();
        }
    }

    generateBill(): void {
        const newBill = {
            patientName: this.selectedPatient?.name || this.appointmentData?.patientName || '',
            patientId: this.appointmentData?.patientId || '',
            appointmentId: this.appointmentData?.appointmentId || '',
            billDate: this.billDate,
            billNumber: this.billNumber,
            billType: this.billType,
            department: this.department,
            doctor: this.doctor,
            totalAmount: this.finalAmount,
            paidAmount: this.paidAmount,
            paymentStatus: this.paymentStatus,
            paymentMethod: this.paymentMethod,
            notes: this.notes,
            billItems: this.billItems
        };
        
        this.bills.push(newBill);
        this.filteredBills = JSON.stringify(this.bills);
        
        // If navigated from appointment and bill is paid, show success message
        if (this.isNavigatedFromAppointment && this.paymentStatus === 'Paid') {
            alert('Bill generated and payment completed successfully! You can now proceed to assessment.');
        } else {
            alert('Bill generated successfully!');
        }
        
        if (!this.isNavigatedFromAppointment) {
            this.resetForm();
        }
    }

    proceedToAssessment(): void {
        if (this.paymentStatus === 'Paid' && this.appointmentData) {
            this.router.navigate(['/home/hms/assessment'], {
                queryParams: {
                    from: 'billing',
                    appointmentId: this.appointmentData.appointmentId,
                    patientName: this.appointmentData.patientName,
                    patientId: this.appointmentData.patientId,
                    department: this.appointmentData.department,
                    doctor: this.appointmentData.doctor,
                    billNumber: this.billNumber,
                    paidAmount: this.paidAmount
                }
            });
        } else {
            alert('Payment must be completed before proceeding to assessment!');
        }
    }

    goBack(): void {
        this.router.navigate(['/home/hms/appointment']);
    }

    saveDraft(): void {
        alert('Bill saved as draft!');
    }

    cancel(): void {
        if (this.isNavigatedFromAppointment) {
            this.goBack();
        } else {
            this.resetForm();
        }
    }

    resetForm(): void {
        this.selectedPatient = null;
        this.billDate = new Date();
        this.billNumber = 'BILL-' + Math.floor(Math.random() * 10000);
        this.billType = 'OP';
        this.department = '';
        this.doctor = '';
        this.billItems = [{ serviceName: '', quantity: 1, unitPrice: 0, total: 0 }];
        this.discount = 0;
        this.tax = 0;
        this.insuranceCoverage = 0;
        this.finalAmount = 0;
        this.paymentMethod = '';
        this.paidAmount = 0;
        this.paymentStatus = 'Unpaid';
        this.notes = '';
    }

    addItem(): void {
        this.billItems.push({ serviceName: '', quantity: 1, unitPrice: 0, total: 0 });
    }

    removeItem(index: number): void {
        this.billItems.splice(index, 1);
        this.calculateFinalAmount();
    }

    calculateItemTotal(item: BillItem): void {
        item.total = item.quantity * item.unitPrice;
        this.calculateFinalAmount();
    }

    getTotalAmount(): number {
        return this.billItems.reduce((sum, item) => sum + item.total, 0);
    }

    calculateFinalAmount(): void {
        const subtotal = this.getTotalAmount();
        const discountAmount = (subtotal * this.discount) / 100;
        const taxAmount = ((subtotal - discountAmount) * this.tax) / 100;
        this.finalAmount = subtotal - discountAmount + taxAmount - this.insuranceCoverage;
        this.calculatePaymentStatus();
    }

    calculatePaymentStatus(): void {
        if (this.paidAmount >= this.finalAmount) {
            this.paymentStatus = 'Paid';
        } else if (this.paidAmount > 0) {
            this.paymentStatus = 'Partial';
        } else {
            this.paymentStatus = 'Unpaid';
        }
    }

    onGetType(): void {
        if (this.filterValue === 'all') {
            this.bills = [...JSON.parse(this.filteredBills || '[]')];
        } else {
            let parseBills = JSON.parse(this.filteredBills || '[]');
            this.bills = parseBills.filter((bill: any) => bill.paymentStatus === this.filterValue);
        }
    }

    isFormDisabled(): boolean {
        return !(
            (this.selectedPatient || this.appointmentData) &&
            this.billDate &&
            this.department &&
            this.doctor &&
            this.billItems.length > 0 &&
            this.billItems.every(item => item.serviceName && item.quantity > 0 && item.unitPrice > 0)
        );
    }
}
