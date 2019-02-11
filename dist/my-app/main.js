(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.items = {};
    }
    AppComponent.prototype.addLocated = function (locationName) {
        console.log(locationName);
        //   this.dataService.loadData(locationName);
        this.locationName = "";
    };
    AppComponent.prototype.ngOnInit = function () {
        this.items = this.dataService.getData();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            //  templateUrl: "./app.component.html",
            template: "\n    <div style=\"text-align:center\">\n      <app-my-nav></app-my-nav>\n      <h1>\n        Weather!\n      </h1>\n      <app-weather></app-weather>\n    </div>\n  ",
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MATERIAL_MODULES, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_MODULES", function() { return MATERIAL_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "./src/app/my-nav/my-nav.component.ts");
/* harmony import */ var _my_input_input_clearable_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-input/input-clearable-example */ "./src/app/my-input/input-clearable-example.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _weather_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./weather.component */ "./src/app/weather.component.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
















var MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_6__["MyNavComponent"],
                _weather_component__WEBPACK_IMPORTED_MODULE_11__["WeatherComponent"],
                _my_input_input_clearable_example__WEBPACK_IMPORTED_MODULE_7__["InputClearableExample"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"]
            ].concat(MATERIAL_MODULES, [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_12__["reducers"], { metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_12__["metaReducers"] })
            ]),
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
var DataService = /** @class */ (function () {
    function DataService() {
    }
    /*
    private data = [
      {
        located: "London",
        weather: {
          coord: { lon: -0.13, lat: 51.51 },
          weather: [
            {
              id: 300,
              main: "Drizzle",
              description: "light intensity drizzle",
              icon: "09d"
            }
          ],
          base: "stations",
          main: {
            temp: 280.32,
            pressure: 1012,
            humidity: 81,
            temp_min: 279.15,
            temp_max: 281.15
          },
          visibility: 10000,
          wind: { speed: 4.1, deg: 80 },
          clouds: { all: 90 },
          dt: 1485789600,
          sys: {
            type: 1,
            id: 5091,
            message: 0.0103,
            country: "GB",
            sunrise: 1485762037,
            sunset: 1485794875
          },
          id: 2643743,
          name: "London",
          cod: 200
        }
      }
    ];
  */
    DataService.prototype.addData = function (name, dataWether) {
        // this.data.push({ located: name, weather: dataWether });
        this.data = { located: name, weather: dataWether };
        console.log("add new city:", this.data);
        this.getData();
    };
    /*
    loadData(locationName, url) {
      const loadPromise = new Promise((resolve, reject) => {
        const myInit = {
          method: "GET",
          cache: "default"
        };
        let dataWether;
  
        async function fetchAsync(url) {
          const dataJson = await fetch(url, myInit);
          return (dataWether = await dataJson.json());
        }
        fetchAsync(url).then(() => {
          console.log(dataWether);
          resolve({ located: locationName, weather: dataWether });
        });
      });
      
      loadPromise.then(result => {
        this.citys = result;
        console.log("this.citys--", this.citys);
        this.store.dispatch(
          new cityAction.AddOne({
            ids: this.citys.weather.id,
            citys: {
              id: this.citys.weather.id,
              name: this.citys.weather.name,
              description: this.citys.weather.weather[0].description,
              temperature: this.citys.weather.main.temp,
              wind: this.citys.weather.wind.speed,
              precipitation: this.citys.weather.clouds.all
            }
          })
        );
        this.locationName = "";
      });
      
    }
  */
    DataService.prototype.getData = function () {
        return this.data;
    };
    return DataService;
}());



/***/ }),

/***/ "./src/app/my-input/input-clearable-example.css":
/*!******************************************************!*\
  !*** ./src/app/my-input/input-clearable-example.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form-field {\r\n    width: 200px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktaW5wdXQvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvbXktaW5wdXQvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/my-input/input-clearable-example.html":
/*!*******************************************************!*\
  !*** ./src/app/my-input/input-clearable-example.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-form-field\">\r\n  <input\r\n    matInput\r\n    type=\"text\"\r\n    placeholder=\"Clearable input\"\r\n    [(ngModel)]=\"value\"\r\n  />\r\n  <button\r\n    mat-button\r\n    *ngIf=\"value\"\r\n    matSuffix\r\n    mat-icon-button\r\n    aria-label=\"Clear\"\r\n    (click)=\"value = ''\"\r\n  >\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/my-input/input-clearable-example.ts":
/*!*****************************************************!*\
  !*** ./src/app/my-input/input-clearable-example.ts ***!
  \*****************************************************/
/*! exports provided: InputClearableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputClearableExample", function() { return InputClearableExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @title Input with a clear button
 */
