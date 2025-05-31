import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import * as bcrypt from 'bcryptjs';
import { Observable, from, map, switchMap } from 'rxjs';
import apiConfig from '../../../assets/appconfig.json';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class LoginserviceService {
    private supabase: SupabaseClient;
    private auth: SupabaseAuthClient;
    private functionsUrl = 'https://ceoflgbmuosykixuxuqr.functions.supabase.co';
    // https://abcd1234.supabase.co/functions/v1/add_employee
    constructor(private http: HttpClient) {
        this.supabase = createClient(
            'https://ceoflgbmuosykixuxuqr.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlb2ZsZ2JtdW9zeWtpeHV4dXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NDcwMTcsImV4cCI6MjA1NzUyMzAxN30.-HIcrcwsTkj7unhtkStAv0pANHOVUCtbWwghlHjz-4c'
        );
        this.auth = this.supabase.auth;
    }

    getSupabaseClient(): SupabaseClient {
        return this.supabase;
    }

    getAuthClient(): SupabaseAuthClient {
        return this.auth;
    }

    async loginDirect(username: string, password: string): Promise<{ success: boolean; error: any }> {
        try {
            const { data, error } = await this.supabase.from('users').select('*').eq('username', username).single();

            if (error) {
                return { success: false, error: error };
            }

            if (!data) {
                return { success: false, error: { message: 'User not found' } };
            }

            const passwordMatch = await bcrypt.compare(password, data.password);

            if (passwordMatch) {
                localStorage.setItem('hmskeys', JSON.stringify(data));
                return { success: true, error: null };
            } else {
                return { success: false, error: { message: 'Incorrect password' } };
            }
        } catch (error) {
            return { success: false, error: error };
        }
    }

    async getSession() {
        return await this.supabase.auth.getSession();
    }

    async signOut() {
        localStorage.removeItem('hmskeys');
        return await this.supabase.auth.signOut();
    }

    /// hims functions
    private callSupabaseFunction<T>(category: string, methodName: string, params: any = {}): Observable<T> {
        const endpointConfig = (apiConfig as any)[category]?.[methodName];

        if (!endpointConfig) {
            return new Observable((subscriber) => {
                subscriber.error(`Configuration not found for ${category}.${methodName}`);
                subscriber.complete();
            });
        }

        const functionName = endpointConfig.functionName;
        const method = endpointConfig.method.toLowerCase();

        if (method === 'get') {
            const queryParams = new URLSearchParams();
            for (const key in params) {
                if (params.hasOwnProperty(key) && params[key] !== undefined && params[key] !== null) {
                    queryParams.set(key, params[key]);
                }
            }
            const url = `${this.functionsUrl}/${functionName}?${queryParams.toString()}`;
            return this.http.get<T>(url);
        } else if (method === 'post') {
            const url = `${this.functionsUrl}/${functionName}`;
            return this.http.post<T>(url, params);
        } else {
            return new Observable((subscriber) => {
                subscriber.error(`Unsupported method: ${method} for ${category}.${methodName}`);
                subscriber.complete();
            });
        }
    }

    // Employee API Calls
    addEmployee(employeeData: { empname: string; designation?: string; department?: string }): Observable<number> {
        return this.callSupabaseFunction<number>('employees', 'addEmployee', employeeData);
    }

    getEmployeeById(empid: number): Observable<{ empid: number; empname: string; designation: string | null; department: string | null }[]> {
        return this.callSupabaseFunction<{ empid: number; empname: string; designation: string | null; department: string | null }[]>('employees', 'getEmployeeById', { empid });
    }

    // Roles API Calls
    addRole(roleData: { role_name: string }): Observable<number> {
        return this.callSupabaseFunction<number>('roles', 'addRole', roleData);
    }

    getRoleById(roleId: number): Observable<{ role_id: number; role_name: string }[]> {
        return this.callSupabaseFunction<{ role_id: number; role_name: string }[]>('roles', 'getRoleById', { roleId });
    }

    // Users API Calls
    addUser(userData: { username: string; employee_id?: number; user_type: 'doctor' | 'employee' }): Observable<number> {
        return this.callSupabaseFunction<number>('users', 'addUser', userData);
    }

    getUserById(userId: number): Observable<{ userid: number; username: string; employee_id: number | null; user_type: string }[]> {
        return this.callSupabaseFunction<{ userid: number; username: string; employee_id: number | null; user_type: string }[]>('users', 'getUserById', { userId });
    }

    // User Roles API Calls
    assignRoleToUser(userId: number, roleId: number): Observable<boolean> {
        return this.callSupabaseFunction<boolean>('userRoles', 'assignRoleToUser', { user_id: userId, role_id: roleId });
    }

    getUserRoles(userId: number): Observable<{ role_name: string }[]> {
        return this.callSupabaseFunction<{ role_name: string }[]>('userRoles', 'getUserRoles', { user_id: userId });
    }

    // Documents API Calls
    addDocument(documentData: { docname: string }): Observable<number> {
        return this.callSupabaseFunction<number>('documents', 'addDocument', documentData);
    }

    getDocumentById(docId: number): Observable<{ docid: number; docname: string }[]> {
        return this.callSupabaseFunction<{ docid: number; docname: string }[]>('documents', 'getDocumentById', { docId });
    }

    // Document Permissions API Calls
    grantDocumentPermission(permissionData: { docid: number; user_id: number; can_view?: boolean; can_edit?: boolean }): Observable<boolean> {
        return this.callSupabaseFunction<boolean>('documentPermissions', 'grantDocumentPermission', permissionData);
    }

    getAllDocuments(): Observable<{ docid: number; docname: string }[]> {
        return this.callSupabaseFunction<{ docid: number; docname: string }[]>('documents', 'getAllDocuments');
    }

    async getDoc() {
        let docs: any = null;
        let { data, error } = await this.supabase.rpc('get_all_documents');
        if (error) docs = error;
        else docs = data;
        return docs;
    }

    async getRoles() {
        let docs: any = null;
        let { data, error } = await this.supabase.rpc('get_all_roles');
        if (error) docs = error;
        else docs = data;
        return docs;
    }

    async getAllDesignations() {
        let docs: any = null;
        let { data, error } = await this.supabase.rpc('get_all_designations');
        if (error) docs = error;
        else docs = data;
        return docs;
    }
    async getAllDepartments() {
        let docs: any = null;
        let { data, error } = await this.supabase.rpc('get_all_departments');
        if (error) docs = error;
        else docs = data;
        return docs;
    }

    getLocalKeys(key: any) {
        let myKey = null;
        myKey = JSON.parse(localStorage.getItem('hmskeys') || '')[key];
        return myKey;
    }

    async getDocumentPermissionsForUser(userId: any) {
        let getData = null;
        let { data, error } = await this.supabase.rpc('get_document_permissions_for_user', { p_user_id: userId });
        if (error) getData = error;
        else getData = data;
        return getData;
    }

    async getAllUsers() {
        return await this.supabase.from('users').select('id,username');
    }

    async saveGrantDocAccessPermissions(ctrl: any) {
        let getData = null;
        let { data, error } = await this.supabase.rpc('grant_document_permission', {
            p_docid: ctrl.docid,
            p_user_id: ctrl.userId,
            p_can_view: ctrl.checked,
            p_can_edit: ctrl.can_edit_checked,
            p_record_status: ctrl.record_status,
            p_doc_permission_id: ctrl.doc_permission_id
        });
        if (error) getData = error;
        else getData = data;
        return getData;
    }

    async saveDocument(ctrl: any) {
        let getData = null;
        let { data, error } = await this.supabase.rpc('add_document', {
            p_docname: ctrl.myDocName,
            p_docid: ctrl.docid
        });
        if (error) getData = error;
        else getData = data;
        return getData;
    }

    async saveRole(ctrl: any) {
        let getData = null;
        let { data, error } = await this.supabase.rpc('add_role', {
            role_name: ctrl.name,
            role_id: ctrl.id
        });
        if (error) getData = error;
        else getData = data;
        return getData;
    }

    async saveDesignation(ctrl: any) {
        let getData = null;
        let { data, error } = await this.supabase.rpc('add_designation', {
            p_designame: ctrl.name,
            p_desigid: ctrl.id
        });
        if (error) getData = error;
        else getData = data;
        return getData;
    }

    async saveDepartment(ctrl: any) {
        let getData = null;
        let { data, error } = await this.supabase.rpc('add_department', {
            p_depname: ctrl.name,
            p_depid: ctrl.id
        });
        if (error) getData = error;
        else getData = data;
        return getData;
    }
}
