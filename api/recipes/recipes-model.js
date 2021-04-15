function getRecipeById(recipe_id){
    return Promise.resolve(`awesome recipe with ID ${recipe_id}`)
}

module.exports = {
    getRecipeById
}