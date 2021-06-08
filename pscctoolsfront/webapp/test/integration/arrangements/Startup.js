sap.ui.define(['sap/ui/test/Opa5'], function (Opa5) {
	'use strict'

	return Opa5.extend('pscctoolsfront.TsApp.test.integration.arrangements.Startup', {
		iStartMyApp: function () {
			this.iStartMyUIComponent({
				componentConfig: {
					name: 'pscctoolsfront.TsApp',
					async: true,
					manifest: true,
				},
			})
		},
	})
})
