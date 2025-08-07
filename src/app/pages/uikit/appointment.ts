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
import { Router } from '@angular/router';
import { NameInitialsPipe } from '../../name-initials.pipe';
import { LoginserviceService } from '../service/loginservice.service';
import { ProductService } from '../service/product.service';

interface Appointment {
    id: string;
    patientName: string;
    patientId: string;
    appointmentDate: Date;
    appointmentTime: string;
    department: string;
    doctor: string;
    status: string;
    reason: string;
    priority: string;
    appointmentType: string;
    patientAge: string;
    patientGender: string;
    billingStatus: string;
    assessmentStatus: string;
    checkoutStatus: string;
}

@Component({
    selector: 'app-appointment-workflow',
    standalone: true,
    imports: [CommonModule, InputTextModule, ChipModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, NameInitialsPipe, RadioButtonModule, SelectButtonModule, CalendarModule, InputMaskModule, TableModule, TabsModule, TagModule],
    providers: [ProductService],
    template: `<div class="card">
        <p-tabs value="0">
            <p-tablist>
                <p-tab value="0">Appointments</p-tab>
                <p-tab value="1">Create Appointment</p-tab>
            </p-tablist>
            <p-tabpanels>
                <p-tabpanel value="0">
                    <div style="height: 441px; overflow-y: auto;">
                        <p-table [value]="appointments" stripedRows>
                            <ng-template pTemplate="header">
                                <tr>
                                    <th style="min-width:1rem">Priority</th>
                                    <th style="min-width:20rem">Patient Name</th>
                                    <th style="min-width:4rem">Date & Time</th>
                                    <th style="min-width:4rem">Department</th>
                                    <th style="min-width:4rem">Doctor</th>
                                    <th style="min-width:4rem">Reason</th>
                                    <th style="min-width:4rem">Status</th>
                                    <th style="min-width:4rem">Billing</th>
                                    <th style="min-width:4rem">Assessment</th>
                                    <th style="min-width:8rem">Actions</th>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="body" let-appointment>
                                <tr>
                                    <td class="text-center">
                                        <p-tag [value]="appointment.priority" [severity]="appointment.priority == 'High' ? 'danger' : appointment.priority == 'Medium' ? 'warn' : 'success'"></p-tag>
                                    </td>
                                    <td>
                                        <p-chip class="!py-0 !pl-0 !pr-4 mt-2">
                                            <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center"
                                            style="font-size: xx-small;">
                                                {{ appointment.patientName | nameInitials }}
                                            </span>
                                            <span class="ml-2 font-medium"> {{ appointment.patientName }} </span>
                                        </p-chip>
                                        <div style="margin-left:15px;margin-top:3px" class="flex flex-row">
                                            <div class="flex">
                                                <p-tag [value]="appointment.appointmentType" [severity]="appointment.appointmentType == 'Follow-up' ? 'info' : 'warn'"></p-tag>
                                            </div>
                                            <div class="flex font-semibold text-sm mt-1 ml-2">
                                                <div>
                                                    <div class="text-sm">{{ appointment.patientAge }}</div>
                                                    <div class="text-xs">{{ appointment.patientGender }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        <div>{{ appointment.appointmentDate | date: 'dd MMM yyyy' }}</div>
                                        <div class="text-sm">{{ appointment.appointmentTime }}</div>
                                    </td>
                                    <td>{{ appointment.department }}</td>
                                    <td>{{ appointment.doctor }}</td>
                                    <td>{{ appointment.reason }}</td>
                                    <td>
                                        <p-tag [value]="appointment.status" [severity]="appointment.status == 'Scheduled' ? 'info' : appointment.status == 'Completed' ? 'success' : 'danger'"></p-tag>
                                    </td>
                                    <td>
                                        <p-tag [value]="appointment.billingStatus" 
                                               [severity]="appointment.billingStatus == 'Paid' ? 'success' : appointment.billingStatus == 'Pending' ? 'warn' : 'danger'"></p-tag>
                                    </td>
                                    <td>
                                        <p-tag [value]="appointment.assessmentStatus" 
                                               [severity]="appointment.assessmentStatus == 'Completed' ? 'success' : appointment.assessmentStatus == 'In Progress' ? 'info' : 'danger'"></p-tag>
                                    </td>
                                    <td>
                                        <div class="flex gap-2 flex-wrap">
                                            <!-- Billing Button -->
                                            <button pButton icon="pi pi-dollar" 
                                                   class="p-button-sm" 
                                                   [class]="appointment.billingStatus === 'Paid' ? 'p-button-success' : 'p-button-warning'"
                                                   title="Billing & Payment" 
                                                   (click)="openBilling(appointment)"
                                                   [disabled]="appointment.status === 'Cancelled'">
                                            </button>
                                            
                                            <!-- Assessment Button -->
                                            <button pButton icon="pi pi-file-edit" 
                                                   class="p-button-sm p-button-info" 
                                                   title="Patient Assessment" 
                                                   (click)="openAssessment(appointment)"
                                                   [disabled]="appointment.billingStatus !== 'Paid' || appointment.status === 'Cancelled'">
                                            </button>
                                            
                                            <!-- Checkout Button -->
                                            <button pButton icon="pi pi-check-circle" 
                                                   class="p-button-sm p-button-success" 
                                                   title="Checkout Patient" 
                                                   (click)="checkoutPatient(appointment)"
                                                   [disabled]="appointment.assessmentStatus !== 'Completed' || appointment.checkoutStatus === 'Completed'"
                                                   *ngIf="appointment.assessmentStatus === 'Completed'">
                                            </button>
                                            
                                            <!-- Status Indicators -->
                                            <span class="checkout-indicator" *ngIf="appointment.checkoutStatus === 'Completed'">
                                                <i class="pi pi-check text-green-500" title="Checked Out"></i>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </ng-template>
                            <ng-template #emptymessage>
                                <tr>
                                    <td colspan="10" class="text-center">No Appointments found.</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </div>
                </p-tabpanel>
                <p-tabpanel value="1">
                    <p-fluid>
                        <div class="flex mt-8">
                            <div class="card flex flex-col gap-6 w-full">
                                <div class="font-semibold text-xl">Create Appointment</div>
                                
                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="patient">Patient</label>
                                        <p-select id="patient" [(ngModel)]="selectedPatient" [options]="patients" optionLabel="name" placeholder="Select Patient" class="w-full"></p-select>
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="appointmentType">Appointment Type</label>
                                        <p-select id="appointmentType" [(ngModel)]="appointmentType" [options]="appointmentTypes" placeholder="Select Type" class="w-full"></p-select>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="appointmentDate">Appointment Date</label>
                                        <p-calendar inputId="appointmentDate" [(ngModel)]="appointmentDate" [showIcon]="true" dateFormat="mm/dd/yy"></p-calendar>
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="appointmentTime">Appointment Time</label>
                                        <p-calendar inputId="appointmentTime" [(ngModel)]="appointmentTime" [timeOnly]="true" hourFormat="12"></p-calendar>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="department">Department</label>
                                        <p-select id="department" [(ngModel)]="department" [options]="departments" placeholder="Select Department" class="w-full"></p-select>
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="doctor">Doctor</label>
                                        <p-select id="doctor" [(ngModel)]="doctor" [options]="doctors" placeholder="Select Doctor" class="w-full"></p-select>
                                    </div>
                                </div>

                                <div class="flex flex-wrap">
                                    <label for="reason">Reason for Visit</label>
                                    <textarea pTextarea id="reason" rows="4" [(ngModel)]="reason" placeholder="Enter reason for appointment"></textarea>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label>Priority</label>
                                        <div class="flex gap-4">
                                            <div class="flex align-items-center">
                                                <p-radioButton name="priority" value="Low" [(ngModel)]="priority" inputId="low"></p-radioButton>
                                                <label for="low" class="ml-2">Low</label>
                                            </div>
                                            <div class="flex align-items-center">
                                                <p-radioButton name="priority" value="Medium" [(ngModel)]="priority" inputId="medium"></p-radioButton>
                                                <label for="medium" class="ml-2">Medium</label>
                                            </div>
                                            <div class="flex align-items-center">
                                                <p-radioButton name="priority" value="High" [(ngModel)]="priority" inputId="high"></p-radioButton>
                                                <label for="high" class="ml-2">High</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="status">Status</label>
                                        <p-select id="status" [(ngModel)]="status" [options]="appointmentStatuses" placeholder="Select Status" class="w-full"></p-select>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="duration">Duration (minutes)</label>
                                        <input pInputText id="duration" type="number" [(ngModel)]="duration" placeholder="30" />
                                    </div>
                                    <div class="flex flex-wrap gap-2 w-full">
                                        <label for="roomNumber">Room Number</label>
                                        <input pInputText id="roomNumber" type="text" [(ngModel)]="roomNumber" placeholder="Room 101" />
                                    </div>
                                </div>

                                <div class="flex flex-wrap">
                                    <label for="notes">Notes (Optional)</label>
                                    <textarea pTextarea id="notes" rows="3" [(ngModel)]="notes" placeholder="Additional notes"></textarea>
                                </div>

                                <div class="flex gap-4 justify-content-between">
                                    <button pButton label="Create Appointment" class="p-button-sm" (click)="createAppointment()" [disabled]="isFormDisabled()"></button>
                                    <button pButton label="Cancel" (click)="cancel()" class="p-button-sm p-button-secondary ml-2"></button>
                                </div>
                            </div>
                        </div>
                    </p-fluid>
                </p-tabpanel>
            </p-tabpanels>
        </p-tabs>
    </div>`,
    styles: [`
        .checkout-indicator {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .flex-wrap {
            flex-wrap: wrap;
        }
        
        .gap-2 > * {
            margin: 0.25rem;
        }
    `]
})
export class AppointmentWorkflowComponent implements OnInit {
    public _productService = inject(ProductService);
    public loginService = inject(LoginserviceService);
    private router = inject(Router);

