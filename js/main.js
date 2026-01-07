import { DATA } from './data.js';
import { state, loadProgress, loadSchedule, saveSchedule } from './state.js';
import { $, $$, escapeHtml } from './helpers.js';
import { buildModules } from './modules.js';
import { makeCard } from './cards.js';

// grab DOM elements
const pageRoot = $('#page-root');
const leftPanel = $('#left-panel');
const navItems = Array.from($$('.nav-item'));
const moduleListEl = $('#module-list');
const globalSearch = $('#global-search');

// then you can copy the rest of your SPA rendering, navigation, afterRender, viewers, etc.
// just replace inline DATA references with the imported `DATA`
// replace progress/schedule calls with `loadProgress()`, `loadSchedule()`, `saveSchedule()` from state.js
// and card generation with `makeCard(item)`
