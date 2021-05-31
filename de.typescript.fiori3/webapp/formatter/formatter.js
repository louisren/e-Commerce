sap.ui.define(['sap/ui/core/format/DateFormat', 'sap/base/Log'], function (DateFormat, Log) {
    'use strict';
    class Formatter {
        constructor() { }
        formatCreateDate(date) {
            if (date) {
                if (date.getTime() === new Date(0).getTime()) {
                    return '----';
                }
                else {
                    return DateFormat.getDateTimeInstance().format(date, false);
                }
            }
            else {
                return '';
            }
        }
    }
    return Formatter;
});
//# sourceMappingURL=formatter.js.map