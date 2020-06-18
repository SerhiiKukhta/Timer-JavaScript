document.addEventListener('DOMContentLoaded', function() {
	'use strict';
	let deadline = '2020-08-30';

	function getTimeRemaining(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/1000/60/60) % 24),
			days = Math.floor(t/1000/60/60/24);
			return {
				'total' : t,
				'seconds' : seconds,
				'minutes' : minutes,
				'hours' : hours,
				'days' : days
			};
	}

	function setTime(id, endline) {
		let timerBlock = document.getElementById(id),
			secondsBlock = timerBlock.querySelector('.seconds'),
			minutesBlock = timerBlock.querySelector('.minutes'),
			hoursBlock = timerBlock.querySelector('.hours'),
			daysBlock = timerBlock.querySelector('.days'),
			timerFunc = setInterval(updateTime, 1000);

			function updateTime() {
				let t = getTimeRemaining(endline);

				function addZero(num){
                        if(num < 10) {
                            return '0' + num;
                        } else { return num; }
                    }

				secondsBlock.textContent = addZero(t.seconds);
				minutesBlock.textContent = addZero(t.minutes);
				hoursBlock.textContent = addZero(t.hours);
				daysBlock.textContent = addZero(t.days);

				if(t.total <= 0) {
					clearInterval(timerFunc);
					secondsBlock.textContent = '00';
					minutesBlock.textContent = '00';
					hoursBlock.textContent = '00';

				}
			}
	}

	setTime('timer', deadline);
});