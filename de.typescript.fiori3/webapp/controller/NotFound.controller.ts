sap.ui.define(
	['de/typescript/fiori3/TsApp/controller/BaseController'],
	function (Controller: typeof de.typescript.fiori3.TsApp.controller.BaseController) {
		'use strict'

		class NotFound extends Controller {
			constructor() {
				// it's important to call the extend method here. It creates metadata that is used in UI5 apps via
				// the method getMetadata. Hence we also assign this method to the prototype of our class.
				const fnClass = Controller.extend('de.typescript.fiori3.TsApp.controller.NotFound', {})
				NotFound.prototype.getMetadata = fnClass.prototype.getMetadata

				super('de.typescript.fiori3.TsApp.controller.NotFound')
			}

			public onInit(): void {}
		}

		return NotFound
	}
)