var InputClearableExample = /** @class */ (function () {
    function InputClearableExample() {
        this.value = "Clear me";
    }
    InputClearableExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "input-clearable-example",
            template: __webpack_require__(/*! ./input-clearable-example.html */ "./src/app/my-input/input-clearable-example.html"),
            styles: [__webpack_require__(/*! ./input-clearable-example.css */ "./src/app/my-input/input-clearable-example.css")]
        })
    ], InputClearableExample);
    return InputClearableExample;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktbmF2L215LW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbXktbmF2L215LW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\"\n  >\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\">Link 1</a>\n      <a mat-list-item href=\"#\">Link 2</a>\n      <a mat-list-item href=\"#\">Link 3</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"(isHandset$ | async)\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Weather today</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MyNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/my-nav/my-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/weathers.ts":
/*!*******************************************!*\
  !*** ./src/app/store/actions/weathers.ts ***!
  \*******************************************/
/*! exports provided: SELECT, ADD_ONE, DELETE_ONE, Select, DeleteOne, AddOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ONE", function() { return ADD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ONE", function() { return DELETE_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteOne", function() { return DeleteOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOne", function() { return AddOne; });
var SELECT = "[Citys] Select";
var ADD_ONE = "[Citys] Add One";
var DELETE_ONE = "[Citys] Delete One";
var Select = /** @class */ (function () {
    function Select(payload) {
        this.payload = payload;
        this.type = SELECT;
    }
    return Select;
}());

var DeleteOne = /** @class */ (function () {
    function DeleteOne(payload) {
        this.payload = payload;
        this.type = DELETE_ONE;
    }
    return DeleteOne;
}());

var AddOne = /** @class */ (function () {
    //constructor(public payload: City) {}
    function AddOne(payload) {
        this.payload = payload;
        this.type = ADD_ONE;
    }
    return AddOne;
}());

//export type Action = AddOne | Select;


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, logger, metaReducers, getCityState, getIds, getCitys, getSelected, getSelectedCity, getAllCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCityState", function() { return getCityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCitys", function() { return getCitys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelected", function() { return getSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedCity", function() { return getSelectedCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCity", function() { return getAllCity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _weathers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weathers */ "./src/app/store/reducers/weathers.ts");



var reducers = {
    citys: _weathers__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
function logger(reducer) {
    return function (state, action) {
        console.log("state", state);
        console.log("action", action);
        return reducer(state, action);
    };
}
var metaReducers = [logger];
var getCityState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("citys");
var getIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getCityState, _weathers__WEBPACK_IMPORTED_MODULE_2__["getIds"]);
var getCitys = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getCityState, _weathers__WEBPACK_IMPORTED_MODULE_2__["getCitys"]);
var getSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getCityState, _weathers__WEBPACK_IMPORTED_MODULE_2__["getSelected"]);
var getSelectedCity = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getSelected, getCitys, function (selectedId, citys) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, citys[selectedId]);
});
var getAllCity = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getCitys);


/***/ }),

/***/ "./src/app/store/reducers/weathers.ts":
/*!********************************************!*\
  !*** ./src/app/store/reducers/weathers.ts ***!
  \********************************************/
/*! exports provided: initialState, reducer, getIds, getCitys, getSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCitys", function() { return getCitys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelected", function() { return getSelected; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_weathers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/weathers */ "./src/app/store/actions/weathers.ts");


var initialState = {
    ids: [1, 2, 3],
    citys: [
        {
            id: 1,
            name: "Minsk",
            description: "\u043F\u0440\u043E\u0445\u043B\u0430\u0434\u043D\u043E",
            temperature: 5,
            wind: 3,
            precipitation: 20
        },
        {
            id: 2,
            name: "Moskva",
            description: "облачно",
            temperature: 3,
            wind: 5,
            precipitation: 30
        },
        {
            id: 3,
            name: "Kiev",
            description: "ветряно",
            temperature: 4,
            wind: 10,
            precipitation: 35
        }
    ],
    selected: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_weathers__WEBPACK_IMPORTED_MODULE_1__["ADD_ONE"]: {
            var newCity = action.payload;
            //const { ids, citys } = newFilm;
            //console.log("citys-", citys);
            //console.log("state-", state);
            // console.log("cmalo-", {
            //   ...state,
            //  ids: [...state.ids, newFilm.ids],
            //   citys: [...state.citys, newFilm.citys]
            // });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ids: state.ids.concat([newCity.ids]), citys: state.citys.concat([newCity.citys]) });
        }
        case _actions_weathers__WEBPACK_IMPORTED_MODULE_1__["DELETE_ONE"]: {
            var id_1 = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { 
                //       ids: [...state.ids].filter((item: number, i, arr) => item.id !== id),
                citys: state.citys.slice().filter(function (item, i, arr) { return item.id !== id_1; }) });
        }
        //  case cityAction.SELECT: {
        //    const id = action.payload;
        //    return {
        //      ...state,
        //     selected: id
        //   };
        // }
        default:
            return state;
    }
}
var getIds = function (state) { return state.ids; };
var getCitys = function (state) { return state.citys; };
var getSelected = function (state) { return state.selected; };


/***/ }),

