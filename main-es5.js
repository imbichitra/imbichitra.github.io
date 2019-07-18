(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-employees></app-employees>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employee-list/employee-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employee-list/employee-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div\">\n    <button mat-raised-button (click)=\"onCreate()\">\n        <mat-icon>add</mat-icon>Create\n    </button>\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n        <input matInput [(ngModel)]=\"searchKey\" placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\n        <button mat-button matSuffix mat-icon-button arial-label=\"Clear\" *ngIf=\"searchKey\" (click)=\"onSearchClear()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </mat-form-field>\n</div>\n<div  class=\"mat-elevation-z8\">\n    <mat-table [dataSource]=\"listData\" matSort>\n        <ng-container matColumnDef=\"fullName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Full Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.fullName}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"mobile\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.mobile}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"city\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> City </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.city}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"departmentName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Department</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{element.departmentName}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> \n                <button mat-icon-button (click)=\"onEdit(row)\"><mat-icon>launch</mat-icon></button>\n                <button mat-icon-button color=\"warn\" (click)=\"onDelete(row.$key)\"><mat-icon>delete_outline</mat-icon></button>\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"loading\">\n            <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                Loading data...\n            </mat-footer-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"noData\">\n            <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                No data\n            </mat-footer-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':listData!=null}\"></mat-footer-row>\n        <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(listData !=null && listData.data.length==0)}\"></mat-footer-row>\n    </mat-table>    \n    <mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              showFirstLastButtons>\n</mat-paginator>         \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employee/employee.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employee/employee.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span>{{service.form.controls['$key'].value?\"Modify Employee\":\"New Employee\"}}</span>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\"><mat-icon>clear</mat-icon></button>\n    \n</mat-toolbar>\n<form [formGroup]=\"service.form\" class=\"normal-form\" (submit)=\"onSubmit()\">\n    <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n        <mat-grid-tile>\n            <div class=\"controles-container\">\n                <input type=\"hidden\" formControlName=\"$key\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Full Name*\" formControlName=\"fullName\">\n                    <mat-error>This filed is mandatory</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error>Invalid email address</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Mobile*\" formControlName=\"mobile\">\n                    <mat-error *ngIf=\"service.form.controls['mobile'].errors?.required\">This filed is mandatory</mat-error>\n                    <mat-error *ngIf=\"service.form.controls['mobile'].errors?.minlength\">Minimum 8 characters needed</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"City\" formControlName=\"city\">\n                </mat-form-field>\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n                <div class=\"controles-container\">\n                    <div class=\"add-bottom-padding\">\n                        <mat-radio-group formControlName=\"gender\">\n                            <mat-radio-button value=\"1\">Male</mat-radio-button>\n                            <mat-radio-button value=\"2\">Femail</mat-radio-button>\n                            <mat-radio-button value=\"3\">Other</mat-radio-button>\n                        </mat-radio-group>                        \n                    </div>\n\n                    <mat-form-field>\n                        <mat-select formControlName=\"department\" placeholder=\"Department\">\n                            <mat-option>None</mat-option>\n                            <ng-container *ngFor=\"let department of departmentService.array\">\n                                    <mat-option value=\"{{department.$key}}\">{{department.code}}-{{department.name}}</mat-option>\n                            </ng-container>\n                        </mat-select>\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <input formControlName=\"hireDate\" matInput [matDatepicker]=\"picker\" placeholder=\"Hire Date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <div class=\"add-bottom-padding\">\n                        <mat-checkbox formControlName=\"isPermanent\">Permanent Employee</mat-checkbox>\n                    </div>\n                    <div class=\"button-row\">\n                        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"service.form.invalid\">Submit</button>\n                        <button mat-raised-button color=\"warn\" type=\"submit\" (click)=\"onClear()\">Clear</button>\n                    </div>\n                </div>\n        </mat-grid-tile>\n    </mat-grid-list>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employees.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-toolbar>\n        <span class=\"fill-remain-space\"></span>\n        <span>Angular 6 Material</span>\n        <span class=\"fill-remain-space\"></span>\n    </mat-toolbar>\n    <app-employee-list></app-employee-list>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mat-confirm-dialog/mat-confirm-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mat-confirm-dialog/mat-confirm-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"content-container\">\n        <mat-icon id=\"close-icon\" (click)=\"closeDialog()\">close</mat-icon>\n        <span class=\"content-span full-width\">{{data.message}}</span>\n    </div>\n    <button mat-flat-button id=\"no-button\" [mat-dialog-close]=\"false\">NO</button>\n    <button mat-flat-button id=\"yes-button\" [mat-dialog-close]=\"true\">YES</button>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CompleteAngularMaterialApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees/employee/employee.component */ "./src/app/employees/employee/employee.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_department_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/department.service */ "./src/app/shared/department.service.ts");
/* harmony import */ var _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mat-confirm-dialog/mat-confirm-dialog.component */ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.ts");






