sap.ui.define(
	[
		'sap/ui/test/Opa5',
		'pscctoolsfront/TsApp/test/integration/arrangements/Startup',
		'pscctoolsfront/TsApp/test/integration/BasicJourney',
	],
	function (Opa5, Startup) {
		'use strict'

		Opa5.extendConfig({
			arrangements: new Startup(),
			pollingInterval: 1,
		})
	}
)
