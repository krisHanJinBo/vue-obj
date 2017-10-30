// import * as fillzero from './fillzero';
import {fillzero} from './fillzero';
export const date=(time)=>{
  let d = new Date();
  d.setTime(time);
  return `${d.getFullYear()}年${fillzero(d.getMonth()+1)}月${d.getData()}日${d.getHours()}时${d.getMinutes()}分`;
};
