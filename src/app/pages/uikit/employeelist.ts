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
import { DatePickerModule } from 'primeng/datepicker';
import { KeyFilterModule } from 'primeng/keyfilter';
import { NgModel } from '@angular/forms';

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
    selector: 'app-list-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        // NgModel,
        InputTextModule,
        ChipModule,
        FluidModule,
        ButtonModule,
        DatePickerModule,
        SelectModule,
        TextareaModule,
        RadioButtonModule,
        SelectButtonModule,
        CalendarModule,
        InputMaskModule,
        TableModule,
        TabsModule,
        TagModule,
        ToastModule,
        KeyFilterModule
    ],
    styles: `
        ::ng-deep {
            .p-orderlist-list-container {
                width: 100%;
            }
        }
    `,
    providers: [ProductService, MessageService],
    template: `
        <div class="card my-height">
            <p-tabs value="0">
                <p-tablist>
                    <p-tab value="0">Employees</p-tab>
                    <p-tab value="1">Create Employee</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <div style="height: 441px; overflow-y: auto;">
                            <p-table [value]="employeeInfo" stripedRows>
                                <ng-template pTemplate="header">
                                    <tr>
                                        <th style="min-width:20rem">Employee</th>
                                        <th style="min-width:20rem">Email</th>
                                        <th style="min-width:20rem">Contact No.</th>
                                        <th style="min-width:20rem">Designation</th>
                                        <th style="min-width:20rem">Department</th>
                                        <th style="min-width:20rem">Role</th>
                                    </tr>
                                </ng-template>
                                <ng-template pTemplate="body" let-empData>
                                    <tr>
                                        <td>
                                            <p-chip class="!py-0 !pl-0 !pr-4 mt-2">
                                                <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
                                                    {{ empData.p_empname.slice(0, 1) }}
                                                </span>
                                                <span class="ml-2 font-medium"> {{ empData.p_empname }} </span>
                                            </p-chip>
                                            <!-- <div style="margin-left:15px;margin-top:3px" class="flex flex-row">
                                            <div class="flex">
                                                <p-tag [value]="empData.gender" [severity]="empData.gender == 'Male' ? 'success' : 'danger'"></p-tag>
                                            </div>
                                            <div class="flex font-semibold text-sm mt-1 ml-2">
                                                <div>
                                                    <div class="text-sm">{{ empData.dob | date: 'dd MMM yyyy' }}</div>
                                                    <div class="text-xs">{{ empData.dobText }}</div>
                                                </div>
                                            </div>
                                        </div> -->

                                            <!-- <p-tag [value]="empData.gender" [severity]="empData.gender == 'Male' ? 'success' : 'danger'"></p-tag>
                                        <div class="flex flex-row justify-content-between font-semibold text-sm mt-1 ml-2">
                                            {{ empData.dob | date: 'dd MMM yyyy' }}
                                        </div>
                                        {{ empData.dobText }} -->
                                        </td>
                                        <td class="text-right">
                                            {{ empData.p_email }}
                                        </td>
                                        <td>
                                            {{ empData.p_mobile_no }}
                                        </td>
                                        <td>
                                            {{ empData.p_designation }}
                                        </td>
                                        <td>
                                            {{ empData.p_department }}
                                        </td>

                                        <td>
                                            {{ empData.p_role }}
                                        </td>
                                    </tr>
                                </ng-template>
                                <ng-template #emptymessage>
                                    <tr>
                                        <td colspan="6" class="text-center">No Employees found.</td>
                                    </tr>
                                </ng-template>
                            </p-table>
                        </div>
                    </p-tabpanel>
                    <p-tabpanel value="1">
                        <p-fluid>
                            <div class="flex mt-2">
                                <div class="card flex flex-col gap-3 w-full">
                                    <div class="flex flex-col md:flex-row gap-3">
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="firstname2">Employee Name</label>
                                            <input pInputText id="firstname2" type="text" [(ngModel)]="employee.p_empname" />
                                        </div>
                                    </div>

                                    <div class="flex flex-col md:flex-row gap-4">
                                        <!-- Left: Inline Datepicker -->
                                        <div class="flex-1 flex flex-col gap-2">
                                            <label for="p_dob">Date Of Birth</label>
                                            <p-datepicker
                                                id="p_dob"
                                                [(ngModel)]="employee.p_dob"
                                                [readonlyInput]="true"
                                                [iconDisplay]="'input'"
                                                [showIcon]="true"
                                                [defaultDate]="defaultDate"
                                                inputId="icondisplay"
                                                baseZIndex="9999999999999"
                                                [inline]="true"
                                                [maxDate]="maxDate"
                                                styleClass="w-full"
                                            />
                                        </div>

                                        <!-- Right: Email + Contact -->
                                        <div class="flex-1 flex flex-col gap-3">
                                            <div class="flex flex-col gap-2">
                                                <label for="Email">Email</label>
                                                <input pInputText id="Email" type="email" [(ngModel)]="employee.p_email" />
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="Contact">Contact No.</label>

                                                <input pInputText id="Contact" type="text" maxlength="10" [(ngModel)]="employee.p_mobile_no" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex gap-4 justify-conent-between">
                                        <button pButton label="Create Employee" class="p-button-sm" (click)="saveEmp()" [disabled]="isFormDisabled()"></button>
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
export class EmployeeList implements OnInit {
    public _productService = inject(ProductService);
    maxDate: any = null;
    defaultDate: any = null;
    public employee: any = {
        p_employee_id: null,
        p_empname: null,
        p_designation_id: null,
        p_department_id: null,
        p_dob: null,
        p_email: null,
        p_mobile_no: null,
        p_role_id: null
    };
    public clearEmp = JSON.stringify(this.employee);
    stateOptions: any[] = [
        { label: 'All', value: 'all' },
        { label: 'IP', value: 'IP' },
        { label: 'OP', value: 'OP' }
    ];
    value: string = 'all';
    employeeInfo: any = [];
    filteredPatients: any = JSON.stringify(this.employeeInfo);
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

    constructor() {
        let today = new Date();
        this.maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        this.defaultDate = new Date(today.getFullYear() - 18, 0, 1);
    }
    async ngOnInit() {
        this._lodSrvce.show();
        this.employeeInfo = [];
        try {
            let empData = await this.logSrvc.getAllEmployees();
            if (empData.length > 0) {
                _.forEach(empData, (itm: any) => {
                    let emp = {
                        p_employee_id: itm.p_employee_id,
                        p_empname: itm.p_empname,
                        p_designation: itm.p_designation,
                        p_department: itm.p_department,
                        p_dob: itm.p_dob,
                        p_email: itm.p_email,
                        p_mobile_no: itm.p_mobile_no,
                        p_role: itm.p_role
                    };
                    this.employeeInfo.push(emp);
                });
            }
        } catch (e) {
            this._lodSrvce.hide();
        }
        this._lodSrvce.hide();
    }

    async saveEmp() {
        try {
            this._lodSrvce.show();
            const saveEmp = await this.logSrvc.saveEmployee(this.employee);
            if (saveEmp) {
                this.messageService.add({ severity: 'success', summary: 'Employee', detail: `Employee is saved successfully ` });
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
        this.employee = JSON.parse(this.clearEmp);
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
            this.employeeInfo = [...JSON.parse(this.filteredPatients)];
        } else {
            console.log(this.filteredPatients);
            let parsePatients = JSON.parse(this.filteredPatients);
            this.employeeInfo = parsePatients.filter((empData: any) => empData.in_item_category_id === this.value);
        }
    }

    isFormDisabled(): boolean {
        return !(this.employee.p_empname && this.employee.p_dob && this.employee.p_email && this.employee.p_mobile_no);
    }
}
