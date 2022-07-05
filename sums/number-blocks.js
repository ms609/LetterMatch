"use strict";

const _ = 0;

const i0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


// One 
const hidden1 = [
 _, _, _,
 _, _, _,
 _, _, _,
 _, _, _,
 _, _, _, 1];
         
const i1 = [
 _, _, _,
 _, _, _,
 _, _, _,
 _, _, _,
 _, 1, _];

const i1_1 = [
  _, _, _,
  _, _, _,
  _, _, _,
  _, 1, _,
  _, _, _];
  
const i1_2 = [
  _, _, _,
  _, _, _,
  _, 1, _,
  _, _, _,
  _, _, _];

const i1_3 = [
  _, _, _,
  _, 1, _,
  _, _, _,
  _, _, _,
  _, _, _];

const i1_4 = [
  _, 1, _,
  _, _, _,
  _, _, _,
  _, _, _,
  _, _, _];

// Two

const hidden2 = [
 _, _, _,
 _, _, _,
 _, _, _,
 _, _, _,
 _, _, _, 2, 2];

const _2 = [
  _, _, _,
  _, _, _,
  _, _, _,
  _, _, _,
  2, 2, _];
  
const _2_2 = [
  _, _, _,
  _, _, _,
  2, 2, _,
  _, _, _,
  _, _, _];

const i2 = [
  _, _, _,
  _, _, _,
  _, _, _,
  _, 2, _,
  _, 2, _];
          
const i2_1 = [
  _, _, _,
  _, _, _,
  _, 2, _,
  _, 2, _,
  _, _, _];
  
const i2_3 = [
  _, 2, _,
  _, 2, _,
  _, _, _,
  _, _, _,
  _, _, _];

// Three     
const h3 = [
  _, _, _,
  _, _, _,
  _, _, _,
  _, 3, _,
  3, 3, _];
  
const h3_3 = [
  _, 3, _,
  3, 3, _,
  _, _, _,
  _, _, _,
  _, _, _];
  
const i3 = [
  _, _, _,
  _, _, _,
  _, 3, _,
  _, 3, _,
  _, 3, _];
          
const i3_1 = [
  _, _, _,
  _, 3, _,
  _, 3, _,
  _, 3, _,
  _, _, _];
  
const i3_2 = [
  _, 3, _,
  _, 3, _,
  _, 3, _,
  _, _, _,
  _, _, _];
          
const i3_i2 = [
  _, _, _,
  _, _, _,
  _, 1, _,
  _, 2, _,
  _, 2, _];

const l3 = [
  _, _, _,
  _, _, _,
  _, _, _,
  3, _, _,
  3, 3, _];


const r3 = [
  _, _, _,
  _, _, _,
  _, _, _,
  3, 3, _,
  3, _, _];


// Four        
const i4 = [
  _, _, _,
  _, 4, _,
  _, 4, _,
  _, 4, _,
  _, 4, _];  
  
const i4_1 = [
  _, 4, _,
  _, 4, _,
  _, 4, _,
  _, 4, _,
  _, _, _];  
          
const sq4 = [
  _, _, _,
  _, _, _,
  _, _, _,
  4, 4, _,
  4, 4, _];
  
const sq4_l3= [
  _, _, _,
  _, _, _,
  _, _, _,
  3, 1, _,
  3, 3, _];
  
const sq4_h3= [
  _, _, _,
  _, _, _,
  _, _, _,
  1, 3, _,
  3, 3, _];
  
const sq4_r3= [
  _, _, _,
  _, _, _,
  _, _, _,
  3, 3, _,
  3, 1, _];
  
const sq4_2 = [
  _, _, _,
  4, 4, _,
  4, 4, _,
  _, _, _,
  _, _, _];
  
// Five
const h5 = [
  _, _, _,
  _, _, _,
  _, 5, _,
  5, 5, _,
  5, 5, _];
  
const i5 = [
  _, 5, _,
  _, 5, _,
  _, 5, _,
  _, 5, _,
  _, 5, _];
  
const r5 = [
  _, _, _,
  _, _, _,
  5, 5, 5,
  5, _, _,
  5, _, _];
  
// Six
const rect6 = [
  _, _, _,
  _, _, _,
  6, 6, _,
  6, 6, _,
  6, 6, _];
  
const wide6 = [
  _, _, _,
  _, _, _,
  _, _, _,
  6, 6, 6,
  6, 6, 6];
  
// Seven
const b7 = [
  _, 7, _,
  _, 6, _,
  _, 5, _,
  3, 4, _,
  1, 2, _];
  
const d7 = [
  _, 7, _,
  _, 6, _,
  _, 5, _,
  _, 3, 4,
  _, 1, 2];
  
const dog7 = [
  _, _, _,
  _, _, _,
  _, _, 7,
  4, 5, 6,
  1, 2, 3];
  
const h7 = [
  _, _, _,
  _, 7, _,
  5, 6, _,
  3, 4, _,
  1, 2, _];
  
const h7_sq4 = [
  _, _, _,
  _, 3, _,
  3, 3, _,
  4, 4, _,
  4, 4, _];
  
const o7 = [
  _, _, _,
  _, _, _,
  4, 5, 6,
  3, _, 7,
  2, 1, _];
  
// Eight
const b8 = [
  8, _, _,
  8, _, _,
  8, 8, _,
  8, 8, _,
  8, 8, _];

const o8 = [
   _, _, _,
   _, _, _,
   8, 8, 8,
   8, _, 8, 
   8, 8, 8];

const rect8 = [
  _, _, _,
  8, 8, _,
  8, 8, _,
  8, 8, _,
  8, 8, _];


// Nine
const sq9 = [
  _, _, _,
  _, _, _,
  "9-top", "9-top", "9-top",
  9, 9, 9,
  "9-btm", "9-btm", "9-btm"];
const h9 = [
  _, "9-top", _,
  "9-top", "9-top", _,
  9, 9, _,
  "9-btm", 9, _,
  "9-btm", "9-btm", _];
  
           
// Ten
const rect10 = 
        [10, 10, _,
         10, 10, _,
         10, 10, _,
         10, 10, _,
         10, 10, _];
const h11 = 
        [10, 10, _,
         10, 10, _,
         10, 10, _,
         10, 10, _,
         10, 10, 1];
const rect12 = [ _,  _,  _,
              10, 10, 10,
              10,  2, 10,
              10,  2, 10,
              10, 10, 10];
