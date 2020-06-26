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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar [language]=\"language\" (setLanguage)=\"setLanguageHandler($event)\"></app-navbar>\n<div style=\"height:60px; width:100%; clear:both;\"></div>\n<app-profile [language]=\"language\"></app-profile>\n<app-jumbotron id=\"work\" section=\"work\" [language]=\"language\"></app-jumbotron>\n<div class=\"container\">        \n  <div class=\"row\">\n    <app-work class=\"col-md-6 my-4\" name=\"logi\"></app-work>\n    <app-work class=\"col-md-6 my-4\" name=\"itri\"></app-work>\n    <!-- <app-work class=\"col-md-6 my-4\" name=\"clinc\"></app-work> -->\n  </div>\n</div>\n<app-jumbotron id=\"education\" section=\"education\" [language]=\"language\"></app-jumbotron>\n<div class=\"container\">        \n  <div class=\"row\">\n    <app-education class=\"col-md-6\" name=\"uu\" [language]=\"language\"></app-education>\n    <app-education class=\"col-md-6\" name=\"yzu_ms\" [language]=\"language\"></app-education>\n    <app-education class=\"col-md-6\" name=\"yzu_bs\" [language]=\"language\"></app-education>\n  </div>\n</div>\n<app-jumbotron id=\"projects\" section=\"projects\" [language]=\"language\"></app-jumbotron>\n<div class=\"container\">        \n  <div class=\"row\">\n    <app-project class=\"col-md-6\" name=\"p4\" [language]=\"language\"></app-project>\n    <app-project class=\"col-md-6\" name=\"p3\" [language]=\"language\"></app-project>\n    <app-project class=\"col-md-6\" name=\"p2\" [language]=\"language\"></app-project>\n    <app-project class=\"col-md-6\" name=\"p1\" [language]=\"language\"></app-project>\n    <app-project class=\"col-md-6\" name=\"p5\" [language]=\"language\"></app-project>\n    <app-project class=\"col-md-6\" name=\"p6\" [language]=\"language\"></app-project>\n  </div>\n</div>\n<app-jumbotron id=\"skills\" section=\"skills\" [language]=\"language\"></app-jumbotron>\n<div class=\"container text-center\">        \n  <div class=\"row\">\n    <app-skill class=\"col-md-3 col-sm-6\" name=\"lang\"></app-skill>\n    <app-skill class=\"col-md-3 col-sm-6\" name=\"library\"></app-skill>\n    <app-skill class=\"col-md-3 col-sm-6\" name=\"web\"></app-skill>\n    <app-skill class=\"col-md-3 col-sm-6\" name=\"tool\"></app-skill>\n  </div>\n</div>\n<!-- <app-jumbotron id=\"biography\" section=\"biography\" [language]=\"language\"></app-jumbotron>\n<div class=\"container\">        \n  <div class=\"row\">\n    <app-biography [language]=\"language\"></app-biography>\n  </div>\n</div> -->\n<app-jumbotron id=\"hobbies\" section=\"hobbies\" [language]=\"language\"></app-jumbotron>\n<app-hobby></app-hobby>"

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
        this.language = 'en';
    }
    AppComponent.prototype.setLanguageHandler = function (language) {
        this.language = language;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jumbotron/jumbotron.component */ "./src/app/jumbotron/jumbotron.component.ts");
