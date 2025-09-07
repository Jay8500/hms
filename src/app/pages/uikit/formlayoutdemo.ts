import { Component, inject, OnInit, viewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ProductService } from '../service/product.service';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChipModule } from 'primeng/chip';
import { NameInitialsPipe } from '../../name-initials.pipe';
import { LoginserviceService } from '../service/loginservice.service';
import { LoaderService } from '../../loader.service';
interface State {
    name: string;
    id: string;
}
interface Patient {
    name: string;
    gender: string;
    dob: Date;
    admissionType: string;
}
@Component({
    selector: 'app-formlayout-demo',
    standalone: true,
    imports: [
        CommonModule,
        InputTextModule,
        ChipModule,
        FluidModule,
        ButtonModule,
        SelectModule,
        FormsModule,
        TextareaModule,
        NameInitialsPipe,
        RadioButtonModule,
        SelectButtonModule,
        DatePickerModule,
        InputMaskModule,
        TableModule,
        TabsModule,
        TagModule
    ],
    providers: [ProductService, DatePipe],
    template: `
        <div class="card">
            <p-tabs value="0">
                <p-tablist>
                    <p-tab value="0">Registrations</p-tab>
                    <p-tab value="1">Create Registration</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <div style="height: 365px; overflow-y: auto;">
                            <p-table [value]="patients" stripedRows>
                                <ng-template pTemplate="header">
                                    <tr>
                                        <th style="min-width:1rem">
                                            <div class="flex items-left">
                                                <p-selectbutton [options]="stateOptions" [(ngModel)]="ioorop" aria-labelledby="basic" (onChange)="onGetType()" />
                                            </div>
                                        </th>
                                        <th style="min-width:20rem">Patient Name</th>
                                        <th style="min-width:4rem">
                                            <div class="flex items-center">
                                                Mobile
                                                <p-columnFilter type="text" field="phoneNumber" display="menu" />
                                            </div>
                                        </th>
                                        <th style="min-width:4rem">
                                            <div class="flex items-center">
                                                Email
                                                <p-columnFilter type="text" field="email" display="menu" />
                                            </div>
                                        </th>
                                        <th style="min-width:4rem">
                                            <div class="flex items-center">
                                                Blood Group
                                                <p-columnFilter field="bloodGroup" matchMode="equals" display="menu">
                                                    <ng-template #filter let-values let-filter="filterCallback">
                                                        <p-select [(ngModel)]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                            <ng-template let-option #item>
                                                                <p-tag [value]="option.value" severity="warn"></p-tag>
                                                            </ng-template>
                                                        </p-select>
                                                    </ng-template>
                                                </p-columnFilter>
                                            </div>
                                        </th>
                                        <th style="min-width:4rem">MRN No.</th>
                                        <th style="min-width:4rem">
                                            <div class="flex items-center">
                                                Status
                                                <p-columnFilter field="status" matchMode="equals" display="menu">
                                                    <ng-template #filter let-values let-filter="filterCallback">
                                                        <p-select [(ngModel)]="value" [options]="status" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                            <ng-template let-option #item>
                                                                <p-tag [value]="option.value" [severity]="option.label == 'Active' ? 'success' : option.label == 'Inactive' ? 'warn' : 'danger'"></p-tag>
                                                            </ng-template>
                                                        </p-select>
                                                    </ng-template>
                                                </p-columnFilter>
                                            </div>
                                        </th>
                                    </tr>
                                </ng-template>
                                <ng-template pTemplate="body" let-patient>
                                    <tr>
                                        <td class="text-center">
                                            <p-tag [value]="patient.registrationType" [severity]="_productService.getSeverityForAdmissionType(patient.admissionType)"></p-tag>
                                        </td>
                                        <td>
                                            <p-chip class="!py-0 !pl-0 !pr-4 mt-2">
                                                <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center" style="font-size: xx-small;">
                                                    {{ patient.name | nameInitials }}
                                                </span>
                                                <span class="ml-2 font-medium"> {{ patient.name }} </span>
                                            </p-chip>
                                            <div style="margin-left:15px;margin-top:3px" class="flex flex-row">
                                                <div class="flex">
                                                    <p-tag [value]="patient.gender" [severity]="patient.gender == 'Male' ? 'success' : 'danger'"></p-tag>
                                                </div>
                                                <div class="flex font-semibold text-sm mt-1 ml-2">
                                                    <div>
                                                        <div class="text-sm">{{ patient.dob | date: 'dd MMM yyyy' }}</div>
                                                        <div class="text-xs">{{ patient.dobText }}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- <p-tag [value]="patient.gender" [severity]="patient.gender == 'Male' ? 'success' : 'danger'"></p-tag>
                                        <div class="flex flex-row justify-content-between font-semibold text-sm mt-1 ml-2">
                                            {{ patient.dob | date: 'dd MMM yyyy' }}
                                        </div>
                                        {{ patient.dobText }} -->
                                        </td>
                                        <td class="text-right">
                                            {{ patient.phoneNumber }}
                                        </td>
                                        <td>
                                            {{ patient.email }}
                                        </td>
                                        <td>
                                            <p-tag [value]="patient.bloodGroup" [severity]="'warn'"></p-tag>
                                        </td>
                                        <td>
                                            {{ patient.mrnNo }}
                                        </td>
                                        <td>
                                            <p-tag [value]="patient.status" [severity]="patient.status == 'Active' ? 'success' : patient.status == 'Inactive' ? 'warn' : 'danger'"></p-tag>
                                        </td>
                                    </tr>
                                </ng-template>
                                <ng-template #emptymessage>
                                    <tr>
                                        <td colspan="6" class="text-center">No Registrations found.</td>
                                    </tr>
                                </ng-template>
                            </p-table>
                        </div>
                    </p-tabpanel>
                    <p-tabpanel value="1">
                        <p-fluid>
                            <div class="flex mt-0">
                                <div class="card flex flex-col gap-3 w-full">
                                    <div class="flex flex-col md:flex-row gap-2">
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="firstname2">Firstname</label>
                                            <input pInputText id="firstname2" type="text" [(ngModel)]="firstname" [ngClass]="{ 'ng-invalid': firstname.length == 0 }" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="lastname2">Middlename</label>
                                            <input pInputText id="lastname2" type="text" [(ngModel)]="middle" [ngClass]="{ 'ng-invalid': middle.length == 0 }" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="lastname2">Lastname</label>
                                            <input pInputText id="lastname2" type="text" [(ngModel)]="lastname" [ngClass]="{ 'ng-invalid': lastname.length == 0 }" autocomplete="off" />
                                        </div>
                                        <!-- <div class="flex flex-wrap gap-2 w-full">
                                        <label for="lastname2">Full Name</label>
                                        <input pInputText id="lastname2" type="text" [(ngModel)]="lastname" [disabled]="true" />
                                    </div> -->
                                    </div>
                                    <div class="flex flex-col md:flex-row gap-2">
                                        <div class="flex flex-col flex-wrap gap-2 w-full">
                                            <label>Admission Type</label>
                                            <div class="flex  gap-2">
                                                <div class="flex align-items-center">
                                                    <p-radioButton name="admissionType" value="1" [(ngModel)]="admissionType" inputId="op"></p-radioButton>
                                                    <label for="op" class="ml-2">OP</label>
                                                </div>
                                                <div class="flex align-items-center">
                                                    <p-radioButton name="admissionType" value="2" [(ngModel)]="admissionType" inputId="ip"></p-radioButton>
                                                    <label for="ip" class="ml-2">IP</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-col gap-2 w-full">
                                            <label for="dob">Date of Birth</label>
                                            <p-datepicker inputId="dob" [(ngModel)]="dob" [showIcon]="true" dateFormat="mm/dd/yy" [maxDate]="dobMinDate" />
                                        </div>
                                        <div class="flex flex-col gap-2 w-full">
                                            <label>Gender</label>
                                            <div class="flex gap-1 mt-3">
                                                <div class="flex align-items-center">
                                                    <p-radioButton name="gender" value="1" [(ngModel)]="gender" inputId="male"></p-radioButton>
                                                    <label for="male" class="ml-2">Male</label>
                                                </div>
                                                <div class="flex align-items-center">
                                                    <p-radioButton name="gender" value="2" [(ngModel)]="gender" inputId="female"></p-radioButton>
                                                    <label for="female" class="ml-2">Female</label>
                                                </div>
                                                <div class="flex align-items-center">
                                                    <p-radioButton name="gender" value="3" [(ngModel)]="gender" inputId="other"></p-radioButton>
                                                    <label for="other" class="ml-2">Other</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-col gap-2 w-full">
                                            <label for="phoneNumber">Phone Number</label>
                                            <input pInputText id="phoneNumber" type="text" [(ngModel)]="phoneNumber" [minlength]="10" [maxlength]="10" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="email">Email</label>
                                            <input pInputText id="email" type="email" [(ngModel)]="email" autocomplete="off" />
                                        </div>
                                    </div>

                                    <div class="flex flex-col md:flex-row gap-2">
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="bloodGroup">Blood Group</label>
                                            <p-select id="bloodGroup" [(ngModel)]="bloodGroup" [options]="bloodGroups" placeholder="Select Blood Group" optionLabel="entity_value_name" optionValue="entity_value_id" class="w-full"></p-select>
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="state">State</label>
                                            <p-select id="state" [(ngModel)]="state_id" [options]="states" optionLabel="state_name" optionValue="state_id" placeholder="Select State" class="w-full"></p-select>
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="zip">Zip</label>
                                            <input pInputText id="zip" type="text" [(ngModel)]="zip" [minlength]="6" [maxlength]="6" autocomplete="off" />
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap">
                                        <label for="address">Address</label>
                                        <textarea pTextarea id="address" rows="4" [(ngModel)]="address" [ngClass]="{ 'ng-invalid': address.length == 0 }" autocomplete="off"></textarea>
                                    </div>
                                    <div class="flex flex-col md:flex-row gap-2">
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="emergencyContactName">Emergency Contact Name</label>
                                            <input pInputText id="emergencyContactName" type="text" [(ngModel)]="emergencyContactName" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="emergencyContactNumber">Emergency Contact Number</label>
                                            <input pInputText id="emergencyContactNumber" type="text" [(ngModel)]="emergencyContactNumber" [minlength]="10" [maxlength]="10" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-col gap-2 w-full">
                                            <label for="mrn">MRN (Medical Record Number)</label>
                                            <input pInputText id="mrn" type="text" [(ngModel)]="mrn" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="occupation">Occupation</label>
                                            <p-select id="bloodGroup" [(ngModel)]="occupation" [options]="occupationsList" placeholder="Select Occupation" optionLabel="entity_value_name" optionValue="entity_value_id" class="w-full"></p-select>
                                        </div>
                                    </div>

                                    <div class="flex flex-col md:flex-row gap-2">
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="insuranceProvider">Insurance Provider</label>
                                            <input pInputText id="insuranceProvider" type="text" [(ngModel)]="insuranceProvider" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full">
                                            <label for="insuranceNumber">Insurance Number</label>
                                            <input pInputText id="insuranceNumber" type="text" [(ngModel)]="insuranceNumber" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full" *ngIf="admissionType === '1'">
                                            <label for="admittingDoctor">Admitting Doctor</label>
                                            <input pInputText id="admittingDoctor" type="text" [(ngModel)]="admittingDoctor" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full" *ngIf="admissionType === '1'">
                                            <label for="roomNumber">Room Number</label>
                                            <input pInputText id="roomNumber" type="text" [(ngModel)]="roomNumber" autocomplete="off" />
                                        </div>

                                        <div class="flex flex-wrap gap-2 w-full" *ngIf="admissionType === '2'">
                                            <label for="visitingDepartment">Visiting Department</label>
                                            <input pInputText id="visitingDepartment" type="text" [(ngModel)]="visitingDepartment" autocomplete="off" />
                                        </div>
                                        <div class="flex flex-wrap gap-2 w-full" *ngIf="admissionType === '2'">
                                            <label for="appointmentTime">Appointment Time</label>
                                            <p-datepicker inputId="appointmentTime" [(ngModel)]="appointmentTime" [showTime]="true" [timeOnly]="true" [hourFormat]="'12'" />
                                        </div>
                                    </div>
                                    <div class="flex gap-2 justify-conent-between">
                                        <button pButton label="Register" class="p-button-sm" (click)="register()" [disabled]="isFormDisabled()"></button>
                                        <button pButton label="Cancel" (click)="cancel()" [disabled]="isFormDisabled()" class="p-button-sm p-button-secondary ml-2"></button>
                                    </div>
                                </div>
                            </div>
                        </p-fluid>
                    </p-tabpanel>
                </p-tabpanels>
            </p-tabs>
        </div>
    `
})
export class FormLayoutDemo implements OnInit {
    public _productService = inject(ProductService);
    public loginSerivce = inject(LoginserviceService);
    public _datePipe = inject(DatePipe);
    public ioorop: any = 'all';
    public isblockUI = false;
    public dobMinDate = new Date();
    stateOptions: any[] = [
        { label: 'All', value: 'all' },
        { label: 'IP', value: '2' },
        { label: 'OP', value: '1' }
    ];
    value: string = 'all';
    patients: any = [];
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
        { name: 'Andhra Pradesh', id: '1' },
        { name: 'Tamilnadu', id: '2' },
        { name: 'Kerala', id: '3' }
        // Add more states as needed
    ];
    dropdownItem = null;
    bloodGroups: any[] = [];
    occupationsList: any[] = [];

    firstname: string = '';
    lastname: string = '';
    middle: string = '';
    address: string = '';
    state_id: null | undefined; // { name: 'New York', code: 'NY' };
    zip: string = '';
    admissionType: string = '1'; // Default to Outpatient
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

    constructor(private loader: LoaderService) {}

    async register() {
        this.isblockUI = true;
        const saveRegistration = await this.loginSerivce.saveRegistration({
            patient_reg_id: '0',
            patient_reg_rev_no: '0',
            patient_reg_cd: 'FRONT_END',
            first_name: this.firstname,
            last_name: this.lastname,
            middle_name: this.middle,
            address: this.address,
            state_id: this.state_id,
            zipcode: this.zip,
            addmission_type_id: this.admissionType,
            date_of_birth: this._datePipe.transform(this.dob, 'dd MMM YYYY'),
            phone_number: this.phoneNumber,
            email: this.email,
            emer_contact_number: this.emergencyContactNumber,
            emer_contact_name: this.emergencyContactNumber,
            gender_id: this.gender,
            blood_group_id: this.bloodGroup,
            mr_number: this.mrn,
            occupation_id: this.occupation,
            insurance_provider: this.insuranceProvider,
            insurance_number: this.insuranceNumber,
            visiting_dept_id: this.visitingDepartment || null,
            appoint_time: this._datePipe.transform(this.appointmentTime, 'hh mm a') || null,
            create_by: 1,
            record_status: 'A'
        });
        if (saveRegistration) {
        }
        this.isblockUI = false;
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
        if (this.ioorop === 'all') {
            this.patients = [...JSON.parse(this.filteredPatients)];
        } else {
            let parsePatients = JSON.parse(this.filteredPatients);
            this.patients = parsePatients.filter((patient: any) => patient.admissionType === this.ioorop);
        }
    }

    isFormDisabled(): boolean {
        return !(
            (this.firstname &&
                this.lastname &&
                this.address &&
                this.state_id &&
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
                this.roomNumber) ||
            (this.visitingDepartment && this.appointmentTime)
        );
    }
    public filteredPatients: any;
    async ngOnInit() {
        this.loader.show();
        this.bloodGroups = await this.loginSerivce.getZeroLevelEntity({ par_entity_id: 6 }); // BLOOD GROUP LIST
        this.occupationsList = await this.loginSerivce.getZeroLevelEntity({ par_entity_id: 7 }); // OCCUPATIONS LIST
        this.states = await this.loginSerivce.getStateMasterList(); // OCCUPATIONS LIST
        let getRegistrations: any = await this.loginSerivce.getRegistrations({ par_flag: 'g' });
        if (getRegistrations.length > 0) {
            getRegistrations.forEach((ele: any) => {
                let registrationsInfo: any = {
                    registrationType: `${ele.addmission_type_id == 2 ? `${ele.patient_reg_cd}` : `${ele.patient_reg_cd}`}`,
                    patient_reg_cd: ele.patient_reg_cd,
                    name: `${ele.first_name} ${ele.middle_name} ${ele.last_name}`,
                    gender: ele.gender || null,
                    dob: new Date(ele.date_of_birth),
                    dobText: this.calculateAge(new Date(ele.date_of_birth)),
                    admissionType: ele.addmission_type_id.toString(),
                    email: ele.email,
                    phoneNumber: ele.phone_number,
                    bloodGroup: 'B+', //blood_group_id
                    mrnNo: ele.mrn || null,
                    status: 'Active',
                    occupation: ele.occupation || null,
                    insurance_provider: ele.insurance_provider || null,
                    insurance_number: ele.insurance_number || null,
                    visiting_department: ele.visiting_department || null,
                    appointment_time: ele.appointment_time || null,
                    created_at: ele.created_at != null ? new Date(ele.created_at) : null,
                    updated_at: ele.updated_at != null ? new Date(ele.updated_at) : null
                };
                this.patients.push(registrationsInfo);
            });
            this.filteredPatients = JSON.stringify(this.patients);
        }
        this.loader.hide();
    }
}
