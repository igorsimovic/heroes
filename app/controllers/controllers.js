app.controller('HeroesController', function ($scope, heroesService) {
	console.log('HeroesController ACTIVE');

	$scope.heroes = heroesService.getHeroes();

	$scope.newHero = {
		id: null,
		name: ""
	};

	$scope.selectedHero = null;

	$scope.onSelect = function (hero) {
		//deselect on second click..not mandatory
		if ($scope.selectedHero && hero.id === $scope.selectedHero.id) {
			$scope.selectedHero = null;
		} else {
			$scope.selectedHero = hero;
		}
	}

	$scope.addHero = function (hero) {
		if (isEmpty(hero.name)) {//if(!name) or if(name === '')
			alert('Name is mandatory field!');
			return;
		}
		if (isDuplicate(hero.name)) {
			alert('Name must be unique!');
			return;
		}

		hero.id = getNextId();
		$scope.heroes.push(hero);

		$scope.newHero = {
			id: null,
			name: ""
		};
	}

	$scope.deleteHero = function (hero) {
		$scope.heroes.splice($scope.heroes.indexOf(hero), 1);
	}

	//
	function getNextId() {
		var max = 0;
		for (var i = 0; i < $scope.heroes.length; i++) {
			var currentHerro = $scope.heroes[i];
			if (currentHerro.id > max) {
				max = currentHerro.id;
			}
		}
		return max + 1;
	}

	function isEmpty(name) {
		if (!name) { //name === ''
			return true;
		} else {
			return false;
		}
	}

	function isDuplicate(name) {
		var res = false;
		$scope.heroes.forEach(function (hero) {
			if (hero.name.toUpperCase() === name.toUpperCase()) {
				res = true;
			}
		});

		return res;
	}
});


app.controller('HeroeDetailsController', function ($scope, $routeParams, heroesService) {
	$scope.hero = null;

	//uzimamo heroID iz url parametra        
	var heroID = 0;
	if(($routeParams.heroID !== null)){
		heroID = parseInt($routeParams.heroID);
	}

	//ako smo uspesno uzeli heroID, dovlacimo izabranog heroja iz servisa
	if(heroID !== 0){
		$scope.hero = heroesService.getHeroByID(heroID);
	}

});

