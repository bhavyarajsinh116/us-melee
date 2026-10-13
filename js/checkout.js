/* HeyMan Diamond / Melee Diamonds - WooCommerce Style Checkout Engine */
(function (window) {
  'use strict';

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function loadCart() {
    try {
      const str = localStorage.getItem('itd_cart');
      return str ? JSON.parse(str) : [];
    } catch (e) {
      return [];
    }
  }

  function getSelectedShipping() {
    try {
      const str = localStorage.getItem('itd_selected_shipping');
      if (str) {
        const parsed = JSON.parse(str);
        return {
          cost: typeof parsed.cost === 'number' ? parsed.cost : 30,
          name: parsed.name || '2-3 Days within USA: $30.00'
        };
      }
    } catch (e) {}
    return { cost: 30, name: '2-3 Days within USA: $30.00' };
  }

  function saveSelectedShipping(cost, name) {
    try {
      localStorage.setItem('itd_selected_shipping', JSON.stringify({ cost, name }));
    } catch (e) {}
  }

  function formatPrice(val) {
    return '$' + parseFloat(val || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  let appliedDiscount = 0;
  let appliedCouponCode = '';

  function initCheckout() {
    const cart = loadCart();
    const emptyState = document.getElementById('checkout-empty-state');
    const mainContent = document.getElementById('checkout-main-content');

    if (!cart || cart.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      if (mainContent) mainContent.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';

    prefillUserData();
    renderOrderReview();
    bindEvents();
  }

  function prefillUserData() {
    try {
      const userStr = localStorage.getItem('gd_logged_in_user');
      if (userStr) {
        const user = JSON.parse(userStr);
        const firstNameInput = document.getElementById('billing_first_name');
        const lastNameInput = document.getElementById('billing_last_name');
        const emailInput = document.getElementById('billing_email');
        const phoneInput = document.getElementById('billing_phone');
        const companyInput = document.getElementById('billing_company');

        if (user.name) {
          const parts = user.name.trim().split(/\s+/);
          if (firstNameInput && !firstNameInput.value) firstNameInput.value = parts[0] || '';
          if (lastNameInput && !lastNameInput.value) lastNameInput.value = parts.slice(1).join(' ') || '';
        }
        if (emailInput && !emailInput.value && user.email) emailInput.value = user.email;
        if (phoneInput && !phoneInput.value && user.phone) phoneInput.value = user.phone;
        if (companyInput && !companyInput.value && user.company) companyInput.value = user.company;

        const loginNotice = document.getElementById('returning-customer-notice');
        if (loginNotice) {
          loginNotice.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
              <span><i class="fa-solid fa-circle-check" style="color:#059669;margin-right:8px;"></i> Logged in as <strong>${escapeHtml(user.name || user.email)}</strong> (${escapeHtml(user.company || 'Trade Partner')})</span>
              <span style="font-size:11px;background:#fae8ff;color:#a21caf;padding:2px 8px;border-radius:12px;font-weight:700;text-transform:uppercase;">Verified B2B</span>
            </div>
          `;
        }
      }
    } catch (e) {
      console.warn('Could not prefill user:', e);
    }
  }

  function renderOrderReview() {
    const cart = loadCart();
    const itemsTbody = document.getElementById('checkout-order-items');
    const subtotalEl = document.getElementById('checkout-subtotal-val');
    const totalEl = document.getElementById('checkout-total-val');

    if (!itemsTbody) return;

    let subtotal = 0;
    let rowsHtml = '';

    cart.forEach((item) => {
      const pricePerCarat = parseFloat(item.price) || 0;
      const carats = parseFloat(item.carats) || 0;
      const pieces = parseInt(item.pieces || item.quantity) || 1;

      let itemTotal = 0;
      if (carats > 0) {
        itemTotal = pricePerCarat * carats;
      } else if (pieces > 0 && pricePerCarat > 0) {
        itemTotal = pricePerCarat * pieces;
      } else {
        itemTotal = pricePerCarat || 0;
      }
      subtotal += itemTotal;

      let specText = '';
      if (carats > 0 && pieces > 0) {
        specText = `${carats.toFixed(2)} ct &middot; ${pieces} pcs`;
      } else if (carats > 0) {
        specText = `${carats.toFixed(2)} ct`;
      } else if (pieces > 0) {
        specText = `${pieces} pcs`;
      }

      if (item.shape) specText += (specText ? ' &middot; ' : '') + item.shape;
      if (item.color) specText += ' &middot; ' + item.color;
      if (item.clarity) specText += ' &middot; ' + item.clarity;

      const title = item.name || item.title || (item.carats ? `${item.carats}ct Diamond Parcel` : 'Diamond Stock Item');

      rowsHtml += `
        <tr class="cart_item" style="border-bottom: 1px solid #f1f5f9;">
          <td class="product-name" style="padding: 14px 0; font-size: 13px; color: #64748b; line-height: 1.6;">
            <div style="font-weight: 600; color: #334155; text-transform: uppercase; letter-spacing: 0.3px;">
              ${escapeHtml(title)}
            </div>
            ${specText ? `<div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">${escapeHtml(specText)}</div>` : ''}
            <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">Special Instructions:</div>
            <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">&times; ${pieces}</div>
          </td>
          <td class="product-total" style="padding: 14px 0; text-align: right; font-size: 14px; font-weight: 600; color: #c026d3; vertical-align: top;">
            ${formatPrice(itemTotal)}
          </td>
        </tr>
      `;
    });

    itemsTbody.innerHTML = rowsHtml;

    if (subtotalEl) {
      subtotalEl.textContent = formatPrice(subtotal);
    }

    const currentShipping = getSelectedShipping();
    const radios = document.querySelectorAll('input[name="shipping_method"]');
    let matched = false;

    radios.forEach((r) => {
      const val = parseFloat(r.value);
      if (val === currentShipping.cost && !matched) {
        r.checked = true;
        matched = true;
      }
    });

    if (!matched && radios.length > 0) {
      radios[0].checked = true;
    }

    updateTotals();
  }

  function getActiveShipping() {
    const checked = document.querySelector('input[name="shipping_method"]:checked');
    if (checked) {
      const cost = parseFloat(checked.value) || 0;
      let name = '2-3 Days within USA: $30.00';
      const label = checked.closest('label');
      if (label) {
        name = label.innerText.replace(/\s+/g, ' ').trim();
      }
      return { cost, name };
    }
    return getSelectedShipping();
  }

  function updateTotals() {
    const cart = loadCart();
    let subtotal = 0;
    cart.forEach((item) => {
      const p = parseFloat(item.price) || 0;
      const c = parseFloat(item.carats) || 0;
      const pcs = parseInt(item.pieces || item.quantity) || 1;
      if (c > 0) subtotal += p * c;
      else if (pcs > 0 && p > 0) subtotal += p * pcs;
      else subtotal += p;
    });

    const activeShipping = getActiveShipping();
    saveSelectedShipping(activeShipping.cost, activeShipping.name);

    let grandTotal = subtotal + activeShipping.cost - appliedDiscount;
    if (grandTotal < 0) grandTotal = 0;

    const subtotalEl = document.getElementById('checkout-subtotal-val');
    const totalEl = document.getElementById('checkout-total-val');

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (totalEl) totalEl.textContent = formatPrice(grandTotal);

    const discountRow = document.getElementById('checkout-discount-row');
    const discountVal = document.getElementById('checkout-discount-val');
    if (appliedDiscount > 0 && discountRow && discountVal) {
      discountRow.style.display = 'table-row';
      discountVal.textContent = '-' + formatPrice(appliedDiscount);
    } else if (discountRow) {
      discountRow.style.display = 'none';
    }
  }

  function toggleLoginForm() {
    const box = document.getElementById('checkout-login-box');
    if (!box) return;
    if (box.style.display === 'none' || !box.style.display) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  }

  function toggleCouponForm() {
    const box = document.getElementById('checkout-coupon-box');
    if (!box) return;
    if (box.style.display === 'none' || !box.style.display) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  }

  function toggleShippingAddress() {
    const checkbox = document.getElementById('ship-to-different-address-checkbox');
    const box = document.getElementById('shipping-address-fields-box');
    if (!checkbox || !box) return;
    box.style.display = checkbox.checked ? 'block' : 'none';
  }

  function applyCoupon() {
    const input = document.getElementById('coupon_code');
    const msg = document.getElementById('coupon-msg');
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (!code) {
      if (msg) {
        msg.textContent = 'Please enter a coupon code.';
        msg.style.color = '#dc2626';
        msg.style.display = 'block';
      }
      return;
    }

    const cart = loadCart();
    let subtotal = 0;
    cart.forEach((item) => {
      const p = parseFloat(item.price) || 0;
      const c = parseFloat(item.carats) || 0;
      const pcs = parseInt(item.pieces || item.quantity) || 1;
      if (c > 0) subtotal += p * c;
      else if (pcs > 0 && p > 0) subtotal += p * pcs;
      else subtotal += p;
    });

    if (code === 'WHOLESALE10' || code === 'TRADE10' || code === 'SAVE10') {
      appliedDiscount = Math.round(subtotal * 0.10 * 100) / 100;
      appliedCouponCode = code;
      if (msg) {
        msg.textContent = `Coupon code "${code}" applied successfully! (10% Discount)`;
        msg.style.color = '#059669';
        msg.style.display = 'block';
      }
    } else if (code === 'WELCOME50') {
      appliedDiscount = 50;
      appliedCouponCode = code;
      if (msg) {
        msg.textContent = `Coupon code "${code}" applied successfully! ($50.00 Discount)`;
        msg.style.color = '#059669';
        msg.style.display = 'block';
      }
    } else {
      appliedDiscount = 0;
      appliedCouponCode = '';
      if (msg) {
        msg.textContent = `Coupon "${code}" does not exist or has expired.`;
        msg.style.color = '#dc2626';
        msg.style.display = 'block';
      }
    }

    updateTotals();
  }

  function handlePaymentChange() {
    const checked = document.querySelector('input[name="payment_method"]:checked');
    const codDesc = document.getElementById('payment-method-desc-cod');
    const wireDesc = document.getElementById('payment-method-desc-wire');

    if (codDesc) codDesc.style.display = 'none';
    if (wireDesc) wireDesc.style.display = 'none';

    if (checked && checked.value === 'cod' && codDesc) {
      codDesc.style.display = 'block';
    } else if (checked && checked.value === 'wire' && wireDesc) {
      wireDesc.style.display = 'block';
    }
  }

  function placeOrder() {
    const errors = [];
    const errorContainer = document.getElementById('checkout-error-notice');

    const firstName = (document.getElementById('billing_first_name')?.value || '').trim();
    const lastName = (document.getElementById('billing_last_name')?.value || '').trim();
    const country = (document.getElementById('billing_country')?.value || '').trim();
    const address1 = (document.getElementById('billing_address_1')?.value || '').trim();
    const address2 = (document.getElementById('billing_address_2')?.value || '').trim();
    const city = (document.getElementById('billing_city')?.value || '').trim();
    const state = (document.getElementById('billing_state')?.value || '').trim();
    const postcode = (document.getElementById('billing_postcode')?.value || '').trim();
    const phone = (document.getElementById('billing_phone')?.value || '').trim();
    const email = (document.getElementById('billing_email')?.value || '').trim();
    const company = (document.getElementById('billing_company')?.value || '').trim();
    const orderNotes = (document.getElementById('order_comments')?.value || '').trim();

    if (!firstName) errors.push('Billing First name is a required field.');
    if (!lastName) errors.push('Billing Last name is a required field.');
    if (!country) errors.push('Billing Country / Region is a required field.');
    if (!address1) errors.push('Billing Street address is a required field.');
    if (!city) errors.push('Billing Town / City is a required field.');
    if (!state) errors.push('Billing State is a required field.');
    if (!postcode) errors.push('Billing ZIP Code is a required field.');
    if (!phone) errors.push('Billing Phone is a required field.');
    if (!email) {
      errors.push('Billing Email address is a required field.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please enter a valid email address.');
    }

    const shipDifferent = document.getElementById('ship-to-different-address-checkbox')?.checked;
    let shippingDetails = {
      firstName,
      lastName,
      company,
      country,
      address1,
      address2,
      city,
      state,
      postcode
    };

    if (shipDifferent) {
      const sFirstName = (document.getElementById('shipping_first_name')?.value || '').trim();
      const sLastName = (document.getElementById('shipping_last_name')?.value || '').trim();
      const sAddress1 = (document.getElementById('shipping_address_1')?.value || '').trim();
      const sCity = (document.getElementById('shipping_city')?.value || '').trim();
      const sState = (document.getElementById('shipping_state')?.value || '').trim();
      const sPostcode = (document.getElementById('shipping_postcode')?.value || '').trim();

      if (!sFirstName) errors.push('Shipping First name is a required field.');
      if (!sLastName) errors.push('Shipping Last name is a required field.');
      if (!sAddress1) errors.push('Shipping Street address is a required field.');
      if (!sCity) errors.push('Shipping Town / City is a required field.');
      if (!sState) errors.push('Shipping State is a required field.');
      if (!sPostcode) errors.push('Shipping ZIP Code is a required field.');

      shippingDetails = {
        firstName: sFirstName,
        lastName: sLastName,
        company: (document.getElementById('shipping_company')?.value || '').trim(),
        country: (document.getElementById('shipping_country')?.value || '').trim() || country,
        address1: sAddress1,
        address2: (document.getElementById('shipping_address_2')?.value || '').trim(),
        city: sCity,
        state: sState,
        postcode: sPostcode
      };
    }

    if (errors.length > 0) {
      if (errorContainer) {
        errorContainer.innerHTML = `
          <div class="woocommerce-error" style="border-top:3px solid #b81c23;background:#fbf8f8;color:#515151;padding:16px 20px 16px 48px;position:relative;margin-bottom:28px;font-size:13px;line-height:1.7;">
            <i class="fa-solid fa-triangle-exclamation" style="position:absolute;left:18px;top:18px;color:#b81c23;font-size:16px;"></i>
            <ul style="margin:0;padding:0;list-style:square outside;margin-left:14px;">
              ${errors.map((e) => `<li>${escapeHtml(e)}</li>`).join('')}
            </ul>
          </div>
        `;
        errorContainer.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert(errors.join('\n'));
      }
      return;
    }

    if (errorContainer) {
      errorContainer.style.display = 'none';
      errorContainer.innerHTML = '';
    }

    const cart = loadCart();
    let subtotal = 0;
    cart.forEach((item) => {
      const p = parseFloat(item.price) || 0;
      const c = parseFloat(item.carats) || 0;
      const pcs = parseInt(item.pieces || item.quantity) || 1;
      if (c > 0) subtotal += p * c;
      else if (pcs > 0 && p > 0) subtotal += p * pcs;
      else subtotal += p;
    });

    const activeShipping = getActiveShipping();
    let grandTotal = subtotal + activeShipping.cost - appliedDiscount;
    if (grandTotal < 0) grandTotal = 0;

    const checkedPayment = document.querySelector('input[name="payment_method"]:checked')?.value || 'cod';
    const paymentMethodLabel = checkedPayment === 'wire' ? 'Direct bank transfer' : 'Cash on delivery';

    const orderId = 'ORD-' + Math.floor(10000 + Math.random() * 90000);
    const dateStr = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const orderRecord = {
      id: orderId,
      orderNumber: orderId,
      date: dateStr,
      timestamp: new Date().toISOString(),
      customerName: `${firstName} ${lastName}`,
      company: company || 'Wholesale Client',
      email: email,
      phone: phone,
      billingAddress: {
        firstName,
        lastName,
        company,
        address1,
        address2,
        city,
        state,
        postcode,
        country
      },
      shippingAddress: shippingDetails,
      items: cart,
      subtotal: subtotal,
      shipping: activeShipping.cost,
      shippingMethod: activeShipping.name,
      discount: appliedDiscount,
      couponCode: appliedCouponCode,
      total: grandTotal,
      paymentMethod: paymentMethodLabel,
      notes: orderNotes,
      status: 'Processing'
    };

    try {
      const existingOrdersStr = localStorage.getItem('gd_user_orders');
      const orders = existingOrdersStr ? JSON.parse(existingOrdersStr) : [];
      orders.unshift(orderRecord);
      localStorage.setItem('gd_user_orders', JSON.stringify(orders));
    } catch (e) {
      console.warn('Error saving to gd_user_orders:', e);
    }

    if (window.GuruAdminStore && typeof window.GuruAdminStore.saveRecord === 'function') {
      try {
        window.GuruAdminStore.saveRecord('orders', orderRecord);
      } catch (e) {
        console.warn('GuruAdminStore order save error:', e);
      }
    }

    localStorage.removeItem('itd_cart');
    localStorage.removeItem('itd_selected_shipping');

    const badge = document.getElementById('cart-badge');
    if (badge) {
      badge.textContent = '0';
      badge.style.display = 'none';
    }

    renderOrderReceived(orderRecord);
  }

  function renderOrderReceived(order) {
    const mainSection = document.getElementById('checkout-main-content');
    const noticesSection = document.getElementById('checkout-top-notices');
    const confirmationSection = document.getElementById('checkout-received-view');

    if (noticesSection) noticesSection.style.display = 'none';
    if (mainSection) mainSection.style.display = 'none';

    if (confirmationSection) {
      confirmationSection.innerHTML = `
        <div class="woocommerce-order" style="max-width:960px;margin:30px auto;font-family:'Montserrat',sans-serif;color:#333;">
          <p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received" style="font-size:18px;font-weight:600;color:#059669;margin-bottom:28px;display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-circle-check" style="font-size:22px;"></i> Thank you. Your order has been received.
          </p>

          <ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details" style="display:flex;flex-wrap:wrap;gap:20px;padding:20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;list-style:none;margin-bottom:36px;">
            <li class="woocommerce-order-overview__order order" style="flex:1 1 140px;border-right:1px solid #e2e8f0;padding-right:16px;">
              <span style="display:block;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Order number:</span>
              <strong style="font-size:15px;color:#0f172a;">${escapeHtml(order.id)}</strong>
            </li>
            <li class="woocommerce-order-overview__date date" style="flex:1 1 140px;border-right:1px solid #e2e8f0;padding-right:16px;">
              <span style="display:block;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Date:</span>
              <strong style="font-size:15px;color:#0f172a;">${escapeHtml(order.date)}</strong>
            </li>
            <li class="woocommerce-order-overview__email email" style="flex:1 1 180px;border-right:1px solid #e2e8f0;padding-right:16px;">
              <span style="display:block;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Email:</span>
              <strong style="font-size:15px;color:#0f172a;">${escapeHtml(order.email)}</strong>
            </li>
            <li class="woocommerce-order-overview__total total" style="flex:1 1 130px;border-right:1px solid #e2e8f0;padding-right:16px;">
              <span style="display:block;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Total:</span>
              <strong style="font-size:16px;color:#c026d3;">${formatPrice(order.total)}</strong>
            </li>
            <li class="woocommerce-order-overview__payment-method method" style="flex:1 1 150px;">
              <span style="display:block;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Payment method:</span>
              <strong style="font-size:15px;color:#0f172a;">${escapeHtml(order.paymentMethod)}</strong>
            </li>
          </ul>

          <div style="background:#fdf4ff;border:1px solid #f5d0fe;border-radius:4px;padding:16px 20px;margin-bottom:36px;font-size:13px;color:#86198f;line-height:1.6;">
            <strong>Fulfillment Dispatch Notice:</strong> ${order.paymentMethod === 'Cash on delivery' ? 'Pay with cash upon delivery.' : 'Please transfer the invoice balance to our wholesale bank account.'} Our trade representative will contact you via WhatsApp / Phone (<strong>${escapeHtml(order.phone)}</strong>) to confirm armored courier dispatch.
          </div>

          <h2 style="font-size:20px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#1e293b;margin:0 0 16px;">Order Details</h2>

          <table class="woocommerce-table woocommerce-table--order-details shop_table order_details" style="width:100%;border-collapse:collapse;margin-bottom:36px;">
            <thead>
              <tr style="border-bottom:2px solid #e2e8f0;">
                <th style="padding:12px 0;text-align:left;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Product</th>
                <th style="padding:12px 0;text-align:right;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${order.items.map((item) => {
                const p = parseFloat(item.price) || 0;
                const c = parseFloat(item.carats) || 0;
                const pcs = parseInt(item.pieces || item.quantity) || 1;
                const lineTotal = c > 0 ? (p * c) : (p * pcs);
                return `
                  <tr style="border-bottom:1px solid #f1f5f9;">
                    <td style="padding:14px 0;font-size:13px;color:#334155;">
                      <strong style="text-transform:uppercase;">${escapeHtml(item.name || item.title || 'Diamond Stock Item')}</strong>
                      &times; ${pcs}
                      ${item.carats ? `<div style="font-size:12px;color:#94a3b8;">${item.carats} carats</div>` : ''}
                    </td>
                    <td style="padding:14px 0;text-align:right;font-size:14px;color:#c026d3;font-weight:600;">
                      ${formatPrice(lineTotal)}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
            <tfoot>
              <tr style="border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">
                <th style="padding:14px 0;text-align:left;font-size:13px;color:#64748b;text-transform:uppercase;">Subtotal:</th>
                <td style="padding:14px 0;text-align:right;font-size:14px;font-weight:700;color:#c026d3;">${formatPrice(order.subtotal)}</td>
              </tr>
              ${order.discount > 0 ? `
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <th style="padding:14px 0;text-align:left;font-size:13px;color:#64748b;text-transform:uppercase;">Discount:</th>
                  <td style="padding:14px 0;text-align:right;font-size:14px;font-weight:700;color:#059669;">-${formatPrice(order.discount)}</td>
                </tr>
              ` : ''}
              <tr style="border-bottom:1px solid #e2e8f0;">
                <th style="padding:14px 0;text-align:left;font-size:13px;color:#64748b;text-transform:uppercase;">Shipping:</th>
                <td style="padding:14px 0;text-align:right;font-size:13px;color:#475569;">${escapeHtml(order.shippingMethod)}</td>
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <th style="padding:14px 0;text-align:left;font-size:13px;color:#64748b;text-transform:uppercase;">Payment method:</th>
                <td style="padding:14px 0;text-align:right;font-size:13px;color:#475569;">${escapeHtml(order.paymentMethod)}</td>
              </tr>
              <tr style="border-bottom:2px solid #0f172a;">
                <th style="padding:16px 0;text-align:left;font-size:16px;color:#0f172a;text-transform:uppercase;">Total:</th>
                <td style="padding:16px 0;text-align:right;font-size:18px;font-weight:800;color:#c026d3;">${formatPrice(order.total)}</td>
              </tr>
            </tfoot>
          </table>

          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;margin-bottom:40px;">
            <div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-radius:4px;">
              <h3 style="font-size:15px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#0f172a;margin:0 0 12px;">Billing Address</h3>
              <address style="font-style:normal;font-size:13px;line-height:1.7;color:#475569;">
                <strong>${escapeHtml(order.billingAddress.firstName)} ${escapeHtml(order.billingAddress.lastName)}</strong><br>
                ${order.billingAddress.company ? `${escapeHtml(order.billingAddress.company)}<br>` : ''}
                ${escapeHtml(order.billingAddress.address1)}<br>
                ${order.billingAddress.address2 ? `${escapeHtml(order.billingAddress.address2)}<br>` : ''}
                ${escapeHtml(order.billingAddress.city)}, ${escapeHtml(order.billingAddress.state)} ${escapeHtml(order.billingAddress.postcode)}<br>
                ${escapeHtml(order.billingAddress.country)}<br>
                <i class="fa-solid fa-phone" style="font-size:11px;margin-right:6px;"></i> ${escapeHtml(order.phone)}<br>
                <i class="fa-solid fa-envelope" style="font-size:11px;margin-right:6px;"></i> ${escapeHtml(order.email)}
              </address>
            </div>

            <div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-radius:4px;">
              <h3 style="font-size:15px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#0f172a;margin:0 0 12px;">Shipping Address</h3>
              <address style="font-style:normal;font-size:13px;line-height:1.7;color:#475569;">
                <strong>${escapeHtml(order.shippingAddress.firstName)} ${escapeHtml(order.shippingAddress.lastName)}</strong><br>
                ${order.shippingAddress.company ? `${escapeHtml(order.shippingAddress.company)}<br>` : ''}
                ${escapeHtml(order.shippingAddress.address1)}<br>
                ${order.shippingAddress.address2 ? `${escapeHtml(order.shippingAddress.address2)}<br>` : ''}
                ${escapeHtml(order.shippingAddress.city)}, ${escapeHtml(order.shippingAddress.state)} ${escapeHtml(order.shippingAddress.postcode)}<br>
                ${escapeHtml(order.shippingAddress.country)}
              </address>
            </div>
          </div>

          <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:20px;">
            <a href="round-melee.html" style="padding:12px 28px;background:#1e293b;color:#fff;text-decoration:none;font-weight:600;font-size:13px;border-radius:4px;display:inline-flex;align-items:center;gap:8px;transition:background 0.2s;" onmouseover="this.style.background='#0f172a'" onmouseout="this.style.background='#1e293b'">
              <i class="fa-solid fa-arrow-left"></i> Continue Shopping
            </a>
            <button onclick="window.print()" style="padding:12px 28px;background:#f1f5f9;color:#334155;border:1px solid #cbd5e1;font-weight:600;font-size:13px;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;gap:8px;">
              <i class="fa-solid fa-print"></i> Print Invoice
            </button>
          </div>
        </div>
      `;
      confirmationSection.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function bindEvents() {
    const shippingRadios = document.querySelectorAll('input[name="shipping_method"]');
    shippingRadios.forEach((radio) => {
      radio.addEventListener('change', updateTotals);
    });

    const paymentRadios = document.querySelectorAll('input[name="payment_method"]');
    paymentRadios.forEach((radio) => {
      radio.addEventListener('change', handlePaymentChange);
    });

    const shipDiffCheckbox = document.getElementById('ship-to-different-address-checkbox');
    if (shipDiffCheckbox) {
      shipDiffCheckbox.addEventListener('change', toggleShippingAddress);
    }
  }

  window.HeymanCheckout = {
    init: initCheckout,
    toggleLoginForm: toggleLoginForm,
    toggleCouponForm: toggleCouponForm,
    toggleShippingAddress: toggleShippingAddress,
    applyCoupon: applyCoupon,
    placeOrder: placeOrder,
    updateTotals: updateTotals
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCheckout);
  } else {
    initCheckout();
  }
})(window);