/* harmony import */ var _biography_biography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./biography/biography.component */ "./src/app/biography/biography.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skill/skill.component */ "./src/app/skill/skill.component.ts");
/* harmony import */ var _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hobby/hobby.component */ "./src/app/hobby/hobby.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"],
                _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_8__["JumbotronComponent"],
                _biography_biography_component__WEBPACK_IMPORTED_MODULE_9__["BiographyComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_12__["EducationComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_13__["ProjectComponent"],
                _skill_skill_component__WEBPACK_IMPORTED_MODULE_14__["SkillComponent"],
                _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_15__["HobbyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/biography/biography.component.css":
/*!***************************************************!*\
  !*** ./src/app/biography/biography.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jpb2dyYXBoeS9iaW9ncmFwaHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/biography/biography.component.html":
/*!****************************************************!*\
  !*** ./src/app/biography/biography.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"language === 'en'\">\n  <p *ngFor=\"let line of bioEnglish\">{{ line }}</p>\n</div>\n<div *ngIf=\"language === 'ch'\">\n  <p *ngFor=\"let line of bioChinese\">{{ line }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/biography/biography.component.ts":
/*!**************************************************!*\
  !*** ./src/app/biography/biography.component.ts ***!
  \**************************************************/
/*! exports provided: BiographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiographyComponent", function() { return BiographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BiographyComponent = /** @class */ (function () {
    function BiographyComponent() {
        this.bioEnglish = bio['english'];
        this.bioChinese = bio['chinese'];
    }
    BiographyComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BiographyComponent.prototype, "language", void 0);
    BiographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-biography',
            template: __webpack_require__(/*! ./biography.component.html */ "./src/app/biography/biography.component.html"),
            styles: [__webpack_require__(/*! ./biography.component.css */ "./src/app/biography/biography.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BiographyComponent);
    return BiographyComponent;
}());

var bio = {
    'english': [
        'I consider myself as a highly capable software engineer. Complementing my diverse skill set, I have developed an excellent understanding of a wide range of programming languages, along with signal processing and machine learning models, and have demonstrated this capability throughout my ongoing Electrical and Computer Engineering degree from University of Michigan, which is due to be completed in Spring 2018.',
        'While pursuing my education, I have been recognized for my outstanding ability to work as part of a team. It is for this reason I have participated in multiple team-oriented courses and projects and have consistently delivered finished assignments as per requirements and always within the allotted time provided. I am a project guy instead of an exam guy, which means I prefer extensive brainstorming teamwork environment instead of writing true-false questions and remembering correct answers.',
        'I am sure after appraisal of my resume you will see I am an individual with excellent potential in your company. In addition to the skills listed, I also have an excellent work ethic, personality and tenacious attitude. Most important of all, I am an easygoing person capable of casting constructive suggestions, which makes me an effective team player. I look forward to hearing from you in due course.'
    ],
    'chinese': [
        '做過為期一年的專題開發，主題是2D Indoor Positioning System Through Android Game App。裝設Bluetooth發送器在室內空間的角落，至少三個發送器，再藉由Android系統的手機接收Bluetooth強度訊號，使用RSSI與三角定位法換算成發送器與手機的距離。然而空間中雜物會造成訊號傳輸干擾，這種方法在小距離移動時通常會產生誤差，因此我們結合手機本身的位移感應器INS，補償小範圍移動時的誤差。主要是用Kalman Filter結合RSSI與INS訊號，成功降低20%的誤差。演算法開發後，我們使用Android設計簡單遊戲來驗證結果，利用一個3D的西洋棋在棋盤上根據對應的計算位置移動，來代表使用者的現在位置。此專題獲得國科會專題計畫的贊助與表揚。',
        '第一學期主修Signal Processing與Machine Learning，Signal Processing部分尤其對影像處理比較感興趣。碩一時修過一門課叫做矩陣方法，整學期課程圍繞在Singular Value Decomposition，這是一個可以找出一個訊號中的主要組成成分的方法，我用此應用在手寫數字辨別、去除攝影機雜訊、全景無縫照片接合、二維影像三維建模之類等應用，這門課不乏也跟Machine Learning與Computer Vision有重複的概念，這門課收穫最大的就是對大量資料的矩陣運算有深入了解，奠定我日後Machine Learning與Computer Vision的基礎。碩士修的Machine Learning這門課主要建立在統計學理論上，Classification、Cluster、Regression基本模型修習，期中之後也學習更進階的理論如Kernel、Support Vector Machine、Decision Tree、Random Forest、Neural Network，期末報告我是做AdaBoost演算法的比較，AdaBoost是一種降低Classification類型問題錯誤率的方法，透過每一次的Training，會增加錯誤判斷的資料的比重，在下一次Training會增加正確判斷的機率，我的期末報告就是研究三種AdaBoost版本的優缺點。',
        '第二學期主修Operating System與Database Management。在Operating System放心力在了解OS最底層跟硬體之間是怎麼運作的。第一次的Project我們要寫一個User Level的Multithread Program，在第二次Project我們要寫一個Library讓使用者來撰寫Multithread Program，其中包含如何Swap Context、Create Thread、Suspend CPU、Wake Up CPU，實踐Mutual Exclusion、Condition Variable、Interrupt，讓我對於Multithread架構有很深的了解。第三次的Project我們要撰寫Virtual Memory的Library，實踐Virtual Memory與Physical Memory之間的互動。在Database Management課程裡主要學習怎麼設計Relational Model，避免Redundancy與Anomaly，應用方面著重在使用SQL，如何撰寫速度快與資料量少的Query，主要使用Oracle。期中後著重在Database本身的設計開發，包括B+ Tree與Hash Index等架構。',
        '我花時間在提升自我兩個面向，進階程式編寫能力與網頁開發。程式編寫部分我同時注重Python、Java、C++的演算法與資料結構的編寫能力，善用Object Oriented語言的優勢，撰寫簡潔與高效率的程式架構。網頁開發是個人發想與興趣所在的專題目標，熟悉基本Front-End語言如HTML、CSS、JavaScript，尤其多方利用JavaScript各種Library與Framework，除了基本的jQuery，還有如Twitter開發的Bootstrap、Google開發的AngularJS、Facebook開發的ReactJS，都是我初步涉及的領域。目前正在學習Back-End技術如PHP與學校所學的Database技術，規劃結合MySQL架設簡單的社群網站，同時也運用所學架設個人網頁。',
        '大二時擔任「清大附中山校友會」會長的職務，領導大家一年中舉辦十餘種不同的活動，讓附中山社團運作有聲有色，並在校園裡打響名號。在附中山，我上了寶貴的一課，如何與人相處、如何統籌活動；身為會長，學習到如何成為令人信服與負責的領導者，更難能可貴的是，我認識了許多一輩子可以信賴的夥伴。',
        '我是TEDxNTHU當中的成員，我們由一群創新、開放、喜愛分享的人組成，對新事物好奇，對新發明驚嘆，希望將世界最新的資訊帶到身旁的社群當中。每月例行活動是訂立主題由社員們互相分享，激盪出各種想法，而在每年五月會舉辦年度盛大活動TED年會，邀請諸位講者跟大家分享成功經驗、人生哲理、世界最新脈動。我在此獲得許多啟發與視野的拓展。',
        '大四參加世界模擬聯合國，英文叫World Model United Nations，這是由哈佛大學每年都會辦的全球性學生活動，主要就是由學生全程主持模擬聯合國開會的狀況，每一個會議都會有不同的議題需要討論，主題緊扣經濟、環境、政治、安全等世界正面臨的問題。會議期間每個人會代表一個國家委員參加會議，全程需以英文溝通，參與者來自世界各地不同國家，大家需要分析問題、辯論優點缺點、拉攏協商、模擬國際政經角力，最後努力贏得對自己國家最有利的會議結果。',
        '我是一個很努力的人，積極求學的態度讓我有機會遠赴美國念書，同時也抱持一貫的好成績。除了將學校課業學好之外，我也喜歡自學新事物，比如自己開發網頁，因為我所學即我所愛，這就是驅動我一直向前的力量。希望能有機會到貴公司實習，學習更多網路上與校園裡得不到的技能，我也願意將我的知識全新貢獻在我的職務上，如果能力有所不足，懇請多多指教。'
    ]
};


/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".school-logo {\n    height: 100px;\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nob29sLWxvZ28ge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-container\">\n  <div class=\"card card-block\">\n    <div class=\"card-block\">        \n      <img class=\"school-logo\" [src]=\"educations.get(name).getSchoolLogoPath()\">\n      <h2>{{ educations.get(name).getSchoolName() }}</h2>\n      <h5>{{ educations.get(name).getDegree() }}</h5>\n      <p>{{ educations.get(name).getSchoolLocationString() }}</p>\n      <p>{{ educations.get(name).getSchoolPeriod() }}</p>\n      <p>\n        <span>GPA {{ educations.get(name).getGPA() }} </span>\n        <i class=\"fa fa-question-circle\" placement=\"right\" [ngbTooltip]=\"educations.get(name).getGPAScale()\" aria-hidden=\"true\"></i>\n      </p>\n      <h5>Courses</h5>\n      <ul>\n        <li *ngFor=\"let course of educations.get(name).getCourses()\">{{ course }}</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.educations = new Map();
        var uu = new Education();
        var yzu_ms = new Education();
        var yzu_bs = new Education();
        uu.setSchoolLogoPath('assets/img/uofu_logo.png');
        yzu_ms.setSchoolLogoPath('assets/img/yzu_logo.png');
        yzu_bs.setSchoolLogoPath('assets/img/yzu_logo.png');
        uu.setSchoolName('Univerisity of Utah');
        yzu_ms.setSchoolName('Yuan Ze University');
        yzu_bs.setSchoolName('Yuan Ze University');
        uu.setDegree('Master of Science in Computer Science');
        yzu_ms.setDegree('Master of Science in Electrical Engineering');
        yzu_bs.setDegree('Bachelor of Science in Electrical Engineering');
        uu.setSchoolLocation('Salt Lake City', 'UT', 'USA');
        yzu_ms.setSchoolLocation('Taoyuan', '', 'Taiwan');
        yzu_bs.setSchoolLocation('Taoyuan', '', 'Taiwan');
        uu.setSchoolPeriod('August 2019', 'April 2021');
        yzu_ms.setSchoolPeriod('August 2018', 'June 2019');
        yzu_bs.setSchoolPeriod('August 2014', 'June 2018');
        uu.setGPA(3.62);
        yzu_ms.setGPA(4.0);
        yzu_bs.setGPA(3.77);
        uu.setGPAScale('out of 4.0');
        yzu_ms.setGPAScale('out of 4.0');
        yzu_bs.setGPAScale('out of 4.0');
        uu.setCourses([
            'Data Mining',
            'Computer Vision',
            'Information Retrieval',
            'Natural Language Processing',
            'Advanced Algorithms',
            'Visualization for Data Science'
        ]);
        yzu_ms.setCourses([
            'Mobile Big Data Analysis and Machine Learning',
            'Neural Network',
            'Deep Learning and its Vision Applications'
        ]);
        yzu_bs.setCourses([
            'Digital Signal Processing',
            'Operating Systems',
            'Data Structures',
            'Computer Architecture',
            'Digital Signal Processing'
        ]);
        this.educations.set('uu', uu);
        this.educations.set('yzu_ms', yzu_ms);
        this.educations.set('yzu_bs', yzu_bs);
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EducationComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EducationComponent.prototype, "language", void 0);
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());

var Education = /** @class */ (function () {
    function Education() {
    }
    Education.prototype.setSchoolLogoPath = function (schoolLogoPath) {
        this.schoolLogoPath = schoolLogoPath;
    };
    Education.prototype.getSchoolLogoPath = function () {
        return this.schoolLogoPath;
    };
    Education.prototype.setSchoolName = function (schoolName) {
        this.schoolName = schoolName;
    };
    Education.prototype.getSchoolName = function () {
        return this.schoolName;
    };
    Education.prototype.setDegree = function (degree) {
        this.degree = degree;
    };
    Education.prototype.getDegree = function () {
        return this.degree;
    };
    Education.prototype.setSchoolLocation = function (schoolCity, schoolState, schoolCountry) {
        this.schoolCity = schoolCity;
        this.schoolState = schoolState;
        this.schoolCountry = schoolCountry;
    };
    Education.prototype.getSchoolLocationString = function () {
        if (this.schoolState == '') {
            return this.schoolCity + ", " + this.schoolCountry;
        }
        else {
            return this.schoolCity + ", " + this.schoolState + ", " + this.schoolCountry;
        }
    };
    Education.prototype.setSchoolPeriod = function (startDate, endDate) {
        if (endDate === void 0) { endDate = 'Present'; }
        this.startDate = startDate;
        this.endDate = endDate;
    };
    Education.prototype.getSchoolPeriod = function () {
        return this.startDate + " - " + this.endDate;
    };
    Education.prototype.setGPA = function (GPA) {
        this.GPA = GPA;
    };
    Education.prototype.getGPA = function () {
        return this.GPA;
    };
    Education.prototype.setGPAScale = function (GPAScala) {
        this.GPAScala = GPAScala;
    };
    Education.prototype.getGPAScale = function () {
        return this.GPAScala;
    };
    Education.prototype.setCourses = function (courses) {
        this.courses = courses;
    };
    Education.prototype.getCourses = function () {
        return this.courses;
    };
    return Education;
}());


/***/ }),

