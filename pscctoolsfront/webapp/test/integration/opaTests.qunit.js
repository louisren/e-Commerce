/* global QUnit */

QUnit.config.autostart = false

sap.ui.getCore().attachInit(function () {
	'use strict'

	sap.ui.require(['pscctoolsfront/TsApp/test/integration/BasicJourney'], function () {
		QUnit.start()
	})
})