    statusOptions: any[] = [
        { label: 'All', value: 'all' },
        { label: 'Scheduled', value: 'Scheduled' },
        { label: 'Completed', value: 'Completed' },
        { label: 'Cancelled', value: 'Cancelled' }
    ];
    
    filterValue: string = 'all';
    appointments: Appointment[] = [];
    
    appointmentStatuses: any[] = [
        { label: 'Scheduled', value: 'Scheduled' },
        { label: 'Completed', value: 'Completed' },
        { label: 'Cancelled', value: 'Cancelled' },
        { label: 'No Show', value: 'No Show' }
    ];

    patients: any[] = [
        { name: 'John Doe', value: 'john-doe', id: 'PT001' },
        { name: 'Jane Smith', value: 'jane-smith', id: 'PT002' },
        { name: 'Ahmed Khan', value: 'ahmed-khan', id: 'PT003' }
    ];

    appointmentTypes: string[] = ['Consultation', 'Follow-up', 'Emergency', 'Surgery', 'Checkup'];
    departments: string[] = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'General Medicine'];
    doctors: string[] = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Davis'];

    // Form fields
    selectedPatient: any;
    appointmentType: string = '';
    appointmentDate: Date | undefined;
    appointmentTime: Date | undefined;
    department: string = '';
    doctor: string = '';
    reason: string = '';
    priority: string = 'Medium';
    status: string = 'Scheduled';
    duration: number = 30;
    roomNumber: string = '';
    notes: string = '';

    public filteredAppointments: any;

    // Navigation Methods
    openBilling(appointment: Appointment): void {
        this.router.navigate(['/home/hms/billing'], {
            queryParams: {
                from: 'appointment',
                appointmentId: appointment.id,
                patientName: appointment.patientName,
                patientId: appointment.patientId,
                department: appointment.department,
                doctor: appointment.doctor,
                appointmentDate: appointment.appointmentDate.toISOString()
            }
        });
    }

    openAssessment(appointment: Appointment): void {
        if (appointment.billingStatus !== 'Paid') {
            alert('Please complete billing before proceeding to assessment!');
            return;
        }

        this.router.navigate(['/home/hms/assessment'], {
            queryParams: {
                from: 'appointment',
                appointmentId: appointment.id,
                patientName: appointment.patientName,
                patientId: appointment.patientId,
                department: appointment.department,
                doctor: appointment.doctor,
                appointmentDate: appointment.appointmentDate.toISOString()
            }
        });
    }

    checkoutPatient(appointment: Appointment): void {
        if (appointment.assessmentStatus !== 'Completed') {
            alert('Please complete patient assessment before checkout!');
            return;
        }

        // Update appointment status
        const appointmentIndex = this.appointments.findIndex(a => a.id === appointment.id);
        if (appointmentIndex !== -1) {
            this.appointments[appointmentIndex].checkoutStatus = 'Completed';
            this.appointments[appointmentIndex].status = 'Completed';
            this.filteredAppointments = JSON.stringify(this.appointments);
            
            alert(`Patient ${appointment.patientName} has been successfully checked out!`);
        }
    }

    // Appointment Creation Methods
    createAppointment(): void {
        const newAppointment: Appointment = {
            id: 'APT-' + Math.floor(Math.random() * 10000),
            patientName: this.selectedPatient?.name || '',
            patientId: this.selectedPatient?.id || '',
            appointmentDate: this.appointmentDate!,
            appointmentTime: this.appointmentTime ? this.appointmentTime.toLocaleTimeString() : '',
            department: this.department,
            doctor: this.doctor,
            reason: this.reason,
            priority: this.priority,
            status: this.status,
            appointmentType: this.appointmentType,
            patientAge: '32 Y 5 M', // This would come from patient data
            patientGender: 'Male', // This would come from patient data
            billingStatus: 'Unpaid',
            assessmentStatus: 'Pending',
            checkoutStatus: 'Pending'
        };
        
        this.appointments.push(newAppointment);
        this.filteredAppointments = JSON.stringify(this.appointments);
        alert('Appointment created successfully!');
        this.resetForm();
    }

    cancel(): void {
        this.resetForm();
    }

    resetForm(): void {
        this.selectedPatient = null;
        this.appointmentType = '';
        this.appointmentDate = undefined;
        this.appointmentTime = undefined;
        this.department = '';
        this.doctor = '';
        this.reason = '';
        this.priority = 'Medium';
        this.status = 'Scheduled';
        this.duration = 30;
        this.roomNumber = '';
        this.notes = '';
    }

    onGetType(): void {
        if (this.filterValue === 'all') {
            this.appointments = [...JSON.parse(this.filteredAppointments || '[]')];
        } else {
            let parseAppointments = JSON.parse(this.filteredAppointments || '[]');
            this.appointments = parseAppointments.filter((appointment: any) => appointment.status === this.filterValue);
        }
    }

    isFormDisabled(): boolean {
        return !(
            this.selectedPatient &&
            this.appointmentDate &&
            this.appointmentTime &&
            this.department &&
            this.doctor &&
            this.reason &&
            this.priority &&
            this.status
        );
    }

    async ngOnInit() {
        // Sample appointments with workflow status
        const sampleAppointments: Appointment[] = [
            {
                id: 'APT-1001',
                patientName: 'John Doe',
                patientId: 'PT001',
                appointmentDate: new Date('2024-01-15'),
                appointmentTime: '10:00 AM',
                department: 'Cardiology',
                doctor: 'Dr. Smith',
                reason: 'Regular checkup',
                priority: 'Medium',
                status: 'Scheduled',
                appointmentType: 'Consultation',
                patientAge: '45 Y 2 M',
                patientGender: 'Male',
                billingStatus: 'Unpaid',
                assessmentStatus: 'Pending',
                checkoutStatus: 'Pending'
            },
            {
                id: 'APT-1002',
                patientName: 'Jane Smith',
                patientId: 'PT002',
                appointmentDate: new Date('2024-01-16'),
                appointmentTime: '2:30 PM',
                department: 'Neurology',
                doctor: 'Dr. Johnson',
                reason: 'Follow-up visit',
                priority: 'High',
                status: 'Scheduled',
                appointmentType: 'Follow-up',
                patientAge: '38 Y 7 M',
                patientGender: 'Female',
                billingStatus: 'Paid',
                assessmentStatus: 'Completed',
                checkoutStatus: 'Pending'
            },
            {
                id: 'APT-1003',
                patientName: 'Ahmed Khan',
                patientId: 'PT003',
                appointmentDate: new Date('2024-01-17'),
                appointmentTime: '9:00 AM',
                department: 'Orthopedics',
                doctor: 'Dr. Williams',
                reason: 'Knee pain consultation',
                priority: 'Low',
                status: 'Completed',
                appointmentType: 'Consultation',
                patientAge: '55 Y 3 M',
                patientGender: 'Male',
                billingStatus: 'Paid',
                assessmentStatus: 'Completed',
                checkoutStatus: 'Completed'
            }
        ];
        
        this.appointments = sampleAppointments;
        this.filteredAppointments = JSON.stringify(this.appointments);
    }
}
