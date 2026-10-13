/* Melee Diamonds - Fancy Loose & Layout Data Engine */
(function (window) {
  'use strict';

  // Preset Layout Suites
  const PRESET_LAYOUTS = [
    {
      id: 'LY-201',
      title: 'GRADUATED OVAL TENNIS NECKLACE LAYOUT',
      shape: 'Oval',
      pieceCount: 21,
      totalWeight: 15.50,
      color: 'E-F',
      clarity: 'VVS-VS',
      mmBreakdown: 'Center 9.0x6.5mm (2.0ct) graduating down to 5.0x3.5mm (0.45ct)',
      price: 10850,
      img: '../images/stones/stone-1560755.jpg',
      blueprint: 'Center stone 2.00ct Oval flanked by 10 graduated oval diamonds on each side matching in length-to-width ratio (1.38 - 1.42).'
    },
    {
      id: 'LY-202',
      title: 'EMERALD CUT ETERNITY BAND LAYOUT (FULL CALIBRATED SET)',
      shape: 'Emerald',
      pieceCount: 18,
      totalWeight: 9.00,
      color: 'E-F',
      clarity: 'VS',
      mmBreakdown: '18 Pieces @ 5.00 x 3.50 mm (0.50ct each)',
      price: 6300,
      img: '../images/stones/stone-1005905.jpg',
      blueprint: '18 perfectly calibrated Emerald cut diamonds with identical corner step angles and 1.43 length-to-width ratios.'
    },
    {
      id: 'LY-203',
      title: '5-STONE GRADUATED CUSHION RING SUITE',
      shape: 'Cushion',
      pieceCount: 5,
      totalWeight: 4.20,
      color: 'D-E',
      clarity: 'VVS2',
      mmBreakdown: 'Center 1.50ct (7.0mm), 2x 0.85ct (5.8mm), 2x 0.50ct (4.8mm)',
      price: 3360,
      img: '../images/stones/stone-106858.jpg',
      blueprint: 'Graduated cushion suite crafted for high-end 5-stone trellis or basket ring setting.'
    },
    {
      id: 'LY-204',
      title: 'TAPERED BAGUETTE & BULLET SIDE STONE SUITE',
      shape: 'Baguette',
      pieceCount: 2,
      totalWeight: 0.85,
      color: 'E',
      clarity: 'VVS1',
      mmBreakdown: '2 Pieces @ 5.50 x 3.20 x 2.20 mm',
      price: 680,
      img: '../images/stones/stone-1049916.jpg',
      blueprint: 'Custom tapered baguette side stone pair designed for solitaire engagement ring accent.'
    },
    {
      id: 'LY-205',
      title: 'RADIANT CUT 7-STONE GRADUATED WEDDING BAND',
      shape: 'Radiant',
      pieceCount: 7,
      totalWeight: 3.50,
      color: 'E-F',
      clarity: 'VVS2',
      mmBreakdown: 'Center 4.5x4.5mm graduating down to 3.0x3.0mm',
      price: 2450,
      img: '../images/stones/stone-1042952.jpg',
      blueprint: 'Calibrated square radiant layout with clipped corners proportioned for low-profile channel or prong setting.'
    },
    {
      id: 'LY-206',
      title: 'PRINCESS CUT CALIBRATED THREE-STONE SUITE',
      shape: 'Princess',
      pieceCount: 3,
      totalWeight: 2.80,
      color: 'D-E',
      clarity: 'VVS1',
      mmBreakdown: 'Center 1.50ct (6.2x6.2mm), 2x 0.65ct (4.8x4.8mm)',
      price: 2240,
      img: '../images/stones/stone-1043111.jpg',
      blueprint: 'Matched trio of square modified brilliant princess cuts with 90-degree corners and eye-clean clarity.'
    }
  ];

  const state = {
    activeTab: 'loose', // 'loose' | 'layouts'
    viewMode: 'grid',   // 'grid' | 'table'
    selectedShapes: new Set(),
    searchQuery: '',
    currentFancyItem: null
  };

  function getShapeImage(shape) {
    if (!shape) return '../images/stones/stone-1042410.jpg';
    const s = shape.toLowerCase();
    if (s.includes('oval')) return '../images/stones/stone-1560755.jpg';
    if (s.includes('radiant')) return '../images/stones/stone-1042952.jpg';
    if (s.includes('cushion')) return '../images/stones/stone-106858.jpg';
    if (s.includes('prince')) return '../images/stones/stone-1043111.jpg';
    if (s.includes('marquise')) return '../images/stones/stone-rare-marquise.jpg';
    if (s.includes('emerald')) return '../images/stones/stone-1005905.jpg';
    if (s.includes('baguette') || s.includes('tbag') || s.includes('tapered')) return '../images/stones/stone-1049916.jpg';
    if (s.includes('asscher')) return '../images/stones/stone-1042410.jpg';
    if (s.includes('heart')) return '../images/stones/stone-1210754.jpg';
    if (s.includes('pear')) return '../images/stones/stone-806852.jpg';
    return '../images/stones/stone-1042410.jpg';
  }

  function matchesShape(itemShape, selectedShape) {
    if (!itemShape) return false;
    const s = itemShape.trim().toLowerCase();
    const t = selectedShape.trim().toLowerCase();
    if (t === 'asscher') return s.includes('asscher');
    if (t === 'oval') return s.includes('oval');
    if (t === 'radiant') return s.includes('radiant') || s.includes('square');
    if (t === 'cushion') return s.includes('cushion');
    if (t === 'princess') return s.includes('prince');
    if (t === 'marquise') return s.includes('marquise');
    if (t === 'emerald') return s.includes('emerald');
    if (t === 'baguette') return s.includes('baguette') || s.includes('tbag') || s.includes('tapered') || s.includes('bullet') || s.includes('triangle') || s.includes('trilliant');
    return s.includes(t);
  }

  function getLayoutStock() {
    let base = [];
    if (window.COMBINED_STOCK_DATA && window.COMBINED_STOCK_DATA.length > 0) {
      base = window.COMBINED_STOCK_DATA.filter(item => 
        !item.source || item.source.includes('1. Blank Layout Stock Sheet') || item.source.includes('Layout')
      );
    } else if (window.DataStore && window.DataStore.getCollection) {
      base = window.DataStore.getCollection('layoutStockData');
    } else if (window.LAYOUT_STOCK_DATA) {
      base = window.LAYOUT_STOCK_DATA;
    }
    if (!base || base.length === 0) {
      base = [
        { id: 'stk_1', source: '1. Blank Layout Stock Sheet', shape: 'Asscher', mm_size: '3.00 x 3.00', color: 'E-F', clarity: 'VS', point_size: '17-PT', hpht_weight: '5.95', cvd_weight: '5.10', total_weight: '11.05', status: 'In Stock (Ready to Ship)' },
        { id: 'stk_2', source: '1. Blank Layout Stock Sheet', shape: 'Asscher', mm_size: '3.50 x 3.50', color: 'E-F', clarity: 'VS', point_size: '27-PT', hpht_weight: '4.32', cvd_weight: '2.97', total_weight: '7.29', status: 'In Stock (Ready to Ship)' },
        { id: 'stk_7', source: '1. Blank Layout Stock Sheet', shape: 'Cushion', mm_size: '4.00 x 2.80', color: 'E-F', clarity: 'VS', point_size: '20-PT', hpht_weight: '8.20', cvd_weight: '7.20', total_weight: '15.40', status: 'In Stock (Ready to Ship)' },
        { id: 'stk_12', source: '1. Blank Layout Stock Sheet', shape: 'Emerald', mm_size: '4.00 x 3.00', color: 'E-F', clarity: 'VS', point_size: '23-PT', hpht_weight: '14.10', cvd_weight: '12.80', total_weight: '26.90', status: 'In Stock (Ready to Ship)' },
        { id: 'stk_18', source: '1. Blank Layout Stock Sheet', shape: 'Oval', mm_size: '5.00 x 3.50', color: 'E-F', clarity: 'VS', point_size: '35-PT', hpht_weight: '18.90', cvd_weight: '22.40', total_weight: '41.30', status: 'In Stock (Ready to Ship)' }
      ];
    }
    return base;
  }

  function init() {
    bindUI();
    renderContent();
  }

  function bindUI() {
    // 1. Tab switchers
    const tabLoose = document.getElementById('fl-tab-loose');
    const tabLayouts = document.getElementById('fl-tab-layouts');

    if (tabLoose) {
      tabLoose.addEventListener('click', () => {
        state.activeTab = 'loose';
        renderContent();
      });
    }

    if (tabLayouts) {
      tabLayouts.addEventListener('click', () => {
        state.activeTab = 'layouts';
        renderContent();
      });
    }

    // 2. Shape Badges Click Handlers
    const shapeSelector = document.getElementById('fl-shape-selector');
    if (shapeSelector) {
      shapeSelector.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-fl-shape]');
        if (!btn) return;
        e.preventDefault();
        
        const clickedShape = btn.getAttribute('data-fl-shape');
        if (!clickedShape) return;

        if (state.selectedShapes.has(clickedShape) && state.selectedShapes.size === 1) {
          state.selectedShapes.clear();
        } else if (state.selectedShapes.has(clickedShape)) {
          state.selectedShapes.delete(clickedShape);
        } else {
          // Single select or add
          state.selectedShapes.clear();
          state.selectedShapes.add(clickedShape);
        }
        renderContent();
      });
    }

    // 3. View Mode Toggle (Grid / Table)
    const btnGrid = document.getElementById('fl-view-grid-btn');
    const btnTable = document.getElementById('fl-view-table-btn');
    if (btnGrid) {
      btnGrid.addEventListener('click', () => {
        state.viewMode = 'grid';
        renderViewMode();
      });
    }
    if (btnTable) {
      btnTable.addEventListener('click', () => {
        state.viewMode = 'table';
        renderViewMode();
      });
    }

    // 4. Search input if present
    const searchInput = document.getElementById('fl-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        state.searchQuery = e.target.value;
        renderLooseInventory();
      });
    }
  }

  function updateTabButtonsUI() {
    const tabLoose = document.getElementById('fl-tab-loose');
    const tabLayouts = document.getElementById('fl-tab-layouts');
    if (!tabLoose || !tabLayouts) return;

    if (state.activeTab === 'loose') {
      tabLoose.className = 'px-5 py-3 rounded-2xl text-xs font-bold transition shadow-lg bg-amber-500 text-slate-950 shadow-amber-500/20';
      tabLayouts.className = 'px-5 py-3 rounded-2xl text-xs font-bold transition bg-slate-800 text-slate-300 border border-slate-700 hover:border-amber-400';
    } else {
      tabLayouts.className = 'px-5 py-3 rounded-2xl text-xs font-bold transition shadow-lg bg-amber-500 text-slate-950 shadow-amber-500/20';
      tabLoose.className = 'px-5 py-3 rounded-2xl text-xs font-bold transition bg-slate-800 text-slate-300 border border-slate-700 hover:border-amber-400';
    }
  }

  function syncShapeButtonsUI() {
    const shapeBtns = document.querySelectorAll('[data-fl-shape]');
    shapeBtns.forEach(btn => {
      const shp = btn.getAttribute('data-fl-shape');
      if (shp && state.selectedShapes.has(shp)) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
  }

  function renderViewMode() {
    const gridEl = document.getElementById('fl-stock-grid');
    const tableWrap = document.getElementById('fl-stock-table-wrap');
    const btnGrid = document.getElementById('fl-view-grid-btn');
    const btnTable = document.getElementById('fl-view-table-btn');

    if (state.viewMode === 'grid') {
      if (gridEl) gridEl.classList.remove('hidden');
      if (tableWrap) tableWrap.classList.add('hidden');
      if (btnGrid) {
        btnGrid.className = 'px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-900 text-amber-300 transition shadow-sm';
      }
      if (btnTable) {
        btnTable.className = 'px-3 py-1.5 text-xs font-bold rounded-lg text-slate-600 hover:text-slate-900 transition';
      }
    } else {
      if (gridEl) gridEl.classList.add('hidden');
      if (tableWrap) tableWrap.classList.remove('hidden');
      if (btnTable) {
        btnTable.className = 'px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-900 text-amber-300 transition shadow-sm';
      }
      if (btnGrid) {
        btnGrid.className = 'px-3 py-1.5 text-xs font-bold rounded-lg text-slate-600 hover:text-slate-900 transition';
      }
    }
  }

  function renderContent() {
    updateTabButtonsUI();
    syncShapeButtonsUI();

    const looseSec = document.getElementById('fl-loose-section');
    const layoutsSec = document.getElementById('fl-layouts-section');

    if (state.activeTab === 'loose') {
      if (looseSec) looseSec.classList.remove('hidden');
      if (layoutsSec) layoutsSec.classList.add('hidden');
      renderLooseInventory();
      renderViewMode();
    } else {
      if (looseSec) looseSec.classList.add('hidden');
      if (layoutsSec) layoutsSec.classList.remove('hidden');
      renderLayoutsSuites();
    }
  }

  function renderLooseInventory() {
    const allStock = getLayoutStock();
    let items = allStock;

    if (state.selectedShapes && state.selectedShapes.size > 0) {
      items = allStock.filter(i => {
        for (let shp of state.selectedShapes) {
          if (matchesShape(i.shape, shp)) return true;
        }
        return false;
      });
    }

    if (state.searchQuery && state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      items = items.filter(i => `${i.id} ${i.shape} ${i.mm_size} ${i.point_size} ${i.color}`.toLowerCase().includes(q));
    }

    // Update Header Counter and Title
    const previewCount = document.getElementById('fl-preview-count');
    if (previewCount) {
      previewCount.textContent = `${items.length} items available`;
    }

    const previewTitle = document.getElementById('fl-preview-title');
    if (previewTitle) {
      if (state.selectedShapes.size === 0) {
        previewTitle.textContent = 'All Calibrated Fancy Loose Stock';
      } else {
        const shapeNames = Array.from(state.selectedShapes).join(', ');
        previewTitle.textContent = `${shapeNames} Calibrated Stock`;
      }
    }

    // Ensure preview container is visible
    const previewContainer = document.getElementById('fl-stock-preview');
    if (previewContainer) {
      previewContainer.classList.remove('hidden');
    }

    const gridContainer = document.getElementById('fl-stock-grid');
    const tableBody = document.getElementById('fl-stock-table-body');

    if (items.length === 0) {
      const emptyHtml = `
        <div class="col-span-full py-12 px-4 text-center bg-slate-50 border border-slate-200 rounded-2xl">
          <div class="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xl mx-auto mb-3 shadow-sm">
            <i class="fa-solid fa-gem"></i>
          </div>
          <h4 class="text-base font-bold text-slate-800">No stock parcels found matching this filter</h4>
          <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Try clearing your shape selection to view all available wholesale parcels.</p>
          <button onclick="window.FancyLooseEngine.clearShapeFilter()" class="mt-4 px-4 py-2 bg-slate-900 text-amber-300 font-bold text-xs rounded-xl hover:bg-slate-800 transition">
            View All Stock (219 Items)
          </button>
        </div>
      `;
      if (gridContainer) gridContainer.innerHTML = emptyHtml;
      if (tableBody) tableBody.innerHTML = `<tr><td colspan="10" class="p-8 text-center text-slate-500 font-semibold">No stock parcels found matching this filter.</td></tr>`;
      return;
    }

    // Populate Grid Cards
    if (gridContainer) {
      gridContainer.innerHTML = items.map(item => {
        const imgSrc = getShapeImage(item.shape);
        return `
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-200 overflow-hidden flex flex-col justify-between group">
            <div class="relative bg-slate-950 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <img src="${imgSrc}" alt="${item.shape}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
              <span class="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-sm text-amber-300 font-mono text-[11px] font-bold px-2 py-0.5 rounded-md border border-amber-500/30">
                ${item.id}
              </span>
              <span class="absolute top-2.5 right-2.5 bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                ${item.status || 'In Stock'}
              </span>
              <span class="absolute bottom-2 right-2 bg-slate-900/80 text-slate-200 font-mono text-[10px] px-2 py-0.5 rounded">
                ${item.point_size || ''}
              </span>
            </div>
            <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <h4 class="font-serif font-bold text-slate-900 text-base">${item.shape}</h4>
                  <span class="font-mono font-bold text-amber-700 text-xs">${item.mm_size} mm</span>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">Color: <strong class="text-slate-800">${item.color || 'E-F'}</strong> &middot; Clarity: <strong class="text-slate-800">${item.clarity || 'VS'}</strong></p>
              </div>
              <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 grid grid-cols-2 gap-2 text-xs">
                <div><span class="text-slate-400 text-[10px] block">HPHT Weight</span><strong class="font-mono text-slate-800">${item.hpht_weight || '0.00'} ct</strong></div>
                <div><span class="text-slate-400 text-[10px] block">CVD Weight</span><strong class="font-mono text-slate-800">${item.cvd_weight || '0.00'} ct</strong></div>
                <div class="col-span-2 pt-1 border-t border-slate-200/60 flex justify-between items-center">
                  <span class="text-slate-500 text-[10px] font-bold uppercase">Total Available</span>
                  <strong class="font-mono text-emerald-700 font-bold">${item.total_weight || '0.00'} ct</strong>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-1">
                <button type="button" onclick="window.FancyLooseEngine.openInquiryModal('${item.id}', '${item.shape}', '${item.mm_size}')" class="flex-1 py-2 text-xs font-bold rounded-xl bg-slate-900 text-amber-300 hover:bg-slate-800 transition flex items-center justify-center gap-1.5 shadow-sm">
                  <i class="fa-solid fa-file-lines"></i> Inquire Parcel
                </button>
                <button type="button" onclick="window.FancyLooseEngine.openInquiryModal('${item.id}', '${item.shape}', '${item.mm_size}')" class="px-3 py-2 text-xs font-bold rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 transition" title="Add to Trade Cart">
                  <i class="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Populate Table Rows
    if (tableBody) {
      tableBody.innerHTML = items.map(item => `
        <tr class="hover:bg-amber-50/40 transition">
          <td class="p-3.5 font-bold text-slate-900 font-mono">${item.id}</td>
          <td class="p-3.5 font-extrabold text-slate-900">${item.shape}</td>
          <td class="p-3.5 font-mono text-slate-800 font-bold">${item.mm_size} mm</td>
          <td class="p-3.5">${item.color || 'E-F'} / ${item.clarity || 'VS'}</td>
          <td class="p-3.5 font-mono text-slate-700">${item.point_size || '-'}</td>
          <td class="p-3.5 font-mono text-slate-700">${item.hpht_weight || '0.00'} ct</td>
          <td class="p-3.5 font-mono text-slate-700">${item.cvd_weight || '0.00'} ct</td>
          <td class="p-3.5 font-mono font-bold text-emerald-700">${item.total_weight || '0.00'} ct</td>
          <td class="p-3.5">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${item.status || 'In Stock'}
            </span>
          </td>
          <td class="p-3.5 text-right">
            <button onclick="window.FancyLooseEngine.openInquiryModal('${item.id}', '${item.shape}', '${item.mm_size}')" class="px-3 py-1.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-300 font-bold text-xs rounded-xl transition shadow">
              Inquire Stone
            </button>
          </td>
        </tr>
      `).join('');
    }
  }

  function renderLayoutsSuites() {
    const container = document.getElementById('fl-layouts-grid') || document.getElementById('fl-suites-container');
    if (!container) return;

    container.innerHTML = PRESET_LAYOUTS.map(suite => `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between hover:border-amber-400 transition group">
        <div class="relative aspect-video bg-slate-950 overflow-hidden">
          <img src="${suite.img}" alt="${suite.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          <span class="absolute top-3 left-3 bg-slate-900/90 text-amber-300 font-mono text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-500/30">
            ${suite.id}
          </span>
          <span class="absolute top-3 right-3 bg-amber-500 text-slate-950 font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
            ${suite.shape} Cut
          </span>
        </div>

        <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div class="space-y-2">
            <h3 class="font-serif font-bold text-slate-900 text-lg group-hover:text-amber-700 transition leading-snug">${suite.title}</h3>
            <p class="text-xs text-slate-600 leading-relaxed">${suite.blueprint}</p>
          </div>
          
          <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs">
            <div class="flex justify-between"><span class="text-slate-500">Piece Count:</span><strong class="text-slate-900">${suite.pieceCount} Diamonds</strong></div>
            <div class="flex justify-between"><span class="text-slate-500">Total Weight:</span><strong class="text-emerald-700 font-mono">${suite.totalWeight} ctw</strong></div>
            <div class="flex justify-between"><span class="text-slate-500">Color / Clarity:</span><strong class="text-slate-900">${suite.color} / ${suite.clarity}</strong></div>
            <div class="flex justify-between"><span class="text-slate-500">Breakdown:</span><strong class="text-slate-900">${suite.mmBreakdown}</strong></div>
          </div>

          <div class="pt-4 flex items-center justify-between border-t border-slate-100">
            <div>
              <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Wholesale Suite Price</span>
              <span class="text-xl font-extrabold text-slate-900 font-mono">$${suite.price.toLocaleString()}</span>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="window.FancyLooseEngine.openLayoutBlueprintModal('${suite.id}')" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs rounded-xl transition shadow">
                View Blueprint
              </button>
              <button onclick="window.FancyLooseEngine.addToCartSuite('${suite.id}')" class="px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition shadow" title="Add to Cart">
                <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function openLayoutBlueprintModal(id) {
    const suite = PRESET_LAYOUTS.find(s => s.id === id);
    if (!suite) return;

    let modal = document.getElementById('fl-blueprint-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'fl-blueprint-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="bg-white rounded-3xl max-w-2xl w-full border border-amber-500/30 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-200">
        <div class="bg-slate-900 p-6 text-white flex items-center justify-between border-b border-amber-500/20">
          <div>
            <span class="text-xs text-amber-400 font-mono font-bold">PRESET LAYOUT SUITE ${suite.id}</span>
            <h3 class="text-lg font-serif font-bold text-white">${suite.title}</h3>
          </div>
          <button onclick="document.getElementById('fl-blueprint-modal').remove()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-sm transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div class="rounded-2xl overflow-hidden aspect-[16/7] bg-slate-950">
            <img src="${suite.img}" alt="${suite.title}" class="w-full h-full object-cover">
          </div>

          <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
            <h4 class="font-bold text-slate-900 text-xs uppercase tracking-wider">Layout Blueprint Details</h4>
            <p class="text-xs text-slate-600 leading-relaxed">${suite.blueprint}</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div class="bg-white p-3 rounded-xl border border-slate-200"><span class="text-slate-400 block">Total Weight:</span><span class="font-bold text-slate-900 text-sm font-mono">${suite.totalWeight} ctw</span></div>
              <div class="bg-white p-3 rounded-xl border border-slate-200"><span class="text-slate-400 block">Piece Count:</span><span class="font-bold text-slate-900 text-sm">${suite.pieceCount} Stones</span></div>
              <div class="bg-white p-3 rounded-xl border border-slate-200"><span class="text-slate-400 block">Color / Clarity:</span><span class="font-bold text-slate-900 text-sm">${suite.color} ${suite.clarity}</span></div>
              <div class="bg-white p-3 rounded-xl border border-slate-200"><span class="text-slate-400 block">Suite Price:</span><span class="font-bold text-emerald-700 text-sm font-mono">$${suite.price.toLocaleString()}</span></div>
            </div>
          </div>

          <form onsubmit="window.FancyLooseEngine.submitLayoutInquiry(event, '${suite.id}', ${suite.price})" class="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
            <h4 class="font-bold text-amber-950 text-sm"><i class="fa-solid fa-paper-plane text-amber-600"></i> Reserve or Request Custom CAD Alignment</h4>
            
            <div class="grid grid-cols-2 gap-3">
              <input type="text" id="fl-mod-name" placeholder="Your Name *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500">
              <input type="text" id="fl-mod-company" placeholder="Company Name *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500">
            </div>
            <div class="grid grid-cols-2 gap-3">
              <input type="email" id="fl-mod-email" placeholder="Email Address *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500">
              <input type="tel" id="fl-mod-phone" placeholder="Mobile / WhatsApp *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500">
            </div>
            <textarea id="fl-mod-notes" placeholder="Custom ring/necklace setting requirements, mounting preferences..." class="w-full px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500 h-16"></textarea>

            <div class="flex gap-3">
              <button type="submit" class="flex-1 py-3 bg-slate-900 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs rounded-xl transition shadow-lg flex items-center justify-center gap-2">
                <i class="fa-solid fa-check"></i> Reserve Layout Suite ($${suite.price.toLocaleString()})
              </button>
              <button type="button" onclick="window.FancyLooseEngine.addToCartSuite('${suite.id}'); document.getElementById('fl-blueprint-modal').remove();" class="px-5 py-3 bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-xs rounded-xl transition shadow-lg flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  function openInquiryModal(id, shape, mm) {
    state.currentFancyItem = { id, shape, mm };
    let modal = document.getElementById('fl-inq-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'fl-inq-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto';
      document.body.appendChild(modal);
    }

    const stoneImg = getShapeImage(shape);

    modal.innerHTML = `
      <div class="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden my-8 relative">
        <button onclick="document.getElementById('fl-inq-modal').remove()" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center text-sm transition z-10">&times;</button>

        <div style="background:#0f172a;display:flex;align-items:center;justify-content:center;height:160px;overflow:hidden;position:relative;">
          <img src="${stoneImg}" alt="${shape}" style="width:100%;height:100%;object-fit:cover;">
          <span style="position:absolute;bottom:10px;left:14px;background:rgba(15,23,42,0.85);color:#f59e0b;font-family:monospace;font-size:11px;font-weight:bold;padding:3px 8px;border-radius:6px;border:1px solid rgba(245,158,11,0.3);">
            Stock ID: ${id}
          </span>
        </div>

        <div style="padding:24px 28px;">
          <h3 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 4px;">${shape} Calibrated Stone</h3>
          <p style="font-size:13px;color:#475569;margin:0 0 14px;font-weight:600;">Calibrated Size: <strong style="color:#b45309;">${mm} mm</strong></p>

          <div id="fl-success-msg" style="display:none;color:#059669;font-weight:700;font-size:13px;margin-bottom:12px;background:#ecfdf5;padding:8px 12px;border-radius:8px;border:1px solid #a7f3d0;">
            <i class="fa-solid fa-circle-check" style="margin-right:6px;"></i> Added to trade cart successfully
          </div>

          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:12px;color:#334155;font-weight:700;margin-bottom:6px;text-transform:uppercase;">Special Instructions / Mounting Notes:</label>
            <textarea id="fl-modal-instructions" style="width:100%;border:1px solid #cbd5e1;border-radius:8px;padding:8px 10px;font-size:13px;resize:vertical;min-height:55px;outline:none;" placeholder="Specify ratio preferences, sieve matching, or custom layout pairing..."></textarea>
          </div>

          <!-- Carats stepper -->
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
            <span style="font-size:12px;font-weight:700;color:#0f172a;min-width:60px;text-transform:uppercase;">CARATS:</span>
            <div style="display:flex;align-items:center;">
              <button type="button" onclick="const q=document.getElementById('fl-modal-carats'); q.value=Math.max(0,(parseFloat(q.value)||0)-0.05).toFixed(2)" style="width:34px;height:34px;background:#f59e0b;color:#0f172a;border:none;font-size:16px;font-weight:bold;cursor:pointer;border-radius:6px 0 0 6px;">&#8722;</button>
              <input type="number" id="fl-modal-carats" value="1.00" min="0" step="0.05" style="width:65px;text-align:center;height:34px;border:1px solid #cbd5e1;border-left:none;border-right:none;font-size:13px;font-weight:bold;outline:none;">
              <button type="button" onclick="const q=document.getElementById('fl-modal-carats'); q.value=(parseFloat(q.value)+0.05).toFixed(2)" style="width:34px;height:34px;background:#f59e0b;color:#0f172a;border:none;font-size:16px;font-weight:bold;cursor:pointer;border-radius:0 6px 6px 0;">&#43;</button>
            </div>
            <span style="font-size:11px;color:#64748b;font-weight:600;">ctw</span>
          </div>

          <!-- Pieces stepper -->
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
            <span style="font-size:12px;font-weight:700;color:#0f172a;min-width:60px;text-transform:uppercase;">PIECES:</span>
            <div style="display:flex;align-items:center;">
              <button type="button" onclick="const q=document.getElementById('fl-modal-pieces'); if(parseInt(q.value)>1) q.value=parseInt(q.value)-1" style="width:34px;height:34px;background:#0f172a;color:white;border:none;font-size:16px;font-weight:bold;cursor:pointer;border-radius:6px 0 0 6px;">&#8722;</button>
              <input type="number" id="fl-modal-pieces" value="1" min="1" style="width:65px;text-align:center;height:34px;border:1px solid #cbd5e1;border-left:none;border-right:none;font-size:13px;font-weight:bold;outline:none;">
              <button type="button" onclick="const q=document.getElementById('fl-modal-pieces'); q.value=parseInt(q.value)+1" style="width:34px;height:34px;background:#0f172a;color:white;border:none;font-size:16px;font-weight:bold;cursor:pointer;border-radius:0 6px 6px 0;">&#43;</button>
            </div>
            <span style="font-size:11px;color:#64748b;font-weight:600;">pcs</span>
          </div>

          <div style="display:flex;gap:10px;">
            <button type="button" onclick="window.FancyLooseEngine.addToCartFancy()" style="flex:1;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 20px;background:#0f172a;color:white;border:none;font-weight:bold;font-size:13px;border-radius:10px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='#f59e0b';this.style.color='#0f172a'" onmouseout="this.style.background='#0f172a';this.style.color='white'">
              <i class="fa-solid fa-cart-plus"></i> ADD TO TRADE CART
            </button>
            <button type="button" onclick="document.getElementById('fl-inq-modal').remove()" style="padding:12px 16px;background:#f1f5f9;color:#475569;border:none;font-weight:bold;font-size:13px;border-radius:10px;cursor:pointer;">
              Close
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function addToCartFancy() {
    const carats = parseFloat(document.getElementById('fl-modal-carats').value) || 0;
    const pieces = parseInt(document.getElementById('fl-modal-pieces').value) || 0;
    const inst = document.getElementById('fl-modal-instructions').value;
    const item = state.currentFancyItem || {};

    if (carats <= 0 && pieces <= 0) {
      alert('Please enter at least a Carats or Pieces quantity before adding to cart.');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('itd_cart') || '[]');
    cart.push({
      id: item.id || ('fl_' + Date.now()),
      name: `${item.shape} ${item.mm}mm Calibrated Loose Diamond`,
      mmSize: item.mm,
      shape: item.shape,
      color: 'E-F',
      clarity: 'VS',
      price: 0,
      carats: carats,
      pieces: pieces,
      quantity: pieces || 1,
      image: getShapeImage(item.shape),
      instructions: inst,
      source: 'Fancy Loose Stock',
      addedAt: new Date().getTime()
    });
    localStorage.setItem('itd_cart', JSON.stringify(cart));

    const successMsg = document.getElementById('fl-success-msg');
    if (successMsg) successMsg.style.display = 'block';

    // Update cart badge
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = cart.reduce((s, i) => s + (i.quantity || i.pieces || 1), 0);
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }

    setTimeout(() => {
      const modal = document.getElementById('fl-inq-modal');
      if (modal) modal.remove();
    }, 900);
  }

  function addToCartSuite(suiteId) {
    const suite = PRESET_LAYOUTS.find(s => s.id === suiteId);
    if (!suite) return;

    let cart = JSON.parse(localStorage.getItem('itd_cart') || '[]');
    cart.push({
      id: suite.id,
      name: suite.title,
      shape: suite.shape,
      color: suite.color,
      clarity: suite.clarity,
      price: suite.price,
      carats: suite.totalWeight,
      pieces: suite.pieceCount,
      quantity: 1,
      image: suite.img,
      details: suite.blueprint,
      source: 'Layout Suite',
      addedAt: new Date().getTime()
    });
    localStorage.setItem('itd_cart', JSON.stringify(cart));

    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = cart.reduce((s, i) => s + (i.quantity || 1), 0);
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }

    alert(`"${suite.title}" has been added to your trade cart! ($${suite.price.toLocaleString()})`);
  }

  function submitLayoutInquiry(e, suiteId, price) {
    e.preventDefault();
    const name = document.getElementById('fl-mod-name').value;
    const company = document.getElementById('fl-mod-company').value;
    const email = document.getElementById('fl-mod-email').value;
    const phone = document.getElementById('fl-mod-phone').value;
    const notes = document.getElementById('fl-mod-notes').value;

    const newInquiry = {
      id: 'inq_' + Date.now(),
      name: name,
      company: company,
      email: email,
      phone: phone,
      type: 'Layout Suite Reservation',
      subject: `Reservation for Layout ${suiteId}`,
      message: `Reserved Layout Suite ${suiteId} ($${price}). Notes: ${notes}`,
      status: 'New',
      submittedAt: new Date().toLocaleString()
    };

    if (window.GuruAdminStore && window.GuruAdminStore.saveRecord) {
      window.GuruAdminStore.saveRecord('inquiries', newInquiry);
    } else if (window.DataStore && window.DataStore.saveRecord) {
      window.DataStore.saveRecord('inquiries', newInquiry);
    }

    alert(`Thank you ${name}! Your reservation request for Layout Suite ${suiteId} ($${price.toLocaleString()}) has been submitted.`);
    const modal = document.getElementById('fl-blueprint-modal');
    if (modal) modal.remove();
  }

  function clearShapeFilter() {
    state.selectedShapes.clear();
    renderContent();
  }

  window.FancyLooseEngine = {
    init: init,
    openLayoutBlueprintModal: openLayoutBlueprintModal,
    openInquiryModal: openInquiryModal,
    addToCartFancy: addToCartFancy,
    addToCartSuite: addToCartSuite,
    submitLayoutInquiry: submitLayoutInquiry,
    clearShapeFilter: clearShapeFilter
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
