const buttons = document.querySelectorAll('button');
		
//button.onclick = function() {
	
//};

const onButtonClick = event => {
//	event.target.disabled = true;
	console.log(event);
};

const anotherButtonClickHandler = () => {
	console.log('this was clicked!');
};

//button.onclick = onButtonClick;
//button.onclick = anotherButtonClickHandler;
		
const boundFn = onButtonClick.bind(this);
		
//button.addEventListener('click', onButtonClick);

//setTimeout(() => {
//		button.removeEventListener('click', onButtonClick);
//}, 2000);

buttons.forEach(btn => {
	btn.addEventListener('mouseenter', onButtonClick);
});