app.service('heroesService', function () {
    this.getHeroes = function () {
        return heroes;
    };

    this.getHeroByID = function (heroID) {
        for (var i = 0; i < heroes.length; i++) {
            if (heroes[i].id === heroID) {
                return heroes[i];
            }
        }
        return null;
    }

    var heroes = [{ id: 11, name: "Mr. Nice", selected: false }, { id: 12, name: "Narco", selected: false },
    { id: 13, name: "Bombasto", selected: false }, { id: 14, name: "Celeritas", selected: false },
    { id: 15, name: "Magneta", selected: false }, { id: 16, name: "RuberrMan", selected: false },
    { id: 17, name: "Dynama", selected: false }, { id: 18, name: "Dr IQ", selected: false },
    { id: 19, name: "Magma", selected: false }, { id: 20, name: "Tornado", selected: false }
    ];
});