import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ProductService } from '../service/product.service';
import { TagModule } from 'primeng/tag';

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
  selector: 'app-formlayout-demo',
  standalone: true,
  imports: [CommonModule, InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule,
    DropdownModule,
    RadioButtonModule,
    CalendarModule, InputMaskModule, TableModule, TabsModule,TagModule
  ],
  providers: [ProductService],
  template: `
    <div class="card">
    <p-tabs value="0">
        <p-tablist>
            <p-tab value="0">Registrations</p-tab>
            <p-tab value="1">Create Registration</p-tab>
        </p-tablist>
        <p-tabpanels>
            <p-tabpanel value="0">
            <div style="height: 350px; overflow-y: auto;">
            <p-table [value]="patients">
          <ng-template pTemplate="header">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Admission Type</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-patient>
            <tr>
              <td>{{ patient.name }}</td>
              <td>{{ patient.gender }}</td>
              <td>{{ patient.dob | date: 'MM/dd/yyyy' }}</td>
              <td>
              <p-tag [value]="patient.admissionType" [severity]="_productService.getSeverityForAdmissionType(patient.admissionType)"></p-tag>
              
              </td>
            </tr>
          </ng-template>
        </p-table>
</div>
            </p-tabpanel>
            <p-tabpanel value="1">
            <p-fluid>
        <div class="flex mt-8">
  <div class="card flex flex-col gap-6 w-full">
    <div class="font-semibold text-xl">Registration</div>
    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex flex-wrap gap-2 w-full">
        <label for="firstname2">Firstname</label>
        <input pInputText id="firstname2" type="text" [(ngModel)]="firstname" />
      </div>
      <div class="flex flex-wrap gap-2 w-full">
        <label for="lastname2">Middlename</label>
        <input pInputText id="lastname2" type="text" [(ngModel)]="middle" />
      </div>
      <div class="flex flex-wrap gap-2 w-full">
        <label for="lastname2">Lastname</label>
        <input pInputText id="lastname2" type="text" [(ngModel)]="lastname" />
      </div>
    </div>

    <div class="flex flex-wrap">
      <label for="address">Address</label>
      <textarea pTextarea id="address" rows="4" [(ngModel)]="address"></textarea>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex flex-wrap gap-2 w-full">
        <label for="state">State</label>
        <p-dropdown
          id="state"
          [(ngModel)]="state"
          [options]="states"
          optionLabel="name"
          placeholder="Select State"
          class="w-full"
        ></p-dropdown>
      </div>
      <div class="flex flex-wrap gap-2 w-full">
        <label for="zip">Zip</label>
        <input pInputText id="zip" type="text" [(ngModel)]="zip" />
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex flex-wrap gap-2 w-full">
        <label>Admission Type</label>
        <div class="flex gap-4">
          <div class="flex align-items-center">
            <p-radioButton
              name="admissionType"
              value="OP"
              [(ngModel)]="admissionType"
              inputId="op"
            ></p-radioButton>
            <label for="op" class="ml-2">OP (Outpatient)</label>
          </div>
          <div class="flex align-items-center">
            <p-radioButton
              name="admissionType"
              value="IP"
              [(ngModel)]="admissionType"
              inputId="ip"
            ></p-radioButton>
            <label for="ip" class="ml-2">IP (Inpatient)</label>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 w-full">
        <label for="dob">Date of Birth</label>
        <p-calendar
          inputId="dob"
          [(ngModel)]="dob"
          [showIcon]="true"
          dateFormat="mm/dd/yy"
        ></p-calendar>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex flex-wrap gap-2 w-full">
        <label for="phoneNumber">Phone Number</label>
        <p-inputMask
                id="phoneNumber"
                [(ngModel)]="phoneNumber"
                mask="(+91) 999-999-9999"
                
              ></p-inputMask>
      </div>
      <div class="flex flex-wrap gap-2 w-full">
        <label for="email">Email</label>
        <input pInputText id="email" type="email" [(ngModel)]="email" />
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex flex-wrap gap-2 w-full">
        <label for="emergencyContactName">Emergency Contact Name</label>
        <input
          pInputText
          id="emergencyContactName"
          type="text"
          [(ngModel)]="emergencyContactName"
        />
      </div>
      <div class="flex flex-wrap gap-2 w-full">
        <label for="emergencyContactNumber">Emergency Contact Number</label>
        <input
          pInputText
          id="emergencyContactNumber"
          type="text"
          [(ngModel)]="emergencyContactNumber"
        />
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
        <div class="flex flex-wrap gap-2 w-full">
            <label>Gender</label>
            <div class="flex gap-4">
                <div class="flex align-items-center">
                    <p-radioButton name="gender" value="Male" [(ngModel)]="gender" inputId="male"></p-radioButton>
                    <label for="male" class="ml-2">Male</label>
                </div>
                <div class="flex align-items-center">
                    <p-radioButton name="gender" value="Female" [(ngModel)]="gender" inputId="female"></p-radioButton>
                    <label for="female" class="ml-2">Female</label>
                </div>
                <div class="flex align-items-center">
                    <p-radioButton name="gender" value="Other" [(ngModel)]="gender" inputId="other"></p-radioButton>
                    <label for="other" class="ml-2">Other</label>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap gap-2 w-full">
            <label for="bloodGroup">Blood Group</label>
            <p-dropdown id="bloodGroup" [(ngModel)]="bloodGroup" [options]="bloodGroups" placeholder="Select Blood Group" class="w-full"></p-dropdown>
        </div>
    </div>
    <div class="flex flex-col md:flex-row gap-6">
    <div class="flex flex-col gap-2 w-full">
              <label for="mrn">MRN (Medical Record Number)</label>
              <input
                pInputText
                id="mrn"
                type="text"
                [(ngModel)]="mrn"
                style="width: 150px;"
              />
            </div>
            <div class="flex flex-wrap gap-2 w-full">
              <label for="occupation">Occupation</label>
              <input
                pInputText
                id="occupation"
                type="text"
                [(ngModel)]="occupation"
              />
            </div>
          </div>


          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex flex-wrap gap-2 w-full">
              <label for="insuranceProvider">Insurance Provider</label>
              <input
                pInputText
                id="insuranceProvider"
                type="text"
                [(ngModel)]="insuranceProvider"
              />
            </div>
            <div class="flex flex-wrap gap-2 w-full">
              <label for="insuranceNumber">Insurance Number</label>
              <input
                pInputText
                id="insuranceNumber"
                type="text"
                [(ngModel)]="insuranceNumber"
              />
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-6" *ngIf="admissionType === 'IP'">
            <div class="flex flex-wrap gap-2 w-full">
              <label for="admittingDoctor">Admitting Doctor</label>
              <input
                pInputText
                id="admittingDoctor"
                type="text"
                [(ngModel)]="admittingDoctor"
              />
            </div>
            <div class="flex flex-wrap gap-2 w-full">
              <label for="roomNumber">Room Number</label>
              <input
                pInputText
                id="roomNumber"
                type="text"
                [(ngModel)]="roomNumber"
                style="width: 100px;"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-6" *ngIf="admissionType === 'OP'">
            <div class="flex flex-wrap gap-2 w-full">
              <label for="visitingDepartment">Visiting Department</label>
              <input
                pInputText
                id="visitingDepartment"
                type="text"
                [(ngModel)]="visitingDepartment"
              />
            </div>
            <div class="flex flex-col gap-2 w-full">
    <label for="appointmentTime">Appointment Time</label>
    <p-calendar
      inputId="appointmentTime"
      [(ngModel)]="appointmentTime"
      [timeOnly]="true"
      hourFormat="12"
    ></p-calendar>
  </div>
          </div>
   <div class="flex gap-4 justify-conent-between">
   <button pButton label="Register" class="p-button-sm" (click)="register()"></button>
   <button pButton label="Cancel" (click)="cancel()" class="p-button-sm p-button-secondary ml-2"></button>
</div>
   
  </div>
         </div>
    </p-fluid>
            </p-tabpanel>
        </p-tabpanels>
    </p-tabs>
</div>`
})
export class FormLayoutDemo {
  public _productService = inject(ProductService)
  patients: any = [
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    {
      name: 'John Doe',
      gender: 'Male',
      dob: new Date(1985, 5, 10),
      admissionType: 'OP',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      dob: new Date(1992, 10, 20),
      admissionType: 'IP',
    },
    // Add more sample patient data here
  ];
  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
  ];
  firstname: string = 'Lakkoju';
  lastname: string = 'Krishna';
  middle: string = 'Jaya';
  address: string = 'Lasvegas';
  state: State | undefined = { name: 'New York', code: 'NY' };
  zip: string = '867898';
  admissionType: string = 'OP'; // Default to Outpatient
  dob: Date | undefined = new Date(1990, 0, 15);
  phoneNumber: string = '8989878787';
  email: string = 'jay.lakkoju123@gmail.com';
  emergencyContactName: string = 'Quora';
  emergencyContactNumber: string = '7878787878';
  gender: string = 'Male';
  bloodGroup: string = 'A+';

  states: State[] = [
    { name: 'New York', code: 'NY' },
    { name: 'California', code: 'CA' },
    { name: 'Texas', code: 'TX' },
    // Add more states as needed
  ];
  dropdownItem = null;
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
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

  cancel() { }
}