/***/ "./src/app/weather.component.html":
/*!****************************************!*\
  !*** ./src/app/weather.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <button (click)=\"geoFindMe()\">Find weather my location</button>\r\n</p>\r\n<div id=\"out\"></div>\r\n<span>Enter your location:</span>\r\n<input type=\"text\" [(ngModel)]=\"locationName\" />\r\n<button (click)=\"addLocated(locationName)\">Find weather</button>\r\n<ul>\r\n  <li style=\"list-style-type:none\" *ngFor=\"let city of (listCitys$ | async)\">\r\n    <span>{{ city.name }}, &nbsp;</span>\r\n    <span> &nbsp; {{ city.temperature }} °С, &nbsp;</span>\r\n    <span> &nbsp; {{ city.description }}, &nbsp;</span>\r\n    <span>ветер: &nbsp; {{ city.wind }}м/c, &nbsp;</span>\r\n    <span>осадки: &nbsp; {{ city.precipitation }}мм</span>\r\n    <span style=\"cursor:pointer\" (click)=\"deleteLocated(city.id)\"\r\n      >&nbsp;&nbsp; x</span\r\n    >\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/weather.component.scss":
/*!****************************************!*\
  !*** ./src/app/weather.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXHdlYlxcc2l0ZVxcQW5ndWxhclxcd2VhdGhlci9zcmNcXGFwcFxcd2VhdGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/weather.component.ts":
/*!**************************************!*\
  !*** ./src/app/weather.component.ts ***!
  \**************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_actions_weathers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions/weathers */ "./src/app/store/actions/weathers.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");






var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(store, dataService) {
        this.store = store;
        this.dataService = dataService;
        this.listCitys$ = store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["getCitys"]);
        this.selected$ = store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["getSelectedCity"]);
    }
    WeatherComponent.prototype.ngOnInit = function () {
        //  this.citys = this.dataService.getData();
        console.log("ngOnInit");
    };
    WeatherComponent.prototype.onSelect = function (id) {
        this.store.dispatch(new _store_actions_weathers__WEBPACK_IMPORTED_MODULE_4__["Select"](id));
        console.log("citys$-", this.listCitys$);
    };
    WeatherComponent.prototype.deleteLocated = function (id) {
        this.store.dispatch(new _store_actions_weathers__WEBPACK_IMPORTED_MODULE_4__["DeleteOne"](id));
    };
    WeatherComponent.prototype.addLocated = function (locationName, latitude, longitude) {
        var _this = this;
        if (locationName === void 0) { locationName = "Kiev"; }
        var keyApi = "&APPID=5baf5448a135ea4bda7e758af88b0136";
        var metric = "&units=metric";
        var lang = "&lang=ru";
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" +
            locationName +
            metric +
            lang +
            keyApi;
        if (latitude) {
            url =
                "https://api.openweathermap.org/data/2.5/weather?lat=" +
                    latitude +
                    "&lon=" +
                    longitude +
                    metric +
                    lang +
                    keyApi;
        }
        var loadPromise = new Promise(function (resolve, reject) {
            // const myInit = {
            //   method: "GET",
            //   cache: "default"
            // };
            var dataWether;
            function fetchAsync(url) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                    var dataJson;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fetch(url)];
                            case 1:
                                dataJson = _a.sent();
                                return [4 /*yield*/, dataJson.json()];
                            case 2: 
                            //const dataJson = await fetch(url, myInit);
                            return [2 /*return*/, (dataWether = _a.sent())];
                        }
                    });
                });
            }
            fetchAsync(url).then(function () {
                console.log(dataWether);
                resolve({ located: locationName, weather: dataWether });
            });
        });
        loadPromise.then(function (result) {
            _this.citysNew = result;
            console.log("this.citys--", _this.citysNew);
            _this.store.dispatch(new _store_actions_weathers__WEBPACK_IMPORTED_MODULE_4__["AddOne"]({
                ids: _this.citysNew.weather.id,
                citys: {
                    id: _this.citysNew.weather.id,
                    name: _this.citysNew.weather.name,
                    description: _this.citysNew.weather.weather[0].description,
                    temperature: _this.citysNew.weather.main.temp,
                    wind: _this.citysNew.weather.wind.speed,
                    precipitation: _this.citysNew.weather.clouds.all
                }
            }));
            _this.locationName = "";
        });
    };
    WeatherComponent.prototype.geoFindMe = function () {
        var latitude;
        var longitude;
        var self = this;
        var output = document.getElementById("out");
        if (!navigator.geolocation) {
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }
        function success(position) {
            latitude = position.coords.latitude.toFixed(2);
            longitude = position.coords.longitude.toFixed(2);
            output.innerHTML =
                "<p>Latitude: " + latitude + "°, Longitude: " + longitude + "°</p>";
            console.log("отправка latitude, longitude=", latitude, longitude);
            self.addLocated(undefined, latitude, longitude);
        }
        function error() {
            output.innerHTML = "Unable to retrieve your location";
        }
        output.innerHTML = "<p>Locating…</p>";
        navigator.geolocation.getCurrentPosition(success, error);
    };
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-weather",
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]],
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/weather.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], WeatherComponent);
    return WeatherComponent;
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
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\web\site\Angular\weather\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map