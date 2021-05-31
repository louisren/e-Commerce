/** global Promise */
sap.ui.define(['de/typescript/fiori3/TsApp/localService/mockserver'], function (Mockserver) {
    'use strict';
    // initialize the mock server
    const mockserver = new Mockserver();
    mockserver.init();
    // initialize the embedded component on the HTML page
    sap.ui.require(['sap/ui/core/ComponentSupport']);
});
//# sourceMappingURL=initMockServer.js.map