//own module




//firebase







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"],
                _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"],
                _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeListComponent"],
                _mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_16__["MatConfirmDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_shared_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"], _shared_department_service__WEBPACK_IMPORTED_MODULE_13__["DepartmentService"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"], _mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_16__["MatConfirmDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/department.service */ "./src/app/shared/department.service.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employee/employee.component */ "./src/app/employees/employee/employee.component.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dialog.service */ "./src/app/shared/dialog.service.ts");








var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(service, departmentService, dialog, notificationService, dialogService) {
        this.service = service;
        this.departmentService = departmentService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.dialogService = dialogService;
        this.displayedColumns = ['fullName', 'email', 'mobile', 'city', 'departmentName', 'actions'];
        this.searchKey = "";
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getEmployees().subscribe(function (list) {
            var array = list.map(function (item) {
                var departmentName = _this.departmentService.getDepartmentName(item.payload.val()['department']);
                //console.log(departmentName);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key, departmentName: departmentName }, item.payload.val());
            });
            _this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](array);
            _this.listData.sort = _this.sort;
            _this.listData.paginator = _this.paginator;
            //for stop other search like date of hire
            _this.listData.filterPredicate = function (data, filter) {
                return _this.displayedColumns.some(function (ele) {
                    return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
                });
            };
        });
    };
    EmployeeListComponent.prototype.onSearchClear = function () {
        this.searchKey = "";
        this.applyFilter();
    };
    EmployeeListComponent.prototype.applyFilter = function () {
        this.listData.filter = this.searchKey.trim().toLowerCase();
    };
    EmployeeListComponent.prototype.onCreate = function () {
        this.service.initializeFormGroup();
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.dialog.open(_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"], dialogConfig);
    };
    EmployeeListComponent.prototype.onEdit = function (row) {
        console.log("hello");
        this.service.populateForm(row);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.dialog.open(_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"], dialogConfig);
    };
    EmployeeListComponent.prototype.onDelete = function ($key) {
        var _this = this;
        this.dialogService.openConfirmDilaog('Are you sure to delete this record ?')
            .afterClosed().subscribe(function (res) {
            if (res) {
                _this.service.deleteEmployee($key);
                _this.notificationService.warn('! Deleted successfully');
            }
        });
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
        { type: src_app_shared_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { read: false, static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], EmployeeListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { read: false, static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], EmployeeListComponent.prototype, "paginator", void 0);
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employees/employee-list/employee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            src_app_shared_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var src_app_shared_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/department.service */ "./src/app/shared/department.service.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(service, departmentService, notificationService, dialogRef) {
        this.service = service;
        this.departmentService = departmentService;
        this.notificationService = notificationService;
        this.dialogRef = dialogRef;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.service.getEmployees();
    };
    EmployeeComponent.prototype.onClear = function () {
        this.service.form.reset();
        this.service.initializeFormGroup();
    };
    EmployeeComponent.prototype.onSubmit = function () {
        if (this.service.form.valid) {
            if (!this.service.form.get('$key').value)
                this.service.insertEmployee(this.service.form.value);
            else
                this.service.updateEmployee(this.service.form.value);
            this.service.form.reset();
            this.service.initializeFormGroup();
            this.notificationService.success("::Submitted successfully");
            this.onClose();
        }
    };
    EmployeeComponent.prototype.onClose = function () {
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
        { type: src_app_shared_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }
    ]; };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employees/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            src_app_shared_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"],
            src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/mat-confirm-dialog/mat-confirm-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdC1jb25maXJtLWRpYWxvZy9tYXQtY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/mat-confirm-dialog/mat-confirm-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: MatConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatConfirmDialogComponent", function() { return MatConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MatConfirmDialogComponent = /** @class */ (function () {
    function MatConfirmDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    MatConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    MatConfirmDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close(false);
    };
    MatConfirmDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    MatConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-confirm-dialog',
            template: __webpack_require__(/*! raw-loader!./mat-confirm-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/mat-confirm-dialog/mat-confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./mat-confirm-dialog.component.css */ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], MatConfirmDialogComponent);
    return MatConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/department.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/department.service.ts ***!
  \**********************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var DepartmentService = /** @class */ (function () {
    function DepartmentService(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.array = [];
        this.departmentList = this.firebase.list('departments');
        this.departmentList.snapshotChanges().subscribe(function (list) {
            _this.array = list.map(function (item) {
                //console.log(item.payload.val());
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    }
    DepartmentService.prototype.getDepartmentName = function ($key) {
        if ($key == "0") {
            return "";
        }
        else {
            return lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.array, function (obj) { return obj.$key == $key; })['name'];
        }
    };
    DepartmentService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/shared/dialog.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/dialog.service.ts ***!
  \******************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mat-confirm-dialog/mat-confirm-dialog.component */ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.ts");




var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openConfirmDilaog = function (msg) {
        return this.dialog.open(_mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatConfirmDialogComponent"], {
            width: '390px',
            panelClass: 'confirm-dialog-container',
            disableClose: true,
            position: { top: "10px" },
            data: {
                message: msg
            }
        });
    };
    DialogService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/shared/employee.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/employee.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var EmployeeService = /** @class */ (function () {
    function EmployeeService(firbase, datePipe) {
        this.firbase = firbase;
        this.datePipe = datePipe;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1'),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            hireDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            isPermanent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
        });
    }
    EmployeeService.prototype.initializeFormGroup = function () {
        this.form.setValue({
            $key: null,
            fullName: '',
            email: '',
            mobile: '',
            city: '',
            gender: '1',
            department: 0,
            hireDate: '',
            isPermanent: false,
        });
    };
    EmployeeService.prototype.getEmployees = function () {
        this.employeeList = this.firbase.list('employees');
        return this.employeeList.snapshotChanges();
    };
    EmployeeService.prototype.insertEmployee = function (employee) {
        this.employeeList.push({
            fullName: employee.fullName,
            email: employee.email,
            mobile: employee.mobile,
            city: employee.city,
            gender: employee.gender,
            department: employee.department,
            hireDate: employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
            isPermanent: employee.isPermanent,
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        this.employeeList.update(employee.$key, {
            fullName: employee.fullName,
            email: employee.email,
            mobile: employee.mobile,
            city: employee.city,
            gender: employee.gender,
            department: employee.department,
            hireDate: employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
            isPermanent: employee.isPermanent,
        });
    };
    EmployeeService.prototype.deleteEmployee = function ($key) {
        this.employeeList.remove($key);
    };
    EmployeeService.prototype.populateForm = function (employee) {
        this.form.setValue(lodash__WEBPACK_IMPORTED_MODULE_5__["omit"](employee, 'departmentName'));
    };
    EmployeeService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/shared/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NotificationService = /** @class */ (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
        this.config = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
    }
    NotificationService.prototype.success = function (msg) {
        this.config['panelClass'] = ['notification', 'success'];
        this.snackBar.open(msg, '', this.config);
    };
    NotificationService.prototype.warn = function (msg) {
        this.config['panelClass'] = ['notification', 'warn'];
        this.snackBar.open(msg, '', this.config);
    };
    NotificationService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCGzhITnOwIZim14NTf3URtvJcJs0bIcos",
        authDomain: "angulurmaterial.firebaseapp.com",
        databaseURL: "https://angulurmaterial.firebaseio.com",
        projectId: "angulurmaterial",
        storageBucket: "",
        messagingSenderId: "248618653901",
        appId: "1:248618653901:web:eff77d6eb33848c2"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Anjular\CompleteAngularMaterialApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map