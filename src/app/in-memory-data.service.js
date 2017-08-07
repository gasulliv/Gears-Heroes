"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 0, firstlastname: 'Marcus Fenix' },
            { id: 1, firstlastname: 'Domonic Santiago' },
            { id: 2, firstlastname: 'Damon Baird' },
            { id: 3, firstlastname: 'Augustus Cole' },
            { id: 4, firstlastname: 'Anya Stroud' },
            { id: 5, firstlastname: 'Sam Byrne' },
            { id: 6, firstlastname: 'James Domonic Fenix' },
            { id: 7, firstlastname: 'Delmont Walker' },
            { id: 8, firstlastname: 'Kait Diaz' },
            { id: 9, firstlastname: 'Reyna Diaz' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map