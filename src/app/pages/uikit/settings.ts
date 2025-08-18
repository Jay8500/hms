import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
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
import { ProductService } from '../service/product.service';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChipModule } from 'primeng/chip';
import { TabsModule } from 'primeng/tabs';
import { LoginserviceService } from '../service/loginservice.service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { KeyFilterModule } from 'primeng/keyfilter';
// import tippy from 'tippy.js';    
import { NgxTippyModule } from 'ngx-tippy-wrapper';
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
    selector: 'settings',
    standalone: true,
    imports: [
        CommonModule,
        PanelModule,
        BlockUIModule,
        MessageModule,
        CheckboxModule,
        InputTextModule,
        ChipModule,
        FluidModule,
        NgxTippyModule,
        ButtonModule,
        SelectModule,
        FormsModule,
        TextareaModule,
        FormsModule,
        RadioButtonModule,
        SelectButtonModule,
        CalendarModule,
        InputMaskModule,
        TableModule,
        TabsModule,
        TagModule,
        ToggleSwitchModule,
        DialogModule,
        KeyFilterModule
    ],
    providers: [ProductService],
    template: `<div class="card">
            <p-tabs value="0">
                <p-tablist style="overflow:auto">
                    <p-tab value="0">Manage Permissions</p-tab>
                    <p-tab value="1">Manage Users</p-tab>
                    <p-tab value="2">Manage Employees</p-tab>
                    <p-tab value="3">Manage Roles</p-tab>
                    <p-tab value="4">Manage Designations</p-tab>
                    <p-tab value="5">Manage Departments</p-tab>
                    <p-tab value="6">Manage Documents</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <p-message>Any Permission changes will be reflected for the users at their relogin</p-message>
                        <div class="main-card mt-2">
                            <p-select
                                class="flex mb-2"
                                id="bloodGroup"
                                [(ngModel)]="selectedUserForDocPermission"
                                [options]="usersDropDownInfo"
                                [placeholder]="dropDownLoad ? 'Fetching User' : 'Select User'"
                                [optionLabel]="'username'"
                                [optionValue]="'id'"
                                [loading]="dropDownLoad"
                                (onChange)="onUserSelected($event)"
                            >
                            </p-select>
                            <div class="grid">
                                <div class="col-6 col-offset-4">
                                    <div style="height: 365px; overflow-y: auto;">
                                        <div *ngFor="let document of getAllDocs">
                                            <p-panel #pnl styleClass="mt-2">
                                                <ng-template #header>
                                                    <div class="font-light text-gray-700">Document</div>
                                                </ng-template>
                                                <div style="width: 300px;">
                                                    <div class="flex flex-row">
                                                        <p-checkbox [(ngModel)]="document.isDoc" [binary]="true" (onChange)="onIsDocSelected($event, document)" [disabled]="userId == null" />
                                                        <div class="font-bold text-green-600 ml-2">
                                                            {{ document.docname }}
                                                        </div>
                                                    </div>
                                                    <div class="flex justify-content-end mt-3">
                                                        <div style="display: flex; flex-direction: column; align-items: center; margin-right: 20px;">
                                                            <div class="font-light text-gray-700">View</div>
                                                            <div>
                                                                <p-toggleswitch [(ngModel)]="document.checked" [disabled]="!document.isDoc" (onChange)="onToggle($event, 'c', document)" />
                                                            </div>
                                                        </div>
                                                        <div style="display: flex; flex-direction: column; align-items: center;">
                                                            <div class="font-light text-gray-700">Edit</div>
                                                            <div>
                                                                <p-toggleswitch [(ngModel)]="document.can_edit_checked" [disabled]="!document.isDoc" (onChange)="onToggle($event, 'unc', document)" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </p-panel>
                                            <p-blockui [target]="pnl" [blocked]="blockedPanel" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p-tabpanel>
                    <p-tabpanel value="1">
                        <div style="height: 441px; overflow-y: auto;">
                            <p-table [value]="settings_mng_users" stripedRows>
                                <ng-template pTemplate="header">
                                    <tr>
                                        <th style="min-width:1rem"></th>
                                        <th style="min-width:20rem">User Name</th>
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
                                        <th style="min-width:4rem">MRN No.</th>
                                        <th style="min-width:4rem">
                                            <div class="flex items-center">
                                                Status
                                                <!-- <p-columnFilter field="status" matchMode="equals" display="menu">
                                                <ng-template #filter let-values let-filter="filterCallback">
                                                    <p-select [(ngModel)]="value" [options]="status" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                        <ng-template let-option #item>
                                                            <p-tag [value]="option.value" [severity]="option.label == 'Active' ? 'success' : option.label == 'Inactive' ? 'warn' : 'danger'"></p-tag>
                                                        </ng-template>
                                                    </p-select>
                                                </ng-template>
                                            </p-columnFilter> -->
                                            </div>
                                        </th>
                                    </tr>
                                </ng-template>
                                <ng-template pTemplate="body" let-patient>
                                    <tr>
                                        <td class="text-center">
                                            <p-tag [value]="patient.admissionType" [severity]="_productService.getSeverityForAdmissionType(patient.admissionType)"></p-tag>
                                        </td>
                                        <td>
                                            <p-chip class="!py-0 !pl-0 !pr-4 mt-2">
                                                <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
                                                    {{ patient.name.slice(0, 1) }}
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
                    <p-tabpanel value="2">
                        <!--settings_mng_employees -->
                        <div style="height: 441px; overflow-y: auto;">
                            <p-table [value]="settings_mng_employees" stripedRows>
                                <ng-template pTemplate="header">
                                    <tr>
                                        <th style="min-width:1rem"></th>
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
                                        <th style="min-width:4rem">MRN No.</th>
                                        <th style="min-width:4rem">
                                            <div class="flex items-center">
                                                Status
                                                <!-- <p-columnFilter field="status" matchMode="equals" display="menu">
                                                <ng-template #filter let-values let-filter="filterCallback">
                                                    <p-select [(ngModel)]="value" [options]="status" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                                        <ng-template let-option #item>
                                                            <p-tag [value]="option.value" [severity]="option.label == 'Active' ? 'success' : option.label == 'Inactive' ? 'warn' : 'danger'"></p-tag>
                                                        </ng-template>
                                                    </p-select>
                                                </ng-template>
                                            </p-columnFilter> -->
                                            </div>
                                        </th>
                                    </tr>
                                </ng-template>
                                <ng-template pTemplate="body" let-patient>
                                    <tr>
                                        <td class="text-center">
                                            <p-tag [value]="patient.admissionType" [severity]="_productService.getSeverityForAdmissionType(patient.admissionType)"></p-tag>
                                        </td>
                                        <td>
                                            <p-chip class="!py-0 !pl-0 !pr-4 mt-2">
                                                <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
                                                    {{ patient.name.slice(0, 1) }}
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
                    <p-tabpanel value="3">
                        <!--settings_mng_roles -->
                        <p-button   (click)="showDialogRoles('add');  roleName['name'] = null; roleName['id'] = null" icon="pi pi-plus-circle" label="Add Role" severity="secondary" styleClass="min-w-40" />
                        <div class="main-card mt-2">
                            <div class="grid">
                                <div class="col-6 col-offset-4">
                                    <div style="height: 365px; overflow-y: auto;">
                                        <div *ngFor="let rls of settings_mng_roles">
                                            <p-panel styleClass="mt-2">
                                                <ng-template pTemplate="header">
                                                    <div class="font-light text-gray-700">Role</div>
                                                </ng-template>
                                                <div style="width: 300px;">
                                                    <div class="flex flex-row cursor-pointer" 
                                                    (click)="showDialogRoles('edit'); roleName['name'] = rls.name; roleName['id'] = rls.id">
                                                        <div class="font-bold text-green-600 ml-2" [ngxTippy]="'Edit ' + rls.name ">
                                                            {{ rls.name }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </p-panel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p-tabpanel>
                    <p-tabpanel value="4">
                        <!--settings_mng_designations -->
                        <p-button (click)="showDialogDesig('add'); designationName['name'] = null; designationName['id'] = null" icon="pi pi-plus-circle" label="Add Designation" severity="secondary" styleClass="min-w-40" />
                        <div class="main-card mt-2">
                            <div class="grid">
                                <div class="col-6 col-offset-4">
                                    <div style="height: 365px; overflow-y: auto;">
                                        <div *ngFor="let desigs of settings_mng_designations">
                                            <p-panel styleClass="mt-2">
                                                <ng-template pTemplate="header">
                                                    <div class="font-light text-gray-700">Designation</div>
                                                </ng-template>
                                                <div style="width: 300px;">
                                                    <div class="flex flex-row cursor-pointer" (click)="showDialogDesig('edit'); designationName['name'] = desigs.name; designationName['id'] = desigs.designation_id">
                                                        <div class="font-bold text-green-600 ml-2" [ngxTippy]="'Edit ' + desigs.name ">
                                                            {{ desigs.name }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </p-panel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p-tabpanel>
                    <p-tabpanel value="5">
                        <!--settings_mng_departments -->
                        <p-button (click)="showDialogDept('add'); departmentName['name'] = null; departmentName['id'] = null" icon="pi pi-plus-circle" label="Add Department" severity="secondary" styleClass="min-w-40" />
                        <div class="main-card mt-2">
                            <div class="grid">
                                <div class="col-6 col-offset-4">
                                    <div style="height: 365px; overflow-y: auto;">
                                        <div *ngFor="let deps of settings_mng_departments">
                                            <p-panel styleClass="mt-2">
                                                <ng-template pTemplate="header">
                                                    <div class="font-light text-gray-700">Department</div>
                                                </ng-template>
                                                <div style="width: 300px;">
                                                    <div class="flex flex-row cursor-pointer" (click)="showDialogDept('edit'); departmentName['name'] = deps.name; departmentName['id'] = deps.depsrtment_id">
                                                        <div class="font-bold text-green-600 ml-2" [ngxTippy]="'Edit ' + deps.name ">
                                                            {{ deps.name }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </p-panel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p-tabpanel>
                    <p-tabpanel value="6">
                        <!--settings_mng_documents -->
                        <p-button (click)="showDialog('add'); myDocName['myDocName'] = null; myDocName['docid'] = null" icon="pi pi-plus-circle" label="Add Document" severity="secondary" styleClass="min-w-40" />
                        <div class="main-card mt-2">
                            <div class="grid">
                                <div class="col-6 col-offset-4">
                                    <div style="height: 365px; overflow-y: auto;">
                                        <div *ngFor="let document of settings_mng_documents">
                                            <p-panel styleClass="mt-2">
                                                <ng-template pTemplate="header">
                                                    <div class="font-light text-gray-700">Document</div>
                                                </ng-template>
                                                <div style="width: 300px;">
                                                    <div class="flex flex-row cursor-pointer" (click)="showDialog('edit'); myDocName['myDocName'] = document.docname; myDocName['docid'] = document.docid">
                                                        <div class="font-bold text-green-600 ml-2" [ngxTippy]="'Edit ' + document.name ">
                                                            {{ document.docname }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </p-panel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p-tabpanel>
                </p-tabpanels>
            </p-tabs>

            <p-dialog [header]="mode == 'add' ? 'Add a Document' : 'Editing Document'" [modal]="true" [(visible)]="isvisible" position="right" [style]="{ width: '25rem' }">
                <!-- <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span> -->
                <div class="flex items-center gap-4 mb-4">
                    <!-- <label for="username" class="font-semibold w-10">Name</label> -->
                    <input pInputText  id="username" class="flex-auto" autocomplete="off" [(ngModel)]="myDocName.myDocName" [pKeyFilter]="'alpha'"/>
                </div>

                <div class="flex justify-end gap-2">
                    <p-button label="Cancel" severity="secondary" (click)="isvisible = false" />
                    <p-button label="Save" (click)="saveDocument()" [disabled]="[null, ''].includes(myDocName['myDocName'])" [loading]="isDocSuccess" />
                </div>
                <p-message [severity]="isDocSuccess ? 'success' : 'warn'" *ngIf="isDocSuccess">
                    {{ isDocSuccess ? 'Document Added' : 'Unable to process request' }}
                </p-message>
            </p-dialog>

            <p-dialog [header]="mode == 'add' ? 'Add a Role' : 'Editing Role'" [modal]="true" [(visible)]="isRolevisible" position="right" [style]="{ width: '25rem' }">
                <!-- <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span> -->
                <div class="flex items-center gap-4 mb-4">
                    <!-- <label for="username" class="font-semibold w-10">Name</label> -->
                    <input pInputText id="username" class="flex-auto" autocomplete="off" [(ngModel)]="roleName.name" [pKeyFilter]="'alpha'" />
                </div>

                <div class="flex justify-end gap-2">
                    <p-button label="Cancel" severity="secondary" (click)="isRolevisible = false" />
                    <p-button label="Save" (click)="saveRoleDocument()" [disabled]="[null, ''].includes(roleName['name'])" [loading]="isRoleSuccess" />
                </div>
                <p-message [severity]="isRoleSuccess ? 'success' : 'warn'" *ngIf="isRoleSuccess">
                    {{ isDocSuccess ? 'Role Added' : 'Unable to process request' }}
                </p-message>
            </p-dialog>

            <p-dialog [header]="mode == 'add' ? 'Add a Designation' : 'Editing Designation'" [modal]="true" [(visible)]="isDesigvisible" position="right" [style]="{ width: '25rem' }">
                <!-- <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span> -->
                <div class="flex items-center gap-4 mb-4">
                    <!-- <label for="username" class="font-semibold w-10">Name</label> -->
                    <input pInputText id="username" class="flex-auto" autocomplete="off" [(ngModel)]="designationName.name" [pKeyFilter]="'alpha'" />
                </div>

                <div class="flex justify-end gap-2">
                    <p-button label="Cancel" severity="secondary" (click)="isRolevisible = false" />
                    <p-button label="Save" (click)="saveDesig()" [disabled]="[null, ''].includes(designationName['name'])" [loading]="isDesigSucess" />
                </div>
                <p-message [severity]="isRoleSuccess ? 'success' : 'warn'" *ngIf="isRoleSuccess">
                    {{ isDocSuccess ? 'Role Added' : 'Unable to process request' }}
                </p-message>
            </p-dialog>

            <p-dialog [header]="mode == 'add' ? 'Add a Department' : 'Editing Department'" [modal]="true" [(visible)]="isDepvisible" position="right" [style]="{ width: '25rem' }">
                <!-- <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span> -->
                <div class="flex items-center gap-4 mb-4">
                    <!-- <label for="username" class="font-semibold w-10">Name</label> -->
                    <input pInputText id="username" class="flex-auto" autocomplete="off" [(ngModel)]="departmentName.name" [pKeyFilter]="'alpha'" />
                </div>

                <div class="flex justify-end gap-2">
                    <p-button label="Cancel" severity="secondary" (click)="isRolevisible = false" />
                    <p-button label="Save" (click)="saveDepartment()" [disabled]="[null, ''].includes(departmentName['name'])" [loading]="isdepSucess" />
                </div>
                <p-message [severity]="isRoleSuccess ? 'success' : 'warn'" *ngIf="isRoleSuccess">
                    {{ isDocSuccess ? 'Department Added' : 'Unable to process request' }}
                </p-message>
            </p-dialog>
        </div>
        <style>
            .main-card {
                width: 100%;
                /* border: 1px solid #ccc;
                border-radius: 8px;
                padding: 5px; */
                /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center; /* Vertically align items in the center */
            }
            .document-card {
                width: 500px;
                border: 1px solid #ccc;
                border-radius: 8px;
                padding: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                display: flex;
                justify-content: space-between;
                align-items: center; /* Vertically align items in the center */
            }
        </style> `
})
export class settings implements OnInit, AfterViewInit {
    // @ViewChild('tooltipBtn', { static: false }) tooltipBtn!: ElementRef<HTMLButtonElement>;
    public _productService = inject(ProductService);
    public loginSerivce = inject(LoginserviceService);
    public usersDropDownInfo: any = [];
    public dropDownLoad: boolean = false;
    public isvisible: boolean = false;
    public isRolevisible: boolean = false;
    public isDesigvisible: boolean = false;
    public isDepvisible: boolean = false;
    public myDocName: any = { myDocName: '', docid: null };
    public roleName: any = { name: '', id: null };
    public designationName: any = { name: '', id: null };
    public departmentName: any = { name: '', id: null };
    public isDocSuccess: any = false;
    public isRoleSuccess: any = false;
    public getAllDocs: any = [];
    // grids
    public selectedUserForDocPermission: any = null;
    public settings_mng_permissions: any = [];
    public settings_mng_users: any = [];
    public settings_mng_employees: any = [];
    public settings_mng_roles: any = [];
    public settings_mng_designations: any = [];
    public settings_mng_departments: any = [];
    public settings_mng_documents: any = [];

