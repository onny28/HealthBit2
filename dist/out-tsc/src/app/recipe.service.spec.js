import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
describe('RecipeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(RecipeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=recipe.service.spec.js.map