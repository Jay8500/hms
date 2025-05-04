import { Routes } from '@angular/router';
import { ButtonDemo } from './buttondemo';
// import { ChartDemo } from './chartdemo';
// import { FileDemo } from './filedemo';
import { FormLayoutDemo } from './formlayoutdemo';
// import { InputDemo } from './inputdemo';
import { ListDemo } from './listdemo';
// import { MediaDemo } from './mediademo';
// import { MessagesDemo } from './messagesdemo';
// import { MiscDemo } from './miscdemo';
// import { PanelsDemo } from './panelsdemo';
// import { TimelineDemo } from './timelinedemo';
import { TableDemo } from './tabledemo';
// import { OverlayDemo } from './overlaydemo';
// import { TreeDemo } from './treedemo';
// import { MenuDemo } from './menudemo';
import { Inventory } from './inventory';
import { settings } from './settings';

export default [
    { path: 'registration', data: { breadcrumb: 'Form Layout' }, component: FormLayoutDemo },
    // { path: 'ip-admissions', data: { breadcrumb: 'Input' }, component: InputDemo },
    { path: 'employeelist', data: { breadcrumb: 'List' }, component: ListDemo },
    { path: 'inventory', data: { breadcrumb: 'Inventory' }, component: Inventory },
    { path: 'button', data: { breadcrumb: 'Button' }, component: ButtonDemo },
    { path: 'settings', data: { breadcrumb: 'Button' }, component: settings },
    // { path: 'charts', data: { breadcrumb: 'Charts' }, component: ChartDemo },
    // { path: 'file', data: { breadcrumb: 'File' }, component: FileDemo },
    // { path: 'media', data: { breadcrumb: 'Media' }, component: MediaDemo },
    // { path: 'message', data: { breadcrumb: 'Message' }, component: MessagesDemo },
    // { path: 'misc', data: { breadcrumb: 'Misc' }, component: MiscDemo },
    // { path: 'panel', data: { breadcrumb: 'Panel' }, component: PanelsDemo },
    // { path: 'timeline', data: { breadcrumb: 'Timeline' }, component: TimelineDemo },
    // { path: 'table', data: { breadcrumb: 'Table' }, component: TableDemo },
    // { path: 'overlay', data: { breadcrumb: 'Overlay' }, component: OverlayDemo },
    // { path: 'tree', data: { breadcrumb: 'Tree' }, component: TreeDemo },
    // { path: 'menu', data: { breadcrumb: 'Menu' }, component: MenuDemo },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