    status: any[] = [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
        { label: 'Deleted', value: 'Deleted' }
    ];

    async ngOnInit() {
        this.dropDownLoad = true;
        let usersOptns: any = await this.loginSerivce.getAllUsers();
        if (usersOptns.status == 200) {
            this.usersDropDownInfo = usersOptns['data'];
        }
        this.dropDownLoad = false;
        this.getAllDocs = await this.loginSerivce.getDoc();
        this.settings_mng_roles = await this.loginSerivce.getRoles();
        this.settings_mng_designations = await this.loginSerivce.getAllDesignations();
        this.settings_mng_departments = await this.loginSerivce.getAllDepartments();
        this.settings_mng_documents = await this.loginSerivce.getDoc();
        this.getAllDocs.forEach((ele: any) => (ele.isDoc = false));
    }

    ngAfterViewInit() {
        // if (this.tooltipBtn) {
        //     console.log("test ",this.tooltipBtn)
        //     tippy(this.tooltipBtn.nativeElement, {
        //         content: 'I am a Tippy tooltip!',
        //         placement: 'top',
        //     });
        // };
    }

    isFormDisabled(): boolean {
        return !(
            false
            // this.firstname &&
            // this.lastname &&
            // this.address &&
            // this.state &&
            // this.zip &&
            // this.admissionType &&
            // this.dob &&
            // this.phoneNumber &&
            // this.email &&
            // this.emergencyContactName &&
            // this.emergencyContactNumber &&
            // this.gender &&
            // this.bloodGroup &&
            // this.mrn &&
            // this.occupation &&
            // this.insuranceProvider &&
            // this.insuranceNumber &&
            // this.admittingDoctor &&
            // this.roomNumber &&
            // this.visitingDepartment &&
            // this.appointmentTime
        );
    }
    public blockedPanel = false;
    public userId: any = null;
    async onUserSelected(event: any) {
        this.blockedPanel = true;
        const userId = event.value;
        this.userId = event.value;
        const permissions = await this.loginSerivce.getDocumentPermissionsForUser(userId);

        const permissionsMap = new Map<number, { doc_permission_id: number | undefined; checked: boolean | undefined; can_edit_checked: boolean | undefined; record_status: number | undefined }>();
        permissions.forEach((perm: any) => {
            permissionsMap.set(perm.docid, { doc_permission_id: perm.doc_permission_id, checked: perm.can_view, can_edit_checked: perm.can_edit, record_status: perm.record_status });
        });

        this.getAllDocs = this.getAllDocs.map((doc: any) => {
            const permission = permissionsMap.get(doc.docid);
            return {
                ...doc,
                doc_permission_id: permission ? permission.doc_permission_id : null,
                checked: permission ? !!permission.checked : false,
                can_edit_checked: permission ? !!permission.can_edit_checked : false,
                record_status: permission ? permission.record_status : 1,
                isDoc: permission ? permission.record_status == 1 : false
            };
        });
        this.blockedPanel = false;
    }

