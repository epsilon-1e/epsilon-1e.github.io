export const state = {
  page: 'epsilon',
  filters: { types: new Set(['lesson','quiz','video','meeting']), modules: new Set(), q: '' }
};

const LS_PROGRESS = 'eps_progress_v1';
const LS_SCHEDULE = 'eps_schedule_v1';

export function loadProgress(){ try{return JSON.parse(localStorage.getItem(LS_PROGRESS))||{}}catch{return{}} }
export function saveProgress(o){ try{ localStorage.setItem(LS_PROGRESS, JSON.stringify(o)); }catch{} }

export function loadSchedule(){ try{return JSON.parse(localStorage.getItem(LS_SCHEDULE))||[]}catch{return[]} }
export function saveSchedule(a){ try{ localStorage.setItem(LS_SCHEDULE, JSON.stringify(a)); }catch{} }
