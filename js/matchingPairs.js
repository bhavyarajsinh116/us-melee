/* Melee Diamonds - Matching Pairs Data & Interactive Engine */
(function (window) {
  'use strict';

  // Master Matching Pairs Dataset
  const MATCHING_PAIRS_DATA = [
    {
      id: 'MP-101',
      title: 'ROUND EARRING PAIR 2.04 ctw (1.02ct + 1.02ct) E VS1 IGI 3EX',
      category: 'earrings',
      shape: 'Round',
      shapeCode: 'BR',
      totalCarat: 2.04,
      stoneA: { carat: 1.02, color: 'E', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '6.45 x 6.48 x 3.98', depth: 61.5, table: 57, cert: 'IGI LG58910481', ratio: '1.00', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      stoneB: { carat: 1.02, color: 'E', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '6.46 x 6.47 x 3.99', depth: 61.6, table: 57, cert: 'IGI LG58910482', ratio: '1.00', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      matchScore: 99.8,
      pricePerCarat: 650,
      totalPrice: 1326,
      type: 'lab-grown',
      lab: 'IGI',
      img: '../images/stones/stone-1042410.jpg',
      status: 'In Stock'
    },
    {
      id: 'MP-102',
      title: 'OVAL EARRING PAIR 3.10 ctw (1.55ct + 1.55ct) D VVS2 IGI',
      category: 'earrings',
      shape: 'Oval',
      shapeCode: 'OV',
      totalCarat: 3.10,
      stoneA: { carat: 1.55, color: 'D', clarity: 'VVS2', cut: 'EX', polish: 'EX', sym: 'EX', mm: '9.10 x 6.42 x 3.95', depth: 61.5, table: 58, cert: 'IGI LG61284910', ratio: '1.42', spin: 'https://video.meleediamonds.com/video.html?d=GD202-133AA' },
      stoneB: { carat: 1.55, color: 'D', clarity: 'VVS2', cut: 'EX', polish: 'EX', sym: 'EX', mm: '9.12 x 6.41 x 3.96', depth: 61.8, table: 58, cert: 'IGI LG61284911', ratio: '1.42', spin: 'https://video.meleediamonds.com/video.html?d=GD202-133AA' },
      matchScore: 99.6,
      pricePerCarat: 720,
      totalPrice: 2232,
      type: 'lab-grown',
      lab: 'IGI',
      img: '../images/stones/stone-1560755.jpg',
      status: 'In Stock'
    },
    {
      id: 'MP-103',
      title: 'CUSHION EARRING PAIR 4.02 ctw (2.01ct + 2.01ct) F VS1 IGI',
      category: 'earrings',
      shape: 'Cushion',
      shapeCode: 'CU',
      totalCarat: 4.02,
      stoneA: { carat: 2.01, color: 'F', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '7.52 x 7.48 x 4.88', depth: 65.2, table: 61, cert: 'IGI LG54901928', ratio: '1.01', spin: 'https://video.meleediamonds.com/video.html?d=GD257-24AAA' },
      stoneB: { carat: 2.01, color: 'F', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '7.54 x 7.49 x 4.89', depth: 65.1, table: 61, cert: 'IGI LG54901929', ratio: '1.01', spin: 'https://video.meleediamonds.com/video.html?d=GD257-24AAA' },
      matchScore: 99.5,
      pricePerCarat: 680,
      totalPrice: 2733,
      type: 'lab-grown',
      lab: 'IGI',
      img: '../images/stones/stone-106858.jpg',
      status: 'In Stock'
    },
    {
      id: 'MP-104',
      title: 'EMERALD CUT EARRING PAIR 2.50 ctw (1.25ct + 1.25ct) E VVS1 GIA',
      category: 'earrings',
      shape: 'Emerald',
      shapeCode: 'EM',
      totalCarat: 2.50,
      stoneA: { carat: 1.25, color: 'E', clarity: 'VVS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '7.20 x 5.12 x 3.48', depth: 68.0, table: 64, cert: 'GIA 24891024', ratio: '1.41', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      stoneB: { carat: 1.25, color: 'E', clarity: 'VVS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '7.22 x 5.13 x 3.49', depth: 68.1, table: 64, cert: 'GIA 24891025', ratio: '1.41', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      matchScore: 99.9,
      pricePerCarat: 810,
      totalPrice: 2025,
      type: 'lab-grown',
      lab: 'GIA',
      img: '../images/stones/stone-1042410.jpg',
      status: 'In Stock'
    },
    {
      id: 'MP-105',
      title: 'PEAR SHAPE SIDE STONE PAIR 1.20 ctw (0.60ct + 0.60ct) E VS1 IGI',
      category: 'side-stones',
      shape: 'Pear',
      shapeCode: 'PS',
      totalCarat: 1.20,
      stoneA: { carat: 0.60, color: 'E', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '7.10 x 4.65 x 2.85', depth: 61.3, table: 59, cert: 'IGI LG59810341', ratio: '1.53', spin: 'https://video.meleediamonds.com/video.html?d=GD202-133AA' },
      stoneB: { carat: 0.60, color: 'E', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '7.12 x 4.66 x 2.86', depth: 61.4, table: 59, cert: 'IGI LG59810342', ratio: '1.53', spin: 'https://video.meleediamonds.com/video.html?d=GD202-133AA' },
      matchScore: 99.4,
      pricePerCarat: 590,
      totalPrice: 708,
      type: 'lab-grown',
      lab: 'IGI',
      img: '../images/stones/stone-1005905.jpg',
      status: 'In Stock'
    },
    {
      id: 'MP-106',
      title: 'TRILLION SIDE STONE PAIR 0.90 ctw (0.45ct + 0.45ct) D VVS2 IGI',
      category: 'side-stones',
      shape: 'Trillion',
      shapeCode: 'TR',
      totalCarat: 0.90,
      stoneA: { carat: 0.45, color: 'D', clarity: 'VVS2', cut: 'EX', polish: 'EX', sym: 'EX', mm: '5.20 x 5.22 x 3.10', depth: 59.6, table: 62, cert: 'IGI LG63301948', ratio: '1.00', spin: 'https://video.meleediamonds.com/video.html?d=GD202-133AA' },
      stoneB: { carat: 0.45, color: 'D', clarity: 'VVS2', cut: 'EX', polish: 'EX', sym: 'EX', mm: '5.21 x 5.23 x 3.11', depth: 59.6, table: 62, cert: 'IGI LG63301949', ratio: '1.00', spin: 'https://video.meleediamonds.com/video.html?d=GD202-133AA' },
      matchScore: 99.7,
      pricePerCarat: 620,
      totalPrice: 558,
      type: 'lab-grown',
      lab: 'IGI',
      img: '../images/stones/stone-106858.jpg',
      status: 'In Stock'
    },
    {
      id: 'MP-107',
      title: 'TRAPEZOID SIDE STONE PAIR 1.40 ctw (0.70ct + 0.70ct) F VS1 GIA',
      category: 'side-stones',
      shape: 'Trapezoid',
      shapeCode: 'TZ',
      totalCarat: 1.40,
      stoneA: { carat: 0.70, color: 'F', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '6.10 x 4.20 x 2.90', depth: 64.0, table: 63, cert: 'GIA 52190841', ratio: '1.45', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      stoneB: { carat: 0.70, color: 'F', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '6.12 x 4.21 x 2.91', depth: 64.1, table: 63, cert: 'GIA 52190842', ratio: '1.45', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      matchScore: 99.5,
      pricePerCarat: 640,
      totalPrice: 896,
      type: 'lab-grown',
      lab: 'GIA',
      img: '../images/stones/stone-1042410.jpg',
      status: 'In Stock'
    },
    {
      id: 'MP-108',
      title: 'RADIANT EARRING PAIR 5.04 ctw (2.52ct + 2.52ct) E VVS2 IGI',
      category: 'earrings',
      shape: 'Radiant',
      shapeCode: 'RA',
      totalCarat: 5.04,
      stoneA: { carat: 2.52, color: 'E', clarity: 'VVS2', cut: 'EX', polish: 'EX', sym: 'EX', mm: '8.80 x 6.70 x 4.60', depth: 68.6, table: 65, cert: 'IGI LG58102934', ratio: '1.31', spin: 'https://video.meleediamonds.com/video.html?d=GD257-24AAA' },
      stoneB: { carat: 2.52, color: 'E', clarity: 'VVS2', cut: 'EX', polish: 'EX', sym: 'EX', mm: '8.82 x 6.71 x 4.61', depth: 68.7, table: 65, cert: 'IGI LG58102935', ratio: '1.31', spin: 'https://video.meleediamonds.com/video.html?d=GD257-24AAA' },
      matchScore: 99.8,
      pricePerCarat: 790,
      totalPrice: 3981,
      type: 'lab-grown',
      lab: 'IGI',
      img: '../images/stones/stone-1560755.jpg',
      status: 'In Stock'
    },
    {
      id: 'MP-109',
      title: 'ASSCHER EARRING PAIR 3.60 ctw (1.80ct + 1.80ct) D VS1 IGI',
      category: 'earrings',
      shape: 'Asscher',
      shapeCode: 'AS',
      totalCarat: 3.60,
      stoneA: { carat: 1.80, color: 'D', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '6.85 x 6.84 x 4.58', depth: 66.9, table: 60, cert: 'IGI LG69104812', ratio: '1.00', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      stoneB: { carat: 1.80, color: 'D', clarity: 'VS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '6.86 x 6.85 x 4.59', depth: 66.9, table: 60, cert: 'IGI LG69104813', ratio: '1.00', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      matchScore: 99.6,
      pricePerCarat: 730,
      totalPrice: 2628,
      type: 'lab-grown',
      lab: 'IGI',
      img: '../images/stones/stone-1042410.jpg',
      status: 'In Stock'
    },
    {
      id: 'MP-110',
      title: 'PRINCESS EARRING PAIR 2.00 ctw (1.00ct + 1.00ct) F VVS1 IGI',
      category: 'earrings',
      shape: 'Princess',
      shapeCode: 'PR',
      totalCarat: 2.00,
      stoneA: { carat: 1.00, color: 'F', clarity: 'VVS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '5.50 x 5.48 x 3.90', depth: 71.1, table: 68, cert: 'IGI LG48102931', ratio: '1.00', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      stoneB: { carat: 1.00, color: 'F', clarity: 'VVS1', cut: 'EX', polish: 'EX', sym: 'EX', mm: '5.51 x 5.49 x 3.91', depth: 71.2, table: 68, cert: 'IGI LG48102932', ratio: '1.00', spin: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      matchScore: 99.7,
      pricePerCarat: 630,
      totalPrice: 1260,
      type: 'lab-grown',
      lab: 'IGI',
      img: '../images/stones/stone-1042410.jpg',
      status: 'In Stock'
    }
  ];

  // State Management
  const state = {
    category: 'all',
    shapes: new Set(),
    colors: new Set(),
    clarities: new Set(),
    caratMin: null,
    caratMax: null,
    priceMin: null,
    priceMax: null,
    minMatchScore: 95.0,
    searchQuery: '',
    sortMode: 'match-desc',
    viewMode: 'table',
    activePair: null
  };


  // Generate matching pairs dynamically from COMBINED_STOCK_DATA
  function generateStockPairs() {
    if (!window.COMBINED_STOCK_DATA) return [];
    
    const stock = window.COMBINED_STOCK_DATA;
    // Exclude Round Melee and mix types - only pair-worthy shapes
    const pairableShapes = ['Asscher', 'Cushion', 'Emerald', 'Heart', 'Marquise', 'Oval', 'Pear', 'Princess', 'Radiant', 'Square Radiant', 'Trilliant', 'Triangle', 'Baguette', 'Tapered Baguette', 'Kite', 'Square'];
    
    const filtered = stock.filter(item => {
      const shape = (item.shape || '').replace(/-mix$/, '').replace(/-JP$/, '');
      return pairableShapes.includes(shape) && !shape.includes('mix');
    });
    
    // Group by shape + mm_size + color + clarity for perfect matching
    const groups = {};
    filtered.forEach(item => {
      const shape = (item.shape || '').replace(/-mix$/, '').replace(/-JP$/, '');
      const key = shape + '|' + item.mm_size + '|' + item.color + '|' + item.clarity;
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });
    
    const pairs = [];
    let pairId = 1000;
    
    Object.keys(groups).forEach(key => {
      const items = groups[key];
      // Each group with enough stock weight can form a pair
      // We treat each stock item as a "lot" - a pair is 2 stones from the same spec
      items.forEach(item => {
        const totalWeight = parseFloat(item.total_weight) || 0;
        if (totalWeight < 0.1) return; // skip items with no weight
        
        pairId++;
        const shape = (item.shape || '').replace(/-mix$/, '').replace(/-JP$/, '');
        const mmParts = (item.mm_size || '0 x 0').split(' x ');
        const mmW = parseFloat(mmParts[0]) || 0;
        const mmH = parseFloat(mmParts[1] || mmParts[0]) || 0;
        const color = item.color || 'E-F';
        const clarity = item.clarity || 'VS';
        const ptSize = item.point_size || '0-PT';
        const ptNum = parseFloat(ptSize.replace('-PT', '').replace('PT', '')) || 0;
        const caratPerStone = ptNum > 0 ? (ptNum / 100) : (totalWeight / 4);
        const pairCarat = caratPerStone * 2;
        const pricePerCarat = 120 + (mmW * 30); // estimated price scaling with size
        
        // Determine category based on shape
        let category = 'earrings';
        if (['Baguette', 'Tapered Baguette', 'Kite', 'Triangle', 'Trilliant'].includes(shape)) {
          category = 'side-stones';
        } else if (['Marquise', 'Pear'].includes(shape)) {
          category = Math.random() > 0.5 ? 'earrings' : 'side-stones';
        }
        
        const shapeCodeMap = { 'Round': 'BR', 'Oval': 'OV', 'Cushion': 'CU', 'Emerald': 'EM', 'Pear': 'PS', 'Marquise': 'MQ', 'Princess': 'PR', 'Radiant': 'RA', 'Asscher': 'AS', 'Heart': 'HT', 'Trilliant': 'TR', 'Triangle': 'TG', 'Baguette': 'BG', 'Tapered Baguette': 'TB', 'Kite': 'KT', 'Square': 'SQ', 'Square Radiant': 'SR' };
        
        const colorFirst = color.split('-')[0] || 'E';
        const matchScore = (95 + Math.random() * 4.9).toFixed(1);
        
        pairs.push({
          id: 'SP-' + pairId,
          title: shape.toUpperCase() + ' PAIR ' + pairCarat.toFixed(2) + ' ctw (' + caratPerStone.toFixed(2) + 'ct + ' + caratPerStone.toFixed(2) + 'ct) ' + colorFirst + ' ' + clarity + ' IGI',
          category: category,
          shape: shape,
          shapeCode: shapeCodeMap[shape] || shape.substring(0,2).toUpperCase(),
          totalCarat: parseFloat(pairCarat.toFixed(2)),
          stoneA: {
            carat: parseFloat(caratPerStone.toFixed(2)),
            color: colorFirst,
            clarity: clarity,
            cut: 'EX', polish: 'EX', sym: 'EX',
            mm: item.mm_size,
            depth: (60 + Math.random() * 6).toFixed(1),
            table: Math.round(56 + Math.random() * 6),
            cert: 'IGI LG' + (40000000 + pairId),
            ratio: mmH > 0 ? (mmW / mmH).toFixed(2) : '1.00',
            spin: ''
          },
          stoneB: {
            carat: parseFloat(caratPerStone.toFixed(2)),
            color: colorFirst,
            clarity: clarity,
            cut: 'EX', polish: 'EX', sym: 'EX',
            mm: item.mm_size,
            depth: (60 + Math.random() * 6).toFixed(1),
            table: Math.round(56 + Math.random() * 6),
            cert: 'IGI LG' + (40000001 + pairId),
            ratio: mmH > 0 ? (mmW / mmH).toFixed(2) : '1.00',
            spin: ''
          },
          matchScore: parseFloat(matchScore),
          pricePerCarat: Math.round(pricePerCarat),
          totalPrice: Math.round(pricePerCarat * pairCarat),
          type: 'lab-grown',
          lab: 'IGI',
          img: '../images/stones/stone-1042410.jpg',
          status: item.status || 'In Stock',
          stockSource: item.source || 'Stock',
          stockId: item.id
        });
      });
    });
    
    return pairs;
  }

  function init() {
    bindFilters();
    renderPairs();
  }

  function getFilteredData() {
    const stockPairs = generateStockPairs();
    const allPairs = MATCHING_PAIRS_DATA.concat(stockPairs);
    return allPairs.filter(item => {
      if (state.category !== 'all' && item.category !== state.category) return false;
      if (state.shapes.size > 0 && !state.shapes.has(item.shape)) return false;
      if (state.colors.size > 0 && !state.colors.has(item.stoneA.color) && !state.colors.has(item.stoneB.color)) return false;
      if (state.clarities.size > 0 && !state.clarities.has(item.stoneA.clarity) && !state.clarities.has(item.stoneB.clarity)) return false;
      if (state.caratMin !== null && item.totalCarat < state.caratMin) return false;
      if (state.caratMax !== null && item.totalCarat > state.caratMax) return false;
      if (state.priceMin !== null && item.totalPrice < state.priceMin) return false;
      if (state.priceMax !== null && item.totalPrice > state.priceMax) return false;
      if (item.matchScore < state.minMatchScore) return false;

      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase();
        const searchStr = `${item.title} ${item.id} ${item.shape} ${item.stoneA.cert} ${item.stoneB.cert}`.toLowerCase();
        if (!searchStr.includes(q)) return false;
      }

      return true;
    }).sort((a, b) => {
      if (state.sortMode === 'price-asc') return a.totalPrice - b.totalPrice;
      if (state.sortMode === 'price-desc') return b.totalPrice - a.totalPrice;
      if (state.sortMode === 'carat-desc') return b.totalCarat - a.totalCarat;
      if (state.sortMode === 'match-desc') return b.matchScore - a.matchScore;
      return 0;
    });
  }

  function renderPairs() {
  const gridEl = document.getElementById('pairs-grid-container');
  const countEl = document.getElementById('pairs-count');
  if (!gridEl) return;

  const hasActiveFilters = state.category !== 'all' || 
                           state.shapes.size > 0 || 
                           state.searchQuery.trim() !== '' || 
                           state.caratMin !== null || 
                           state.caratMax !== null || 
                           state.priceMin !== null || 
                           state.priceMax !== null;

  if (!hasActiveFilters) {
      if (countEl) countEl.textContent = '0 Matching Pairs Selected';
      gridEl.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 text-2xl">
            <i class="fa-solid fa-filter"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-2">Select Filters to View Matching Pairs</h3>
          <p class="text-slate-500 text-sm max-w-md mx-auto mb-6">Please select a shape, category, or apply other filters above to view the matching pairs inventory.</p>
        </div>
      `;
      return;
  }

  const data = getFilteredData();
    if (countEl) countEl.textContent = `${data.length} Matching Pairs Available`;

    if (data.length === 0) {
      gridEl.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 text-2xl">
            <i class="fa-solid fa-gem"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-2">No Matching Pairs Found</h3>
          <p class="text-slate-500 text-sm max-w-md mx-auto mb-6">We couldn't find any calibrated pair matching your exact filter criteria. Try expanding your search tolerances.</p>
          <button id="reset-mp-filters" class="px-6 py-2.5 bg-slate-900 text-amber-300 font-semibold rounded-lg hover:bg-slate-800 transition">Reset All Filters</button>
        </div>
      `;
      const btn = document.getElementById('reset-mp-filters');
      if (btn) btn.addEventListener('click', resetFilters);
      return;
    }

    if (state.viewMode === 'grid') {
      gridEl.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      gridEl.innerHTML = data.map(pair => `
        <div class="bg-white rounded-2xl border border-slate-200 hover:border-amber-400/60 transition shadow-sm hover:shadow-xl overflow-hidden flex flex-col group">
          <!-- Card Header & Badge -->
          <div class="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300/40">
              <i class="fa-solid fa-award text-amber-600"></i> ${pair.matchScore}% Match Ratio
            </span>
            <span class="text-xs font-mono font-medium text-slate-500">${pair.id}</span>
          </div>

          <!-- Dual Stone Display Area -->
          <div class="p-6 bg-slate-900 text-white relative flex items-center justify-around gap-4 min-h-[160px] group-hover:bg-slate-950 transition">
            <div class="text-center flex-1">
              <div class="w-16 h-16 mx-auto mb-2 rounded-xl bg-slate-800/80 border border-slate-700 p-2 flex items-center justify-center">
                <img src="${pair.img}" alt="Stone A" class="max-h-full max-w-full object-contain filter drop-shadow-md">
              </div>
              <span class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Stone 1</span>
              <span class="text-sm font-bold text-amber-300">${pair.stoneA.carat}ct ${pair.stoneA.color} ${pair.stoneA.clarity}</span>
            </div>

            <div class="flex flex-col items-center justify-center">
              <div class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-xs font-bold">
                <i class="fa-solid fa-link"></i>
              </div>
              <span class="text-[10px] text-amber-300/80 font-mono mt-1">${pair.shape}</span>
            </div>

            <div class="text-center flex-1">
              <div class="w-16 h-16 mx-auto mb-2 rounded-xl bg-slate-800/80 border border-slate-700 p-2 flex items-center justify-center">
                <img src="${pair.img}" alt="Stone B" class="max-h-full max-w-full object-contain filter drop-shadow-md">
              </div>
              <span class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Stone 2</span>
              <span class="text-sm font-bold text-amber-300">${pair.stoneB.carat}ct ${pair.stoneB.color} ${pair.stoneB.clarity}</span>
            </div>
          </div>

          <!-- Details & Specs -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h4 class="font-bold text-slate-900 text-base mb-3 group-hover:text-amber-700 transition leading-snug">${pair.title}</h4>

              <div class="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <span class="text-slate-400 block">Total Weight:</span>
                  <span class="font-bold text-slate-800">${pair.totalCarat} ctw</span>
                </div>
                <div>
                  <span class="text-slate-400 block">MM Dimensions:</span>
                  <span class="font-bold text-slate-800">${pair.stoneA.mm.split(' x ')[0]} x ${pair.stoneA.mm.split(' x ')[1]} mm</span>
                </div>
                <div>
                  <span class="text-slate-400 block">Lab Certificate:</span>
                  <span class="font-bold text-slate-800">${pair.lab} Certified</span>
                </div>
                <div>
                  <span class="text-slate-400 block">Cut Grade:</span>
                  <span class="font-bold text-slate-800">Ideal / EX</span>
                </div>
              </div>
            </div>

            <!-- Price & Actions -->
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-400 block">Wholesale Pair Price</span>
                <span class="text-xl font-extrabold text-slate-900">$${pair.totalPrice.toLocaleString()}</span>
                <span class="text-[11px] text-slate-500 block">($${pair.pricePerCarat}/ct)</span>
              </div>
              <button onclick="window.MatchingPairsEngine.openPairModal('${pair.id}')" class="px-4 py-2.5 bg-slate-900 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs rounded-xl transition shadow-md flex items-center gap-2">
                <i class="fa-solid fa-eye"></i> View Details
              </button>
            </div>
          </div>
        </div>
      `).join('');
    } else {
      gridEl.className = 'w-full overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm';
      gridEl.innerHTML = `
        <table class="w-full text-left text-xs text-slate-700">
          <thead class="bg-slate-900 text-amber-300 font-semibold uppercase tracking-wider text-[11px]">
            <tr>
              <th class="p-3.5">Pair ID</th>
              <th class="p-3.5">Shape</th>
              <th class="p-3.5">Total CTW</th>
              <th class="p-3.5">Stone A Spec</th>
              <th class="p-3.5">Stone B Spec</th>
              <th class="p-3.5">MM Size</th>
              <th class="p-3.5">Match %</th>
              <th class="p-3.5">Price/CT</th>
              <th class="p-3.5">Total Pair Price</th>
              <th class="p-3.5 text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${data.map(pair => `
              <tr class="hover:bg-amber-50/40 transition">
                <td class="p-3.5 font-bold font-mono text-slate-900">${pair.id}</td>
                <td class="p-3.5 font-semibold text-slate-800">${pair.shape}</td>
                <td class="p-3.5 font-bold text-amber-700">${pair.totalCarat} ctw</td>
                <td class="p-3.5">${pair.stoneA.carat}ct ${pair.stoneA.color} ${pair.stoneA.clarity}</td>
                <td class="p-3.5">${pair.stoneB.carat}ct ${pair.stoneB.color} ${pair.stoneB.clarity}</td>
                <td class="p-3.5 font-mono">${pair.stoneA.mm.split(' x ')[0]} x ${pair.stoneA.mm.split(' x ')[1]}</td>
                <td class="p-3.5"><span class="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-bold">${pair.matchScore}%</span></td>
                <td class="p-3.5 font-mono">$${pair.pricePerCarat}</td>
                <td class="p-3.5 font-extrabold text-slate-900">$${pair.totalPrice.toLocaleString()}</td>
                <td class="p-3.5 text-right">
                  <button onclick="window.MatchingPairsEngine.openPairModal('${pair.id}')" class="px-3 py-1.5 bg-slate-900 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold rounded text-xs transition">
                    View
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }
  }

  function bindFilters() {
    // Category tabs
    document.querySelectorAll('[data-mp-cat]').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('[data-mp-cat]').forEach(b => b.classList.remove('bg-slate-900', 'text-amber-300', 'shadow-md'));
        document.querySelectorAll('[data-mp-cat]').forEach(b => b.classList.add('bg-white', 'text-slate-700', 'border-slate-200'));
        this.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
        this.classList.add('bg-slate-900', 'text-amber-300', 'shadow-md');
        state.category = this.getAttribute('data-mp-cat');
        renderPairs();
      });
    });

    // Shapes
    document.querySelectorAll('[data-mp-shape]').forEach(btn => {
      btn.addEventListener('click', function () {
        const s = this.getAttribute('data-mp-shape');
        if (state.shapes.has(s)) {
          state.shapes.delete(s);
          this.classList.remove('bg-amber-500', 'text-slate-950', 'border-amber-500');
          this.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
        } else {
          state.shapes.add(s);
          this.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
          this.classList.add('bg-amber-500', 'text-slate-950', 'border-amber-500');
        }
        renderPairs();
      });
    });

    // Search input
    const searchInput = document.getElementById('mp-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        state.searchQuery = e.target.value;
        renderPairs();
      });
    }

    // Sort mode
    const sortSelect = document.getElementById('mp-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        state.sortMode = e.target.value;
        renderPairs();
      });
    }

    // View mode switchers
    const vGrid = document.getElementById('mp-view-grid');
    const vTable = document.getElementById('mp-view-table');
    if (vGrid && vTable) {
      vGrid.addEventListener('click', () => {
        state.viewMode = 'grid';
        vGrid.classList.add('bg-slate-900', 'text-amber-300');
        vTable.classList.remove('bg-slate-900', 'text-amber-300');
        renderPairs();
      });
      vTable.addEventListener('click', () => {
        state.viewMode = 'table';
        vTable.classList.add('bg-slate-900', 'text-amber-300');
        vGrid.classList.remove('bg-slate-900', 'text-amber-300');
        renderPairs();
      });
    }

    // Inputs for Carat & Price Range
    const caratMinEl = document.getElementById('mp-carat-min');
    const caratMaxEl = document.getElementById('mp-carat-max');
    if (caratMinEl) caratMinEl.addEventListener('input', e => { state.caratMin = parseFloat(e.target.value) || null; renderPairs(); });
    if (caratMaxEl) caratMaxEl.addEventListener('input', e => { state.caratMax = parseFloat(e.target.value) || null; renderPairs(); });

    const priceMinEl = document.getElementById('mp-price-min');
    const priceMaxEl = document.getElementById('mp-price-max');
    if (priceMinEl) priceMinEl.addEventListener('input', e => { state.priceMin = parseFloat(e.target.value) || null; renderPairs(); });
    if (priceMaxEl) priceMaxEl.addEventListener('input', e => { state.priceMax = parseFloat(e.target.value) || null; renderPairs(); });
  }

  function resetFilters() {
    state.category = 'all';
    state.shapes.clear();
    state.colors.clear();
    state.clarities.clear();
    state.caratMin = null;
    state.caratMax = null;
    state.priceMin = null;
    state.priceMax = null;
    state.searchQuery = '';

    document.querySelectorAll('[data-mp-shape]').forEach(b => {
      b.classList.remove('bg-amber-500', 'text-slate-950', 'border-amber-500');
      b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
    });

    ['mp-carat-min', 'mp-carat-max', 'mp-price-min', 'mp-price-max', 'mp-search-input'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });

    renderPairs();
  }

  function openPairModal(pairId) {
    const pair = MATCHING_PAIRS_DATA.find(p => p.id === pairId);
    if (!pair) return;
    state.activePair = pair;

    let modal = document.getElementById('pair-detail-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'pair-detail-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="bg-white rounded-3xl max-w-4xl w-full border border-amber-500/30 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-200">
        <!-- Modal Header -->
        <div class="bg-slate-900 p-6 text-white flex items-center justify-between border-b border-amber-500/20">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950">${pair.id}</span>
              <span class="text-xs text-amber-300 font-mono"><i class="fa-solid fa-award"></i> ${pair.matchScore}% Match Score</span>
            </div>
            <h3 class="text-xl font-bold text-white">${pair.title}</h3>
          </div>
          <button onclick="document.getElementById('pair-detail-modal').remove()" class="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-lg transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          <!-- Dual Video & Image Comparison -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Stone A -->
            <div class="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white text-center">
              <span class="text-xs uppercase font-extrabold tracking-widest text-amber-400 block mb-2">STONE A (LEFT)</span>
              <div class="w-full h-48 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden mb-3 relative">
                <iframe src="${pair.stoneA.spin}" class="w-full h-full border-0"></iframe>
              </div>
              <div class="font-bold text-base text-white mb-1">${pair.stoneA.carat} ct ${pair.stoneA.color} ${pair.stoneA.clarity} ${pair.shape}</div>
              <div class="text-xs text-slate-400 font-mono">MM: ${pair.stoneA.mm}</div>
              <div class="text-xs text-amber-300 font-mono mt-1">Cert: ${pair.stoneA.cert}</div>
            </div>

            <!-- Stone B -->
            <div class="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white text-center">
              <span class="text-xs uppercase font-extrabold tracking-widest text-amber-400 block mb-2">STONE B (RIGHT)</span>
              <div class="w-full h-48 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden mb-3 relative">
                <iframe src="${pair.stoneB.spin}" class="w-full h-full border-0"></iframe>
              </div>
              <div class="font-bold text-base text-white mb-1">${pair.stoneB.carat} ct ${pair.stoneB.color} ${pair.stoneB.clarity} ${pair.shape}</div>
              <div class="text-xs text-slate-400 font-mono">MM: ${pair.stoneB.mm}</div>
              <div class="text-xs text-amber-300 font-mono mt-1">Cert: ${pair.stoneB.cert}</div>
            </div>
          </div>

          <!-- Specs Side by Side Table -->
          <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200">
            <h4 class="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
              <i class="fa-solid fa-code-compare text-amber-600"></i> Detailed Pair Side-by-Side Match Matrix
            </h4>
            <table class="w-full text-xs text-slate-700">
              <thead class="bg-slate-200 font-semibold text-slate-800">
                <tr>
                  <th class="p-2">Specification</th>
                  <th class="p-2 text-center">Stone A</th>
                  <th class="p-2 text-center">Stone B</th>
                  <th class="p-2 text-center">Tolerance Match</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr><td class="p-2 font-semibold">Carat Weight</td><td class="p-2 text-center">${pair.stoneA.carat} ct</td><td class="p-2 text-center">${pair.stoneB.carat} ct</td><td class="p-2 text-center font-bold text-emerald-600">Perfect Match</td></tr>
                <tr><td class="p-2 font-semibold">Color Grade</td><td class="p-2 text-center">${pair.stoneA.color}</td><td class="p-2 text-center">${pair.stoneB.color}</td><td class="p-2 text-center font-bold text-emerald-600">Identical Color</td></tr>
                <tr><td class="p-2 font-semibold">Clarity Grade</td><td class="p-2 text-center">${pair.stoneA.clarity}</td><td class="p-2 text-center">${pair.stoneB.clarity}</td><td class="p-2 text-center font-bold text-emerald-600">Identical Clarity</td></tr>
                <tr><td class="p-2 font-semibold">Dimensions (mm)</td><td class="p-2 text-center font-mono">${pair.stoneA.mm}</td><td class="p-2 text-center font-mono">${pair.stoneB.mm}</td><td class="p-2 text-center font-bold text-emerald-600">< 0.02 mm diff</td></tr>
                <tr><td class="p-2 font-semibold">Depth / Table %</td><td class="p-2 text-center">${pair.stoneA.depth}% / ${pair.stoneA.table}%</td><td class="p-2 text-center">${pair.stoneB.depth}% / ${pair.stoneB.table}%</td><td class="p-2 text-center font-bold text-emerald-600">Optically Calibrated</td></tr>
                <tr><td class="p-2 font-semibold">Ratio</td><td class="p-2 text-center">${pair.stoneA.ratio}</td><td class="p-2 text-center">${pair.stoneB.ratio}</td><td class="p-2 text-center font-bold text-emerald-600">Exact Ratio</td></tr>
              </tbody>
            </table>
          </div>

          <!-- Trade Inquiry / Order Form -->
          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h4 class="font-bold text-amber-950 text-sm mb-2"><i class="fa-solid fa-paper-plane text-amber-600"></i> Reserve / Hold Pair Request</h4>
            <p class="text-xs text-amber-800 mb-4">Request 24-hour hold or wholesale checkout quote for Pair ${pair.id}.</p>
            
            <form id="pair-inquiry-form" onsubmit="window.MatchingPairsEngine.handlePairInquiry(event)" class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input type="text" id="mp-cust-name" placeholder="Your Name *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              <input type="text" id="mp-cust-company" placeholder="Company Name *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              <input type="email" id="mp-cust-email" placeholder="Email Address *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              <input type="tel" id="mp-cust-phone" placeholder="Mobile / WhatsApp *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              <textarea id="mp-cust-notes" placeholder="Custom notes or delivery timeline..." class="col-span-full px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 h-16"></textarea>
              
              <div class="col-span-full flex items-center justify-between pt-2">
                <div>
                  <span class="text-xs text-slate-500 block">Total Pair Price:</span>
                  <span class="text-xl font-extrabold text-slate-900">$${pair.totalPrice.toLocaleString()}</span>
                </div>
                <button type="submit" class="px-6 py-3 bg-slate-900 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs rounded-xl transition shadow-lg flex items-center gap-2">
                  <i class="fa-solid fa-check"></i> Submit Pair Hold Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  function handlePairInquiry(e) {
    e.preventDefault();
    const name = document.getElementById('mp-cust-name').value;
    const company = document.getElementById('mp-cust-company').value;
    const email = document.getElementById('mp-cust-email').value;
    const phone = document.getElementById('mp-cust-phone').value;
    const notes = document.getElementById('mp-cust-notes').value;

    const pair = state.activePair;
    if (!pair) return;

    const newInquiry = {
      id: 'inq_' + Date.now(),
      name: name,
      company: company,
      email: email,
      phone: phone,
      type: 'Matching Pair Request',
      subject: `Hold Request for Pair ${pair.id} (${pair.title})`,
      message: `Customer requested hold/quote for Pair ${pair.id} ($${pair.totalPrice}). Notes: ${notes}`,
      status: 'New',
      submittedAt: new Date().toLocaleString()
    };

    if (window.DataStore && window.DataStore.saveRecord) {
      window.DataStore.saveRecord('inquiries', newInquiry);
    } else {
      let localInqs = JSON.parse(localStorage.getItem('gd_admin_database_v1') || '{}');
      if (!localInqs.inquiries) localInqs.inquiries = [];
      localInqs.inquiries.unshift(newInquiry);
      localStorage.setItem('gd_admin_database_v1', JSON.stringify(localInqs));
    }

    alert(`Thank you ${name}! Your hold request for Pair ${pair.id} ($${pair.totalPrice.toLocaleString()}) has been sent to our wholesale desk.`);
    document.getElementById('pair-detail-modal').remove();
  }

  window.MatchingPairsEngine = {
    init: init,
    openPairModal: openPairModal,
    handlePairInquiry: handlePairInquiry,
    resetFilters: resetFilters
  };

  document.addEventListener('DOMContentLoaded', init);
})(window);
