const TASK_COUNT = 3;

import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSiteFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createTaskTemplate} from './components/task.js';
import {createLoadButtonTemplate} from './components/load-more-button.js';
import {createTaskEditTemplate} from './components/task-edit.js';


const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);
render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createSiteFilterTemplate());
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate());

Array.from({length: TASK_COUNT}, () => render(taskListElement, createTaskTemplate()));

render(taskListElement, createLoadButtonTemplate(), `afterend`);
