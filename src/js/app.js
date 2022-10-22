import showPopover from './popover';

const btnEl = document.getElementById('btn');

document.addEventListener('click', (evt) => showPopover(evt, btnEl));