/***/ "./src/app/hobby/hobby.component.css":
/*!*******************************************!*\
  !*** ./src/app/hobby/hobby.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid {\n    height: 1200px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9iYnkvaG9iYnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob2JieS9ob2JieS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1mbHVpZCB7XG4gICAgaGVpZ2h0OiAxMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/hobby/hobby.component.html":
/*!********************************************!*\
  !*** ./src/app/hobby/hobby.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\n    <ng-template ngbSlide>\n      <img class=\"img-fluid\" src=\"assets/img/extra1.jpg\" alt=\"Random first slide\">\n      <div class=\"carousel-caption\">\n        <h3>Teaching</h3>\n        <p>I enjoy introducing EE or CS knowledge to others.</p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img class=\"img-fluid\" src=\"assets/img/extra2.jpg\" alt=\"Random second slide\">\n      <div class=\"carousel-caption\">\n        <h3>Badminton Club</h3>\n        <p>I am the team chaptin of badminton in EE department.</p>\n      </div>\n    </ng-template>\n    <!-- <ng-template ngbSlide>\n      <img class=\"img-fluid\" src=\"assets/img/extra3.jpg\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>WMUN</h3>\n        <p>I attended World Model United Nations (WMUN) in Seoul, Korea in March 2015. This event has been a chance of cultural exchange and mutual comprehension with elites around the world. Our topics were mostly politics and economy related.</p>\n      </div>\n    </ng-template> -->\n  </ngb-carousel>"

/***/ }),

