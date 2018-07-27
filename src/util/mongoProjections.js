module.exports = projectionFields => {
    return projectionFields.fieldNodes[0].selectionSet.selections
        .reduce((projections, selection)=> {
            projections[selection.name.value] = true
            return projections
        },{})
}