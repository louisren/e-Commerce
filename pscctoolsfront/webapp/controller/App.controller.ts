sap.ui.define(
	['pscctoolsfront/TsApp/controller/BaseController', 'sap/ui/model/json/JSONModel'],
	function (
		Controller: typeof pscctoolsfront.TsApp.controller.BaseController,
		JSONModel: typeof sap.ui.model.json.JSONModel
	) {
		'use strict'

		class App extends Controller {
			constructor() {
				// it's important to call the extend method here. It creates metadata that is used in UI5 apps via
				// the method getMetadata. Hence we also assign this method to the prototype of our class.
				const fnClass = Controller.extend('pscctoolsfront.TsApp.controller.App', {})
				App.prototype.getMetadata = fnClass.prototype.getMetadata

				super('pscctoolsfront.TsApp.controller.App')
			}

			// eslint-disable-next-line @typescript-eslint/no-empty-function
			public onInit(): void {
				// Load navigation bar data from local json file
				const jsonModel = new JSONModel({}, true)
				jsonModel.loadData('model/slidedata.json')
				this.getView().setModel(jsonModel, 'navslide')
			}

			onAfterRendering(): void {
				const resourceBundle = (this.getOwnerComponent().getModel(
					'i18n'
				) as sap.ui.model.resource.ResourceModel).getResourceBundle()
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const text: string = resourceBundle.getText('title')
			}
		}

		return App
	}
)
