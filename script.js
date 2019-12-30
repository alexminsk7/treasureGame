// получаем случайное число
var getRandomNumber = function (size) {
	return Math.floor(Math.random() * size);
};

// вычисляем расстояние от клика(event) до клада(target)
var getDistance = function (event, target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// строка подсказки
var getDistanceHint = function (distance) {
	if (distance < 10) {
		return "Fire!";
	} else if (distance < 20) {
		return "Really hot!";
	} else if (distance < 40) {
		return "Hot!";
	} else if (distance < 80) {
		return "Warm!";
	} else if (distance < 160) {
		return "Cold!";
	} else if (distance < 320) {
		return "Too cold!";
	} else if (distance < 640) {
		return "Really cold BRRRRR!"
	} else {
		return "U are getting Ice!";
	}
};

// создаем переменные
var width = 500;
var height = 500;
var clicks = 0;
var clickLimit = 20;

// случайная позиция клада
var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

// обработчик кликов
$("#map").click(function (event) {
	clicks++;

	if (clicks > clickLimit) {
		alert('GAME OVER!');
		return;
	}

	// получаем расстояние от места клика до клада
	var distance = getDistance(event, target);

	// преобразуем расстояние в подсказку
	var distanceHint = getDistanceHint(distance);

	// записываем в элемент #distance новую подсказку
	$("#distance").text(distanceHint);

	// отображаем количество оставшихся кликов
	$("#clicks-remaining").text(clickLimit - clicks);

	// поздравляем с победой, если клик был рядом
	if (distance < 8) {
		alert('Клад найден! Сделано кликов: ' + clicks);
	}
});