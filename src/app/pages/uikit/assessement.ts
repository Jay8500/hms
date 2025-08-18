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
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ActivatedRoute, Router } from '@angular/router';
import { NameInitialsPipe } from '../../name-initials.pipe';

@Component({
    selector: 'app-patient-assessment',
    standalone: true,
    imports: [
        CommonModule, InputTextModule, ChipModule, FluidModule, ButtonModule, 
        SelectModule, FormsModule, TextareaModule, NameInitialsPipe, RadioButtonModule, 
        SelectButtonModule, CalendarModule, InputMaskModule, TableModule, TabsModule, 
        TagModule, InputNumberModule, DropdownModule, CardModule, DividerModule
    ],
    template: `
        <div class="assessment-container">
            <!-- Header Section -->
            <div class="assessment-header">
                <div class="flex justify-content-between align-items-center mb-4">
                    <div class="flex align-items-center">
                        <button pButton icon="pi pi-arrow-left" class="p-button-text p-button-plain mr-3" 
                                (click)="goBack()" title="Back to Appointments"></button>
                        <div>
                            <h1 class="text-3xl font-bold text-primary mb-0">Patient Assessment</h1>
                            <p class="text-color-secondary mt-1 mb-0">Complete medical evaluation and treatment plan</p>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <button pButton label="Save Draft" icon="pi pi-save" class="p-button-outlined p-button-sm"></button>
                        <button pButton label="Print" icon="pi pi-print" class="p-button-outlined p-button-sm"></button>
                    </div>
                </div>

                <!-- Patient Info Card -->
                <p-card class="patient-info-card mb-4">
                    <div class="flex align-items-center">
                        <div class="patient-avatar mr-4">
                            <span class="bg-primary text-primary-contrast rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                                {{ patientData.name | nameInitials }}
                            </span>
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-content-between align-items-start">
                                <div>
                                    <h2 class="text-2xl font-semibold mb-1">{{ patientData.name }}</h2>
                                    <div class="flex gap-3 mb-2">
                                        <p-tag [value]="patientData.gender" 
                                               [severity]="patientData.gender === 'Male' ? 'success' : 'info'" 
                                               class="mr-2"></p-tag>
                                        <span class="text-color-secondary">{{ patientData.age }}</span>
                                        <span class="text-color-secondary">MRN: {{ patientData.mrn }}</span>
                                    </div>
                                    <div class="text-sm text-color-secondary">
                                        {{ patientData.department }} • {{ patientData.doctor }} • {{ patientData.appointmentDate | date: 'MMM dd, yyyy' }}
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm text-color-secondary mb-1">Appointment Status</div>
                                    <p-tag [value]="patientData.status" severity="info"></p-tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </p-card>
            </div>

            <!-- Assessment Form -->
            <div class="assessment-content">
                <p-tabs value="0" class="beautiful-tabs">
                    <p-tablist>
                        <p-tab value="0">
                            <i class="pi pi-heart-fill mr-2"></i>
                            <span>Vitals & History</span>
                        </p-tab>
                        <p-tab value="1">
                            <i class="pi pi-file-edit mr-2"></i>
                            <span>Clinical Assessment</span>
                        </p-tab>
                        <p-tab value="2">
                            <i class="pi pi-verified mr-2"></i>
                            <span>Diagnosis & ICD</span>
                        </p-tab>
                        <p-tab value="3">
                            <i class="pi pi-shopping-bag mr-2"></i>
                            <span>Medications</span>
                        </p-tab>
                        <p-tab value="4">
                            <i class="pi pi-search mr-2"></i>
                            <span>Investigations</span>
                        </p-tab>
                        <p-tab value="5">
                            <i class="pi pi-calendar-plus mr-2"></i>
                            <span>Plan & Follow-up</span>
                        </p-tab>
                    </p-tablist>
                    
                    <p-tabpanels>
                        <!-- Vitals & History Tab -->
                        <p-tabpanel value="0">
                            <div class="tab-content">
                                <!-- Vital Signs Section -->
                                <p-card header="Vital Signs" class="mb-4">
                                    <div class="vitals-grid">
                                        <div class="vital-item">
                                            <label class="vital-label">
                                                <i class="pi pi-heart text-red-500 mr-2"></i>
                                                Blood Pressure
                                            </label>
                                            <div class="vital-input-group">
                                                <input pInputText [(ngModel)]="vitals.systolic" placeholder="120" class="vital-input" />
                                                <span class="vital-separator">/</span>
                                                <input pInputText [(ngModel)]="vitals.diastolic" placeholder="80" class="vital-input" />
                                                <span class="vital-unit">mmHg</span>
                                            </div>
                                        </div>

                                        <div class="vital-item">
                                            <label class="vital-label">
                                                <i class="pi pi-heart text-pink-500 mr-2"></i>
                                                Heart Rate
                                            </label>
                                            <div class="vital-input-group">
                                                <p-inputNumber [(ngModel)]="vitals.heartRate" [min]="0" [max]="300" 
                                                              placeholder="72" styleClass="vital-input-number"></p-inputNumber>
                                                <span class="vital-unit">BPM</span>
                                            </div>
                                        </div>

                                        <div class="vital-item">
                                            <label class="vital-label">
                                                <i class="pi pi-sun text-orange-500 mr-2"></i>
                                                Temperature
                                            </label>
                                            <div class="vital-input-group">
                                                <p-inputNumber [(ngModel)]="vitals.temperature" [minFractionDigits]="1" [maxFractionDigits]="1" 
                                                              placeholder="98.6" styleClass="vital-input-number"></p-inputNumber>
                                                <span class="vital-unit">°F</span>
                                            </div>
                                        </div>

                                        <div class="vital-item">
                                            <label class="vital-label">
                                                <i class="pi pi-cloud text-blue-500 mr-2"></i>
                                                Respiratory Rate
                                            </label>
                                            <div class="vital-input-group">
                                                <p-inputNumber [(ngModel)]="vitals.respiratoryRate" [min]="0" [max]="100" 
                                                              placeholder="16" styleClass="vital-input-number"></p-inputNumber>
                                                <span class="vital-unit">/min</span>
                                            </div>
                                        </div>

                                        <div class="vital-item">
                                            <label class="vital-label">
                                                <i class="pi pi-chart-line text-green-500 mr-2"></i>
                                                Weight
                                            </label>
                                            <div class="vital-input-group">
                                                <p-inputNumber [(ngModel)]="vitals.weight" [minFractionDigits]="1" [maxFractionDigits]="1" 
                                                              placeholder="70.0" styleClass="vital-input-number"></p-inputNumber>
                                                <span class="vital-unit">kg</span>
                                            </div>
                                        </div>

                                        <div class="vital-item">
                                            <label class="vital-label">
                                                <i class="pi pi-arrows-v text-purple-500 mr-2"></i>
                                                Height
                                            </label>
                                            <div class="vital-input-group">
                                                <p-inputNumber [(ngModel)]="vitals.height" [min]="0" [max]="300" 
                                                              placeholder="170" styleClass="vital-input-number"></p-inputNumber>
                                                <span class="vital-unit">cm</span>
                                            </div>
                                        </div>
                                    </div>
                                </p-card>

                                <!-- Medical History Section -->
                                <p-card header="Past Medical History" class="mb-4">
                                    <div class="history-section">
                                        <div class="form-field mb-4">
                                            <label class="field-label">
                                                <i class="pi pi-clock text-gray-600 mr-2"></i>
                                                Previous Conditions & Surgeries
                                            </label>
                                            <textarea pTextarea [(ngModel)]="pastMedicalHistory" rows="4" 
                                                     placeholder="Enter patient's medical history, chronic conditions, previous surgeries..."
                                                     class="w-full"></textarea>
                                        </div>

                                        <div class="form-field mb-4">
                                            <label class="field-label">
                                                <i class="pi pi-exclamation-triangle text-orange-500 mr-2"></i>
                                                Allergies
                                            </label>
                                            <textarea pTextarea [(ngModel)]="allergies" rows="2" 
                                                     placeholder="Drug allergies, food allergies, environmental allergies..."
                                                     class="w-full"></textarea>
                                        </div>

                                        <div class="form-field">
                                            <label class="field-label">
                                                <i class="pi pi-users text-blue-500 mr-2"></i>
                                                Family History
                                            </label>
                                            <textarea pTextarea [(ngModel)]="familyHistory" rows="3" 
                                                     placeholder="Relevant family medical history..."
                                                     class="w-full"></textarea>
                                        </div>
                                    </div>
                                </p-card>
                            </div>
                        </p-tabpanel>

                        <!-- Clinical Assessment Tab -->
                        <p-tabpanel value="1">
                            <div class="tab-content">
                                <p-card header="Clinical Assessment" class="mb-4">
                                    <div class="form-field mb-4">
                                        <label class="field-label">
                                            <i class="pi pi-comment text-primary mr-2"></i>
                                            Chief Complaint
                                        </label>
                                        <textarea pTextarea [(ngModel)]="chiefComplaint" rows="2" 
                                                 placeholder="Patient's primary reason for visit..."
                                                 class="w-full"></textarea>
                                    </div>

                                    <div class="form-field mb-4">
                                        <label class="field-label">
                                            <i class="pi pi-list text-blue-600 mr-2"></i>
                                            History of Present Illness
                                        </label>
                                        <textarea pTextarea [(ngModel)]="presentIllness" rows="4" 
                                                 placeholder="Detailed history of current condition..."
                                                 class="w-full"></textarea>
                                    </div>

                                    <div class="form-field mb-4">
                                        <label class="field-label">
                                            <i class="pi pi-eye text-green-600 mr-2"></i>
                                            Physical Examination
                                        </label>
                                        <textarea pTextarea [(ngModel)]="physicalExamination" rows="4" 
                                                 placeholder="Physical examination findings..."
                                                 class="w-full"></textarea>
                                    </div>

                                    <div class="form-field">
                                        <label class="field-label">
                                            <i class="pi pi-file-edit text-purple-600 mr-2"></i>
                                            Doctor's Clinical Notes
                                        </label>
                                        <textarea pTextarea [(ngModel)]="doctorNotes" rows="4" 
                                                 placeholder="Clinical assessment, observations, impressions..."
                                                 class="w-full"></textarea>
                                    </div>
                                </p-card>
                            </div>
                        </p-tabpanel>

                        <!-- Diagnosis & ICD Tab -->
                        <p-tabpanel value="2">
                            <div class="tab-content">
                                <p-card header="Diagnosis & ICD Codes" class="mb-4">
                                    <div class="diagnosis-grid">
                                        <div class="form-field">
                                            <label class="field-label">
                                                <i class="pi pi-verified text-green-600 mr-2"></i>
                                                Primary Diagnosis
                                            </label>
                                            <input pInputText [(ngModel)]="diagnosis.primary" 
                                                  placeholder="Enter primary diagnosis"
                                                  class="w-full" />
                                        </div>

                                        <div class="form-field">
                                            <label class="field-label">
                                                <i class="pi pi-code text-blue-600 mr-2"></i>
                                                Primary ICD Code
                                            </label>
                                            <input pInputText [(ngModel)]="icdCodes.primary" 
                                                  placeholder="E.g., E11.9"
                                                  class="w-full" />
                                        </div>

                                        <div class="form-field">
                                            <label class="field-label">
                                                <i class="pi pi-list text-orange-600 mr-2"></i>
                                                Secondary Diagnoses
                                            </label>
                                            <textarea pTextarea [(ngModel)]="diagnosis.secondary" rows="2" 
                                                     placeholder="Additional diagnoses..."
                                                     class="w-full"></textarea>
                                        </div>

                                        <div class="form-field">
                                            <label class="field-label">
                                                <i class="pi pi-tags text-purple-600 mr-2"></i>
                                                Secondary ICD Codes
                                            </label>
                                            <input pInputText [(ngModel)]="icdCodes.secondary" 
                                                  placeholder="E.g., I10, Z51.11"
                                                  class="w-full" />
                                        </div>
                                    </div>

                                    <div class="form-field mt-4">
                                        <label class="field-label">
                                            <i class="pi pi-question-circle text-gray-600 mr-2"></i>
                                            Differential Diagnosis
                                        </label>
                                        <textarea pTextarea [(ngModel)]="differentialDiagnosis" rows="3" 
                                                 placeholder="Alternative diagnoses to consider..."
                                                 class="w-full"></textarea>
                                    </div>
                                </p-card>
                            </div>
                        </p-tabpanel>

                        <!-- Medications Tab -->
                        <p-tabpanel value="3">
                            <div class="tab-content">
                                <p-card header="Prescribed Medications" class="mb-4">
                                    <div class="medications-section">
                                        <div class="medication-table-container">
                                            <p-table [value]="medications" class="beautiful-table">
                                                <ng-template pTemplate="header">
                                                    <tr>
                                                        <th class="medication-header">
                                                            <i class="pi pi-shopping-bag mr-2"></i>
                                                            Medication
                                                        </th>
                                                        <th class="medication-header">
                                                            <i class="pi pi-calculator mr-2"></i>
                                                            Dosage
                                                        </th>
                                                        <th class="medication-header">
                                                            <i class="pi pi-clock mr-2"></i>
                                                            Frequency
                                                        </th>
                                                        <th class="medication-header">
                                                            <i class="pi pi-calendar mr-2"></i>
                                                            Duration
                                                        </th>
                                                        <th class="medication-header">
                                                            <i class="pi pi-comment mr-2"></i>
                                                            Instructions
                                                        </th>
                                                        <th class="medication-header">Action</th>
                                                    </tr>
                                                </ng-template>
                                                <ng-template pTemplate="body" let-med let-i="rowIndex">
                                                    <tr class="medication-row">
                                                        <td>
                                                            <input pInputText [(ngModel)]="med.name" 
                                                                  placeholder="Medication name"
                                                                  class="medication-input" />
                                                        </td>
                                                        <td>
                                                            <input pInputText [(ngModel)]="med.dosage" 
                                                                  placeholder="500mg"
                                                                  class="medication-input" />
                                                        </td>
                                                        <td>
                                                            <p-dropdown [(ngModel)]="med.frequency" [options]="frequencyOptions" 
                                                                       placeholder="Select" styleClass="medication-dropdown"></p-dropdown>
                                                        </td>
                                                        <td>
                                                            <input pInputText [(ngModel)]="med.duration" 
                                                                  placeholder="7 days"
                                                                  class="medication-input" />
                                                        </td>
                                                        <td>
                                                            <input pInputText [(ngModel)]="med.instructions" 
                                                                  placeholder="After meals"
                                                                  class="medication-input" />
                                                        </td>
                                                        <td>
                                                            <button pButton icon="pi pi-trash" 
                                                                   class="p-button-sm p-button-danger p-button-outlined" 
                                                                   (click)="removeMedication(i)"></button>
                                                        </td>
                                                    </tr>
                                                </ng-template>
                                            </p-table>
                                        </div>
                                        <button pButton label="Add Medication" icon="pi pi-plus" 
                                               class="p-button-outlined mt-3" (click)="addMedication()"></button>
                                    </div>
                                </p-card>
                            </div>
                        </p-tabpanel>

                        <!-- Investigations Tab -->
                        <p-tabpanel value="4">
                            <div class="tab-content">
                                <p-card header="Laboratory & Diagnostic Tests" class="mb-4">
                                    <div class="investigations-section">
                                        <div class="investigation-table-container">
                                            <p-table [value]="investigations" class="beautiful-table">
                                                <ng-template pTemplate="header">
                                                    <tr>
                                                        <th class="investigation-header">
                                                            <i class="pi pi-search mr-2"></i>
                                                            Test/Investigation
                                                        </th>
                                                        <th class="investigation-header">
                                                            <i class="pi pi-exclamation-triangle mr-2"></i>
                                                            Priority
                                                        </th>
                                                        <th class="investigation-header">
                                                            <i class="pi pi-comment mr-2"></i>
                                                            Clinical Indication
                                                        </th>
                                                        <th class="investigation-header">Action</th>
                                                    </tr>
                                                </ng-template>
                                                <ng-template pTemplate="body" let-inv let-i="rowIndex">
                                                    <tr class="investigation-row">
                                                        <td>
                                                            <input pInputText [(ngModel)]="inv.name" 
                                                                  placeholder="Blood test, X-Ray, MRI, etc."
                                                                  class="investigation-input" />
                                                        </td>
                                                        <td>
                                                            <p-dropdown [(ngModel)]="inv.urgency" [options]="urgencyOptions" 
                                                                       placeholder="Select" styleClass="investigation-dropdown"></p-dropdown>
                                                        </td>
                                                        <td>
                                                            <input pInputText [(ngModel)]="inv.notes" 
                                                                  placeholder="Clinical indication for test"
                                                                  class="investigation-input" />
                                                        </td>
                                                        <td>
                                                            <button pButton icon="pi pi-trash" 
                                                                   class="p-button-sm p-button-danger p-button-outlined" 
                                                                   (click)="removeInvestigation(i)"></button>
                                                        </td>
                                                    </tr>
                                                </ng-template>
                                            </p-table>
                                        </div>
                                        <button pButton label="Add Investigation" icon="pi pi-plus" 
                                               class="p-button-outlined mt-3" (click)="addInvestigation()"></button>
                                    </div>
                                </p-card>
                            </div>
                        </p-tabpanel>

                        <!-- Plan & Follow-up Tab -->
                        <p-tabpanel value="5">
                            <div class="tab-content">
                                <p-card header="Treatment Plan & Recommendations" class="mb-4">
                                    <div class="plan-section">
                                        <div class="form-field mb-4">
                                            <label class="field-label">
                                                <i class="pi pi-lightbulb text-yellow-500 mr-2"></i>
                                                Treatment Plan
                                            </label>
                                            <textarea pTextarea [(ngModel)]="treatmentPlan" rows="4" 
                                                     placeholder="Detailed treatment plan and approach..."
                                                     class="w-full"></textarea>
                                        </div>

                                        <div class="form-field mb-4">
                                            <label class="field-label">
                                                <i class="pi pi-info-circle text-blue-500 mr-2"></i>
                                                Patient Advice & Instructions
                                            </label>
                                            <textarea pTextarea [(ngModel)]="advice" rows="4" 
                                                     placeholder="Lifestyle modifications, precautions, dietary advice..."
                                                     class="w-full"></textarea>
                                        </div>

                                        <div class="followup-grid">
                                            <div class="form-field">
                                                <label class="field-label">
                                                    <i class="pi pi-calendar-plus text-green-500 mr-2"></i>
                                                    Follow-up Date
                                                </label>
                                                <p-calendar [(ngModel)]="followUpDate" [showIcon]="true" 
                                                           dateFormat="mm/dd/yy" class="w-full"></p-calendar>
                                            </div>

                                            <div class="form-field">
                                                <label class="field-label">
                                                    <i class="pi pi-clock text-orange-500 mr-2"></i>
                                                    Follow-up Type
                                                </label>
                                                <p-dropdown [(ngModel)]="followUpType" [options]="followUpTypes" 
                                                           placeholder="Select type" class="w-full"></p-dropdown>
                                            </div>
                                        </div>

                                        <div class="form-field mt-4">
                                            <label class="field-label">
                                                <i class="pi pi-comment text-purple-500 mr-2"></i>
                                                Follow-up Instructions
                                            </label>
                                            <textarea pTextarea [(ngModel)]="followUpNotes" rows="3" 
                                                     placeholder="Specific instructions for next visit..."
                                                     class="w-full"></textarea>
                                        </div>
                                    </div>
                                </p-card>
                            </div>
                        </p-tabpanel>
                    </p-tabpanels>
                </p-tabs>
            </div>

            <!-- Action Buttons -->
            <div class="assessment-footer">
                <div class="flex justify-content-between align-items-center p-4 border-top-1 surface-border">
                    <div class="flex gap-2">
                        <button pButton label="Save Draft" icon="pi pi-save" 
                               class="p-button-outlined p-button-secondary" (click)="saveDraft()"></button>
                        <button pButton label="Print Prescription" icon="pi pi-print" 
                               class="p-button-outlined p-button-info" (click)="printPrescription()"></button>
                    </div>
                    <div class="flex gap-2">
                        <button pButton label="Cancel" icon="pi pi-times" 
                               class="p-button-outlined p-button-secondary" (click)="cancel()"></button>
                        <button pButton label="Complete Assessment" icon="pi pi-check" 
                               class="p-button-success" (click)="completeAssessment()"></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .assessment-container {
            min-height: 100vh;
            background: #f8fafc;
        }

        .assessment-header {
            background: white;
            padding: 2rem;
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .patient-info-card {
            border: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
        }

        .patient-avatar {
            flex-shrink: 0;
        }

        .assessment-content {
            padding: 2rem;
        }

        .beautiful-tabs .p-tablist .p-tab {
            padding: 1rem 1.5rem;
            margin-right: 0.5rem;
            border-radius: 8px 8px 0 0;
            background: white;
            border: 1px solid #e2e8f0;
            border-bottom: none;
            transition: all 0.3s ease;
        }

        .beautiful-tabs .p-tablist .p-tab:hover {
            background: #f1f5f9;
            transform: translateY(-2px);
        }

        .beautiful-tabs .p-tablist .p-tab.p-tab-active {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }

        .tab-content {
            padding: 1.5rem 0;
        }

        .vitals-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }

        .vital-item {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 1.5rem;
            transition: all 0.3s ease;
        }

        .vital-item:hover {
            border-color: var(--primary-color);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .vital-label {
            display: block;
            font-weight: 600;
            color: #334155;
            margin-bottom: 0.75rem;
            font-size: 0.9rem;
        }

        .vital-input-group {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .vital-input {
            flex: 1;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-weight: 600;
            text-align: center;
        }

        .vital-input-number {
            flex: 1;
        }

        .vital-separator {
            font-size: 1.2rem;
            font-weight: bold;
            color: #6b7280;
        }

        .vital-unit {
            font-size: 0.85rem;
            color: #6b7280;
            font-weight: 500;
            min-width: 40px;
        }

        .history-section, .plan-section {
            padding: 1rem 0;
        }

        .form-field {
            margin-bottom: 1.5rem;
        }

        .field-label {
            display: block;
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
        }

        .diagnosis-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }

        .followup-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }

        .beautiful-table {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            overflow: hidden;
        }

        .medication-header, .investigation-header {
            background: #f8fafc;
            color: #374151;
            font-weight: 600;
            padding: 1rem;
            border-bottom: 2px solid #e2e8f0;
        }

        .medication-row, .investigation-row {
            border-bottom: 1px solid #f1f5f9;
        }

        .medication-input, .investigation-input {
            width: 100%;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            padding: 0.5rem;
        }

        .medication-dropdown, .investigation-dropdown {
            width: 100%;
        }

        .medication-table-container, .investigation-table-container {
            max-height: 400px;
            overflow-y: auto;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
        }

        .assessment-footer {
            background: white;
            border-top: 1px solid #e2e8f0;
            box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .assessment-header, .assessment-content {
                padding: 1rem;
            }

            .vitals-grid {
                grid-template-columns: 1fr;
            }

            .diagnosis-grid, .followup-grid {
                grid-template-columns: 1fr;
            }

            .patient-info-card .flex {
                flex-direction: column;
                text-align: center;
            }

            .patient-avatar {
                margin-bottom: 1rem;
                margin-right: 0;
            }
        }

        /* Custom Scrollbar */
        .assessment-content::-webkit-scrollbar,
        .medication-table-container::-webkit-scrollbar,
        .investigation-table-container::-webkit-scrollbar {
            width: 8px;
        }

        .assessment-content::-webkit-scrollbar-track,
        .medication-table-container::-webkit-scrollbar-track,
        .investigation-table-container::-webkit-scrollbar-track {
            background: #f1f5f9;
        }

        .assessment-content::-webkit-scrollbar-thumb,
        .medication-table-container::-webkit-scrollbar-thumb,
        .investigation-table-container::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
    `]
})
export class PatientAssessmentComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    // Patient Data
    patientData: any = {
        name: 'John Doe',
        gender: 'Male',
        age: '45 Y 2 M',
        mrn: 'MRN001234',
        department: 'Cardiology',
        doctor: 'Dr. Smith',
        appointmentDate: new Date(),
        status: 'In Progress'
    };

    // Vitals
    vitals: any = {
        systolic: '',
        diastolic: '',
        heartRate: null,
        temperature: null,
        respiratoryRate: null,
        weight: null,
        height: null
    };

    // History & Assessment
    pastMedicalHistory: string = '';
    allergies: string = '';
    familyHistory: string = '';
    chiefComplaint: string = '';
    presentIllness: string = '';
    physicalExamination: string = '';
    doctorNotes: string = '';

    // Diagnosis
    diagnosis: any = {
        primary: '',
        secondary: ''
    };
    icdCodes: any = {
        primary: '',
        secondary: ''
    };
    differentialDiagnosis: string = '';

    // Treatment Plan
    treatmentPlan: string = '';
    advice: string = '';
    followUpDate: Date | undefined;
    followUpType: string = '';
    followUpNotes: string = '';

    // Medications & Investigations
    medications: any[] = [
        { name: '', dosage: '', frequency: '', duration: '', instructions: '' }
    ];
    investigations: any[] = [
        { name: '', urgency: '', notes: '' }
    ];

    // Options
    frequencyOptions: any[] = [
        { label: 'Once daily', value: 'Once daily' },
        { label: 'Twice daily', value: 'Twice daily' },
        { label: 'Three times daily', value: 'Three times daily' },
        { label: 'Four times daily', value: 'Four times daily' },
        { label: 'As needed', value: 'As needed' }
    ];

    urgencyOptions: any[] = [
        { label: 'Routine', value: 'Routine' },
        { label: 'Urgent', value: 'Urgent' },
        { label: 'STAT', value: 'STAT' }
    ];

    followUpTypes: any[] = [
        { label: 'In-person visit', value: 'In-person' },
        { label: 'Telemedicine', value: 'Telemedicine' },
        { label: 'Phone call', value: 'Phone' },
        { label: 'Lab results review', value: 'Lab review' }
    ];

    ngOnInit() {
        // Get patient data from route parameters or service
        this.route.queryParams.subscribe(params => {
            if (params['patientName']) {
                this.patientData.name = params['patientName'];
            }
        });
    }

    goBack() {
        this.router.navigate(['home/hms/appointment']);
    }

    addMedication() {
        this.medications.push({ name: '', dosage: '', frequency: '', duration: '', instructions: '' });
    }

    removeMedication(index: number) {
        this.medications.splice(index, 1);
    }

    addInvestigation() {
        this.investigations.push({ name: '', urgency: '', notes: '' });
    }

    removeInvestigation(index: number) {
        this.investigations.splice(index, 1);
    }

    saveDraft() {
        alert('Assessment saved as draft!');
    }

    printPrescription() {
        alert('Prescription printed successfully!');
    }

    cancel() {
        this.router.navigate(['/appointments']);
    }

    completeAssessment() {
        const assessmentData = {
            patient: this.patientData,
            vitals: this.vitals,
            history: {
                pastMedical: this.pastMedicalHistory,
                allergies: this.allergies,
                family: this.familyHistory
            },
            assessment: {
                chiefComplaint: this.chiefComplaint,
                presentIllness: this.presentIllness,
                physicalExam: this.physicalExamination,
                doctorNotes: this.doctorNotes
            },
            diagnosis: this.diagnosis,
            icdCodes: this.icdCodes,
            treatmentPlan: this.treatmentPlan,
            advice: this.advice,
            followUp: {
                date: this.followUpDate,
                type: this.followUpType,
                notes: this.followUpNotes
            },
            medications: this.medications,
            investigations: this.investigations
        };

        console.log('Complete Assessment Data:', assessmentData);
        alert('Assessment completed successfully!');
        this.router.navigate(['/appointments']);
    }
}
