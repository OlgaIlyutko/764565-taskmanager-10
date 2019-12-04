const TASK_COUNT = 3;

import {createBoardTemplate} from './components/board.js';
import {createSiteFilterTemplate} from './components/filter.js';
import {createLoadButtonTemplate} from './components/load-more-button.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createTaskTemplate} from './components/task.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);
render(siteHeaderElement, createSiteMenuTemplate());
const filters = generateFilters();
render(siteMainElement, createSiteFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_COUNT);
render(taskListElement, createTaskEditTemplate(tasks[0]));
tasks.slice(1).forEach((task) => render(taskListElement, createTaskTemplate(task)));

render(taskListElement, createLoadButtonTemplate(), `afterend`);
