import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ResepiService } from '../../services/resepi.service';
let ResepiListPage = class ResepiListPage {
    constructor(resepiService) {
        this.resepiService = resepiService;
    }
    ngOnInit() {
        this.resepis = this.resepiService.getIdeas();
    }
};
ResepiListPage = tslib_1.__decorate([
    Component({
        selector: 'app-resepi-list',
        templateUrl: './resepi-list.page.html',
        styleUrls: ['./resepi-list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ResepiService])
], ResepiListPage);
export { ResepiListPage };
//# sourceMappingURL=resepi-list.page.js.map