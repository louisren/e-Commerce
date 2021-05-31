sap.ui.define(['sap/ui/model/json/JSONModel', 'sap/ui/Device'], function (JSONModel, Device) {
    'use strict';
    return {
        createDeviceModel: function () {
            const oModel = new JSONModel(Device, false);
            oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            return oModel;
        },
    };
});
//# sourceMappingURL=models.js.map