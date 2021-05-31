sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History',
    'de/typescript/fiori3/TsApp/Component',
    'sap/ui/model/json/JSONModel',
], function (Controller, History, Component, JSONModel) {
    'use strict';
    class BaseController extends Controller {
        constructor() {
            // it's important to call the extend method here. It creates metadata that is used in UI5 apps via
            // the method getMetadata. Hence we also assign this method to the prototype of our class.
            const fnClass = Controller.extend('de.typescript.fiori3.TsApp.controller.BaseController', {});
            BaseController.prototype.getMetadata = fnClass.prototype.getMetadata;
            super('de.typescript.fiori3.TsApp.controller.BaseController');
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onInit() { }
        getOwnerAppComponent() {
            // this double cast is weired but is documented here: https://basarat.gitbooks.io/typescript/docs/types/type-assertion.html
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const comp = this.getOwnerComponent();
            return comp;
        }
        /**
         * get the Router for this view
         *
         * @returns {*}
         * @memberof BaseController
         */
        getRouter() {
            return Component.getRouterFor(this);
        }
        getModel(sName) {
            if (sName) {
                return this.getView().getModel(sName);
            }
            else {
                return this.getView().getModel();
            }
        }
        getResourceBundle() {
            return this.getOwnerAppComponent().getModel('i18n').getResourceBundle();
        }
        /**
         * Displays a Message in a StripToaster. Convinience method that just calls the same named metho
         * in the OwnerComponent
         *
         * @param {string} msg
         * @param {sap.ui.core.MessageType} type
         * @memberof Component
         */
        displayMessage(msg, type) {
            this.getOwnerAppComponent().displayMessage(msg, type);
        }
        onNavBack() {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            }
            else {
                this.getRouter().navTo('RouteMain', {}, true /*no history*/);
            }
        }
        /**
         * Formatter für den Titel einer Tabelle. Der Formatter ermittelt die Anzahl Einträge in der Tabelle
         * @param list Liste der Einträge in der Tabelle
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatTableCount(list) {
            if (list) {
                return list.length;
            }
            else {
                return 0;
            }
        }
    }
    return BaseController;
});
//# sourceMappingURL=BaseController.js.map