    async onIsDocSelected(event: any, document: any) {
        document['userId'] = this.userId;
        document.record_status = event.checked ? 1 : 2;
        // document.checked = event.checked ? document.checked : false;
        // document.can_edit_checked = event.checked ? document.can_edit_checked : false;
        if (document.record_status == 2) {
            document.checked = false;
            document.can_edit_checked = false;
            const permissions = await this.loginSerivce.saveGrantDocAccessPermissions(document);
            if (permissions) {
                await this.onUserSelected({ value: document['userId'] });
            }
        }
    }

    async onToggle(myEvent: any, ctrl: string, event: any) {
        if (ctrl == 'c') {
            event['checked'] = myEvent['checked'];
        } else {
            event['can_edit_checked'] = myEvent['checked'];
        }
        event['userId'] = this.userId;
        const permissions = await this.loginSerivce.saveGrantDocAccessPermissions(event);
        if (permissions) {
            await this.onUserSelected({ value: event['userId'] });
        }
    }
    public mode: string = '';

    showDialog(mode: string) {
        this.isvisible = true;
        this.mode = mode;
    }

    async saveDocument() {
        this.isDocSuccess = true;
        if (this.mode == 'add') {
        } else {
        }
        this.myDocName['myDocName'] = this.roleName['myDocName'].trim();
        const docAdd = await this.loginSerivce.saveDocument(this.myDocName);
        if (docAdd) {
            this.isDocSuccess = false;
            this.isvisible = false;
            this.settings_mng_documents = await this.loginSerivce.getDoc();
            this.myDocName['myDocName'] = null;
            this.myDocName['docid'] = null;
        } else {
            this.isDocSuccess = false;
        }
    }

