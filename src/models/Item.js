export default class Item {
    constructor (entity) {
        Object.assign (this, {
            brand: 'No brand',
            title: 'No title',
            description: 'No description',
            descriptionFull: 'No description',
            price: 0,
            currency: '£'
        }, entity)
    }
}