import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
let IdeaListPage = class IdeaListPage {
    constructor(ideaService) {
        this.ideaService = ideaService;
    }
    ngOnInit() {
        this.ideas = this.ideaService.getIdeas();
    }
};
IdeaListPage = tslib_1.__decorate([
    Component({
        selector: 'app-idea-list',
        templateUrl: './idea-list.page.html',
        styleUrls: ['./idea-list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [IdeaService])
], IdeaListPage);
export { IdeaListPage };
//# sourceMappingURL=idea-list.page.js.map