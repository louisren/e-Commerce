sap.ui.define(['de/typescript/fiori3/TsApp/controller/BaseController', 'sap/ui/model/json/JSONModel'], function (Controller, JSONModel) {
    'use strict';
    class App extends Controller {
        constructor() {
            // it's important to call the extend method here. It creates metadata that is used in UI5 apps via
            // the method getMetadata. Hence we also assign this method to the prototype of our class.
            const fnClass = Controller.extend('de.typescript.fiori3.TsApp.controller.App', {});
            App.prototype.getMetadata = fnClass.prototype.getMetadata;
            super('de.typescript.fiori3.TsApp.controller.App');
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onInit() {
            // Load navigation bar data from local json file
            const jsonModel = new JSONModel({}, true);
            jsonModel.loadData('model/slidedata.json');
            this.getView().setModel(jsonModel, 'navslide');
        }
        onAfterRendering() {
            const resourceBundle = this.getOwnerComponent().getModel('i18n').getResourceBundle();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const text = resourceBundle.getText('title');
        }
    }
    return App;
});
//# sourceMappingURL=App.controller.js.map