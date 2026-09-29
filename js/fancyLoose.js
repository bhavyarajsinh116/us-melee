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
      img: '../images/stones/stone-1042410.jpg',
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
      img: '../images/stones/stone-1042410.jpg',
      blueprint: 'Custom tapered baguette side stone pair designed for solitaire engagement ring accent.'
    }
  ];

  const state = {
    activeTab: 'loose',
    selectedShapes: new Set(),
    searchQuery: '',
    caratMin: null,
    caratMax: null
  };

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
    // Tab switchers
    const tabLoose = document.getElementById('fl-tab-loose');
    const tabLayouts = document.getElementById('fl-tab-layouts');

    if (tabLoose && tabLayouts) {
      tabLoose.addEventListener('click', () => {
        state.activeTab = 'loose';
        tabLoose.classList.add('bg-slate-900', 'text-amber-300');
        tabLayouts.classList.remove('bg-slate-900', 'text-amber-300');
        renderContent();
      });
      tabLayouts.addEventListener('click', () => {
        state.activeTab = 'layouts';
        tabLayouts.classList.add('bg-slate-900', 'text-amber-300');
        tabLoose.classList.remove('bg-slate-900', 'text-amber-300');
        renderContent();
      });
    }

    // Shape Badges Multi-Selection Engine with Event Delegation
    const shapeContainer = document.getElementById('fl-shape-selector') || document;
    shapeContainer.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-fl-shape]');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      
      const clickedShape = btn.getAttribute('data-fl-shape');
      if (!clickedShape) return;

      if (state.selectedShapes.has(clickedShape)) {
        state.selectedShapes.delete(clickedShape);
      } else {
        state.selectedShapes.add(clickedShape);
      }
      renderContent();
    });

    const searchInput = document.getElementById('fl-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        state.searchQuery = e.target.value;
        renderContent();
      });
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

  function renderContent() {
    syncShapeButtonsUI();

    const looseSec = document.getElementById('fl-loose-section');
    const layoutsSec = document.getElementById('fl-layouts-section');

    if (state.activeTab === 'loose') {
      if (looseSec) looseSec.classList.remove('hidden');
      if (layoutsSec) layoutsSec.classList.add('hidden');
      renderLooseGrid();
    } else {
      if (looseSec) looseSec.classList.add('hidden');
      if (layoutsSec) layoutsSec.classList.remove('hidden');
      renderLayoutsSuites();
      renderLayoutStockTable();
    }
  }

  function renderLooseGrid() {
    const tableBody = document.getElementById('fl-stock-table-body');
    if (!tableBody) return;

    if (!state.selectedShapes || state.selectedShapes.size === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="10" class="p-12 text-center text-slate-500 font-semibold bg-slate-50/50">
            <div class="flex flex-col items-center justify-center gap-3 py-6">
              <div class="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xl shadow-sm">
                <i class="fa-solid fa-shapes"></i>
              </div>
              <p class="text-base font-bold text-slate-800">Please select one or more shapes above to view available stock</p>
              <p class="text-xs text-slate-500 max-w-md">Click on any shape filter (Asscher, Cushion, Emerald, Oval, etc.) to preview direct wholesale inventory.</p>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    const allStock = getLayoutStock();
    let items = allStock.filter(i => {
      if (!i.shape) return false;
      const itemShapeLower = i.shape.trim().toLowerCase();
      for (let s of state.selectedShapes) {
        if (s.trim().toLowerCase() === itemShapeLower) return true;
      }
      return false;
    });

    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      items = items.filter(i => `${i.shape} ${i.mm_size} ${i.point_size} ${i.color}`.toLowerCase().includes(q));
    }

    if (items.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="10" class="p-8 text-center text-slate-500 font-semibold">
            No stock inventory found matching selected shape(s). Try clicking active shape buttons to adjust selection.
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = items.map(item => `
      <tr class="hover:bg-amber-50/40 transition">
        <td class="p-3.5 font-bold text-slate-900 font-mono">${item.id}</td>
        <td class="p-3.5 font-extrabold text-slate-900">${item.shape}</td>
        <td class="p-3.5 font-mono text-slate-800 font-bold">${item.mm_size} mm</td>
        <td class="p-3.5">${item.color} / ${item.clarity}</td>
        <td class="p-3.5 font-mono text-slate-700">${item.point_size}</td>
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

  function renderLayoutsSuites() {
    const container = document.getElementById('fl-suites-container');
    if (!container) return;

    container.innerHTML = PRESET_LAYOUTS.map(suite => `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between hover:border-amber-400 transition group">
        <div class="p-6 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">${suite.id}</span>
            <span class="text-xs font-bold text-slate-500"><i class="fa-solid fa-shapes"></i> ${suite.shape} Cut</span>
          </div>
          <h3 class="font-serif font-bold text-slate-900 text-lg group-hover:text-amber-700 transition">${suite.title}</h3>
          <p class="text-xs text-slate-600 leading-relaxed">${suite.blueprint}</p>
          
          <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs">
            <div class="flex justify-between"><span class="text-slate-500">Piece Count:</span><strong class="text-slate-900">${suite.pieceCount} Diamonds</strong></div>
            <div class="flex justify-between"><span class="text-slate-500">Total Weight:</span><strong class="text-emerald-700 font-mono">${suite.totalWeight} ctw</strong></div>
            <div class="flex justify-between"><span class="text-slate-500">Color / Clarity:</span><strong class="text-slate-900">${suite.color} / ${suite.clarity}</strong></div>
            <div class="flex justify-between"><span class="text-slate-500">Breakdown:</span><strong class="text-slate-900">${suite.mmBreakdown}</strong></div>
          </div>
        </div>

        <div class="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
          <div>
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Wholesale Suite Price</span>
            <span class="text-xl font-extrabold text-slate-900 font-mono">$${suite.price.toLocaleString()}</span>
          </div>
          <button onclick="window.FancyLooseEngine.openLayoutBlueprintModal('${suite.id}')" class="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition shadow-md">
            View Blueprint &amp; Order
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderLayoutStockTable() {
    const tableBody = document.getElementById('fl-layout-table-body');
    if (!tableBody) return;

    const items = getLayoutStock();
    tableBody.innerHTML = items.slice(0, 15).map(item => `
      <tr class="hover:bg-amber-50/40 transition">
        <td class="p-3.5 font-bold text-slate-900 font-mono">${item.id}</td>
        <td class="p-3.5 font-extrabold text-slate-900">${item.shape} Layout Suite</td>
        <td class="p-3.5 font-mono text-slate-800 font-bold">${item.mm_size} mm</td>
        <td class="p-3.5">${item.color} / ${item.clarity}</td>
        <td class="p-3.5 font-mono text-slate-700">${item.point_size}</td>
        <td class="p-3.5 font-mono font-bold text-emerald-700">${item.total_weight || '0.00'} ct</td>
        <td class="p-3.5">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${item.status || 'In Stock'}
          </span>
        </td>
        <td class="p-3.5 text-right">
          <button onclick="window.FancyLooseEngine.openInquiryModal('${item.id}', '${item.shape}', '${item.mm_size}')" class="px-3 py-1.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-300 font-bold text-xs rounded-xl transition shadow">
            Inquire Parcel
          </button>
        </td>
      </tr>
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
          <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
            <h4 class="font-bold text-slate-900 text-xs uppercase tracking-wider">Layout Blueprint Details</h4>
            <p class="text-xs text-slate-600 leading-relaxed">${suite.blueprint}</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div class="bg-white p-3 rounded-xl border border-slate-200"><span class="text-slate-400 block">Total Weight:</span><span class="font-bold text-slate-900 text-sm">${suite.totalWeight} ctw</span></div>
              <div class="bg-white p-3 rounded-xl border border-slate-200"><span class="text-slate-400 block">Piece Count:</span><span class="font-bold text-slate-900 text-sm">${suite.pieceCount} Stones</span></div>
              <div class="bg-white p-3 rounded-xl border border-slate-200"><span class="text-slate-400 block">Color / Clarity:</span><span class="font-bold text-slate-900 text-sm">${suite.color} ${suite.clarity}</span></div>
              <div class="bg-white p-3 rounded-xl border border-slate-200"><span class="text-slate-400 block">Total Price:</span><span class="font-bold text-emerald-700 text-sm">$${suite.price.toLocaleString()}</span></div>
            </div>
          </div>

          <form onsubmit="window.FancyLooseEngine.submitLayoutInquiry(event, '${suite.id}', ${suite.price})" class="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
            <h4 class="font-bold text-amber-950 text-sm"><i class="fa-solid fa-paper-plane text-amber-600"></i> Order or Request Custom CAD Alignment</h4>
            
            <div class="grid grid-cols-2 gap-3">
              <input type="text" id="fl-mod-name" placeholder="Your Name *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500">
              <input type="text" id="fl-mod-company" placeholder="Company Name *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500">
            </div>
            <div class="grid grid-cols-2 gap-3">
              <input type="email" id="fl-mod-email" placeholder="Email Address *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500">
              <input type="tel" id="fl-mod-phone" placeholder="Mobile / WhatsApp *" required class="px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500">
            </div>
            <textarea id="fl-mod-notes" placeholder="Custom ring/necklace setting requirements, mounting preferences..." class="w-full px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500 h-16"></textarea>

            <button type="submit" class="w-full py-3 bg-slate-900 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs rounded-xl transition shadow-lg flex items-center justify-center gap-2">
              <i class="fa-solid fa-check"></i> Reserve Layout Suite ($${suite.price.toLocaleString()})
            </button>
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

    modal.innerHTML = `
      <div class="bg-white rounded-xl max-w-md w-full shadow-2xl overflow-hidden my-8 relative">
        <button onclick="document.getElementById('fl-inq-modal').remove()" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-sm transition z-10" style="font-size:18px;">&times;</button>

        <div style="background:#111;display:flex;align-items:center;justify-content:center;min-height:160px;overflow:hidden;">
          <img src="../images/melee-hero.jpg" alt="Diamond" style="width:100%;height:160px;object-fit:cover;" onerror="this.style.display='none';this.parentElement.innerHTML='<i class=\'fa-regular fa-gem\' style=\'font-size:50px;color:#555;\'></i>'">
        </div>

        <div style="padding:24px 28px;">
          <h3 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 4px;">${shape}</h3>
          <p style="font-size:13px;color:#475569;margin:0 0 14px;">${mm} mm</p>

          <div id="fl-success-msg" style="display:none;color:#059669;font-weight:700;font-size:13px;margin-bottom:10px;">
            <i class="fa-solid fa-circle-check" style="margin-right:4px;"></i> Added to cart successfully
          </div>

          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:13px;color:#0f172a;font-weight:700;margin-bottom:6px;">Special Instructions:</label>
            <textarea id="fl-modal-instructions" style="width:100%;border:1px solid #cbd5e1;border-radius:6px;padding:8px 10px;font-size:13px;resize:vertical;min-height:60px;outline:none;" placeholder=""></textarea>
          </div>

          <!-- Carats stepper -->
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;color:#0f172a;min-width:56px;">CARATS:</span>
            <div style="display:flex;align-items:center;">
              <button type="button" onclick="const q=document.getElementById('fl-modal-carats'); q.value=Math.max(0,(parseFloat(q.value)||0)-0.01).toFixed(2)" style="width:36px;height:36px;background:#f59e0b;color:white;border:none;font-size:18px;font-weight:bold;cursor:pointer;border-radius:4px 0 0 4px;">&#8722;</button>
              <input type="number" id="fl-modal-carats" value="0.00" min="0" step="0.01" style="width:60px;text-align:center;height:36px;border:1px solid #e2e8f0;border-left:none;border-right:none;font-size:14px;font-weight:bold;outline:none;">
              <button type="button" onclick="const q=document.getElementById('fl-modal-carats'); q.value=(parseFloat(q.value)+0.01).toFixed(2)" style="width:36px;height:36px;background:#f59e0b;color:white;border:none;font-size:18px;font-weight:bold;cursor:pointer;border-radius:0 4px 4px 0;">&#43;</button>
            </div>
            <span style="font-size:11px;color:#64748b;">ct</span>
          </div>

          <!-- Pieces stepper -->
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
            <span style="font-size:13px;font-weight:700;color:#0f172a;min-width:56px;">PIECES:</span>
            <div style="display:flex;align-items:center;">
              <button type="button" onclick="const q=document.getElementById('fl-modal-pieces'); if(parseInt(q.value)>0) q.value=parseInt(q.value)-1" style="width:36px;height:36px;background:#0f172a;color:white;border:none;font-size:18px;font-weight:bold;cursor:pointer;border-radius:4px 0 0 4px;">&#8722;</button>
              <input type="number" id="fl-modal-pieces" value="1" min="0" style="width:60px;text-align:center;height:36px;border:1px solid #e2e8f0;border-left:none;border-right:none;font-size:14px;font-weight:bold;outline:none;">
              <button type="button" onclick="const q=document.getElementById('fl-modal-pieces'); q.value=parseInt(q.value)+1" style="width:36px;height:36px;background:#0f172a;color:white;border:none;font-size:18px;font-weight:bold;cursor:pointer;border-radius:0 4px 4px 0;">&#43;</button>
            </div>
            <span style="font-size:11px;color:#64748b;">pcs</span>
          </div>

          <button type="button" onclick="window.FancyLooseEngine.addToCartFancy()" style="display:inline-flex;align-items:center;gap:6px;padding:10px 24px;background:#0f172a;color:white;border:none;font-weight:bold;font-size:13px;border-radius:6px;cursor:pointer;transition:background 0.2s;text-transform:uppercase;" onmouseover="this.style.background='#f59e0b';this.style.color='#0f172a'" onmouseout="this.style.background='#0f172a';this.style.color='white'">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            ADD TO CART
          </button>
        </div>
      </div>
    `;
  }

  function addToCartFancy() {
    const carats = parseFloat(document.getElementById('fl-modal-carats').value) || 0;
    const pieces = parseInt(document.getElementById('fl-modal-pieces').value) || 0;
    const inst = document.getElementById('fl-modal-instructions').value;
    const item = state.currentFancyItem || {};

    if (carats === 0 && pieces === 0) {
      alert('Please enter at least a Carats or Pieces quantity before adding to cart.');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('itd_cart') || '[]');
    cart.push({
      id: item.id || ('fl_' + Date.now()),
      mmSize: item.mm,
      shape: item.shape,
      color: '',
      clarity: '',
      price: 0,
      carats: carats,
      pieces: pieces,
      quantity: pieces || 1,
      instructions: inst,
      source: 'Fancy Loose',
      addedAt: new Date().getTime()
    });
    localStorage.setItem('itd_cart', JSON.stringify(cart));

    const successMsg = document.getElementById('fl-success-msg');
    if (successMsg) successMsg.style.display = 'block';

    // Update cart badge
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = cart.reduce((s, i) => s + (i.pieces || i.quantity || 1), 0);
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
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

    if (window.DataStore && window.DataStore.saveRecord) {
      window.DataStore.saveRecord('inquiries', newInquiry);
    }

    alert(`Thank you ${name}! Your reservation request for Layout Suite ${suiteId} ($${price.toLocaleString()}) has been submitted.`);
    document.getElementById('fl-blueprint-modal').remove();
  }

  function submitInquiry(e, id, shape, mm) {
    e.preventDefault();
    const name = document.getElementById('fli-name').value;
    const company = document.getElementById('fli-company').value;
    const email = document.getElementById('fli-email').value;
    const phone = document.getElementById('fli-phone').value;
    const notes = document.getElementById('fli-notes').value;

    const newInquiry = {
      id: 'inq_' + Date.now(),
      name: name,
      company: company,
      email: email,
      phone: phone,
      type: 'Fancy Loose Inquiry',
      subject: `Inquiry for ${shape} (${mm}mm) Stock Item ${id}`,
      message: `Inquired about ${shape} ${mm}mm. Notes: ${notes}`,
      status: 'New',
      submittedAt: new Date().toLocaleString()
    };

    if (window.DataStore && window.DataStore.saveRecord) {
      window.DataStore.saveRecord('inquiries', newInquiry);
    }

    alert(`Thank you ${name}! Your inquiry for ${shape} (${mm}mm) has been received.`);
    document.getElementById('fl-inq-modal').remove();
  }

  window.FancyLooseEngine = {
    init: init,
    openLayoutBlueprintModal: openLayoutBlueprintModal,
    openInquiryModal: openInquiryModal,
    addToCartFancy: addToCartFancy,
    submitLayoutInquiry: submitLayoutInquiry,
    submitInquiry: submitInquiry
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
