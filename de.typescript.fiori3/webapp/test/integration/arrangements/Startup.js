sap.ui.define(['sap/ui/test/Opa5'], function (Opa5) {
	'use strict'

	return Opa5.extend('de.typescript.fiori3.TsApp.test.integration.arrangements.Startup', {
		iStartMyApp: function () {
			this.iStartMyUIComponent({
				componentConfig: {
					name: 'de.typescript.fiori3.TsApp',
					async: true,
					manifest: true,
				},
			})
		},
	})
})
