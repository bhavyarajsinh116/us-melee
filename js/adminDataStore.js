/* Melee Diamonds Central Admin & Website Data Storage Engine */
(function (window) {
  'use strict';

  const STORAGE_KEY = 'gd_admin_database_v1';

  const INITIAL_DB = {
    customerGroups: [
      { id: 'grp_vip', name: 'VIP Jewelers', defaultDiscountPercent: 25, description: 'Top-tier high volume diamond buyers', memberCount: 12 },
      { id: 'grp_wholesale', name: 'Wholesale Trade', defaultDiscountPercent: 20, description: 'Verified trade jewelers & retailers', memberCount: 45 },
      { id: 'grp_premium', name: 'Premium Partners', defaultDiscountPercent: 15, description: 'Preferred boutique jewelry stores', memberCount: 28 },
      { id: 'grp_retail', name: 'Standard Retail', defaultDiscountPercent: 0, description: 'Walk-in & new trade accounts', memberCount: 80 }
    ],

    customers: [
      { id: 'cust_101', name: 'Eleanor Vance', company: 'VIP Jewelers NYC', email: 'vip.jewelers@Melee Diamonds.com', phone: '(646)-565-4211', status: 'active', groupId: 'grp_vip', customDiscountPercent: null, createdAt: '2026-01-15' },
      { id: 'cust_102', name: 'Marcus Sterling', company: 'Sterling Wholesale Gems', email: 'wholesale.buyer@Melee Diamonds.com', phone: '+1 (310) 555-0432', status: 'active', groupId: 'grp_wholesale', customDiscountPercent: null, createdAt: '2026-02-01' },
      { id: 'cust_103', name: 'John Custom', company: 'Custom Diamond Craft', email: 'john.custom@Melee Diamonds.com', phone: '+1 (415) 555-0789', status: 'active', groupId: 'grp_premium', customDiscountPercent: 30, createdAt: '2026-03-10' },
      { id: 'cust_104', name: 'Sophia Thorne', company: 'Thorne Fine Jewelry', email: 'sophia@thorne.com', phone: '+1 (312) 555-0112', status: 'active', groupId: 'grp_premium', customDiscountPercent: null, createdAt: '2026-04-18' },
      { id: 'cust_105', name: 'David Miller', company: 'Miller & Co Retailers', email: 'david@miller.com', phone: '+1 (404) 555-0899', status: 'inactive', groupId: 'grp_retail', customDiscountPercent: null, createdAt: '2026-05-22' }
    ],

    customerApplications: [
      {
        id: 'app_1001',
        applicationNumber: 'CUST-2026-00001',
        companyName: 'Apex Luxury Jewels',
        businessType: 'Wholesale Distributor',
        taxRegistrationNumber: 'TAX-9948210',
        businessAddress: '452 Diamond District Way, Suite 800',
        country: 'United States',
        state: 'Massachusetts',
        city: 'Boston',
        websiteUrl: 'https://apexluxury.com',
        primaryContactName: 'Claire Redfield',
        email: 'claire@apexluxury.com',
        mobileNumber: '+1 (617) 555-0921',
        officeNumber: '+1 (617) 555-0900',
        supplierReferences: 'DeBeers Sight-Holder Reference #4412, RapNet Member #9841',
        tradeReferences: 'Member of Boston Jewelers Board of Trade',
        documents: [
          { id: 'doc_1', documentType: 'Business Registration Certificate', originalFileName: 'Apex_Business_Registration_2026.pdf', fileSize: '2.4 MB', uploadedAt: '2026-08-22' },
          { id: 'doc_2', documentType: 'Tax Certificate', originalFileName: 'Apex_Reseller_Tax_Exempt.pdf', fileSize: '1.1 MB', uploadedAt: '2026-08-22' }
        ],
        status: 'Pending Approval',
        rejectionReason: null,
        submittedAt: '2026-08-22',
        createdAt: '2026-08-22'
      },
      {
        id: 'app_1002',
        applicationNumber: 'CUST-2026-00002',
        companyName: 'Wright Brothers Diamonds',
        businessType: 'Retail Jewelry Store',
        taxRegistrationNumber: 'TAX-4410928',
        businessAddress: '1200 Main Plaza',
        country: 'United States',
        state: 'Texas',
        city: 'Dallas',
        websiteUrl: 'https://wrightdiamonds.com',
        primaryContactName: 'Alexander Wright',
        email: 'alex@wrightdiamonds.com',
        mobileNumber: '+1 (214) 555-0344',
        officeNumber: '+1 (214) 555-0300',
        supplierReferences: 'Stuller Partner Account #33201',
        tradeReferences: 'Texas Retailers Association Member',
        documents: [
          { id: 'doc_3', documentType: 'Business Registration Certificate', originalFileName: 'Wright_Corp_Certificate.pdf', fileSize: '3.1 MB', uploadedAt: '2026-08-24' }
        ],
        status: 'Under Review',
        rejectionReason: null,
        submittedAt: '2026-08-24',
        createdAt: '2026-08-24'
      }
    ],

    diamonds: [
      { id: '1', sku: '106858', title: 'TRILLION 1.74ct E VS2 IGI', shape: 'Trillion', shapeCode: 'TR', carat: 1.74, color: 'E', clarity: 'VS2', cut: 'EX', polish: 'EX', symmetry: 'EX', lab: 'IGI', certNo: 'LG644470718', growthType: 'CVD', location: 'NY', pricePerCarat: 528, totalPrice: 920, type: 'lab-grown', imgUrl: 'images/stones/stone-106858.jpg', spinUrl: 'https://video.meleediamonds.com/video.html?d=GD202-133AA' },
      { id: '2', sku: '1005905', title: 'MARQUISE 5.10ct F VVS2 IGI', shape: 'Marquise', shapeCode: 'MQ', carat: 5.10, color: 'F', clarity: 'VVS2', cut: 'EX', polish: 'EX', symmetry: 'EX', lab: 'IGI', certNo: 'LG981048821', growthType: 'CVD', location: 'NY', pricePerCarat: 676, totalPrice: 3450, type: 'lab-grown', imgUrl: 'images/stones/stone-1005905.jpg', spinUrl: 'https://video.meleediamonds.com/video.html?d=GD257-24AAA' },
      { id: '3', sku: '1042410', title: 'ROUND 1.50ct F VS1 IGI', shape: 'Round', shapeCode: 'BR', carat: 1.50, color: 'F', clarity: 'VS1', cut: 'EX', polish: 'EX', symmetry: 'EX', lab: 'IGI', certNo: 'LG551940192', growthType: 'CVD', location: 'LA', pricePerCarat: 566, totalPrice: 850, type: 'lab-grown', imgUrl: 'images/stones/stone-1042410.jpg', spinUrl: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      { id: '4', sku: 'NAT-20101', title: 'NATURAL ROUND 1.20ct D VVS1 GIA', shape: 'Round', shapeCode: 'BR', carat: 1.20, color: 'D', clarity: 'VVS1', cut: 'EX', polish: 'EX', symmetry: 'EX', lab: 'GIA', certNo: 'GIA220194821', growthType: 'Mined Natural', location: 'NY', pricePerCarat: 7416, totalPrice: 8900, type: 'natural', imgUrl: 'images/stones/stone-1042410.jpg', spinUrl: 'https://video.meleediamonds.com/video.html?d=GD360-16CA' },
      { id: '5', sku: 'NAT-20102', title: 'NATURAL OVAL 2.05ct F VS1 GIA', shape: 'Oval', shapeCode: 'OV', carat: 2.05, color: 'F', clarity: 'VS1', cut: 'EX', polish: 'EX', symmetry: 'EX', lab: 'GIA', certNo: 'GIA634810924', growthType: 'Mined Natural', location: 'LA', pricePerCarat: 8975, totalPrice: 18400, type: 'natural', imgUrl: 'images/stones/stone-1560755.jpg', spinUrl: 'https://video.meleediamonds.com/video.html?d=GD202-133AA' }
    ],

    pricingRules: [
      { id: 'rule_101', name: 'VIP Trade Tier - 25% Off', type: 'group', targetId: 'grp_vip', discountType: 'percentage', discountValue: 25, active: true, description: '25% discount for VIP group members' },
      { id: 'rule_102', name: 'Wholesale Partner - 20% Off', type: 'group', targetId: 'grp_wholesale', discountType: 'percentage', discountValue: 20, active: true, description: '20% trade pricing for wholesale members' },
      { id: 'rule_103', name: 'John Custom Special 30% Rate', type: 'customer', targetId: 'cust_103', discountType: 'percentage', discountValue: 30, active: true, description: 'Individual 30% rate for John Custom' },
      { id: 'rule_104', name: 'Summer Flash Diamond Sale', type: 'promo', targetId: 'all', discountType: 'percentage', discountValue: 10, startDate: '2026-08-01', endDate: '2026-09-30', active: true, description: 'Automatic 10% promo discount' }
    ],

    priorityConfig: ['customer', 'group', 'promo', 'base'],

    orders: [
      { id: 'ORD-9801', customerName: 'Eleanor Vance', company: 'VIP Jewelers NYC', email: 'vip.jewelers@Melee Diamonds.com', itemsCount: 2, subtotalBase: 3344, discountAmount: 836, totalAmount: 2508, status: 'Confirmed', fulfillmentMethod: 'FedEx Priority Overnight', createdAt: '2026-08-24' },
      { id: 'ORD-9802', customerName: 'Marcus Sterling', company: 'Sterling Wholesale Gems', email: 'wholesale.buyer@Melee Diamonds.com', itemsCount: 1, subtotalBase: 1638, discountAmount: 327, totalAmount: 1311, status: 'Shipped', fulfillmentMethod: 'NYC Diamond District Local Hand-Delivery', carrier: 'FedEx Priority Overnight', trackingNumber: 'TRK-881940', createdAt: '2026-08-25' }
    ],

    appointments: [
      { id: 'apt_301', name: 'Eleanor Vance', company: 'VIP Jewelers NYC', phone: '(646)-565-4211', email: 'vip.jewelers@Melee Diamonds.com', location: 'New York Office (45 West 47th Street, 500)', diamondType: 'Certified Lab-Grown Diamonds (CVD)', datetime: '2026-09-05T14:00', status: 'Confirmed', notes: 'Interested in 3ct+ Cushion cuts', submittedAt: '2026-08-30' },
      { id: 'apt_302', name: 'Marcus Sterling', company: 'Sterling Wholesale Gems', phone: '+1 (310) 555-0432', email: 'wholesale.buyer@Melee Diamonds.com', location: 'Los Angeles Office (607 S Hill Street)', diamondType: 'Certified Natural Diamonds (GIA)', datetime: '2026-09-08T11:30', status: 'Pending', notes: 'Viewing GIA loose rounds', submittedAt: '2026-09-01' }
    ],

    inquiries: [
      { id: 'inq_401', name: 'Sophia Thorne', company: 'Thorne Fine Jewelry', email: 'sophia@thorne.com', phone: '+1 (312) 555-0112', type: 'Product Inquiry', subject: 'Calibrated Melee Parcel Quote', message: 'Looking for 5 carats of calibrated F+ VS round melee pointers (1.5mm to 2.2mm).', status: 'In Progress', notes: 'Quoted $380/ct via email', submittedAt: '2026-08-28' },
      { id: 'inq_402', name: 'David Miller', company: 'Miller & Co Retailers', email: 'david@miller.com', phone: '+1 (404) 555-0899', type: 'General Contact', subject: 'Trade Account Discount Tiers', message: 'Inquiring about requirements for VIP 25% discount tier access.', status: 'New', notes: '', submittedAt: '2026-09-02' }
    ],

    customOrders: [
      { id: 'cad_501', company: 'Gotham Fine Jewelry NYC', email: 'trade@gothamjewelry.com', jewelryType: 'Solitaire Ring', diamondType: 'Lab-Grown Diamond (CVD)', carat: 2.5, metal: '18k Gold', estPrice: 2325, notes: 'Hidden halo setting with eagle claw prongs. CAD .3dm file attached.', status: 'Reviewing', submittedAt: '2026-08-29' },
      { id: 'cad_502', company: 'Sterling Wholesale Gems', email: 'wholesale.buyer@Melee Diamonds.com', jewelryType: 'Eternity Band', diamondType: 'Natural Diamond (Ethically Mined)', carat: 4.0, metal: 'platinum', estPrice: 18650, notes: 'U-cut shared prong eternity band, finger size 6.5.', status: 'Processing', submittedAt: '2026-08-31' }
    ],

    priceAccessLogs: [
      { id: 'log_601', email: 'vip.jewelers@Melee Diamonds.com', userName: 'Eleanor Vance', company: 'VIP Jewelers NYC', action: 'Accessed Wholesale Trade Prices', sku: '106858', timestamp: '2026-09-02 14:15:20' },
      { id: 'log_602', email: 'wholesale.buyer@Melee Diamonds.com', userName: 'Marcus Sterling', company: 'Sterling Wholesale Gems', action: 'User Sign-In & Inventory View', sku: 'NAT-20101', timestamp: '2026-09-02 16:08:44' }
    ],

    auditLogs: [
      { id: 'aud_701', action: 'System Administrator Login', admin: 'admin@Melee Diamonds.com', timestamp: '2026-09-02 10:00:00', details: 'Full control session initialized' },
      { id: 'aud_702', action: 'Approved Customer Application', admin: 'admin@Melee Diamonds.com', timestamp: '2026-09-02 11:20:00', details: 'Approved Apex Luxury Jewels (CUST-2026-00001)' }
    ]
  };

  function loadDB() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      let db;
      if (!raw) {
        db = { ...INITIAL_DB };
      } else {
        db = JSON.parse(raw);
      }

      let dirty = false;
      Object.keys(INITIAL_DB).forEach(key => {
        if (db[key] === undefined || db[key] === null) {
          db[key] = INITIAL_DB[key];
          dirty = true;
        }
      });

      if ((!db.combinedStockData || db.combinedStockData.length === 0 || db.combinedStockData.some(i => i.total_weight === '0.00')) && window.COMBINED_STOCK_DATA) {
        db.combinedStockData = window.COMBINED_STOCK_DATA;
        db.layoutStockData = window.LAYOUT_STOCK_DATA;
        db.roundStockData = window.ROUND_STOCK_DATA;
        dirty = true;
      }

      if (!raw || dirty) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
      }
      return db;
    } catch (e) {
      console.warn('Failed reading Admin DB, using fallback', e);
      return INITIAL_DB;
    }
  }

  function saveDB(db) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch (e) {
      console.error('Failed saving Admin DB', e);
    }
  }

  const DataStore = {
    getCollection: function (colName) {
      const db = loadDB();

      if (colName === 'combinedStockData' || colName === 'layoutStockData' || colName === 'roundStockData') {
        const allItems = window.COMBINED_STOCK_DATA || [];
        const basePDFItems = (colName === 'layoutStockData')
          ? (window.LAYOUT_STOCK_DATA || allItems.filter(item => (item.source && item.source.includes('Layout')) || (item.shape && item.shape !== 'Round Melee')))
          : (colName === 'roundStockData')
            ? (window.ROUND_STOCK_DATA || allItems.filter(item => (item.source && (item.source.includes('Round') || item.source.includes('Stock 1'))) || item.shape === 'Round Melee'))
            : allItems;

        const adminAdded = db.adminAddedStock || [];
        const adminDeletedIds = new Set(db.adminDeletedStockIds || []);

        const activeBaseItems = basePDFItems.filter(item => !adminDeletedIds.has(item.id));
        const activeAdminAdded = adminAdded.filter(item => {
          if (adminDeletedIds.has(item.id)) return false;
          if (colName === 'layoutStockData') return (item.source && item.source.includes('Layout')) || (item.shape && item.shape !== 'Round Melee');
          if (colName === 'roundStockData') return (item.source && (item.source.includes('Round') || item.source.includes('Stock 1'))) || item.shape === 'Round Melee';
          return true;
        });

        return [...activeAdminAdded, ...activeBaseItems];
      }

      return db[colName] || [];
    },

    saveRecord: function (colName, record) {
      const db = loadDB();
      if (colName === 'combinedStockData' || colName === 'layoutStockData' || colName === 'roundStockData') {
        if (!db.adminAddedStock) db.adminAddedStock = [];
        const existingIdx = db.adminAddedStock.findIndex(i => i.id === record.id);
        if (existingIdx >= 0) {
          db.adminAddedStock[existingIdx] = { ...db.adminAddedStock[existingIdx], ...record };
        } else {
          db.adminAddedStock.unshift(record);
        }
        saveDB(db);
        return record;
      }

      if (!db[colName]) db[colName] = [];
      const existingIdx = db[colName].findIndex(item => item.id === record.id);
      if (existingIdx >= 0) {
        db[colName][existingIdx] = { ...db[colName][existingIdx], ...record };
      } else {
        db[colName].unshift(record);
      }
      saveDB(db);
      return record;
    },

    updateRecordStatus: function (colName, id, status, extraFields = {}) {
      const db = loadDB();
      if (!db[colName]) return false;
      db[colName] = db[colName].map(item => item.id === id ? { ...item, status, ...extraFields } : item);
      saveDB(db);
      return true;
    },

    deleteRecord: function (colName, id) {
      const db = loadDB();
      if (colName === 'combinedStockData' || colName === 'layoutStockData' || colName === 'roundStockData') {
        if (!db.adminDeletedStockIds) db.adminDeletedStockIds = [];
        if (!db.adminDeletedStockIds.includes(id)) {
          db.adminDeletedStockIds.push(id);
        }
        if (db.adminAddedStock) {
          db.adminAddedStock = db.adminAddedStock.filter(i => i.id !== id);
        }
        saveDB(db);
        return true;
      }

      if (!db[colName]) return false;
      db[colName] = db[colName].filter(item => item.id !== id);
      saveDB(db);
      return true;
    },

    logPriceAccess: function (email, userName, company, action, sku = '') {
      const db = loadDB();
      if (!db.priceAccessLogs) db.priceAccessLogs = [];
      const newLog = {
        id: 'log_' + Date.now(),
        email: email || 'anonymous@guest.com',
        userName: userName || 'Trade Visitor',
        company: company || 'Guest Business',
        action: action || 'Viewed Trade Price',
        sku: sku || 'N/A',
        timestamp: new Date().toLocaleString()
      };
      db.priceAccessLogs.unshift(newLog);
      saveDB(db);
    },

    logAudit: function (action, adminEmail = 'admin@Melee Diamonds.com', details = '') {
      const db = loadDB();
      if (!db.auditLogs) db.auditLogs = [];
      const newAudit = {
        id: 'aud_' + Date.now(),
        action: action,
        admin: adminEmail,
        timestamp: new Date().toLocaleString(),
        details: details
      };
      db.auditLogs.unshift(newAudit);
      saveDB(db);
    },

    exportCSV: function (colName) {
      let targetCol = colName;
      if (colName === 'inventory') targetCol = 'diamonds';
      if (colName === 'stock') targetCol = 'combinedStockData';

      let records = this.getCollection(targetCol);

      // If empty, check fallback default seed records from INITIAL_DB
      if (!records || records.length === 0) {
        if (INITIAL_DB[targetCol] && INITIAL_DB[targetCol].length > 0) {
          records = INITIAL_DB[targetCol];
        }
      }

      // Default fallback headers if absolutely no records exist
      const defaultHeaderMap = {
        orders: ['id', 'customerName', 'company', 'email', 'itemsCount', 'subtotalBase', 'discountAmount', 'totalAmount', 'status', 'fulfillmentMethod', 'carrier', 'trackingNumber', 'createdAt'],
        diamonds: ['id', 'sku', 'title', 'shape', 'shapeCode', 'carat', 'color', 'clarity', 'cut', 'polish', 'symmetry', 'lab', 'certNo', 'growthType', 'location', 'pricePerCarat', 'totalPrice', 'type'],
        customers: ['id', 'name', 'company', 'email', 'phone', 'status', 'groupId', 'customDiscountPercent', 'createdAt'],
        appointments: ['id', 'name', 'company', 'phone', 'email', 'location', 'diamondType', 'datetime', 'status', 'notes', 'submittedAt'],
        inquiries: ['id', 'name', 'company', 'email', 'phone', 'type', 'subject', 'message', 'status', 'notes', 'submittedAt'],
        customOrders: ['id', 'company', 'email', 'jewelryType', 'diamondType', 'carat', 'metal', 'estPrice', 'notes', 'status', 'submittedAt'],
        customerApplications: ['id', 'applicationNumber', 'companyName', 'businessType', 'taxRegistrationNumber', 'businessAddress', 'city', 'state', 'country', 'primaryContactName', 'email', 'mobileNumber', 'status', 'submittedAt'],
        layoutStockData: ['id', 'sku', 'shape', 'mm_size', 'point_size', 'total_weight', 'pieces', 'per_carat_price', 'total_price', 'source'],
        roundStockData: ['id', 'sku', 'mm_size', 'sieve_pts', 'total_weight', 'pieces', 'per_carat_price', 'total_price', 'source'],
        combinedStockData: ['id', 'sku', 'shape', 'mm_size', 'point_size', 'sieve_pts', 'total_weight', 'pieces', 'per_carat_price', 'total_price', 'source']
      };

      const fileNameMap = {
        orders: 'Sales_Orders',
        diamonds: 'Inventory_Stock_Diamonds',
        customers: 'Customers',
        appointments: 'Appointments',
        inquiries: 'Inquiries',
        customOrders: 'Custom_CAD_Orders',
        customerApplications: 'Trade_Applications',
        layoutStockData: 'Fancy_Shape_Layout_Stock',
        roundStockData: 'Round_Melee_Stock',
        combinedStockData: 'Complete_Inventory_Stock'
      };

      const friendlyName = fileNameMap[targetCol] || targetCol;
      const dateStr = new Date().toISOString().split('T')[0];
      const filename = `Melee_Diamonds_${friendlyName}_Export_${dateStr}.csv`;

      let headers = [];
      if (records && records.length > 0) {
        const keySet = new Set();
        records.forEach(r => {
          if (r && typeof r === 'object') {
            Object.keys(r).forEach(k => keySet.add(k));
          }
        });
        headers = Array.from(keySet);
      } else {
        headers = defaultHeaderMap[targetCol] || ['id', 'name', 'status', 'createdAt'];
      }

      const csvRows = [];
      csvRows.push(headers.map(h => `"${String(h).replace(/"/g, '""')}"`).join(','));

      if (records && records.length > 0) {
        records.forEach(row => {
          const values = headers.map(h => {
            let val = row[h];
            if (val === null || val === undefined) {
              val = '';
            } else if (typeof val === 'object') {
              try {
                val = JSON.stringify(val);
              } catch (e) {
                val = '';
              }
            } else {
              val = String(val);
            }
            return `"${val.replace(/"/g, '""')}"`;
          });
          csvRows.push(values.join(','));
        });
      }

      const csvString = csvRows.join('\r\n');
      const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' });

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
          if (a.parentNode) a.parentNode.removeChild(a);
          URL.revokeObjectURL(url);
        }, 300);
      }

      if (typeof window.showToast === 'function') {
        window.showToast(`CSV Export generated: ${friendlyName.replace(/_/g, ' ')} (${(records || []).length} records)`);
      }
    }
  };

  window.GuruAdminStore = DataStore;
})(window);