    showDialogRoles(mode: string) {
        this.isRolevisible = true;
        this.mode = mode;
    }

    async saveRoleDocument() {
        this.isRoleSuccess = true;
        if (this.mode == 'add') {
        } else {
        }
        this.roleName['name'] = this.roleName['name'].trim();
        const roleAddorEdit = await this.loginSerivce.saveRole(this.roleName);
        if (roleAddorEdit) {
            this.isRoleSuccess = false;
            this.isRolevisible = false;
            this.settings_mng_roles = await this.loginSerivce.getRoles();
            this.roleName['name'] = null;
            this.roleName['id'] = null;
        } else {
            this.isRoleSuccess = false;
        }
    }

    showDialogDesig(mode: string) {
        this.isDesigvisible = true;
        this.mode = mode;
    }

    public isDesigSucess = false;
    async saveDesig() {
        this.isDesigSucess = true;
        if (this.mode == 'add') {
        } else {
        }
        this.designationName['name'] = this.designationName['name'].trim();
        const desigAddorEdit = await this.loginSerivce.saveDesignation(this.designationName);
        if (desigAddorEdit) {
            this.isDesigSucess = false;
            this.isDesigvisible = false;
            this.settings_mng_designations = await this.loginSerivce.getAllDesignations();
            this.designationName['name'] = null;
            this.designationName['id'] = null;
        } else {
            this.isDesigSucess = false;
        }
    }

    showDialogDept(mode: string) {
        this.isDepvisible = true;
        this.mode = mode;
    }

    public isdepSucess = false;
    async saveDepartment() {
        this.isdepSucess = true;
        if (this.mode == 'add') {
        }
        else {
        }
        this.departmentName['name'] = this.departmentName['name'].trim();
        const depSaveEdit = await this.loginSerivce.saveDepartment(this.departmentName);
        if (depSaveEdit) {
            this.isdepSucess = false;
            this.isDepvisible = false;
            this.settings_mng_departments = await this.loginSerivce.getAllDepartments();
            this.departmentName['name'] = null;
            this.departmentName['id'] = null;
        } else {
            this.isdepSucess = false;
        }
    }
}
