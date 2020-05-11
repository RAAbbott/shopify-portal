export default {
    convertToCamelCase(str) {
        const combined = str.split(' ').join('');
        return `${combined.charAt(0).toLowerCase()}${combined.slice(1)}`;
    },

    groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    },

    groupProducts(products, groupBy) {
        const grouped = this.groupBy(products, groupBy)
        const data = [];
        for (const group in grouped) {
            data.push({title: group, products: grouped[group]})
        }
        return data.sort((a, b) => (a.title > b.title) ? 1 : -1);
    },
}