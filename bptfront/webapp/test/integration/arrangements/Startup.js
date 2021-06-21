sap.ui.define(['sap/ui/test/Opa5'], function (Opa5) {
	'use strict'

	return Opa5.extend('bptfront.TsApp.test.integration.arrangements.Startup', {
		iStartMyApp: function () {
			this.iStartMyUIComponent({
				componentConfig: {
					name: 'bptfront.TsApp',
					async: true,
					manifest: true,
				},
			})
		},
	})
})