/***/ "./src/app/hobby/hobby.component.ts":
/*!******************************************!*\
  !*** ./src/app/hobby/hobby.component.ts ***!
  \******************************************/
/*! exports provided: HobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbyComponent", function() { return HobbyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HobbyComponent = /** @class */ (function () {
    function HobbyComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    HobbyComponent.prototype.ngOnInit = function () {
    };
    HobbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hobby',
            template: __webpack_require__(/*! ./hobby.component.html */ "./src/app/hobby/hobby.component.html"),
            styles: [__webpack_require__(/*! ./hobby.component.css */ "./src/app/hobby/hobby.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HobbyComponent);
    return HobbyComponent;
}());



/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.css":
/*!***************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.html":
/*!****************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>\n    <i [class]=\"sections[section]['icon']\" aria-hidden=\"true\"></i>\n    <span *ngIf=\"language === 'en'\">{{ sections[section]['headEnglish'] }}</span>\n    <span *ngIf=\"language === 'ch'\">{{ sections[section]['headChinese'] }}</span>\n  </h1>\n</div>\n\n"

/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.ts ***!
  \**************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent() {
        this.sections = {
            'work': {
                'icon': 'fa fa-briefcase fa-1x',
                'headEnglish': 'Work Experience',
                'headChinese': '工作經驗',
            },
            'education': {
                'icon': 'fa fa-university fa-1x',
                'headEnglish': 'Education',
                'headChinese': '學歷',
            },
            'projects': {
                'icon': 'fa fa-laptop fa-1x',
                'headEnglish': 'Projects',
                'headChinese': '專題',
            },
            'skills': {
                'icon': 'fa fa-thumbs-o-up fa-1x',
                'headEnglish': 'Skills',
                'headChinese': '專業技能',
            },
            // 'biography': {
            //   'icon': 'fa fa-pencil fa-1x',
            //   'headEnglish': 'Biography',
            //   'headChinese': '自傳',
            // },
            'hobbies': {
                'icon': 'fa fa-paper-plane-o fa-1x',
                'headEnglish': 'Hobbies',
                'headChinese': '嗜好',
            },
        };
    }
    JumbotronComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], JumbotronComponent.prototype, "section", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], JumbotronComponent.prototype, "language", void 0);
    JumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jumbotron',
            template: __webpack_require__(/*! ./jumbotron.component.html */ "./src/app/jumbotron/jumbotron.component.html"),
            styles: [__webpack_require__(/*! ./jumbotron.component.css */ "./src/app/jumbotron/jumbotron.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JumbotronComponent);
    return JumbotronComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\" *ngIf=\"language === 'en'\">{{ nameEnglish }}</a>\n  <a class=\"navbar-brand\" href=\"#\" *ngIf=\"language === 'ch'\">{{ nameChinese }}</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\" *ngIf=\"language === 'en'\">\n      <li class=\"nav-item\" *ngFor=\"let category of categoriesEnglish; let i = index\">\n        <a class=\"nav-link\" [href]=\"href[i]\">{{ category }}</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\" *ngIf=\"language === 'ch'\">\n      <li class=\"nav-item\" *ngFor=\"let category of categoriesChinese; let i = index\">\n        <a class=\"nav-link\" [href]=\"href[i]\">{{ category }}</a>\n      </li>\n    </ul>\n  </div>\n  <button *ngIf=\"language === 'en'\" class=\"btn btn-primary\" (click)=\"setChinese()\">中文</button>\n  <button *ngIf=\"language === 'ch'\" class=\"btn btn-primary\" (click)=\"setEnglish()\">English</button>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.setLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nameEnglish = 'Ruby Hsu';
        this.nameChinese = '許予晴';
        this.href = [
            '#work',
            '#education',
            '#projects',
            '#skills',
            '#biography',
            '#hobbies'
        ];
        this.categoriesEnglish = [
            'Work',
            'Education',
            'Projects',
            'Skills',
            // 'Biography',
            'Hobbies'
        ];
        this.categoriesChinese = [
            '工作經驗',
            '學歷',
            '專題',
            '專業技能',
            // '自傳',
            '嗜好'
        ];
    }
    NavbarComponent.prototype.newLanguage = function () {
        this.setLanguage.emit(this.language);
    };
    NavbarComponent.prototype.setEnglish = function () {
        this.language = 'en';
        this.newLanguage();
    };
    NavbarComponent.prototype.setChinese = function () {
        this.language = 'ch';
        this.newLanguage();
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavbarComponent.prototype, "language", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "setLanguage", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-link {\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.linkedin {\n    color: #0077B5;\n}\n\n.github {\n    color: black;\n}\n\n.youtube {\n    color: #ff0000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktbGluayB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGlua2VkaW4ge1xuICAgIGNvbG9yOiAjMDA3N0I1O1xufVxuXG4uZ2l0aHViIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi55b3V0dWJlIHtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">        \n  <div class=\"row\">\n    <div class=\"col-md-7\">\n      <div *ngIf=\"language === 'en'\">\n        <h1>{{ shortIntroEnglish }}</h1>\n        <p>{{ introEnglish }}</p>\n      </div>\n      <div *ngIf=\"language === 'ch'\">\n        <h1>{{ nameChinese }}</h1>\n        <h3>{{ shortIntroChinese }}</h3>\n        <p>{{ introChinese }}</p>\n      </div>\n      <p>{{ mobile }}</p>\n      <p>{{ email }}</p>\n      <p>\n        <a *ngFor=\"let link of links\" [class]=\"link['class']\" [href]=\"link['url']\" target=\"_blank\">\n            <i [class]=\"link['iconClass']\" aria-hidden=\"true\"></i>\n        </a>\n      </p>\n      \n      <p>\n        <!-- download resume -->\n        <a href=\"assets/YuChingHsuResume.pdf\" target=\"_blank\">\n            <button type=\"button\" class=\"btn btn-danger btn-lg\">\n                <i class=\"fa fa-download fa-1x\" aria-hidden=\"true\"></i>\n                Resume (PDF)\n            </button>\n        </a>\n      </p>\n    </div>\n    <div class=\"col-md-5\">\n      <img class=\"img-thumbnail\" src=\"assets/img/authorRuby.jpg\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.shortIntroEnglish = 'Software & Hardware Engineer in Utah';
        this.shortIntroChinese = '在猶他州的軟體 & 硬體工程師';
        this.introEnglish = 'Hi, I love music and coding. With 2 master degrees in both Computer Science and Electrical Engineering, I can build a robot, and develop any application run on the top. Enjoy!';
        this.introChinese = '';
        this.mobile = '+1 (801) 815-6372';
        this.email = 'yuching.hsu@utah.edu';
        this.links = [
            {
                'class': 'linkedin my-link',
                'url': 'https://www.linkedin.com/in/yuchinghsu',
                'iconClass': 'fa fa-linkedin fa-2x'
            }
            // ,
            // {
            //   'class': 'github my-link',
            //   'url': 'https://github.com/borkaehw',
            //   'iconClass': 'fa fa-github fa-2x'
            // },
            // {
            //   'class': 'youtube my-link',
            //   'url': 'https://www.youtube.com/channel/UCF0isvgYaaTVXBtUihQNiUQ',
            //   'iconClass': 'fa fa-youtube fa-2x'
            // }
        ];
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfileComponent.prototype, "language", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-img {\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"project-img img-responsive\" [src]=\"projects.get(name).getProjectImgPath()\" alt=\"\">\n<h3>{{ projects.get(name).getTitle() }}</h3>\n<p>{{ projects.get(name).getDescription() }}</p>\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        this.projects = new Map();
        var p6 = new Project();
        var p5 = new Project();
        var p4 = new Project();
        var p3 = new Project();
        var p2 = new Project();
        var p1 = new Project();
        p6.setProjectImgPath('assets/img/project6-logo.png');
        p5.setProjectImgPath('assets/img/project5-logo.png');
        p4.setProjectImgPath('assets/img/project4-logo.png');
        p3.setProjectImgPath('assets/img/project3-logo.png');
        p2.setProjectImgPath('assets/img/project2-logo.png');
        p1.setProjectImgPath('assets/img/project1-logo.png');
        p1.setTitle('Image Quality Analysis Tool');
        p2.setTitle('Auto Recognition for Elevator Button with CNN');
        p3.setTitle('Paired Face Detection for Multi-Camera');
        p4.setTitle('Missing Migrants Data Visualization');
        p5.setTitle('Auto Recognition for Unmanned Store with Faster R-CNN');
        p6.setTitle('3D Computer Graphics for Combination Lock');
        p6.setDescription('Designed the combination lock by using 3D AutoCAD. At first, constructed the model of for each ring in the lock, and then designed the mechanism for bonding rings and the lock itself. Since the lock require both the inner and outer tenon-and-mortise structure, it has to be designed dedicatedly.');
        p5.setDescription('With only 6k samples, we have to distinguish items in 105 classes. Hence, to overcome the weakness of the small training dataset, we use multiple image preprocessing techniques to eliminate background noise as much as possible. Then, we designed an algorithm based on Faster R-CNN to identify the products.');
        p4.setDescription('Designed an interactive website to provide safer migration suggestion by visualizing routes. Firstly, to visualize a dataset, we first must do the data cleaning work to ensure the integrity of the data. Hence, we divided the dataset into two part, one is the map, another is for word cloud. To make the website more interesting, we create several interaction between different graph.');
        p3.setDescription('Besides the technique for human face detection, we added the upper body information to help identify the paired face in multi-camera. With analysis in feature comparison between different color spaces, and the calibration between different cameras, we can improve the accuracy in the detection of pairing face.');
        p2.setDescription('We designed the algorithm, which can localize (with 95.8% accuracy) and recognize (with 100% accuracy) the button with combining of PAC, KBC, TM, CNN and finally, SSIM. With the method, we can strengthen the robot indoor navigation ability.');
        p1.setDescription('Developed Logitech\'s internal analysis tool for image quality team to better control auto focus, auto white balance, auto exposure. Achieved real-time manipulation in video between hardware control and software visualization.');
        this.projects.set('p6', p6);
        this.projects.set('p5', p5);
        this.projects.set('p4', p4);
        this.projects.set('p3', p3);
        this.projects.set('p2', p2);
        this.projects.set('p1', p1);
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProjectComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProjectComponent.prototype, "language", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());

var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.setProjectImgPath = function (projectImgPath) {
        this.projectImgPath = projectImgPath;
    };
    Project.prototype.getProjectImgPath = function () {
        return this.projectImgPath;
    };
    Project.prototype.setTitle = function (title) {
        this.title = title;
    };
    Project.prototype.getTitle = function () {
        return this.title;
    };
    Project.prototype.setDescription = function (description) {
        this.description = description;
    };
    Project.prototype.getDescription = function () {
        return this.description;
    };
    return Project;
}());


/***/ }),

/***/ "./src/app/skill/skill.component.css":
/*!*******************************************!*\
  !*** ./src/app/skill/skill.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxsL3NraWxsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/skill/skill.component.html":
/*!********************************************!*\
  !*** ./src/app/skill/skill.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"service-item\">\n  <span class=\"fa-stack fa-4x\">\n    <i class=\"fa fa-circle fa-stack-2x\"></i>\n    <i [class]=\"skills.get(name).getSkillClass()\"></i>\n  </span>\n  <h3>{{ skills.get(name).getSkillTitle() }}</h3>\n  <p>{{ skills.get(name).getSkillItems() }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/skill/skill.component.ts":
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillComponent = /** @class */ (function () {
    function SkillComponent() {
        this.skills = new Map();
        var lang = new Skill();
        // let database = new Skill();
        var web = new Skill();
        var tool = new Skill();
        var library = new Skill();
        lang.setSkillClass('fa fa-code fa-stack-1x text-primary');
        library.setSkillClass('fa fa-database fa-stack-1x text-primary');
        web.setSkillClass('fa fa-cloud fa-stack-1x text-primary');
        tool.setSkillClass('fa fa-wrench fa-stack-1x text-primary');
        lang.setSkillTitle('Languages');
        library.setSkillTitle('DataBase');
        web.setSkillTitle('Web');
        tool.setSkillTitle('Tools');
        lang.setSkillItems('Python, C/C++, Javascript, Java, Matlab');
        library.setSkillItems('MongoDB');
        web.setSkillItems('HTML, CSS, D3, AngularJS, Bootstrap');
        tool.setSkillItems('OpenCV, Keras, Tensorflow, Git, MFC(visual studio), Galago');
        this.skills.set('lang', lang);
        this.skills.set('library', library);
        this.skills.set('web', web);
        this.skills.set('tool', tool);
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SkillComponent.prototype, "name", void 0);
    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skill',
            template: __webpack_require__(/*! ./skill.component.html */ "./src/app/skill/skill.component.html"),
            styles: [__webpack_require__(/*! ./skill.component.css */ "./src/app/skill/skill.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillComponent);
    return SkillComponent;
}());

var Skill = /** @class */ (function () {
    function Skill() {
    }
    Skill.prototype.setSkillClass = function (skillClass) {
        this.skillClass = skillClass;
    };
    Skill.prototype.getSkillClass = function () {
        return this.skillClass;
    };
    Skill.prototype.setSkillTitle = function (skillTitle) {
        this.skillTitle = skillTitle;
    };
    Skill.prototype.getSkillTitle = function () {
        return this.skillTitle;
    };
    Skill.prototype.setSkillItems = function (skillItems) {
        this.skillItems = skillItems;
    };
    Skill.prototype.getSkillItems = function () {
        return this.skillItems;
    };
    return Skill;
}());


/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    height: 100px;\n    margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>             \n  <img [src]=\"works.get(name).getOrgLogoPath()\">\n  <h2>{{ works.get(name).getOrgName() }}</h2>    \n  <p>{{ works.get(name).getOrgLocationString() }}</p>\n  <p>{{ works.get(name).getWorkPeriod() }}</p>\n  <p>{{ works.get(name).getDescription() }}</p>\n  <p *ngFor=\"let link of works.get(name).getLinks()\">\n    <a [href]=\"link['link']\" target=\"_blank\">{{ link['linkName'] }}</a>\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
        this.works = new Map();
        var logi = new Work();
        logi.setOrgLogoPath('assets/img/logitech-logo.png');
        logi.setOrgName('Logitech, Inc.');
        logi.setOrgLocation('Hsinchu', 'Taiwan', 'R.O.C');
        logi.setWorkPeriod('July 2018', 'September 2018');
        logi.setDescription(jobDescription['logi']);
        logi.setLinks('https://www.logitech.com/en-us', 'logitech.com');
        this.works.set('logi', logi);
        var itri = new Work();
        itri.setOrgLogoPath('assets/img/itri-logo.jpg');
        itri.setOrgName('Industrial Technology Research Institute (ITRI)');
        itri.setOrgLocation('Hsinchu', 'Taiwan', 'R.O.C');
        itri.setWorkPeriod('May 2016');
        itri.setDescription(jobDescription['itri']);
        itri.setLinks('https://www.if.itri.org.tw/', 'if.itri.org.tw');
        this.works.set('itri', itri);
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorkComponent.prototype, "name", void 0);
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());

var Work = /** @class */ (function () {
    function Work() {
        this.links = [];
    }
    Work.prototype.setOrgLogoPath = function (orgLogoPath) {
        this.orgLogoPath = orgLogoPath;
    };
    Work.prototype.getOrgLogoPath = function () {
        return this.orgLogoPath;
    };
    Work.prototype.setOrgName = function (orgName) {
        this.orgName = orgName;
    };
    Work.prototype.getOrgName = function () {
        return this.orgName;
    };
    Work.prototype.setOrgLocation = function (orgCity, orgState, orgCountry) {
        this.orgCity = orgCity;
        this.orgState = orgState;
        this.orgCountry = orgCountry;
    };
    Work.prototype.getOrgLocationString = function () {
        return this.orgCity + ", " + this.orgState + ", " + this.orgCountry;
    };
    Work.prototype.setWorkPeriod = function (startDate, endDate) {
        if (endDate === void 0) { endDate = 'Present'; }
        this.startDate = startDate;
        this.endDate = endDate;
    };
    Work.prototype.getWorkPeriod = function () {
        return this.startDate + " - " + this.endDate;
    };
    Work.prototype.setDescription = function (description) {
        this.description = description;
    };
    Work.prototype.getDescription = function () {
        return this.description;
    };
    Work.prototype.setLinks = function (link, linkName) {
        this.links.push({
            'link': link,
            'linkName': linkName
        });
    };
    Work.prototype.getLinks = function () {
        return this.links;
    };
    return Work;
}());
var jobDescription = {
    'logi': 'Developed Logitech’s internal analysis tool for image quality team to better control auto focus, auto white balance, auto exposure. Achieved real-time manipulation in video between hardware control and software visualization. Researched and developed computer vision algorithms centered around the human face detection.',
    'itri': 'Illustrator of the journal: Industry and Management Forum. I designed the cover and the journal paper illustrations to visualize the link between IT and image.'
    // 'clinc': 'I worked as a software engineer intern. Clinc is a startup in Ann Arbor, MI. their main focus is on personal financial assistant called Finie, which is a combination of \"Financial\" and \"Genie\". The reason why Finie is special is that people can use colloquial sentences to interact with Finie, even though there are some grammar mistakes or vague expressions in your sentences, Finie can understand it just like you are talking to a human being.<br>During the intern, I joined a project team called Finie for the Family. There are three major accomplishments for myself. The first one is building a monthly  budget tracking feature. Budgeting feature allows user to set a spending limit based either on certain categories or in general, it prevents users to overspend with next purchase. Besides creating a spending limit, users can modify their current amount or remove it. Finie can also give you spending advice based on the budget you have. The other similar is built on top of Finie, while we focused more on family assistant. Besides budgeting as a basic function, every family member could edit common shopping lists, or send notifications to family member. The last project is small but also exciting, I designed a web-app based chatbot to display the conversation between user and Finie.<br>Through out my intern, I used mostly Python as back-end language and Javascript as front-end language. Besides the feature designs as I mentioned above, I also had experience collecting crowd data by using Amazon Mechanical Turk, feeding data to machine learning model. For the back-end part, I used Django, an open source web framework written in Python, to interact with database.'
};


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

module.exports = __webpack_require__(/*! /Users/yu-chinghsu/Documents/Github/borkaehw.angular.portfolio/yuchinghsu-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map