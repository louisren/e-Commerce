sap.ui.define([
    'de/typescript/fiori3/TsApp/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/ui/core/format/DateFormat',
    'sap/ui/core/Fragment',
    'de/typescript/fiori3/TsApp/formatter/formatter',
], function (BaseController, JSONModel, DateFormat, Fragment, Formatter) {
    'use strict';
    let LinkTargets;
    (function (LinkTargets) {
        LinkTargets["HOMEPAGE"] = "homepage";
    })(LinkTargets || (LinkTargets = {}));
    class Main extends BaseController {
        constructor() {
            // it's important to call the extend method here. It creates metadata that is used in UI5 apps via
            // the method getMetadata. Hence we also assign this method to the prototype of our class.
            const fnClass = BaseController.extend('de.typescript.fiori3.TsApp.controller.Main', {});
            Main.prototype.getMetadata = fnClass.prototype.getMetadata;
            super('de.typescript.fiori3.TsApp.controller.Main');
        }
        onInit() {
            this.formatter = new Formatter();
            this.getView().setModel(new JSONModel({
                breadcrumbs: {
                    currentText: this.getResourceBundle().getText('breadcrumb.page.main.title'),
                    links: [
                        {
                            text: this.getResourceBundle().getText('page.homepage'),
                            linkTarget: LinkTargets.HOMEPAGE,
                        },
                    ],
                },
                showObjectPage: false,
                userList: [],
            }, false), 'viewModel');
            // this.getView().setModel(this.getOwnerAppComponent().getMainModel())
            this.getView().setModel(this.getOwnerAppComponent().getMainModel());
            const oRouter = this.getRouter();
            const oTarget = oRouter.getTarget('TargetMain');
            oTarget.attachDisplay(this._handleDisplay.bind(this));
        }
        /**
         * This eventhandler retrieves data that was sent from the calling view. This data is
         * e.g. the target from which this view was caled, the email address and the current appId.
         * @param oEvent
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _handleDisplay(oEvent) {
            this.getView().bindObject({ path: '/' });
            this.byId('idSearchField').focus({ preventScroll: false });
        }
        onAfterRendering() {
            this.byId('idSearchField').focus({ preventScroll: false });
        }
        /**
         * Eventhandler für das Press Event der Breadcrumb links
         * Jeder breadcrumb link hat eine custom property linkTarget, die hier ausgewertet wird, daraufhin
         * navigieren zu können.
         * @param oEvent
         */
        onBreadcrumbLinkPress(oEvent) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            const linkTarget = oEvent.getSource().data('linkTarget');
            switch (linkTarget) {
                case LinkTargets.HOMEPAGE:
                    window.location.href = 'https://service.myapp.de';
                    break;
            }
        }
        async onSuggest(oEvent) {
            const value = oEvent.getParameter('suggestValue');
            try {
                // yyy
                const userList = await this.getOwnerAppComponent().getUserList(value);
                this.getModel('viewModel').setProperty('/userList', userList);
                this.byId('idSearchField').suggest(true);
            }
            catch (err) {
                this.getOwnerAppComponent().displayMessage(err);
                this.getModel('viewModel').setProperty('/showObjectPage', false);
            }
        }
        async onSearch(oEvent) {
            const key = oEvent.getParameter('query');
            if (key && key !== '') {
                try {
                    // zzz
                    //const uhdUserData = await this.getOwnerAppComponent().getUserData(key)
                    const uhdUserData = await this.getOwnerAppComponent().getUserData(key);
                    this.getOwnerAppComponent().getMainModel().setProperty('/userData', uhdUserData.userData);
                    this.getOwnerAppComponent().getMainModel().setProperty('/openRequests', uhdUserData.openRequests);
                    this.getOwnerAppComponent().getMainModel().setProperty('/roles', uhdUserData.roles);
                    this.getOwnerAppComponent().getMainModel().setProperty('/ldap', uhdUserData.ldap);
                    this.getOwnerAppComponent().getMainModel().setProperty('/registration', uhdUserData.registration);
                    this.getModel('viewModel').setProperty('/showObjectPage', true);
                }
                catch (err) {
                    this.getOwnerAppComponent().displayMessage(err);
                }
            }
        }
        formatCreateDate(date) {
            return this.formatter.formatCreateDate(date);
        }
    }
    return Main;
});
//# sourceMappingURL=Main.controller.js.map