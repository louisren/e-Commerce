sap.ui.define(
	['sap/uxap/BlockBase'],
	function (BlockBase) {
		'use strict'

		const BlockOpenRequests = BlockBase.extend('pscctoolsfront.TsApp.view.blocks.main.BlockOpenRequests', {
			metadata: {},

			onToggleCollaborations: function (oEvent) {},
		})
		return BlockOpenRequests
	},
	true
)
