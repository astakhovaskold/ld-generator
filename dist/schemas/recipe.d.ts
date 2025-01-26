import {Base} from './base';

/**
 * Schema for a recipe.
 *
 * @typedef {Object} RecipeScheme
 * @extends {Base}
 */
export interface RecipeIngredient {
    ingredientName: string;
}

export interface RecipeInstructions {
    stepDescription: string;
}

export interface Recipe extends Base {
    '@type': 'Recipe';
    name: string;
    recipeYield?: string;
    recipeIngredient?: Array<RecipeIngredient>;
    recipeInstructions?: Array<RecipeInstructions>;
}

export declare function recipeSchema(recipe: Omit<Recipe, '@context' | '@type'>): Recipe;

//# sourceMappingURL=recipe.d.ts.map
