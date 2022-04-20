


function Timer(obj)
{
	this.path = obj;
	this.minutes = 0;
	this.seconds = 1;
	this.timerId;
}

Timer.prototype.start = function () {
	this.path.innerText = "00:00";
	this.timerId = setInterval(()=>{
		if(this.seconds===60){this.minutes++; this.seconds = 0;}

	 this.path.innerText = ((this.minutes<10)? "0" + String(this.minutes): String(this.minutes)) + ":" + ((this.seconds<10)? "0" + String(this.seconds): String(this.seconds));
	this.seconds++; 
	}, 1000);
}

Timer.prototype.pause = function()
{
	clearInterval(this.timerId);
}

Timer.prototype.stop = function()
{
	clearInterval(this.timerId);
	this.path.innerText = "00:00";
	this.minutes = 0;
	this.seconds = 1;
}


















 function timerHandler()
{	
	if(seconds===60){minutes++; seconds = 0;}

	currentTime = timerText.innerText = ((minutes<10)? "0" + String(minutes): String(minutes)) + ":" + ((seconds<10)? "0" + String(seconds): String(seconds));
	seconds++; 
}

function stopTimer()
{
	clearInterval(timerId);
}

// function start()
// {
// 		timerId = setInterval(()=>{
// 		if(seconds===60){minutes++; seconds = 0;}

// 	 path = currentTime = ((minutes<10)? "0" + String(minutes): String(minutes)) + ":" + ((seconds<10)? "0" + String(seconds): String(seconds));
// 	seconds++; 
// 	}, 1000);
// }
// function pause()
// {
// 	clearInterval(timerId);
// 	// currentTime
// }