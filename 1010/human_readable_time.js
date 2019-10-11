function humanReadable(seconds) {
	let time = {
		hours: Math.floor(seconds / 3600),
		minutes: Math.floor((seconds % 3600) / 60),
		sec: seconds % 60
	};
	let form = "x:x:x";

	for (var element in time) {
		if (time[element] < 10) form = form.replace("x", `0${time[element]}`);
		else form = form.replace("x", time[element]);
	}
	return form;
}
