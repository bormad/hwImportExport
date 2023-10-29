import getRandomColor from './util';

export default function initApp() {
	const body = document.querySelector('body');
	const btn = document.createElement('button');
	btn.className = 'button';
	btn.textContent = 'Изменить цвет страницы';
	btn.addEventListener('click', () => {
		body.style.backgroundColor = getRandomColor();
		console.log(getRandomColor());
	});
	body.append(btn);
}
