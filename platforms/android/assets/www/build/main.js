webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_movie__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_movie_movie__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditModalComponent = (function () {
    function EditModalComponent(navParams, movieProvider, viewCtrl) {
        this.navParams = navParams;
        this.movieProvider = movieProvider;
        this.viewCtrl = viewCtrl;
        this.movie = navParams.get('movie');
        this.newMode = this.movie == undefined;
        this.movie = this.newMode ? new __WEBPACK_IMPORTED_MODULE_2__entities_movie__["a" /* Movie */]() : Object.assign({}, this.movie);
        this.header = this.newMode ? "Neuer Film" : "Bearbeiten";
    }
    EditModalComponent.prototype.save = function () {
        this.movieProvider.insertOrUpdateMovie(this.movie);
        this.viewCtrl.dismiss();
    };
    EditModalComponent.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EditModalComponent.prototype.addActor = function () {
        this.movie.actors.push("");
    };
    EditModalComponent.prototype.removeActor = function (actor) {
        var index = this.movie.actors.indexOf(actor);
        this.movie.actors.splice(index, 1);
    };
    EditModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-modal',template:/*ion-inline-start:"/home/konopac/Workspaces/Test/MovieList/src/components/edit-modal/edit-modal.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{header}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n\n		<ion-item>\n			<ion-label floating>Titel</ion-label>\n			<ion-input type="text" [(ngModel)]="movie.title" name="title"></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label floating>Regisseur</ion-label>\n			<ion-input type="text" [(ngModel)]="movie.director" name="director"></ion-input>\n		</ion-item>\n\n		<div *ngFor="let actor of movie.actors; let i = index">\n			<ion-item class="actor">\n				<ion-label floating>Schauspieler {{i+1}}</ion-label>\n				<ion-input type="text" [(ngModel)]="movie.actors[i]" name="actor{{i}}"></ion-input>\n			</ion-item>\n			<button ion-fab mini float-right margin-top color="danger" (click)="removeActor(actor)">\n				<ion-icon name="remove"></ion-icon>\n			</button>\n		</div>\n		<div class="addActor">\n			<button ion-fab mini float-right margin-top color="default" (click)="addActor()">\n				<ion-icon name="add"></ion-icon>\n			</button>\n		</div>\n		\n\n	</ion-list>\n		<div class="lastElement"></div>\n	<div class="footer">\n		<cancel-button (click)="cancel()"></cancel-button>\n		<submit-button (click)="save()"></submit-button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/konopac/Workspaces/Test/MovieList/src/components/edit-modal/edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_movie_movie__["a" /* MovieProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], EditModalComponent);
    return EditModalComponent;
}());

