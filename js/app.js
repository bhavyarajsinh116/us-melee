/* Melee Diamonds Complete Interactive Scripts & Data Backend */
(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Comprehensive Stock Database (Lab-Grown & Natural Diamonds)
  // --------------------------------------------------------------------------
  const stockDatabase = [
  {
    "shape": "Asscher",
    "mmSize": "3.00 x 3.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.17 ct",
    "carat": 0.17,
    "cert": "IGI",
    "lab": "IGI",
    "price": 170,
    "stock": "AS-3001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Asscher",
    "mmSize": "3.50 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.27 ct",
    "carat": 0.27,
    "cert": "IGI",
    "lab": "IGI",
    "price": 270,
    "stock": "AS-3501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Asscher",
    "mmSize": "4.00 x 4.00 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.40 ct",
    "carat": 0.4,
    "cert": "IGI",
    "lab": "IGI",
    "price": 400,
    "stock": "AS-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Asscher",
    "mmSize": "4.50 x 4.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.50 ct",
    "carat": 0.5,
    "cert": "IGI",
    "lab": "IGI",
    "price": 500,
    "stock": "AS-4501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Asscher",
    "mmSize": "5.00 x 5.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.70 ct",
    "carat": 0.7,
    "cert": "IGI",
    "lab": "IGI",
    "price": 790,
    "stock": "AS-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Asscher",
    "mmSize": "10.5 x 10.5 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "7.05 ct",
    "carat": 7.05,
    "cert": "IGI",
    "lab": "IGI",
    "price": 5600,
    "stock": "1049916",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Cushion",
    "mmSize": "4.00 x 2.80 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.20 ct",
    "carat": 0.2,
    "cert": "IGI",
    "lab": "IGI",
    "price": 210,
    "stock": "CU-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Cushion",
    "mmSize": "4.20 x 3.00 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.25 ct",
    "carat": 0.25,
    "cert": "IGI",
    "lab": "IGI",
    "price": 250,
    "stock": "CU-4201",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Cushion",
    "mmSize": "5.00 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.35 ct",
    "carat": 0.35,
    "cert": "IGI",
    "lab": "IGI",
    "price": 380,
    "stock": "CU-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Cushion",
    "mmSize": "5.50 x 3.50 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.40 ct",
    "carat": 0.4,
    "cert": "IGI",
    "lab": "IGI",
    "price": 460,
    "stock": "CU-5501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Cushion",
    "mmSize": "6.00 x 4.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.55 ct",
    "carat": 0.55,
    "cert": "IGI",
    "lab": "IGI",
    "price": 620,
    "stock": "CU-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Cushion",
    "mmSize": "5.50 x 5.50 mm",
    "color": "E",
    "clarity": "VVS1",
    "pointSize": "0.90 ct",
    "carat": 0.9,
    "cert": "IGI",
    "lab": "IGI",
    "price": 990,
    "stock": "CU-5502",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Cushion",
    "mmSize": "8.20 x 7.80 mm",
    "color": "E",
    "clarity": "VVS2",
    "pointSize": "2.50 ct",
    "carat": 2.5,
    "cert": "IGI",
    "lab": "IGI",
    "price": 2200,
    "stock": "1098207",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Emerald",
    "mmSize": "3.00 x 2.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.08 ct",
    "carat": 0.08,
    "cert": "IGI",
    "lab": "IGI",
    "price": 95,
    "stock": "EM-3001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Emerald",
    "mmSize": "3.50 x 2.50 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.15 ct",
    "carat": 0.15,
    "cert": "IGI",
    "lab": "IGI",
    "price": 160,
    "stock": "EM-3501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Emerald",
    "mmSize": "4.00 x 3.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.23 ct",
    "carat": 0.23,
    "cert": "IGI",
    "lab": "IGI",
    "price": 240,
    "stock": "EM-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Emerald",
    "mmSize": "4.50 x 3.20 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.30 ct",
    "carat": 0.3,
    "cert": "IGI",
    "lab": "IGI",
    "price": 320,
    "stock": "EM-4501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Emerald",
    "mmSize": "5.00 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.43 ct",
    "carat": 0.43,
    "cert": "IGI",
    "lab": "IGI",
    "price": 480,
    "stock": "EM-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Emerald",
    "mmSize": "6.00 x 4.00 mm",
    "color": "F",
    "clarity": "VVS1",
    "pointSize": "0.70 ct",
    "carat": 0.7,
    "cert": "IGI",
    "lab": "IGI",
    "price": 770,
    "stock": "EM-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Emerald",
    "mmSize": "7.00 x 5.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "1.00 ct",
    "carat": 1,
    "cert": "IGI",
    "lab": "IGI",
    "price": 1100,
    "stock": "EM-7001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Emerald",
    "mmSize": "9.80 x 6.80 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "3.50 ct",
    "carat": 3.5,
    "cert": "IGI",
    "lab": "IGI",
    "price": 2950,
    "stock": "806852",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Heart",
    "mmSize": "3.20 x 3.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.10 ct",
    "carat": 0.1,
    "cert": "IGI",
    "lab": "IGI",
    "price": 120,
    "stock": "HT-3201",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Heart",
    "mmSize": "4.10 x 3.70 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.20 ct",
    "carat": 0.2,
    "cert": "IGI",
    "lab": "IGI",
    "price": 210,
    "stock": "HT-4101",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Heart",
    "mmSize": "4.60 x 4.20 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.30 ct",
    "carat": 0.3,
    "cert": "IGI",
    "lab": "IGI",
    "price": 330,
    "stock": "HT-4601",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Heart",
    "mmSize": "5.50 x 5.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.50 ct",
    "carat": 0.5,
    "cert": "IGI",
    "lab": "IGI",
    "price": 580,
    "stock": "HT-5501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Heart",
    "mmSize": "6.90 x 6.20 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "1.00 ct",
    "carat": 1,
    "cert": "IGI",
    "lab": "IGI",
    "price": 1050,
    "stock": "HT-6901",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Heart",
    "mmSize": "9.00 x 9.20 mm",
    "color": "FVY",
    "clarity": "VS1",
    "pointSize": "3.03 ct",
    "carat": 3.03,
    "cert": "IGI",
    "lab": "IGI",
    "price": 2100,
    "stock": "1605290",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Kite",
    "mmSize": "3.30 x 2.30 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.05 ct",
    "carat": 0.05,
    "cert": "IGI",
    "lab": "IGI",
    "price": 65,
    "stock": "KT-3301",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Kite",
    "mmSize": "4.15 x 2.40 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.10 ct",
    "carat": 0.1,
    "cert": "IGI",
    "lab": "IGI",
    "price": 115,
    "stock": "KT-4151",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Kite",
    "mmSize": "5.00 x 3.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.13 ct",
    "carat": 0.13,
    "cert": "IGI",
    "lab": "IGI",
    "price": 150,
    "stock": "KT-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Kite",
    "mmSize": "6.00 x 4.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.25 ct",
    "carat": 0.25,
    "cert": "IGI",
    "lab": "IGI",
    "price": 280,
    "stock": "KT-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Kite",
    "mmSize": "8.50 x 5.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.50 ct",
    "carat": 0.5,
    "cert": "IGI",
    "lab": "IGI",
    "price": 590,
    "stock": "KT-8501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Kite",
    "mmSize": "6.50 x 4.20 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.85 ct",
    "carat": 0.85,
    "cert": "IGI",
    "lab": "IGI",
    "price": 780,
    "stock": "1098201",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Marquise",
    "mmSize": "3.00 x 1.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.03 ct",
    "carat": 0.03,
    "cert": "IGI",
    "lab": "IGI",
    "price": 45,
    "stock": "MQ-3001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Marquise",
    "mmSize": "4.00 x 2.00 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.07 ct",
    "carat": 0.07,
    "cert": "IGI",
    "lab": "IGI",
    "price": 85,
    "stock": "MQ-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Marquise",
    "mmSize": "5.00 x 2.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.12 ct",
    "carat": 0.12,
    "cert": "IGI",
    "lab": "IGI",
    "price": 145,
    "stock": "MQ-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Marquise",
    "mmSize": "6.00 x 3.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.20 ct",
    "carat": 0.2,
    "cert": "IGI",
    "lab": "IGI",
    "price": 245,
    "stock": "MQ-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Marquise",
    "mmSize": "7.00 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.30 ct",
    "carat": 0.3,
    "cert": "IGI",
    "lab": "IGI",
    "price": 360,
    "stock": "MQ-7001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Marquise",
    "mmSize": "8.00 x 4.00 mm",
    "color": "E",
    "clarity": "VVS1",
    "pointSize": "0.50 ct",
    "carat": 0.5,
    "cert": "IGI",
    "lab": "IGI",
    "price": 620,
    "stock": "MQ-8001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Marquise",
    "mmSize": "14.2 x 7.1 mm",
    "color": "F",
    "clarity": "VVS2",
    "pointSize": "5.10 ct",
    "carat": 5.1,
    "cert": "IGI",
    "lab": "IGI",
    "price": 3450,
    "stock": "1005905",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Oval",
    "mmSize": "3.00 x 2.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.06 ct",
    "carat": 0.06,
    "cert": "IGI",
    "lab": "IGI",
    "price": 75,
    "stock": "OV-3001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Oval",
    "mmSize": "4.00 x 3.00 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.15 ct",
    "carat": 0.15,
    "cert": "IGI",
    "lab": "IGI",
    "price": 165,
    "stock": "OV-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Oval",
    "mmSize": "5.00 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.25 ct",
    "carat": 0.25,
    "cert": "IGI",
    "lab": "IGI",
    "price": 285,
    "stock": "OV-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Oval",
    "mmSize": "6.00 x 4.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.40 ct",
    "carat": 0.4,
    "cert": "IGI",
    "lab": "IGI",
    "price": 470,
    "stock": "OV-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Oval",
    "mmSize": "7.00 x 5.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.80 ct",
    "carat": 0.8,
    "cert": "IGI",
    "lab": "IGI",
    "price": 890,
    "stock": "OV-7001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Oval",
    "mmSize": "10.2 x 7.1 mm",
    "color": "E",
    "clarity": "VVS1",
    "pointSize": "2.30 ct",
    "carat": 2.3,
    "cert": "IGI",
    "lab": "IGI",
    "price": 1800,
    "stock": "1560755",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Pear",
    "mmSize": "3.00 x 2.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.05 ct",
    "carat": 0.05,
    "cert": "IGI",
    "lab": "IGI",
    "price": 65,
    "stock": "PR-3001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Pear",
    "mmSize": "4.00 x 3.00 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.14 ct",
    "carat": 0.14,
    "cert": "IGI",
    "lab": "IGI",
    "price": 155,
    "stock": "PR-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Pear",
    "mmSize": "5.00 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.23 ct",
    "carat": 0.23,
    "cert": "IGI",
    "lab": "IGI",
    "price": 265,
    "stock": "PR-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Pear",
    "mmSize": "6.00 x 4.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.35 ct",
    "carat": 0.35,
    "cert": "IGI",
    "lab": "IGI",
    "price": 410,
    "stock": "PR-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Pear",
    "mmSize": "7.00 x 5.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.70 ct",
    "carat": 0.7,
    "cert": "IGI",
    "lab": "IGI",
    "price": 790,
    "stock": "PR-7001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Pear",
    "mmSize": "8.50 x 5.50 mm",
    "color": "FVG",
    "clarity": "VS1",
    "pointSize": "1.01 ct",
    "carat": 1.01,
    "cert": "IGI",
    "lab": "IGI",
    "price": 1250,
    "stock": "1210754",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Princess",
    "mmSize": "1.50 x 1.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.02 ct",
    "carat": 0.02,
    "cert": "IGI",
    "lab": "IGI",
    "price": 35,
    "stock": "PC-1501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Princess",
    "mmSize": "2.50 x 2.50 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.10 ct",
    "carat": 0.1,
    "cert": "IGI",
    "lab": "IGI",
    "price": 110,
    "stock": "PC-2501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Princess",
    "mmSize": "3.50 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.28 ct",
    "carat": 0.28,
    "cert": "IGI",
    "lab": "IGI",
    "price": 310,
    "stock": "PC-3501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Princess",
    "mmSize": "4.50 x 4.50 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.60 ct",
    "carat": 0.6,
    "cert": "IGI",
    "lab": "IGI",
    "price": 680,
    "stock": "PC-4501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Princess",
    "mmSize": "5.00 x 5.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.80 ct",
    "carat": 0.8,
    "cert": "IGI",
    "lab": "IGI",
    "price": 920,
    "stock": "PC-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Princess",
    "mmSize": "6.00 x 6.00 mm",
    "color": "D",
    "clarity": "VVS1",
    "pointSize": "1.25 ct",
    "carat": 1.25,
    "cert": "IGI",
    "lab": "IGI",
    "price": 1150,
    "stock": "1098202",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Square Radiant",
    "mmSize": "3.50 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.27 ct",
    "carat": 0.27,
    "cert": "IGI",
    "lab": "IGI",
    "price": 290,
    "stock": "SR-3501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Square Radiant",
    "mmSize": "4.50 x 4.50 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.56 ct",
    "carat": 0.56,
    "cert": "IGI",
    "lab": "IGI",
    "price": 630,
    "stock": "SR-4501",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Square Radiant",
    "mmSize": "7.00 x 7.00 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "2.01 ct",
    "carat": 2.01,
    "cert": "IGI",
    "lab": "IGI",
    "price": 1650,
    "stock": "1098203",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Radiant",
    "mmSize": "3.00 x 2.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.08 ct",
    "carat": 0.08,
    "cert": "IGI",
    "lab": "IGI",
    "price": 95,
    "stock": "RA-3001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Radiant",
    "mmSize": "4.00 x 3.00 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.22 ct",
    "carat": 0.22,
    "cert": "IGI",
    "lab": "IGI",
    "price": 240,
    "stock": "RA-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Radiant",
    "mmSize": "5.00 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.40 ct",
    "carat": 0.4,
    "cert": "IGI",
    "lab": "IGI",
    "price": 460,
    "stock": "RA-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Radiant",
    "mmSize": "6.00 x 4.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.60 ct",
    "carat": 0.6,
    "cert": "IGI",
    "lab": "IGI",
    "price": 690,
    "stock": "RA-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Radiant",
    "mmSize": "11.0 x 8.5 mm",
    "color": "FVP",
    "clarity": "VVS2",
    "pointSize": "6.07 ct",
    "carat": 6.07,
    "cert": "IGI",
    "lab": "IGI",
    "price": 4900,
    "stock": "1636973",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Tapered Bullet",
    "mmSize": "5.00 x 3.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.20 ct",
    "carat": 0.2,
    "cert": "IGI",
    "lab": "IGI",
    "price": 210,
    "stock": "TB-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Tapered Bullet",
    "mmSize": "6.00 x 4.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.40 ct",
    "carat": 0.4,
    "cert": "IGI",
    "lab": "IGI",
    "price": 440,
    "stock": "TB-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Tapered Bullet",
    "mmSize": "4.80 x 2.50 mm",
    "color": "E",
    "clarity": "VVS2",
    "pointSize": "0.25 ct",
    "carat": 0.25,
    "cert": "IGI",
    "lab": "IGI",
    "price": 240,
    "stock": "1098204",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Triangle",
    "mmSize": "3.00 x 3.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.07 ct",
    "carat": 0.07,
    "cert": "IGI",
    "lab": "IGI",
    "price": 80,
    "stock": "TR-3001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Triangle",
    "mmSize": "4.00 x 4.00 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.13 ct",
    "carat": 0.13,
    "cert": "IGI",
    "lab": "IGI",
    "price": 145,
    "stock": "TR-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Triangle",
    "mmSize": "5.00 x 5.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.25 ct",
    "carat": 0.25,
    "cert": "IGI",
    "lab": "IGI",
    "price": 280,
    "stock": "TR-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Triangle",
    "mmSize": "7.20 x 7.20 mm",
    "color": "D",
    "clarity": "VS1",
    "pointSize": "1.70 ct",
    "carat": 1.7,
    "cert": "IGI",
    "lab": "IGI",
    "price": 1100,
    "stock": "1042952",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Trilliant",
    "mmSize": "3.00 x 3.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.10 ct",
    "carat": 0.1,
    "cert": "IGI",
    "lab": "IGI",
    "price": 115,
    "stock": "TL-3001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Trilliant",
    "mmSize": "4.00 x 4.00 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.22 ct",
    "carat": 0.22,
    "cert": "IGI",
    "lab": "IGI",
    "price": 235,
    "stock": "TL-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Trilliant",
    "mmSize": "5.00 x 5.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.41 ct",
    "carat": 0.41,
    "cert": "IGI",
    "lab": "IGI",
    "price": 450,
    "stock": "TL-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Trilliant",
    "mmSize": "6.00 x 6.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.70 ct",
    "carat": 0.7,
    "cert": "IGI",
    "lab": "IGI",
    "price": 780,
    "stock": "TL-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Trilliant",
    "mmSize": "7.50 x 7.50 mm",
    "color": "E",
    "clarity": "VS2",
    "pointSize": "1.74 ct",
    "carat": 1.74,
    "cert": "IGI",
    "lab": "IGI",
    "price": 920,
    "stock": "106858",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Baguette",
    "mmSize": "2.00 x 1.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.02 ct",
    "carat": 0.02,
    "cert": "IGI",
    "lab": "IGI",
    "price": 28,
    "stock": "BG-2001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Baguette",
    "mmSize": "3.00 x 1.50 mm",
    "color": "F",
    "clarity": "VS2",
    "pointSize": "0.045 ct",
    "carat": 0.045,
    "cert": "IGI",
    "lab": "IGI",
    "price": 55,
    "stock": "BG-3001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Baguette",
    "mmSize": "4.00 x 2.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.11 ct",
    "carat": 0.11,
    "cert": "IGI",
    "lab": "IGI",
    "price": 125,
    "stock": "BG-4001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Baguette",
    "mmSize": "5.00 x 2.50 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.22 ct",
    "carat": 0.22,
    "cert": "IGI",
    "lab": "IGI",
    "price": 245,
    "stock": "BG-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Baguette",
    "mmSize": "6.00 x 3.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.35 ct",
    "carat": 0.35,
    "cert": "IGI",
    "lab": "IGI",
    "price": 390,
    "stock": "BG-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Baguette",
    "mmSize": "4.00 x 2.00 mm",
    "color": "F",
    "clarity": "VS1",
    "pointSize": "0.12 ct",
    "carat": 0.12,
    "cert": "IGI",
    "lab": "IGI",
    "price": 140,
    "stock": "1098205",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Tapered Baguette",
    "mmSize": "4.00 x 2.00 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.08 ct",
    "carat": 0.08,
    "cert": "IGI",
    "lab": "IGI",
    "price": 95,
    "stock": "1098206",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Tapered Baguette",
    "mmSize": "5.00 x 2.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.15 ct",
    "carat": 0.15,
    "cert": "IGI",
    "lab": "IGI",
    "price": 175,
    "stock": "TBG-5001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Tapered Baguette",
    "mmSize": "6.00 x 3.00 mm",
    "color": "D",
    "clarity": "VVS2",
    "pointSize": "0.25 ct",
    "carat": 0.25,
    "cert": "IGI",
    "lab": "IGI",
    "price": 290,
    "stock": "TBG-6001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Tapered Baguette",
    "mmSize": "7.00 x 3.50 mm",
    "color": "E",
    "clarity": "VS1",
    "pointSize": "0.40 ct",
    "carat": 0.4,
    "cert": "IGI",
    "lab": "IGI",
    "price": 460,
    "stock": "TBG-7001",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "shape": "Round",
    "mmSize": "7.30 x 7.30 mm",
    "color": "F",
    "clarity": "VS1",
    "pointSize": "1.50 ct",
    "carat": 1.5,
    "cert": "IGI",
    "lab": "IGI",
    "price": 850,
    "stock": "1042410",
    "type": "lab-grown",
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "depth": 62,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false
  },
  {
    "stock": "NAT-20101",
    "type": "natural",
    "shape": "Round",
    "mmSize": "6.80 x 6.80 mm",
    "carat": 1.2,
    "color": "D",
    "clarity": "VVS1",
    "cut": "ID",
    "polish": "EX",
    "sym": "EX",
    "cert": "GIA",
    "lab": "GIA",
    "price": 8900,
    "depth": 61.5,
    "table": 57,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": true,
    "img": "images/stones/stone-1042410.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA"
  },
  {
    "stock": "NAT-20102",
    "type": "natural",
    "shape": "Oval",
    "mmSize": "9.80 x 6.50 mm",
    "carat": 2.05,
    "color": "F",
    "clarity": "VS1",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "cert": "GIA",
    "lab": "GIA",
    "price": 18400,
    "depth": 63.5,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": true,
    "img": "images/stones/stone-1560755.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD202-133AA"
  },
  {
    "stock": "NAT-20103",
    "type": "natural",
    "shape": "Emerald",
    "mmSize": "9.50 x 6.50 mm",
    "carat": 3.01,
    "color": "E",
    "clarity": "VVS2",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "cert": "GIA",
    "lab": "GIA",
    "price": 34000,
    "depth": 66,
    "table": 61,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false,
    "img": "images/stones/stone-806852.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GG4-29AAAA"
  },
  {
    "stock": "NAT-20104",
    "type": "natural",
    "shape": "Radiant",
    "mmSize": "7.80 x 6.00 mm",
    "carat": 1.8,
    "color": "G",
    "clarity": "VS2",
    "cut": "EX",
    "polish": "EX",
    "sym": "VG",
    "cert": "GIA",
    "lab": "GIA",
    "price": 12200,
    "depth": 67.5,
    "table": 64,
    "is3ex": false,
    "is3vg": true,
    "isIdCut": false,
    "img": "images/stones/stone-1636973.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD360-16CA"
  },
  {
    "stock": "NAT-20105",
    "type": "natural",
    "shape": "Marquise",
    "mmSize": "12.0 x 6.00 mm",
    "carat": 2.5,
    "color": "D",
    "clarity": "FL",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "cert": "GIA",
    "lab": "GIA",
    "price": 42000,
    "depth": 62.8,
    "table": 58.5,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": true,
    "img": "images/stones/stone-1005905.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD257-24AAA"
  },
  {
    "stock": "NAT-20106",
    "type": "natural",
    "shape": "Cushion",
    "mmSize": "9.20 x 8.80 mm",
    "carat": 4.1,
    "color": "E",
    "clarity": "VS1",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "cert": "GIA",
    "lab": "GIA",
    "price": 58000,
    "depth": 65,
    "table": 61.5,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": true,
    "img": "images/stones/stone-rare-criss.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD202-133AA"
  },
  {
    "stock": "NAT-20107",
    "type": "natural",
    "shape": "Asscher",
    "mmSize": "6.50 x 6.50 mm",
    "carat": 1.55,
    "color": "F",
    "clarity": "VVS2",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "cert": "GIA",
    "lab": "GIA",
    "price": 14600,
    "depth": 67.2,
    "table": 62,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false,
    "img": "images/stones/stone-1049916.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GG4-29AAAA"
  },
  {
    "stock": "NAT-20108",
    "type": "natural",
    "shape": "Pear",
    "mmSize": "10.5 x 6.80 mm",
    "carat": 2.15,
    "color": "E",
    "clarity": "VS1",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "cert": "GIA",
    "lab": "GIA",
    "price": 24500,
    "depth": 63,
    "table": 58,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false,
    "img": "images/stones/stone-1210754.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GD202-133AA"
  },
  {
    "stock": "NAT-20109",
    "type": "natural",
    "shape": "Princess",
    "mmSize": "6.50 x 6.50 mm",
    "carat": 1.6,
    "color": "D",
    "clarity": "VS1",
    "cut": "ID",
    "polish": "EX",
    "sym": "EX",
    "cert": "GIA",
    "lab": "GIA",
    "price": 16800,
    "depth": 72,
    "table": 69,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": true,
    "img": "images/stones/stone-1049916.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GG4-29AAAA"
  },
  {
    "stock": "NAT-20110",
    "type": "natural",
    "shape": "Tapered Baguette",
    "mmSize": "4.20 x 2.10 mm",
    "carat": 0.15,
    "color": "E",
    "clarity": "VVS1",
    "cut": "EX",
    "polish": "EX",
    "sym": "EX",
    "cert": "GIA",
    "lab": "GIA",
    "price": 650,
    "depth": 58.5,
    "table": 54,
    "is3ex": true,
    "is3vg": true,
    "isIdCut": false,
    "img": "images/stones/stone-rare-criss.jpg",
    "spin": "https://video.meleediamonds.com/video.html?d=GG4-29AAAA"
  }
];

  // --------------------------------------------------------------------------
  // 2. Global State & Diamond Type Switcher Logic
  // --------------------------------------------------------------------------
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  let currentType = getQueryParam('type') || localStorage.getItem('gd_diamond_type') || 'lab-grown';

  function setDiamondType(newType) {
    if (newType !== 'lab-grown' && newType !== 'natural') return;
    currentType = newType;
    localStorage.setItem('gd_diamond_type', newType);
    updateTypeSwitcherUI();
    renderInventoryGrid();
  }

  function updateTypeSwitcherUI() {
    const switchers = document.querySelectorAll('.gd-type-switcher');
    switchers.forEach(sw => {
      const btns = sw.querySelectorAll('.gd-type-btn');
      btns.forEach(btn => {
        const btnType = btn.getAttribute('data-type');
        if (btnType === currentType) {
          btn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });
    });

    const heroTitle = document.getElementById('gd-dynamic-hero-title');
    if (heroTitle) {
      heroTitle.textContent = currentType === 'natural' 
        ? 'Wholesale Certified Natural Diamonds' 
        : 'Wholesale Certified Lab-Grown Diamonds';
    }

    const catalogTitle = document.getElementById('gd-dynamic-catalog-title');
    if (catalogTitle) {
      catalogTitle.textContent = currentType === 'natural'
        ? 'Certified Loose Natural Diamonds'
        : 'Certified Loose Lab-Grown Diamonds';
    }
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.gd-type-btn');
    if (btn) {
      const type = btn.getAttribute('data-type');
      if (type) setDiamondType(type);
    }
  });

  // --------------------------------------------------------------------------
  // 3. Page Loader & Sticky Header Setup
  // --------------------------------------------------------------------------
  const loader = document.getElementById('global-loader');
  if (loader) {
    window.addEventListener('load', function () {
      loader.classList.add('is-hidden');
    });
    setTimeout(function () {
      loader.classList.add('is-hidden');
    }, 1000);
  }

  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = function () {
      if (window.scrollY > 30) {
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 4. NY Dispatch Countdown Clock
  // --------------------------------------------------------------------------
  const cutoffEl = document.getElementById('gd-cutoff');
  if (cutoffEl) {
    function updateCutoffClock() {
      try {
        const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const day = now.getDay();

        if (day === 0 || day === 6) {
          cutoffEl.textContent = 'New York desk reopens Monday · 9am ET';
          return;
        }

        if (hours >= 18) {
          cutoffEl.textContent = "Today's dispatch has closed · next cut-off 6pm ET tomorrow";
          return;
        }

        const totalRemainingMins = (18 - hours) * 60 - minutes;
        const hh = Math.floor(totalRemainingMins / 60);
        const mm = totalRemainingMins % 60;
        cutoffEl.textContent = `${hh > 0 ? hh + 'h ' : ''}${mm}m to today's New York cut-off · 6pm ET`;
      } catch (err) {
        cutoffEl.textContent = 'Same-day shipping cutoff · 6pm ET daily';
      }
    }
    updateCutoffClock();
    setInterval(updateCutoffClock, 30000);
  }

  // --------------------------------------------------------------------------
  // 5. Mobile Drawer Navigation
  // --------------------------------------------------------------------------
  const drawer = document.getElementById('gd-drawer');
  const openBtn = document.querySelector('[data-gd-drawer-open]');
  const closeBtns = document.querySelectorAll('[data-gd-drawer-close]');

  if (drawer && openBtn) {
    const setDrawerState = function (isOpen) {
      drawer.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('gd-drawer-open', isOpen);
      openBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    openBtn.addEventListener('click', () => setDrawerState(true));
    closeBtns.forEach(btn => btn.addEventListener('click', () => setDrawerState(false)));

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        setDrawerState(false);
      }
    });
  }

  const accordionBtns = document.querySelectorAll('[data-gd-accordion]');
  accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const controlsId = btn.getAttribute('aria-controls');
      const targetSub = document.getElementById(controlsId);
      if (!targetSub) return;
      const isHidden = targetSub.hasAttribute('hidden');
      if (isHidden) {
        targetSub.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        targetSub.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. Header Search Bar & Dynamic Dropdown
  // --------------------------------------------------------------------------
  const searchInput = document.getElementById('header-search-input');
  const searchResults = document.getElementById('header-search-results');

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function (e) {
      const val = e.target.value.trim().toLowerCase();
      if (!val) {
        searchResults.classList.remove('is-active');
        searchResults.innerHTML = '';
        return;
      }

      const matches = stockDatabase.filter(item =>
        item.stock.toLowerCase().includes(val) ||
        item.shape.toLowerCase().includes(val) ||
        item.color.toLowerCase().includes(val) ||
        item.cert.toLowerCase().includes(val)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<div style="padding:12px; font-size:13px; color:#888;">No matching stones found for "${val}"</div>`;
      } else {
        searchResults.innerHTML = matches.map(m => `
          <a href="category/lab-grown.html?stock=${m.stock}&type=${m.type}" style="display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid #f0f0f0; text-decoration:none;">
            <div>
              <div style="display:flex; align-items:center; gap:6px;">
                <strong style="color:#211965; font-size:13.5px;">№ ${m.stock} — ${m.shape} ${m.carat}ct</strong>
                <span class="${m.type === 'natural' ? 'gd-badge-natural' : 'gd-badge-lab'}">${m.type === 'natural' ? 'Natural' : 'Lab Grown'}</span>
              </div>
              <div style="font-size:11.5px; color:#666; margin-top:2px;">Color: ${m.color} | Clarity: ${m.clarity} | Cert: ${m.cert}</div>
            </div>
            <span style="font-size:12px; color:#211965; font-weight:600;">View &rarr;</span>
          </a>
        `).join('');
      }
      searchResults.classList.add('is-active');
    });

    document.addEventListener('click', function (e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('is-active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. Inventory Grid Renderer & Filter Engine
  // --------------------------------------------------------------------------
  
  let cdViewMode = 'grid';
  let cdSortMode = 'featured';

  function renderActiveFilterChips() {
    const container = document.getElementById('cd-active-chips');
    if (!container) return;

    const chips = [];

    cdState.selectedShapes.forEach(shp => chips.push({ label: `Shape: ${shp}`, type: 'shape', val: shp }));
    cdState.selectedColors.forEach(clr => chips.push({ label: `Color: ${clr}`, type: 'color', val: clr }));
    cdState.selectedClarities.forEach(clr => chips.push({ label: `Clarity: ${clr}`, type: 'clarity', val: clr }));
    cdState.selectedLabs.forEach(lab => chips.push({ label: `Lab: ${lab}`, type: 'lab', val: lab }));
    cdState.selectedCuts.forEach(c => chips.push({ label: `Cut: ${c}`, type: 'cut', val: c }));
    cdState.selectedPolishes.forEach(p => chips.push({ label: `Polish: ${p}`, type: 'polish', val: p }));
    cdState.selectedSymmetries.forEach(s => chips.push({ label: `Symmetry: ${s}`, type: 'sym', val: s }));

    if (cdState.caratMin !== null || cdState.caratMax !== null) {
      chips.push({ label: `Carat: ${cdState.caratMin || 0} - ${cdState.caratMax || '5+'}`, type: 'carat' });
    }
    if (cdState.priceMin !== null || cdState.priceMax !== null) {
      chips.push({ label: `Price: ${cdState.priceMin || 0} - ${cdState.priceMax || 'Max'}`, type: 'price' });
    }
    if (cdState.idCutOnly) chips.push({ label: 'ID CUT', type: 'idcut' });
    if (cdState.threeExOnly) chips.push({ label: '3EX', type: '3ex' });
    if (cdState.threeVgOnly) chips.push({ label: '3VG+', type: '3vg' });

    container.innerHTML = chips.map(c => `
      <span class="gd-cd-chip" onclick="removeSingleFilter('${c.type}', '${c.val || ''}')">
        ${c.label} &times;
      </span>
    `).join('');
  }

  window.removeSingleFilter = function(type, val) {
    if (type === 'shape') cdState.selectedShapes.delete(val);
    if (type === 'color') cdState.selectedColors.delete(val);
    if (type === 'clarity') cdState.selectedClarities.delete(val);
    if (type === 'lab') cdState.selectedLabs.delete(val);
    if (type === 'cut') cdState.selectedCuts.delete(val);
    if (type === 'polish') cdState.selectedPolishes.delete(val);
    if (type === 'sym') cdState.selectedSymmetries.delete(val);
    if (type === 'carat') { cdState.caratMin = null; cdState.caratMax = null; }
    if (type === 'price') { cdState.priceMin = null; cdState.priceMax = null; }
    if (type === 'idcut') cdState.idCutOnly = false;
    if (type === '3ex') cdState.threeExOnly = false;
    if (type === '3vg') cdState.threeVgOnly = false;

    // Update active classes on UI elements
    syncUIWithCDState();
    renderInventoryGrid();
  };

  function syncUIWithCDState() {
    document.querySelectorAll('#cd-shape-selector .gd-cd-shape-btn').forEach(btn => {
      btn.classList.toggle('is-active', cdState.selectedShapes.has(btn.getAttribute('data-shape')));
    });
    function syncPills(id, setObj) {
      document.querySelectorAll(`#${id} .gd-cd-pill`).forEach(p => {
        p.classList.toggle('is-active', setObj.has(p.getAttribute('data-val')));
      });
    }
    syncPills('cd-color-selector', cdState.selectedColors);
    syncPills('cd-clarity-selector', cdState.selectedClarities);
    syncPills('cd-lab-selector', cdState.selectedLabs);
    syncPills('cd-cut-selector', cdState.selectedCuts);
    syncPills('cd-polish-selector', cdState.selectedPolishes);
    syncPills('cd-sym-selector', cdState.selectedSymmetries);

    const tIdCut = document.getElementById('cd-toggle-idcut');
    if (tIdCut) tIdCut.classList.toggle('is-active', cdState.idCutOnly);
    const t3Ex = document.getElementById('cd-toggle-3ex');
    if (t3Ex) t3Ex.classList.toggle('is-active', cdState.threeExOnly);
    const t3Vg = document.getElementById('cd-toggle-3vg');
    if (t3Vg) t3Vg.classList.toggle('is-active', cdState.threeVgOnly);
  }


  function renderInventoryGrid() {
    const container = document.getElementById('gd-inventory-grid');
    if (!container) return;

        const shapeFilter = document.getElementById('filter-shape') ? document.getElementById('filter-shape').value : '';
    const mmFilter = document.getElementById('filter-mmsize') ? document.getElementById('filter-mmsize').value : '';
    const colorFilter = document.getElementById('filter-color') ? document.getElementById('filter-color').value : '';
    const clarityFilter = document.getElementById('filter-clarity') ? document.getElementById('filter-clarity').value : '';
    const pointFilter = document.getElementById('filter-pointsize') ? document.getElementById('filter-pointsize').value : '';
    const certFilter = document.getElementById('filter-cert') ? document.getElementById('filter-cert').value : '';
    const stockParam = getQueryParam('stock');

    const isSubfolder = window.location.pathname.includes('/category/');
    const basePath = isSubfolder ? '../' : '';

    
    const filtered = stockDatabase.filter(item => {
      if (item.type !== currentType) return false;
      if (stockParam && item.stock !== stockParam) return false;

      // 1. Shape Multi-select
      if (cdState.selectedShapes.size > 0) {
        if (!cdState.selectedShapes.has(item.shape)) return false;
      }

      // 2. Color Multi-select
      if (cdState.selectedColors.size > 0) {
        if (cdState.selectedColors.has('Fancy')) {
          if (!['FVG', 'FVY', 'FVP'].includes(item.color) && !cdState.selectedColors.has(item.color)) return false;
        } else if (!cdState.selectedColors.has(item.color)) return false;
      }

      // 3. Carat Range
      if (cdState.caratMin !== null && item.carat < cdState.caratMin) return false;
      if (cdState.caratMax !== null && item.carat > cdState.caratMax) return false;

      // 4. Price Range
      if (cdState.priceMin !== null && item.price < cdState.priceMin) return false;
      if (cdState.priceMax !== null && item.price > cdState.priceMax) return false;

      // 5. Clarity Multi-select
      if (cdState.selectedClarities.size > 0 && !cdState.selectedClarities.has(item.clarity)) return false;

      // 6. Lab Multi-select
      if (cdState.selectedLabs.size > 0 && !cdState.selectedLabs.has(item.lab) && !cdState.selectedLabs.has(item.cert)) return false;

      // 7. Cut / Polish / Symmetry
      if (cdState.selectedCuts.size > 0 && !cdState.selectedCuts.has(item.cut)) return false;
      if (cdState.selectedPolishes.size > 0 && !cdState.selectedPolishes.has(item.polish)) return false;
      if (cdState.selectedSymmetries.size > 0 && !cdState.selectedSymmetries.has(item.sym)) return false;

      // 8. Quality Toggles
      if (cdState.idCutOnly && item.cut !== 'ID') return false;
      if (cdState.threeExOnly && !item.is3ex) return false;
      if (cdState.threeVgOnly && !item.is3vg) return false;

      // 9. Depth & Table Range
      if (cdState.depthMin !== null && item.depth < cdState.depthMin) return false;
      if (cdState.depthMax !== null && item.depth > cdState.depthMax) return false;
      if (cdState.tableMin !== null && item.table < cdState.tableMin) return false;
      if (cdState.tableMax !== null && item.table > cdState.tableMax) return false;

      return true;
    });


    
    // Apply Sorting
    filtered.sort((a, b) => {
      if (cdSortMode === 'price-asc') return (a.price || 0) - (b.price || 0);
      if (cdSortMode === 'price-desc') return (b.price || 0) - (a.price || 0);
      if (cdSortMode === 'carat-asc') return (a.carat || 0) - (b.carat || 0);
      if (cdSortMode === 'carat-desc') return (b.carat || 0) - (a.carat || 0);
      if (cdSortMode === 'newest') return (b.stock || 0) - (a.stock || 0);
      return 0;
    });

    renderActiveFilterChips();

    const countEl = document.getElementById('gd-result-count');
    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} certified ${currentType === 'natural' ? 'natural' : 'lab-grown'} loose diamonds`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fafafa; border-radius: 16px; border: 1px dashed #cbd5e1;">
          <h3 style="color:#0f172a; font-size: 18px; font-weight:700; margin-bottom: 8px;">No matching certified stones found</h3>
          <p style="color:#64748b; font-size: 14px;">Try clearing or adjusting your filter selections to see more wholesale inventory.</p>
          <button onclick="resetAllCertifiedFilters()" class="gd-btn-solid" style="margin-top:16px;">Reset All Filters</button>
        </div>
      `;
      return;
    }

    if (cdViewMode === 'table') {
      container.innerHTML = `
        <div class="gd-cd-table-container" style="grid-column: 1 / -1;">
          <table class="gd-cd-table">
            <thead>
              <tr>
                <th>Stock #</th>
                <th>Shape</th>
                <th>Carat & MM Size</th>
                <th>Color / Clarity</th>
                <th>Cut / Pol / Sym</th>
                <th>Lab & Cert</th>
                <th>Depth / Table</th>
                <th>Trade Price</th>
                <th>360° Loupe</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map(s => `
                <tr>
                  <td class="font-mono font-bold text-amber-700">№ ${s.stock}</td>
                  <td><strong>${s.shape}</strong></td>
                  <td><strong>${s.carat.toFixed(2)} ct</strong> <span style="font-size:11px; color:#64748b; display:block;">${s.mmSize || ''}</span></td>
                  <td>${s.color} / ${s.clarity}</td>
                  <td>${s.cut || 'EX'} / ${s.polish || 'EX'} / ${s.sym || 'EX'}</td>
                  <td><strong style="color:#3730a3;">${s.lab || s.cert}</strong></td>
                  <td>${s.depth || 62}% / ${s.table || 58}%</td>
                  <td><strong style="color:#047857; font-size:13px;">${(s.price || 0).toLocaleString()}</strong></td>
                  <td>
                    <button type="button" class="gd-stone-link gd-loupe-trigger" data-spin="${s.spin}" data-title="№ ${s.stock} — ${s.shape} ${s.carat}ct (${s.lab || s.cert})">
                      360° View &rarr;
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(stone => `
        <article class="gd-stone-card">
          <div class="gd-stone-thumb">
            <span class="gd-stone-no">&#8470; ${stone.stock}</span>
            <span class="${stone.type === 'natural' ? 'gd-badge-natural' : 'gd-badge-lab'}" style="position:absolute; top:12px; right:12px; z-index:2;">
              ${stone.type === 'natural' ? 'Natural' : 'Lab-Grown'}
            </span>
            <span class="gd-loupe" data-spin="${stone.spin}" aria-label="View ${stone.shape} ${stone.carat}ct 360 Video">
              <img src="${basePath}${stone.img}" alt="${stone.shape} ${stone.carat}ct">
              <span class="gd-loupe-badge">360&deg;</span>
            </span>
          </div>
          <div class="gd-stone-body">
            <div class="gd-stone-shape">${stone.shape} &middot; ${stone.carat.toFixed(2)} ct</div>
            <div class="gd-stone-carat" style="font-size:12px; color:#64748b; font-weight:600;">${stone.mmSize || ''}</div>
            <div class="gd-spec-row" style="grid-template-columns: repeat(3, 1fr); gap:6px;">
              <div class="gd-spec"><span class="sk">Color</span><span class="sv">${stone.color}</span></div>
              <div class="gd-spec"><span class="sk">Clarity</span><span class="sv">${stone.clarity}</span></div>
              <div class="gd-spec"><span class="sk">Lab</span><span class="sv">${stone.lab || stone.cert}</span></div>
              <div class="gd-spec"><span class="sk">Cut</span><span class="sv">${stone.cut || 'EX'}</span></div>
              <div class="gd-spec"><span class="sk">Pol/Sym</span><span class="sv">${stone.polish || 'EX'}/${stone.sym || 'EX'}</span></div>
              <div class="gd-spec"><span class="sk">Depth/Tab</span><span class="sv">${stone.depth || '62'}%/${stone.table || '58'}%</span></div>
            </div>
            <div class="gd-stone-foot">
              <a href="${basePath}signin.html" class="gd-price-tag">${(stone.price || 0).toLocaleString()} &middot; Trade Login</a>
              <button type="button" class="gd-stone-link gd-loupe-trigger" data-spin="${stone.spin}" data-title="№ ${stone.stock} — ${stone.shape} ${stone.carat}ct (${stone.lab || stone.cert})">
                360° Loupe &rarr;
              </button>
            </div>
          </div>
        </article>
      `).join('');
    }


    bindLoupeTriggers();
  }

    ['filter-shape', 'filter-mmsize', 'filter-color', 'filter-clarity', 'filter-pointsize', 'filter-cert'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', renderInventoryGrid);
  });

  // --------------------------------------------------------------------------
  // 8. Interactive Vision360° Diamond Inspection Modal System
  // --------------------------------------------------------------------------
  window.open360Modal = function (spinUrl, title, stockNo, price, imgUrl, certUrl) {
    let modalEl = document.getElementById('gd-360-interactive-modal');
    if (!modalEl) {
      modalEl = document.createElement('div');
      modalEl.id = 'gd-360-interactive-modal';
      modalEl.className = 'gd-360-modal-backdrop';
      modalEl.innerHTML = `
        <div class="gd-360-modal-dialog">
          <div class="gd-360-modal-header">
            <div class="gd-360-modal-title-wrap">
              <span class="gd-360-tag">VISION 360° HD INSPECTION</span>
              <h3 id="gd-360-title-text" class="gd-360-title">Diamond 360° View</h3>
            </div>
            <button type="button" class="gd-360-close-btn" onclick="window.close360Modal()" aria-label="Close">&times;</button>
          </div>
          <div class="gd-360-modal-body">
            <div class="gd-360-iframe-wrap">
              <iframe id="gd-360-iframe-player" src="about:blank" allowfullscreen title="360 Diamond Spin"></iframe>
            </div>
          </div>
          <div class="gd-360-modal-footer">
            <div class="gd-360-controls">
              <button type="button" class="gd-360-ctrl-btn" onclick="window.reload360Player()" title="Reset / Rotate Spin">🔄 Rotate 360°</button>
              <button type="button" class="gd-360-ctrl-btn" onclick="window.toggle360Zoom()" title="High Res Inspection">🔍 High Res Loupe</button>
              <a id="gd-360-cert-btn" href="https://www.igi.org/" target="_blank" class="gd-360-ctrl-btn" style="text-decoration:none;">📜 View Lab Cert</a>
            </div>
            <div id="gd-360-action-area" class="gd-360-action-area"></div>
          </div>
        </div>
      `;
      document.body.appendChild(modalEl);
    }

    const titleEl = document.getElementById('gd-360-title-text');
    const iframeWrap = document.querySelector('#gd-360-interactive-modal .gd-360-iframe-wrap');
    const certBtn = document.getElementById('gd-360-cert-btn');
    const actionArea = document.getElementById('gd-360-action-area');

    if (titleEl) titleEl.textContent = title || 'Diamond 360° HD Inspection';

    // If URL is missing or uses dummy placeholder domain video.meleediamonds.com, use Interactive Fallback Spinner!
    const isPlaceholderUrl = !spinUrl || spinUrl.includes('video.meleediamonds.com');

    if (isPlaceholderUrl) {
      if (iframeWrap) {
        window.renderFallback360Viewer(iframeWrap, imgUrl, title);
      }
    } else {
      if (iframeWrap) {
        iframeWrap.innerHTML = `<iframe id="gd-360-iframe-player" src="${spinUrl}" allowfullscreen title="360 Diamond Spin"></iframe>`;
      }
    }

    if (certBtn) {
      certBtn.href = certUrl || 'https://www.igi.org/';
    }

    if (actionArea) {
      if (price) {
        const safeTitle = (title || 'Certified Diamond').replace(/'/g, "\\'");
        const safeImg = (imgUrl || '').replace(/'/g, "\\'");
        actionArea.innerHTML = `
          <span style="font-size:14px; font-weight:700; color:#15803d; background:#f0fdf4; border:1px solid #bbf7d0; padding:6px 12px; border-radius:8px;">Trade Price: $${Number(price).toLocaleString()}</span>
          <button type="button" onclick="window.addJewelryToCart('${safeTitle}', ${price}, '${safeImg}', '360 Stock #${stockNo || ''}')" style="background:#1b1464; color:#fff; border:none; padding:8px 16px; border-radius:8px; font-weight:700; font-size:13px; cursor:pointer;">🛒 Add to Cart</button>
        `;
      } else {
        actionArea.innerHTML = `<button type="button" onclick="window.close360Modal()" style="background:#1b1464; color:#fff; border:none; padding:8px 16px; border-radius:8px; font-weight:700; font-size:13px; cursor:pointer;">Close Inspection</button>`;
      }
    }

    modalEl.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  // --------------------------------------------------------------------------
  // Interactive Fallback 360° Diamond Spinner Render Engine
  // --------------------------------------------------------------------------
  window.renderFallback360Viewer = function (container, imgUrl, title) {
    const basePath = window.location.pathname.includes('/category/') ? '../' : '';
    let safeImg = imgUrl && !imgUrl.includes('undefined') ? imgUrl : 'images/stones/stone-1042410.jpg';
    if (!safeImg.startsWith('http') && !safeImg.startsWith('../') && basePath) {
      safeImg = basePath + safeImg;
    }

    container.innerHTML = `
      <div class="gd-fallback-360-stage" style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; background:radial-gradient(circle at center, #ffffff 30%, #f1f5f9 100%); user-select:none; overflow:hidden;">
        <div id="gd-360-spin-box" style="position:relative; width:340px; height:340px; display:flex; align-items:center; justify-content:center; cursor:grab;">
          <img id="gd-360-spin-img" src="${safeImg}" alt="${title || 'Diamond'}" style="max-width:88%; max-height:88%; object-fit:contain; filter:drop-shadow(0 15px 35px rgba(0,0,0,0.2)); pointer-events:none; transition:transform 0.06s ease-out;">
          <div style="position:absolute; bottom:10px; background:rgba(15,23,42,0.85); color:#fbbf24; padding:6px 14px; border-radius:20px; font-size:12px; font-weight:700; pointer-events:none; display:flex; align-items:center; gap:6px; backdrop-filter:blur(4px); box-shadow:0 4px 12px rgba(0,0,0,0.15);">
            <span>🔄 Drag or Touch to Spin 360°</span>
          </div>
        </div>
        <div style="margin-top:14px; display:flex; align-items:center; gap:10px;">
          <button type="button" onclick="window.start360AutoSpin()" class="gd-360-ctrl-btn">▶ Auto Spin</button>
          <button type="button" onclick="window.stop360AutoSpin()" class="gd-360-ctrl-btn">⏸ Pause</button>
          <button type="button" onclick="window.reset360SpinView()" class="gd-360-ctrl-btn">↺ Reset View</button>
        </div>
      </div>
    `;

    let rotationDeg = 0;
    let autoSpinInterval = null;
    let isDragging = false;
    let startX = 0;

    const imgEl = document.getElementById('gd-360-spin-img');
    const boxEl = document.getElementById('gd-360-spin-box');

    window.updateSpinAngle = function (delta) {
      rotationDeg = (rotationDeg + delta) % 360;
      if (imgEl) {
        const rad = rotationDeg * Math.PI / 180;
        imgEl.style.transform = `rotateY(${rotationDeg}deg) rotateZ(${Math.sin(rad) * 6}deg) scale(${1 + Math.abs(Math.sin(rad)) * 0.08})`;
      }
    };

    window.start360AutoSpin = function () {
      if (autoSpinInterval) clearInterval(autoSpinInterval);
      autoSpinInterval = setInterval(() => window.updateSpinAngle(0.6), 40);
    };

    window.stop360AutoSpin = function () {
      if (autoSpinInterval) clearInterval(autoSpinInterval);
      autoSpinInterval = null;
    };

    window.reset360SpinView = function () {
      window.stop360AutoSpin();
      rotationDeg = 0;
      if (imgEl) imgEl.style.transform = 'rotateY(0deg) scale(1)';
    };

    if (boxEl) {
      boxEl.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        window.stop360AutoSpin();
        boxEl.style.cursor = 'grabbing';
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const diffX = e.clientX - startX;
        startX = e.clientX;
        window.updateSpinAngle(diffX * 1.5);
      });

      window.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          if (boxEl) boxEl.style.cursor = 'grab';
        }
      });

      boxEl.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          isDragging = true;
          startX = e.touches[0].clientX;
          window.stop360AutoSpin();
        }
      });

      window.addEventListener('touchmove', (e) => {
        if (!isDragging || !e.touches.length) return;
        const diffX = e.touches[0].clientX - startX;
        startX = e.touches[0].clientX;
        window.updateSpinAngle(diffX * 1.5);
      });

      window.addEventListener('touchend', () => {
        isDragging = false;
      });
    }

    window.start360AutoSpin();
  };

  window.close360Modal = function () {
    const modalEl = document.getElementById('gd-360-interactive-modal');
    if (modalEl) {
      modalEl.style.display = 'none';
      if (typeof window.stop360AutoSpin === 'function') window.stop360AutoSpin();
    }
    document.body.style.overflow = '';
  };

  window.reload360Player = function () {
    if (typeof window.reset360SpinView === 'function') {
      window.reset360SpinView();
      window.start360AutoSpin();
    }
  };

  window.toggle360Zoom = function () {
    const imgEl = document.getElementById('gd-360-spin-img');
    const iframeEl = document.getElementById('gd-360-iframe-player');
    if (imgEl) {
      const isZoomed = imgEl.style.scale === '1.35';
      imgEl.style.scale = isZoomed ? '1' : '1.35';
    }
    if (iframeEl) {
      iframeEl.classList.toggle('is-zoomed');
    }
  };

  function bindLoupeTriggers() {
    document.querySelectorAll('.gd-loupe[data-spin], .gd-loupe-trigger[data-spin], .gd-360-badge[data-spin]').forEach(trig => {
      trig.removeEventListener('click', handleLoupeClick);
      trig.addEventListener('click', handleLoupeClick);
    });
  }

  function handleLoupeClick(e) {
    e.preventDefault();
    const spinUrl = this.getAttribute('data-spin');
    const titleText = this.getAttribute('data-title') || this.getAttribute('aria-label') || 'Diamond 360° Inspection';
    const stockNo = this.getAttribute('data-stock') || '';
    const price = this.getAttribute('data-price') || null;
    const imgUrl = this.getAttribute('data-img') || '';
    const certUrl = this.getAttribute('data-cert') || '';
    window.open360Modal(spinUrl, titleText, stockNo, price, imgUrl, certUrl);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.close360Modal();
  });

  // --------------------------------------------------------------------------
  // 9. Custom Jewelry Quote Calculator
  // --------------------------------------------------------------------------
  const customCalcForm = document.getElementById('gd-custom-jewelry-form');
  if (customCalcForm) {
    const metalSelect = document.getElementById('custom-metal');
    const diamondTypeSelect = document.getElementById('custom-diamond-type');
    const caratInput = document.getElementById('custom-carat');
    const estPriceEl = document.getElementById('custom-est-price');

    function updateCustomEstimate() {
      if (!metalSelect || !diamondTypeSelect || !caratInput || !estPriceEl) return;
      const metalMultiplier = metalSelect.value === 'platinum' ? 650 : metalSelect.value === '18k' ? 450 : 320;
      const diamondRate = diamondTypeSelect.value === 'natural' ? 4500 : 750;
      const caratVal = parseFloat(caratInput.value) || 1.0;
      const total = Math.round(metalMultiplier + (caratVal * diamondRate));
      estPriceEl.textContent = `$${total.toLocaleString()} EST`;
    }

    [metalSelect, diamondTypeSelect, caratInput].forEach(el => {
      if (el) el.addEventListener('input', updateCustomEstimate);
    });
    updateCustomEstimate();
  }

  // --------------------------------------------------------------------------
  // 10. Initialization
  // --------------------------------------------------------------------------
  
  // --------------------------------------------------------------------------
  // CERTIFIED DIAMONDS MULTI-FILTER ENGINE & INTERACTIVE CONTROLS
  // --------------------------------------------------------------------------
  const cdState = {
    selectedShapes: new Set(),
    selectedColors: new Set(),
    selectedClarities: new Set(),
    selectedLabs: new Set(),
    selectedCuts: new Set(),
    selectedPolishes: new Set(),
    selectedSymmetries: new Set(),
    caratMin: null,
    caratMax: null,
    priceMin: null,
    priceMax: null,
    depthMin: null,
    depthMax: null,
    tableMin: null,
    tableMax: null,
    idCutOnly: false,
    threeExOnly: false,
    threeVgOnly: false
  };

  
  // Global View Switchers & Reset Handlers for HeyMan Certified Stone
  window.showgrid = function() {
    window.cdViewMode = 'grid';
    const gridEl = document.getElementById('cd-inventory-grid');
    const tableEl = document.getElementById('cd-inventory-table-container');
    if (gridEl) gridEl.classList.remove('hidden');
    if (tableEl) tableEl.classList.add('hidden');
    renderInventoryGrid();
  };

  window.showlist = function() {
    window.cdViewMode = 'table';
    const gridEl = document.getElementById('cd-inventory-grid');
    const tableEl = document.getElementById('cd-inventory-table-container');
    if (gridEl) gridEl.classList.add('hidden');
    if (tableEl) tableEl.classList.remove('hidden');
    renderInventoryGrid();
  };

  window.clear_cut_pol_sym = function() {
    ['id_cut', 'id_3EX', 'id_3VG'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.checked = false;
    });
    cdState.idCutOnly = false;
    cdState.threeExOnly = false;
    cdState.threeVgOnly = false;
    renderInventoryGrid();
  };

  function initCertifiedDiamondsUI() {

    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('cat');
    const isFancyLoosePage = cat === 'fancy-loose' || window.location.pathname.includes('fancy-loose');

    if (isFancyLoosePage) {
      const heroKicker = document.getElementById('gd-hero-kicker');
      if (heroKicker) heroKicker.textContent = 'HOME > CATEGORY > FANCY LOOSE & LAYOUT';

      const heroTitle = document.getElementById('gd-hero-main-title');
      if (heroTitle) heroTitle.textContent = 'FANCY LOOSE & LAYOUT SUITES';

      const heroDesc = document.getElementById('gd-hero-main-desc');
      if (heroDesc) heroDesc.textContent = 'Calibrated fancy shape loose diamonds & pre-matched custom jewelry layout suites. Emerald, Oval, Radiant, Cushion, Princess, Marquise, Asscher, and Baguette cuts.';

      const cdTitle = document.querySelector('.gd-cd-title');
      if (cdTitle) cdTitle.textContent = 'Calibrated Fancy Loose Stock Sheet';

      const cdSub = document.querySelector('.gd-cd-sub');
      if (cdSub) cdSub.textContent = 'Live Inventory from 1. Blank Layout Stock Sheet';
    }

    // Dual ID Event Bindings for HeyMan Diamond exact inputs
    const idsMap = [
      { idMin: 'caratmin', idMax: 'caratmax', propMin: 'caratMin', propMax: 'caratMax' },
      { idMin: 'pricemin', idMax: 'pricemax', propMin: 'priceMin', propMax: 'priceMax' },
      { idMin: 'depthmin', idMax: 'depthmax', propMin: 'depthMin', propMax: 'depthMax' },
      { idMin: 'tablemin', idMax: 'tablemax', propMin: 'tableMin', propMax: 'tableMax' }
    ];

    idsMap.forEach(item => {
      const elMin = document.getElementById(item.idMin) || document.getElementById('cd-' + item.idMin);
      const elMax = document.getElementById(item.idMax) || document.getElementById('cd-' + item.idMax);

      if (elMin) {
        elMin.addEventListener('input', e => {
          cdState[item.propMin] = parseFloat(e.target.value) || null;
          renderInventoryGrid();
        });
      }
      if (elMax) {
        elMax.addEventListener('input', e => {
          cdState[item.propMax] = parseFloat(e.target.value) || null;
          renderInventoryGrid();
        });
      }
    });

    ['reset-btn', 'reset-btn-bottom', 'clear-all-chips'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', resetAllCertifiedFilters);
    });

    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        renderInventoryGrid();
        const gridEl = document.getElementById('cd-inventory-grid');
        if (gridEl) gridEl.scrollIntoView({ behavior: 'smooth' });
      });
    }

    ['id_cut', 'id_3EX', 'id_3VG'].forEach(id => {
      const radio = document.getElementById(id);
      if (radio) {
        radio.addEventListener('change', () => {
          cdState.idCutOnly = (id === 'id_cut');
          cdState.threeExOnly = (id === 'id_3EX');
          cdState.threeVgOnly = (id === 'id_3VG');
          renderInventoryGrid();
        });
      }
    });

    const shapeBtns = document.querySelectorAll('#cd-shape-selector .gd-cd-shape-btn');
    shapeBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const shp = this.getAttribute('data-shape');
        if (cdState.selectedShapes.has(shp) && cdState.selectedShapes.size === 1) {
          cdState.selectedShapes.clear();
          shapeBtns.forEach(b => b.classList.remove('is-active'));
        } else {
          cdState.selectedShapes.clear();
          cdState.selectedShapes.add(shp);
          shapeBtns.forEach(b => b.classList.remove('is-active'));
          this.classList.add('is-active');
        }
        renderInventoryGrid();
      });
    });

    // Pill selectors (Color, Clarity, Lab, Cut, Polish, Symmetry)
    function setupPillGroup(containerId, stateSet) {
      const pills = document.querySelectorAll(`#${containerId} .gd-cd-pill`);
      pills.forEach(pill => {
        pill.addEventListener('click', function () {
          const val = this.getAttribute('data-val');
          if (stateSet.has(val)) {
            stateSet.delete(val);
            this.classList.remove('is-active');
          } else {
            stateSet.add(val);
            this.classList.add('is-active');
          }
          renderInventoryGrid();
        });
      });
    }

    setupPillGroup('cd-color-selector', cdState.selectedColors);
    setupPillGroup('cd-clarity-selector', cdState.selectedClarities);
    setupPillGroup('cd-lab-selector', cdState.selectedLabs);
    setupPillGroup('cd-cut-selector', cdState.selectedCuts);
    setupPillGroup('cd-polish-selector', cdState.selectedPolishes);
    setupPillGroup('cd-sym-selector', cdState.selectedSymmetries);

    // Carat Range & Presets
    const caratFrom = document.getElementById('cd-carat-from');
    const caratTo = document.getElementById('cd-carat-to');

    if (caratFrom) caratFrom.addEventListener('input', e => { cdState.caratMin = parseFloat(e.target.value) || null; renderInventoryGrid(); });
    if (caratTo) caratTo.addEventListener('input', e => { cdState.caratMax = parseFloat(e.target.value) || null; renderInventoryGrid(); });

    const presets = document.querySelectorAll('#cd-carat-presets .gd-cd-preset');
    presets.forEach(p => {
      p.addEventListener('click', function () {
        const val = parseFloat(this.getAttribute('data-carat')) || 0;
        presets.forEach(pr => pr.classList.remove('is-active'));
        if (cdState.caratMin === val) {
          cdState.caratMin = null;
          cdState.caratMax = null;
          if (caratFrom) caratFrom.value = '';
          if (caratTo) caratTo.value = '';
        } else {
          this.classList.add('is-active');
          cdState.caratMin = val;
          cdState.caratMax = val + 0.19;
          if (caratFrom) caratFrom.value = val;
          if (caratTo) caratTo.value = (val + 0.19).toFixed(2);
        }
        renderInventoryGrid();
      });
    });

    // Price Range Inputs
    const priceFrom = document.getElementById('cd-price-from');
    const priceTo = document.getElementById('cd-price-to');
    if (priceFrom) priceFrom.addEventListener('input', e => { cdState.priceMin = parseFloat(e.target.value) || null; renderInventoryGrid(); });
    if (priceTo) priceTo.addEventListener('input', e => { cdState.priceMax = parseFloat(e.target.value) || null; renderInventoryGrid(); });

    // Depth & Table Inputs
    const depthFrom = document.getElementById('cd-depth-from');
    const depthTo = document.getElementById('cd-depth-to');
    if (depthFrom) depthFrom.addEventListener('input', e => { cdState.depthMin = parseFloat(e.target.value) || null; renderInventoryGrid(); });
    if (depthTo) depthTo.addEventListener('input', e => { cdState.depthMax = parseFloat(e.target.value) || null; renderInventoryGrid(); });

    const tableFrom = document.getElementById('cd-table-from');
    const tableTo = document.getElementById('cd-table-to');
    if (tableFrom) tableFrom.addEventListener('input', e => { cdState.tableMin = parseFloat(e.target.value) || null; renderInventoryGrid(); });
    if (tableTo) tableTo.addEventListener('input', e => { cdState.tableMax = parseFloat(e.target.value) || null; renderInventoryGrid(); });

    // Quality Toggle Badges
    const tIdCut = document.getElementById('cd-toggle-idcut');
    if (tIdCut) tIdCut.addEventListener('click', function () { cdState.idCutOnly = !cdState.idCutOnly; this.classList.toggle('is-active', cdState.idCutOnly); renderInventoryGrid(); });

    const t3Ex = document.getElementById('cd-toggle-3ex');
    if (t3Ex) t3Ex.addEventListener('click', function () { cdState.threeExOnly = !cdState.threeExOnly; this.classList.toggle('is-active', cdState.threeExOnly); renderInventoryGrid(); });

    const t3Vg = document.getElementById('cd-toggle-3vg');
    if (t3Vg) t3Vg.addEventListener('click', function () { cdState.threeVgOnly = !cdState.threeVgOnly; this.classList.toggle('is-active', cdState.threeVgOnly); renderInventoryGrid(); });

    // Clear All Filters Button
    
    const sortSel = document.getElementById('cd-sort-select');
    if (sortSel) {
      sortSel.addEventListener('change', e => {
        cdSortMode = e.target.value;
        renderInventoryGrid();
      });
    }

    const vGrid = document.getElementById('cd-view-grid');
    const vTable = document.getElementById('cd-view-table');
    if (vGrid && vTable) {
      vGrid.addEventListener('click', () => {
        cdViewMode = 'grid';
        vGrid.classList.add('is-active');
        vTable.classList.remove('is-active');
        renderInventoryGrid();
      });
      vTable.addEventListener('click', () => {
        cdViewMode = 'table';
        vTable.classList.add('is-active');
        vGrid.classList.remove('is-active');
        renderInventoryGrid();
      });
    }


    const clearBtn = document.getElementById('cd-clear-all-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', resetAllCertifiedFilters);
    }
  }

  function resetAllCertifiedFilters() {
    cdState.selectedShapes.clear();
    cdState.selectedColors.clear();
    cdState.selectedClarities.clear();
    cdState.selectedLabs.clear();
    cdState.selectedCuts.clear();
    cdState.selectedPolishes.clear();
    cdState.selectedSymmetries.clear();
    cdState.caratMin = null;
    cdState.caratMax = null;
    cdState.priceMin = null;
    cdState.priceMax = null;
    cdState.depthMin = null;
    cdState.depthMax = null;
    cdState.tableMin = null;
    cdState.tableMax = null;
    cdState.idCutOnly = false;
    cdState.threeExOnly = false;
    cdState.threeVgOnly = false;

    // Reset UI Elements
    document.querySelectorAll('.gd-cd-shape-btn, .gd-cd-pill, .gd-cd-preset, .gd-cd-toggle').forEach(el => el.classList.remove('is-active'));
    ['cd-carat-from', 'cd-carat-to', 'cd-price-from', 'cd-price-to', 'cd-depth-from', 'cd-depth-to', 'cd-table-from', 'cd-table-to'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });

    // Reset legacy selects if present
    ['filter-shape', 'filter-mmsize', 'filter-color', 'filter-clarity', 'filter-pointsize', 'filter-cert'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });

    renderInventoryGrid();
  }

  // --------------------------------------------------------------------------
  // Global Authentication State & Wholesale Price Unlocking Engine
  // --------------------------------------------------------------------------
  window.updateGlobalAuthState = function () {
    let userStr = localStorage.getItem('gd_logged_in_user');
    let isAdmin = localStorage.getItem('gd_admin_session') === 'active';
    let user = null;
    try {
      if (userStr) user = JSON.parse(userStr);
    } catch (e) {}

    const isLoggedIn = !!(user || isAdmin);

    // 1. Update Header Login Links Across All Pages (Strictly target signin.html links)
    const loginLinks = document.querySelectorAll('a[href*="signin.html"]');
    loginLinks.forEach(link => {
      if (
        link.classList.contains('gd-link-forgot') ||
        link.classList.contains('gd-link-create') ||
        link.closest('.gd-auth-card') ||
        link.closest('.gd-outside-footer')
      ) {
        return;
      }

      if (isLoggedIn) {
        const displayName = user ? (user.name || user.email.split('@')[0]) : 'Admin';
        const userEmail = user ? user.email : 'admin@meleediamonds.com';
        const isAdminSession = isAdmin || (user && user.role === 'admin');
        const adminPath = window.location.pathname.includes('/category/') ? '../admin/index.html' : 'admin/index.html';

        const userPill = document.createElement('div');
        userPill.className = 'gd-nav-user-wrapper';
        userPill.style.cssText = 'position:relative; display:inline-block; margin-left:8px;';
        userPill.innerHTML = `
          <button type="button" class="gd-user-pill-btn" onclick="window.toggleUserMenu(event)" title="Account: ${displayName}" aria-label="Account Profile" style="background:#1b1464; color:#ffffff; border:1.5px solid rgba(255,255,255,0.25); width:38px; height:38px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; font-family:inherit; box-shadow:0 2px 10px rgba(0,0,0,0.25); transition:transform 0.15s ease;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </button>
          <div class="gd-user-dropdown-menu" style="display:none; position:absolute; right:0; top:calc(100% + 10px); background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 12px 28px -4px rgba(0,0,0,0.18); min-width:210px; z-index:99999; padding:6px 0; text-align:left;">
            <div style="padding:10px 16px; border-bottom:1px solid #f1f5f9; font-size:12px; color:#64748b;">
              Signed in as<br><strong style="color:#0f172a; font-size:13px; word-break:break-all;">${userEmail}</strong>
            </div>
            ${isAdminSession ? `<a href="${adminPath}" style="display:block; padding:9px 16px; font-size:13px; color:#1b1464; font-weight:600; text-decoration:none;">🛡️ Admin Portal</a>` : ''}
            <a href="javascript:void(0)" onclick="window.handleGlobalLogout()" style="display:block; padding:9px 16px; font-size:13px; color:#ef4444; font-weight:600; text-decoration:none;">Sign Out</a>
          </div>
        `;
        if (link.parentNode) {
          link.parentNode.replaceChild(userPill, link);
        }
      }
    });

    // Toggle Dropdown Function
    window.toggleUserMenu = function (e) {
      if (e) e.stopPropagation();
      const btn = e.currentTarget;
      const wrapper = btn.closest('.gd-nav-user-wrapper');
      if (!wrapper) return;
      const drop = wrapper.querySelector('.gd-user-dropdown-menu');
      if (drop) {
        const isHidden = drop.style.display === 'none' || !drop.style.display;
        document.querySelectorAll('.gd-user-dropdown-menu').forEach(d => d.style.display = 'none');
        drop.style.display = isHidden ? 'block' : 'none';
      }
    };

    document.addEventListener('click', function () {
      document.querySelectorAll('.gd-user-dropdown-menu').forEach(d => d.style.display = 'none');
    });

    // Sign Out Handler
    window.handleGlobalLogout = function () {
      localStorage.removeItem('gd_logged_in_user');
      localStorage.removeItem('gd_admin_session');
      alert('You have been signed out.');
      window.location.reload();
    };

    // 2. Unlock Prices & Add-to-Cart Buttons on Product Cards
    if (isLoggedIn) {
      unlockJewelryPrices();
    }
  };

  function unlockJewelryPrices() {
    const productCards = document.querySelectorAll('.gd-product-card');
    if (!productCards.length) return;

    const jewelryPrices = {
      "Radiant Eternity Band": 1450,
      "Emerald Shared-Prong Band": 1280,
      "French Cut Pavé Band": 890,
      "Baguette Channel Set Band": 1150,
      "Marquise & Round Eternity Band": 1320,
      "Classic Tennis Bracelet": 2450,
      "Emerald Cut Line Bracelet": 3800,
      "Diamond Bangle Bracelet": 1650,
      "Bezel Set Tennis Bracelet": 2100,
      "Cluster Diamond Flex Bracelet": 1950,
      "Climber Drop Earrings": 750,
      "Classic Diamond Studs": 980,
      "Diamond Halo Drop Earrings": 1120,
      "In-Out Diamond Huggie Hoops": 850,
      "Pear Shape Solitaire Earrings": 1400,
      "Graduated Tennis Necklace": 4200,
      "Diamond Rivière Necklace": 5900,
      "Emerald Cut Station Necklace": 2300,
      "Lariat Diamond Y-Necklace": 1850,
      "Pavé Collar Choker Necklace": 3100,
      "Solitaire Diamond Pendant": 890,
      "Halo Oval Diamond Pendant": 1050,
      "Floating Heart Diamond Pendant": 720,
      "Cross Diamond Pendant": 940,
      "Emerald Cut Bezel Pendant": 1350,
      "Cushion Solitaire Ring": 1680,
      "Oval Hidden Halo Ring": 2400,
      "Three-Stone Emerald Ring": 2850,
      "Pear Shape Solitaire Ring": 2150,
      "Toi et Moi Twin Ring": 3200,
      "Executive Diamond Watch": 4800,
      "Full Pavé Luxury Watch": 6500,
      "Baguette Bezel Chronograph": 7200,
      "Diamond Dial Dress Watch": 2900,
      "Ice Out Custom Diamond Watch": 8500
    };

    productCards.forEach((card, idx) => {
      const titleEl = card.querySelector('.gd-product-title');
      const title = titleEl ? titleEl.textContent.trim() : '';
      const price = jewelryPrices[title] || (850 + (idx * 120));

      const priceBtn = card.querySelector('.gd-login-price-btn');
      const actionBtn = card.querySelector('.gd-product-action-btn');

      if (priceBtn) {
        priceBtn.outerHTML = `
          <div class="gd-unlocked-price" style="display:flex; align-items:center; justify-content:space-between; background:#f0fdf4; border:1px solid #bbf7d0; color:#15803d; padding:10px 14px; border-radius:10px; font-size:13px; font-weight:700;">
            <span>Trade Price:</span>
            <span style="font-size:16px; color:#166534; font-weight:800;">$${price.toLocaleString()}</span>
          </div>
        `;
      }

      if (actionBtn) {
        const imgEl = card.querySelector('.gd-product-img-wrap img');
        const imgSrc = imgEl ? imgEl.getAttribute('src') : '';
        const metaEl = card.querySelector('.gd-product-meta');
        const meta = metaEl ? metaEl.textContent.trim() : '';
        const safeTitle = title.replace(/'/g, "\\'");
        const safeImg = imgSrc.replace(/'/g, "\\'");
        const safeMeta = meta.replace(/'/g, "\\'");

        actionBtn.outerHTML = `
          <button type="button" class="gd-add-cart-btn" onclick="window.addJewelryToCart('${safeTitle}', ${price}, '${safeImg}', '${safeMeta}')" style="display:flex; align-items:center; justify-content:center; gap:8px; background:#1b1464; color:#ffffff; width:100%; border:none; padding:11px; border-radius:10px; font-size:13px; font-weight:700; cursor:pointer; transition:all 0.2s ease;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span>Add to Trade Cart</span>
          </button>
        `;
      }
    });
  }

  // Global Add to Cart helper
  window.addJewelryToCart = function (title, price, imgSrc, meta) {
    try {
      let cart = JSON.parse(localStorage.getItem('itd_cart') || '[]');
      const existingIndex = cart.findIndex(item => item.name === title);

      if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
      } else {
        cart.push({
          id: 'jwl_' + Date.now(),
          name: title,
          price: price,
          image: imgSrc,
          details: meta,
          quantity: 1,
          shape: 'Fine Jewelry'
        });
      }

      localStorage.setItem('itd_cart', JSON.stringify(cart));

      const badge = document.getElementById('cart-badge');
      if (badge) {
        let totalCount = 0;
        cart.forEach(i => totalCount += (i.quantity || 1));
        badge.textContent = totalCount;
        badge.style.display = totalCount > 0 ? 'flex' : 'none';
      }

      alert('"' + title + '" has been added to your trade cart!');
    } catch (err) {
      console.error('Cart error:', err);
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    initCertifiedDiamondsUI();
    updateTypeSwitcherUI();
    renderInventoryGrid();
    bindLoupeTriggers();
    window.updateGlobalAuthState();
  });

  updateTypeSwitcherUI();
  renderInventoryGrid();
  bindLoupeTriggers();
  window.updateGlobalAuthState();

})();


