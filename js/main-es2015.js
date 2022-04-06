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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<p-sidebar [(visible)]=\"display\">\n    <h1>Consulta de Unidade</h1>\n\n\n    <div class=\"ui-g\">\n        <div class=\"ui-g-12\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\">NÂº</span>\n                <p-autoComplete [(ngModel)]=\"inscricao\" field=\"inscricao\" [suggestions]=\"autocomplete\"\n                    (onSelect)=\"buscaLote($event)\" (completeMethod)=\"lotesAutocomplete($event)\"></p-autoComplete>\n\n            </div>\n        </div>\n    </div>\n\n\n    <!-- <div class=\"ui-g\">\n        <table class=\"tabela_informacoes\">\n            <thead>\n                <td>Campo</td>\n                <td>Valor</td>\n            </thead>\n            <tr>\n                <td>ID</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>InscriÃ§Ã£o</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Geolote</td>\n                <td></td>\n            </tr>\n        </table>\n    </div> -->\n\n\n\n\n</p-sidebar>\n\n<div id=\"map\">\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0px;\n}\n\n#map{\n    height: 100vh;\n    width: 100%;\n}\n\n.tabela_informacoes{\n    margin-top: 20px;\n    width: 100%\n}\n\n.tabela_informacoes thead{\n    font-weight: bold\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4jbWFwe1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJlbGFfaW5mb3JtYWNvZXN7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4udGFiZWxhX2luZm9ybWFjb2VzIHRoZWFke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'mapasigpmcl';
        this.inscricao = "";
        // Modal
        this.display = false;
    }
    // Maneira de conectar angular ao clique do botÃ£o personalizado
    onDocumentClicked(ev) {
        let classes = ev.path[0].classList;
        if (classes.contains('leaflet-control-custom')) {
            this.display = true;
        }
    }
    ngOnInit() {
        // Inicia o mapa definindo o centro na prefeitura de campo Largo
        //this.map = L.map('map',{drawControl: true}).setView(new L.LatLng(-25.4624371,-49.5193214), 13);
        this.map = L.map('map').setView(new L.LatLng(-25.4624371, -49.5193214), 13);
        this.map.on('baselayerchange', function (e) {
            console.log(e);
            this.map.fitBounds(e.layer);
        });
        let options = {
            position: "topleft"
        };
        L.Control.geocoder(options).addTo(this.map);
        // Adicionando o botÃ£o de janela
        this.botaoJanelaBusca();
        // Adicionando o botÃ£o do street View
        //this.botaoStreetView();
        // Se quiser carregar o menu de ediÃ§Ã£o
        //this.carregarMenuEdicao();
        // TILE LAYERS
        let tile_osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Â© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        let tile_gmaps = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
            attribution: 'Google Maps'
        });
        let tile_gsat = L.tileLayer('http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}', {
            attribution: 'Google satÃ©lite'
        });
        // Setando o google satÃ©lite como padrÃ£o
        tile_gsat.addTo(this.map);
        let baseLayers = {
            "Open Street Map": tile_osm,
            "Google Maps": tile_gmaps,
            "Google Satélite": tile_gsat
        };
        //L.control.layers(baseLayers).addTo(this.map);
        // FIM TILE LAYERS
        this.carregaLotes();
        this.carregaSeproms();
        this.carregaSCS();
        this.carregaApaRioVerde();
        this.carregaZoneamento();
        this.carregaApaPassauna();
        this.carregaHidrografiaLinhas();
        this.carregaHidrografiaPoligonos();
        let overlayLayers = {
            "Lotes": this.lotes,
            "Zoneamento": this.zoneamento,
            "Seproms": this.seproms,
            "SCS": this.scs,
            "Apa do Rio Verde": this.aparioverde,
            "Apa do Passaúna": this.apapassauna,
            "Hidrografia (linhas)": this.hidrografia_linhas,
            "Hidrografia (Polígonos)": this.hidrografia_pol
        };
        L.control.layers(baseLayers, overlayLayers, { position: 'bottomleft' }).addTo(this.map);
    }
    centralizarMapaCamada(camada) {
        this.map.fitBounds(camada);
    }
    // Adiciona o botÃ£o para abrir janela
    botaoJanelaBusca() {
        let ourCustomControl = L.Control.extend({
            options: {
                position: 'topleft'
                //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
            },
            onAdd: function (map) {
                var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom pi pi-window-maximize');
                container.style.backgroundColor = 'white';
                container.style.width = '34px';
                container.style.height = '34px';
                container.style.padding = '8px';
                return container;
            },
        });
        let custom = function (opts) {
            return new ourCustomControl(opts);
        };
        custom({ position: 'topleft' }).addTo(this.map);
    }
    // Adiciona o botÃ£o streetView
    botaoStreetView() {
        let ourCustomControl = L.Control.extend({
            options: {
                position: 'topleft'
                //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
            },
            onAdd: function (map) {
                var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control pi pi-map-marker');
                container.style.backgroundColor = 'white';
                container.style.width = '34px';
                container.style.height = '34px';
                container.style.padding = '8px';
                container.onclick = function () {
                    console.log('buttonClicked');
                };
                return container;
            },
        });
        let custom = function (opts) {
            return new ourCustomControl(opts);
        };
        custom({ position: 'topleft' }).addTo(this.map);
    }
    // Janela de busca de lote / Pessoa
    abreJanelaBusca() {
        this.display = true;
    }
    // Menu com ferramentas de ediÃ§Ã o para o mapa
    carregarMenuEdicao() {
        // BARRA DE OPÃ‡Ã•ES para ediÃ§Ã£o (travar para nÃ£o autenticados)
        var drawnItems = new L.FeatureGroup();
        this.map.addLayer(drawnItems);
        var drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        });
        this.map.addControl(drawControl);
        // Quando um objeto
        this.map.on(L.Draw.Event.CREATED, function (e) {
            let type = e.layerType;
            let layer = e.layer;
            if (type === 'marker') {
                // Do marker specific actions
            }
            // Do whatever else you need to. (save to db; add to map etc)
            drawnItems.addLayer(layer);
        });
        // FIM DA BARRA DE OPÃ‡Ã•ES
    }
    // MÃ©todo que carrega os lotes do municÃ­pio
    carregaLotes() {
        this.lotes = L.geoJSON();
        this.lotes.options = {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h1>' + feature.properties.f1 + '</h1><p>name: ' + feature.properties.f2 + '</p>');
                layer.setStyle({
                    weight: 1,
                    color: 'black',
                    fillColor: feature.properties.f3,
                    //dashArray: '',
                    fillOpacity: 0.5
                });
            }
        };
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/geojsonlotes').subscribe(data => { this.lotes.addData(data); }, error => { });
        //L.geoJSON(this.geojsonFeature).addTo(this.map);
    }
    // MÃ©todo que carrega os lotes do municÃ­pio
    carregaSeproms() {
        this.seproms = L.geoJSON();
        this.seproms.options = {
            onEachFeature: function (feature, layer) {
                //layer.bindPopup('<h1>' + feature.properties.f1 + '</h1><p>name: ' + feature.properties.f2 + '</p>');
                layer.setStyle({
                    weight: 1,
                    color: '#7f5f3f',
                    fillColor: feature.properties.f3,
                    //dashArray: '',
                    fillOpacity: 0.5,
                });
            }
        };
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/geojsonseproms').subscribe(data => { this.seproms.addData(data); }, error => { });
        //L.geoJSON(this.geojsonFeature).addTo(this.map);
    }
    carregaSCS() {
        this.scs = L.geoJSON();
        this.scs.options = {
            onEachFeature: function (feature, layer) {
                //layer.bindPopup('<h1>' + feature.properties.f1 + '</h1><p>name: ' + feature.properties.f2 + '</p>');
                layer.setStyle({
                    weight: 1,
                    color: '#ff00ff',
                    fillColor: feature.properties.f3,
                    //dashArray: '',
                    fillOpacity: 0.5,
                });
            }
        };
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/geojsonscs').subscribe(data => { this.scs.addData(data); }, error => { });
    }
    carregaHidrografiaLinhas() {
        this.hidrografia_linhas = L.geoJSON();
        this.hidrografia_linhas.options = {
            onEachFeature: function (feature, layer) {
                layer.setStyle({
                    weight: 1,
                    color: '#08298A',
                    fillColor: '#08298A',
                    //dashArray: '',
                    fillOpacity: 0.5,
                });
            }
        };
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/geohidrografialinhas').subscribe(data => { this.hidrografia_linhas.addData(data); }, error => { });
    }
    carregaHidrografiaPoligonos() {
        this.hidrografia_pol = L.geoJSON();
        this.hidrografia_pol.options = {
            onEachFeature: function (feature, layer) {
                layer.setStyle({
                    weight: 1,
                    color: '#2E9AFE',
                    fillColor: '#2E9AFE',
                    //dashArray: '',
                    fillOpacity: 0.5,
                });
            }
        };
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/geohidrografiapoligonos').subscribe(data => { this.hidrografia_pol.addData(data); }, error => { });
    }
    carregaApaRioVerde() {
        this.aparioverde = L.geoJSON();
        this.aparioverde.options = {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h1>' + feature.properties.f3 + '</h1><p>Nome: ' + feature.properties.f2 + '</p>');
                let c;
                switch (feature.properties.f3) {
                    case "0010-ZOO1":
                        c = "#fffc04";
                        break;
                    case "0010-ZOO2":
                        c = "#fffc04";
                        break;
                    case "0010-ZOO5":
                        c = "#fffc04";
                        break;
                    case "0045-CUE":
                        c = "#bb02f3";
                        break;
                    case "0045-ZCVS":
                        c = "#39a701";
                        break;
                    case "0045-ZOO I":
                        c = "#fffe07";
                        break;
                    case "0045-ZPFV":
                        c = "#02aa86";
                        break;
                    case "0045-ZPM":
                        c = "#f9ae00";
                        break;
                    case "0045-ZPRE":
                        c = "#00a688";
                        break;
                    case "0045-ZREP":
                        c = "#0051bc";
                        break;
                    case "0045-ZUA":
                        c = "#ffb9c1";
                        break;
                    case "0045-ZUC":
                        c = "#f70200";
                        break;
                    default:
                        c = "#fae0cf";
                        break;
                }
                layer.setStyle({
                    weight: 1,
                    color: 'black',
                    fillColor: c,
                    //dashArray: '',
                    fillOpacity: 0.5,
                });
            }
        };
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/geojsonaparioverde').subscribe(data => { this.aparioverde.addData(data); }, error => { });
    }
    carregaApaPassauna() {
        this.apapassauna = L.geoJSON();
        this.apapassauna.options = {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h1>' + feature.properties.f2 + '</h1>');
                let c;
                switch (feature.properties.f2.trim()) {
                    case "CEUT":
                        c = "#ff0101";
                        break;
                    case "CUE":
                        c = "#333333";
                        break;
                    case "Represa":
                        c = "#064572";
                        break;
                    case "ZCVS":
                        c = "#005030";
                        break;
                    case "ZOO":
                        c = "#fffe70";
                        break;
                    case "ZPAR":
                        c = "#96e801";
                        break;
                    case "ZPFV":
                        c = "#267400";
                        break;
                    case "ZPRE":
                        c = "#4a466f";
                        break;
                    case "ZUA":
                        c = "#ffbcba";
                        break;
                    case "ZUC1":
                        c = "#f60305";
                        break;
                    default:
                        c = "#000000";
                        break;
                }
                layer.setStyle({
                    weight: 1,
                    color: 'black',
                    fillColor: c,
                    //dashArray: '',
                    fillOpacity: 0.5,
                });
            }
        };
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/geojsonapadopassauna').subscribe(data => { this.apapassauna.addData(data); }, error => { });
    }
    carregaZoneamento() {
        this.zoneamento = L.geoJSON();
        this.zoneamento.options = {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h1>' + feature.properties.f2 + '</h1>');
                let c;
                switch (feature.properties.f2.trim()) {
                    case "APA-P - Zona da APA do Passauna":
                        c = "#2885e8";
                        break;
                    case "APA-RV - Zona da APA do Rio Verde":
                        c = "#67e72b";
                        break;
                    case "ZC - Zona Central":
                        c = "#a50000";
                        break;
                    case "ZGE - Zona de Grandes Equipamentos":
                        c = "#df7fff";
                        break;
                    case "ZI1 - Zona Industrial 1":
                        c = "#c0c0c0";
                        break;
                    case "ZI2 - Zona Industrial 2":
                        c = "#666666";
                        break;
                    case "ZIL1 - Zona de Influencia  Logistica 1":
                        c = "#52a5a5";
                        break;
                    case "ZIL2 - Zona de Influencia  Logistica 2":
                        c = "#007ca5";
                        break;
                    case "ZOI - Zona de Ocupacao Intensiva":
                        c = "#ff0000";
                        break;
                    case "ZOO1 - Zona de Ocupacao  Orientada 1":
                        c = "#ffc07f";
                        break;
                    case "ZOO2 - Zona de Ocupacao  Orientada 2":
                        c = "#ffdf7f";
                        break;
                    case "ZPA- Zona de Preservacao Ambiental":
                        c = "#7ca552";
                        break;
                    case "ZR1 - Zona Residencial 1":
                        c = "#ffff7f";
                        break;
                    case "ZR2 - Zona Residencial 2":
                        c = "#ffff00";
                        break;
                    case "ZR3 - Zona Residencial 3":
                        c = "#ff9200";
                        break;
                    case "ZUC1 - Zona de Urbanizacao Consolidada 1":
                        c = "#ff00bf";
                        break;
                    case "ZUC2 - Zona de Urbanizacao Consolidada 2":
                        c = "#ff7f9f";
                    default:
                        c = "#FFFFFF";
                        break;
                }
                layer.setStyle({
                    weight: 1,
                    color: 'black',
                    fillColor: c,
                    //dashArray: '',
                    fillOpacity: 0.5,
                });
            }
        };
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/geojsonzoneamento').subscribe(data => { this.zoneamento.addData(data); }, error => { });
    }
    // Autocomplete da inscriÃ§Ãµes dos lotes
    lotesAutocomplete(e) {
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/getinscricoesautocomplete?id=' + e.query).subscribe(data => { this.autocomplete = data; }, error => { });
    }
    // Busca um lote pela inscriÃ§Ã£o
    buscaLote(e) {
        if (this.loteBusca) {
            this.map.removeLayer(this.loteBusca);
        }
        this.loteBusca = L.geoJSON();
        this.loteBusca.clearLayers();
        this.loteBusca.options = {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h1>' + feature.properties.f1 + '</h1><p>InscriÃ§Ã£o: ' + feature.properties.f2 + '</p>');
                layer.setStyle({
                    weight: 1,
                    color: 'black',
                    fillColor: 'blue',
                    //dashArray: '',
                    fillOpacity: 0.5
                });
            }
        };
        this.http.get('https://cors-anywhere.herokuapp.com/http://apipmcl.campolargo.pr.gov.br/central/geo/geojsonlote?id=' + e.inscricao).subscribe(data => { this.loteBusca.addData(data), this.loteBusca.addTo(this.map), this.centralizarMapaCamada(this.loteBusca.getBounds()); }, error => { });
        this.inscricao = "";
        //this.display = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event"])
], AppComponent.prototype, "onDocumentClicked", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__);












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luizcardim/Documents/Desenvolvimento/angular/mapasigpmcl/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
