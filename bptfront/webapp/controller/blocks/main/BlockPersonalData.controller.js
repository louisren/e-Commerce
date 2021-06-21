sap.ui.define([
    'bptfront/TsApp/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/ui/core/format/DateFormat',
    'sap/ui/core/Fragment',
], function (BaseController, JSONModel, DateFormat, Fragment) {
    'use strict';
    class BlockPersonalData extends BaseController {
        constructor() {
            // it's important to call the extend method here. It creates metadata that is used in UI5 apps via
            // the method getMetadata. Hence we also assign this method to the prototype of our class.
            const fnClass = BaseController.extend('bptfront.TsApp.controller.BlockPersonalData', {});
            BlockPersonalData.prototype.getMetadata = fnClass.prototype.getMetadata;
            super('bptfront.TsApp.controller.BlockPersonalData');
        }
        onInit() {
            // @ts-ignore
            this.getView().setModel(this.getOwnerComponent().getMainModel());
            this.getView().bindObject({ path: '/userData' });
        }
        /**
         * Grouping Funktion. Die Rollentabelle wollen wir nach der appId gruppieren
         * @param oCtx
         */
        getGroup(oCtx) {
            return oCtx.getProperty('appId');
        }
    }
    return BlockPersonalData;
});
//# sourceMappingURL=BlockPersonalData.controller.js.map