//# sourceMappingURL=edit-modal.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_edit_modal_edit_modal__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_movie_movie__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = (function () {
    function ListPage(navCtrl, movieProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.movieProvider = movieProvider;
        this.modalCtrl = modalCtrl;
        this.movies = [];
        this.getData();
    }
    ListPage.prototype.itemTapped = function (event, movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], {
            movie: movie
        });
    };
    ListPage.prototype.newMovie = function () {
        var _this = this;
        var newModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_edit_modal_edit_modal__["a" /* EditModalComponent */]);
        newModal.onDidDismiss(function (data) {
            _this.getData();
        });
        newModal.present();
    };
    ListPage.prototype.editMovie = function (movie) {
        var _this = this;
        var editModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_edit_modal_edit_modal__["a" /* EditModalComponent */], { movie: movie });
        editModal.onDidDismiss(function (data) {
            _this.getData();
        });
        editModal.present();
    };
    ListPage.prototype.deleteMovie = function (movie) {
        this.movieProvider.deleteMovie(movie);
        this.getData();
    };
    ListPage.prototype.getData = function () {
        var _this = this;
        this.movieProvider.getMovies().subscribe(function (movies) { return _this.movies = movies; });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/konopac/Workspaces/Test/MovieList/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MovieList</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list reorder="true" (ionItemReorder)="$event.applyTo(movies)">\n		<ion-item-sliding *ngFor="let movie of movies">\n			<button ion-item (click)="itemTapped($event, movie)">\n				<h2>{{movie.title}}</h2>\n				<p>{{movie.director}}</p>\n			</button>\n			<ion-item-options side="right" (ionSwipe)="deleteMovie(movie)">\n				<button ion-button expandable color="danger" (click)="deleteMovie(movie)">\n					<ion-icon margin-horizontal name="trash"></ion-icon>\n				</button>\n			</ion-item-options>\n			<ion-item-options side="left" (ionSwipe)="editMovie(movie)">\n				<button ion-button expandable color="default" (click)="editMovie(movie)">\n					<ion-icon margin-horizontal name="create"></ion-icon>\n				</button>\n			</ion-item-options>\n		\n		</ion-item-sliding>\n	</ion-list>\n	<div class="lastElement"></div>\n	<div class="footer">\n		<new-button (click)="newMovie()"></new-button>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/home/konopac/Workspaces/Test/MovieList/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_movie_movie__["a" /* MovieProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movie = navParams.get('movie');
    }
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/home/konopac/Workspaces/Test/MovieList/src/pages/details/details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{movie.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<h4 text-center>von {{movie.director}}</h4>\n\n	<h5 text-center>Schauspieler:</h5>\n	<p text-center *ngFor="let actor of movie.actors">{{actor}}</p>\n	\n</ion-content>\n'/*ion-inline-end:"/home/konopac/Workspaces/Test/MovieList/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cancel_button_cancel_button__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_edit_modal_edit_modal__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_new_button_new_button__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_submit_button_submit_button__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_details_details__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_movie_movie__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_1__components_edit_modal_edit_modal__["a" /* EditModalComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_submit_button_submit_button__["a" /* SubmitButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_cancel_button_cancel_button__["a" /* CancelButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_new_button_new_button__["a" /* NewButtonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_1__components_edit_modal_edit_modal__["a" /* EditModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_movie_movie__["a" /* MovieProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CancelButtonComponent = (function () {
    function CancelButtonComponent() {
    }
    CancelButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cancel-button',template:/*ion-inline-start:"/home/konopac/Workspaces/Test/MovieList/src/components/cancel-button/cancel-button.html"*/'<button ion-fab color="danger" class="cancel">\n	<ion-icon name="close"></ion-icon>\n</button>'/*ion-inline-end:"/home/konopac/Workspaces/Test/MovieList/src/components/cancel-button/cancel-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CancelButtonComponent);
    return CancelButtonComponent;
}());

//# sourceMappingURL=cancel-button.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie() {
        this.id = 0;
        this.title = '';
        this.director = '';
        this.actors = new Array();
    }
    return Movie;
}());

//# sourceMappingURL=movie.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewButtonComponent = (function () {
    function NewButtonComponent() {
    }
    NewButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'new-button',template:/*ion-inline-start:"/home/konopac/Workspaces/Test/MovieList/src/components/new-button/new-button.html"*/'<button ion-fab color="default" class="new">\n	<ion-icon name="add"></ion-icon>\n</button>'/*ion-inline-end:"/home/konopac/Workspaces/Test/MovieList/src/components/new-button/new-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NewButtonComponent);
    return NewButtonComponent;
}());

//# sourceMappingURL=new-button.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitButtonComponent = (function () {
    function SubmitButtonComponent() {
    }
    SubmitButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'submit-button',template:/*ion-inline-start:"/home/konopac/Workspaces/Test/MovieList/src/components/submit-button/submit-button.html"*/'<button ion-fab color="secondary" class="submit">\n	<ion-icon name="checkmark"></ion-icon>\n</button>'/*ion-inline-end:"/home/konopac/Workspaces/Test/MovieList/src/components/submit-button/submit-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SubmitButtonComponent);
    return SubmitButtonComponent;
}());

//# sourceMappingURL=submit-button.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/konopac/Workspaces/Test/MovieList/src/app/app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/konopac/Workspaces/Test/MovieList/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieProvider = (function () {
    function MovieProvider(storage) {
        var _this = this;
        this.storage = storage;
        // TODO: get data from storage / REST
        this.nextId = 1;
        this.storage.forEach(function (value, key, index) {
            var keyNumber = +key;
            if (keyNumber >= _this.nextId) {
                _this.nextId = keyNumber + 1;
                console.log('CONSTRUCTOR highest nextId: ' + _this.nextId);
            }
        });
    }
    MovieProvider.prototype.getMovies = function () {
        var result = new Array();
        this.storage.forEach(function (value, key, index) {
            console.log('GET index: ' + index + ' - key: ' + key);
            result.push(value);
        });
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(result);
    };
    MovieProvider.prototype.insertOrUpdateMovie = function (movie) {
        if (movie.id <= 0) {
            console.log(movie);
            movie.id = this.nextId;
            this.nextId++;
        }
        this.storage.set(movie.id + '', movie);
        console.log(movie);
        console.log('INSERT/UPDATE nextId: ' + this.nextId);
    };
    MovieProvider.prototype.deleteMovie = function (movie) {
        this.storage.remove(movie.id + '');
        console.log('DELETE movie: ' + movie);
        console.log('DELETE nextId: ' + this.nextId);
    };
    MovieProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MovieProvider);
    return MovieProvider;
}());

//# sourceMappingURL=movie.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map