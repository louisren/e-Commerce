sap.ui.define(
	[
		'sap/ui/test/Opa5',
		'de/typescript/fiori3/TsApp/test/integration/arrangements/Startup',
		'de/typescript/fiori3/TsApp/test/integration/BasicJourney',
	],
	function (Opa5, Startup) {
		'use strict'

		Opa5.extendConfig({
			arrangements: new Startup(),
			pollingInterval: 1,
		})
	}
)
