sap.ui.define([
    'de/typescript/fiori3/TsApp/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/ui/core/format/DateFormat',
    'sap/ui/core/Fragment',
    'de/typescript/fiori3/TsApp/formatter/formatter',
], function (BaseController, JSONModel, DateFormat, Fragment, Formatter) {
    'use strict';
    class BlockLDAP extends BaseController {
        constructor() {
            // it's important to call the extend method here. It creates metadata that is used in UI5 apps via
            // the method getMetadata. Hence we also assign this method to the prototype of our class.
            const fnClass = BaseController.extend('de.typescript.fiori3.TsApp.controller.BlockLDAP', {});
            BlockLDAP.prototype.getMetadata = fnClass.prototype.getMetadata;
            super('de.typescript.fiori3.TsApp.controller.BlockLDAP');
        }
        onInit() {
            this.formatter = new Formatter();
            // @ts-ignore
            this.getView().setModel(this.getOwnerComponent().getMainModel());
            this.getView().bindObject({ path: '/ldap' });
        }
        formatCreateDate(date) {
            return this.formatter.formatCreateDate(date);
        }
    }
    return BlockLDAP;
});
//# sourceMappingURL=BlockLDAP.controller.js.map