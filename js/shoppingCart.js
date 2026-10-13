(function() {
    'use strict';

    function loadCart() {
        try {
            const cartStr = localStorage.getItem('itd_cart');
            return cartStr ? JSON.parse(cartStr) : [];
        } catch (e) {
            console.error('Failed to parse cart:', e);
            return [];
        }
    }

    function saveCart(cart) {
        try {
            localStorage.setItem('itd_cart', JSON.stringify(cart));
        } catch (e) {
            console.error('Failed to save cart:', e);
        }
    }

    function formatPrice(price) {
        const num = parseFloat(price);
        if (isNaN(num)) return '$0.00';
        return '$' + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function getShippingCost() {
        const checked = document.querySelector('input[name="shipping"]:checked');
        return checked ? parseFloat(checked.value) || 0 : 30;
    }

    function calculateItemTotal(item) {
        const isSuiteOrJewelry = (item.source && (item.source.toLowerCase().includes('suite') || item.source.toLowerCase().includes('jewelry'))) || item.isSuite || item.type === 'jewelry';
        const price = parseFloat(item.price) || 0;
        const carats = parseFloat(item.carats) || 0;
        const pieces = parseInt(item.pieces) || 0;
        const qty = parseInt(item.quantity) || 1;

        if (isSuiteOrJewelry) {
            return {
                total: price * qty,
                basis: `${formatPrice(price)}/item`
            };
        } else if (carats > 0) {
            return {
                total: price * carats,
                basis: `${formatPrice(price)}/ct`
            };
        } else if (pieces > 0) {
            return {
                total: price * pieces,
                basis: `${formatPrice(price)}/pc`
            };
        } else {
            return {
                total: price * qty,
                basis: `${formatPrice(price)}`
            };
        }
    }

    function renderCart() {
        const cart = loadCart();
        const emptyState = document.getElementById('cart-empty-state');
        const contentState = document.getElementById('cart-content-state');
        const tableBody = document.getElementById('cart-table-body');
        const subtotalEl = document.getElementById('cart-subtotal');
        const totalEl = document.getElementById('cart-total');

        if (!emptyState || !contentState) return;

        if (!cart || cart.length === 0) {
            emptyState.style.display = 'block';
            contentState.style.display = 'none';
            if (subtotalEl) subtotalEl.textContent = '$0.00';
            if (totalEl) totalEl.textContent = '$0.00';
            return;
        }

        emptyState.style.display = 'none';
        contentState.style.display = 'block';

        if (!tableBody) return;

        let grandTotal = 0;

        tableBody.innerHTML = cart.map((item, index) => {
            const pricePerCarat = parseFloat(item.price) || 0;
            const carats = parseFloat(item.carats) || 0;
            const pieces = parseInt(item.pieces || item.quantity) || 1;

            const calc = calculateItemTotal(item);
            const itemTotal = calc.total;
            const priceBasis = calc.basis;

            grandTotal += itemTotal;

            const stockNo = item.name || item.title || ('HRD/' + (item.clarity || 'VVS') + '/' + (item.mmSize || 'N/A'));
            const sourceLabel = item.source || 'Round Melee';
            const caratsVal = carats > 0 ? carats.toFixed(2) : '—';
            const piecesVal = pieces;
            const imgSrc = item.image || item.img || '../images/melee-hero.jpg';
            const desc = item.details || item.description || item.shape || (item.mmSize ? 'Round ' + item.mmSize : 'Calibrated Diamond');

            // Summary line: "0.11 ct | 10 pcs | $9.35"
            const summaryLine = `<span id="summary-line-${index}">${carats > 0 ? carats.toFixed(2) + ' ct &nbsp;|&nbsp; ' : ''}${piecesVal} pcs &nbsp;|&nbsp; <strong style="color:#c026d3;">${formatPrice(itemTotal)}</strong></span>`;

            return `
                <tr style="border-bottom:1px solid #e2e8f0;">
                    <td style="padding:16px 12px;vertical-align:middle;text-align:center;">
                        <button onclick="window.ShoppingCart.removeItem(${index})" style="width:28px;height:28px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:50%;color:#94a3b8;font-size:16px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all 0.2s;" title="Remove item" onmouseover="this.style.color='#ef4444';this.style.borderColor='#fca5a5'" onmouseout="this.style.color='#94a3b8';this.style.borderColor='#e2e8f0'">
                            &times;
                        </button>
                    </td>
                    <td style="padding:16px 12px;vertical-align:middle;">
                        <div style="display:flex;align-items:center;gap:14px;">
                            <div style="width:70px;height:70px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;">
                                <img src="${imgSrc}" alt="${stockNo}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.parentElement.innerHTML='<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'28\\' height=\\'28\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'#cbd5e1\\' stroke-width=\\'1.5\\'><path d=\\'M12 2L2 12l10 10 10-10L12 2z\\'/></svg>'">
                            </div>
                            <div>
                                <p style="font-size:13px;font-weight:700;color:#0f172a;margin:0 0 2px;">${stockNo}</p>
                                <p style="font-size:11px;color:#94a3b8;margin:0 0 4px;">${sourceLabel}</p>
                                <p style="font-size:12px;color:#059669;font-weight:600;margin:0;">${summaryLine}</p>
                                ${item.instructions ? `<p style="font-size:11px;color:#64748b;margin:4px 0 0;"><strong>Special Instructions:</strong> ${item.instructions}</p>` : ''}
                            </div>
                        </div>
                    </td>
                    <td style="padding:16px 12px;font-size:13px;color:#64748b;vertical-align:middle;">${desc}</td>
                    <td style="padding:16px 12px;vertical-align:middle;">
                        <p style="font-size:14px;font-weight:700;color:#0f172a;margin:0 0 2px;">${formatPrice(pricePerCarat)}</p>
                        <p style="font-size:11px;color:#94a3b8;margin:0;">${priceBasis}</p>
                    </td>
                    <td style="padding:16px 12px;text-align:center;vertical-align:middle;">
                        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
                            ${carats > 0 ? `
                            <div style="display:flex;align-items:center;gap:6px;">
                                <span style="font-size:10px;font-weight:700;color:#f59e0b;min-width:44px;text-align:right;">CARATS:</span>
                                <div style="display:inline-flex;align-items:center;">
                                    <button onclick="window.ShoppingCart.updateCarats(${index}, -0.01)" style="width:26px;height:28px;background:#f59e0b;color:white;border:none;font-size:14px;font-weight:bold;cursor:pointer;border-radius:4px 0 0 4px;">&#8722;</button>
                                    <input type="number" step="0.01" min="0" data-index="${index}" class="cart-carats-input" value="${caratsVal}" oninput="window.ShoppingCart.onInputChange(${index}, 'carats')" style="width:52px;height:28px;text-align:center;border:1px solid #e2e8f0;border-left:none;border-right:none;font-size:12px;font-weight:700;background:white;outline:none;">
                                    <button onclick="window.ShoppingCart.updateCarats(${index}, 0.01)" style="width:26px;height:28px;background:#f59e0b;color:white;border:none;font-size:14px;font-weight:bold;cursor:pointer;border-radius:0 4px 4px 0;">&#43;</button>
                                </div>
                                <span style="font-size:10px;color:#64748b;">ct</span>
                            </div>
                            ` : ''}
                            <div style="display:flex;align-items:center;gap:6px;">
                                <span style="font-size:10px;font-weight:700;color:#0f172a;min-width:44px;text-align:right;">PIECES:</span>
                                <div style="display:inline-flex;align-items:center;">
                                    <button onclick="window.ShoppingCart.updatePieces(${index}, -1)" style="width:26px;height:28px;background:#0f172a;color:white;border:none;font-size:14px;font-weight:bold;cursor:pointer;border-radius:4px 0 0 4px;">&#8722;</button>
                                    <input type="number" step="1" min="0" data-index="${index}" class="cart-pieces-input" value="${piecesVal}" oninput="window.ShoppingCart.onInputChange(${index}, 'pieces')" style="width:52px;height:28px;text-align:center;border:1px solid #e2e8f0;border-left:none;border-right:none;font-size:12px;font-weight:700;background:white;outline:none;">
                                    <button onclick="window.ShoppingCart.updatePieces(${index}, 1)" style="width:26px;height:28px;background:#0f172a;color:white;border:none;font-size:14px;font-weight:bold;cursor:pointer;border-radius:0 4px 4px 0;">&#43;</button>
                                </div>
                                <span style="font-size:10px;color:#64748b;">pcs</span>
                            </div>
                        </div>
                    </td>
                    <td style="padding:16px 12px;text-align:right;font-size:15px;font-weight:800;color:#c026d3;vertical-align:middle;">
                        <span id="item-total-${index}">${formatPrice(itemTotal)}</span>
                        <p style="font-size:10px;font-weight:500;color:#94a3b8;margin:2px 0 0;" id="item-basis-${index}">${priceBasis}</p>
                    </td>
                </tr>
            `;
        }).join('');

        const shippingCost = getShippingCost();
        if (subtotalEl) subtotalEl.textContent = formatPrice(grandTotal);
        if (totalEl) totalEl.textContent = formatPrice(grandTotal + shippingCost);
    }

    function removeItem(index) {
        let cart = loadCart();
        cart.splice(index, 1);
        saveCart(cart);
        renderCart();
        updateBadge();
    }

    function updateQuantity(index, delta) {
        let cart = loadCart();
        if (!cart[index]) return;
        const newQty = (cart[index].quantity || 1) + delta;
        if (newQty > 0) {
            cart[index].quantity = newQty;
            if (cart[index].pieces !== undefined) cart[index].pieces = newQty;
            saveCart(cart);
            renderCart();
            updateBadge();
        }
    }

    function updateCarats(index, delta) {
        let cart = loadCart();
        if (!cart[index]) return;

        const currentCarats = parseFloat(cart[index].carats) || 0;
        const currentPieces = parseInt(cart[index].pieces) || 0;
        const newCarats = Math.max(0, Math.round((currentCarats + delta) * 100) / 100);

        if (currentCarats > 0 && currentPieces > 0) {
            const ctPerPiece = currentCarats / currentPieces;
            if (ctPerPiece > 0) {
                cart[index].pieces = Math.max(1, Math.round(newCarats / ctPerPiece));
            }
        }

        cart[index].carats = newCarats;
        saveCart(cart);
        renderCart();
        updateBadge();
    }

    function updatePieces(index, delta) {
        let cart = loadCart();
        if (!cart[index]) return;

        const currentCarats = parseFloat(cart[index].carats) || 0;
        const currentPieces = parseInt(cart[index].pieces) || 0;
        const newPieces = Math.max(0, currentPieces + delta);

        if (currentCarats > 0 && currentPieces > 0) {
            const ctPerPiece = currentCarats / currentPieces;
            cart[index].carats = Math.round(newPieces * ctPerPiece * 100) / 100;
        }

        cart[index].pieces = newPieces;
        cart[index].quantity = newPieces || 1;
        saveCart(cart);
        renderCart();
        updateBadge();
    }

    function onInputChange(index, field) {
        let cart = loadCart();
        if (!cart[index]) return;

        const caratInput = document.querySelector(`.cart-carats-input[data-index="${index}"]`);
        const pieceInput = document.querySelector(`.cart-pieces-input[data-index="${index}"]`);

        const currentCarats = parseFloat(cart[index].carats) || 0;
        const currentPieces = parseInt(cart[index].pieces) || 0;
        const ctPerPiece = (currentCarats > 0 && currentPieces > 0) ? (currentCarats / currentPieces) : 0;

        if (field === 'pieces' && pieceInput) {
            const newPieces = Math.max(0, parseInt(pieceInput.value) || 0);
            cart[index].pieces = newPieces;
            cart[index].quantity = newPieces || 1;

            if (ctPerPiece > 0) {
                const newCarats = Math.round(newPieces * ctPerPiece * 100) / 100;
                cart[index].carats = newCarats;
                if (caratInput) caratInput.value = newCarats.toFixed(2);
            }
        } else if (field === 'carats' && caratInput) {
            const newCarats = Math.max(0, Math.round((parseFloat(caratInput.value) || 0) * 100) / 100);
            cart[index].carats = newCarats;

            if (ctPerPiece > 0) {
                const newPieces = Math.max(1, Math.round(newCarats / ctPerPiece));
                cart[index].pieces = newPieces;
                if (pieceInput) pieceInput.value = newPieces;
            }
        }

        saveCart(cart);
        updateBadge();

        const calc = calculateItemTotal(cart[index]);
        const itemTotal = calc.total;
        const priceBasis = calc.basis;

        const totalEl = document.getElementById(`item-total-${index}`);
        const basisEl = document.getElementById(`item-basis-${index}`);
        const summaryEl = document.getElementById(`summary-line-${index}`);

        if (totalEl) totalEl.textContent = formatPrice(itemTotal);
        if (basisEl) basisEl.textContent = priceBasis;
        if (summaryEl) {
            const cVal = parseFloat(cart[index].carats) || 0;
            const pVal = parseInt(cart[index].pieces) || 0;
            summaryEl.innerHTML = `${cVal > 0 ? cVal.toFixed(2) + ' ct &nbsp;|&nbsp; ' : ''}${pVal} pcs &nbsp;|&nbsp; <strong style="color:#c026d3;">${formatPrice(itemTotal)}</strong>`;
        }

        let grandTotal = 0;
        cart.forEach(item => {
            grandTotal += calculateItemTotal(item).total;
        });

        const subtotalEl = document.getElementById('cart-subtotal');
        const grandTotalEl = document.getElementById('cart-total');
        const shippingCost = getShippingCost();
        if (subtotalEl) subtotalEl.textContent = formatPrice(grandTotal);
        if (grandTotalEl) grandTotalEl.textContent = formatPrice(grandTotal + shippingCost);
    }

    function updateBadge() {
        const badge = document.getElementById('cart-badge');
        if (badge) {
            const cart = loadCart();
            const count = cart.reduce((sum, item) => sum + (parseInt(item.pieces || item.quantity) || 1), 0);
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    function updateCart() {
        renderCart();
        updateBadge();

        const btn = document.getElementById('update-cart-btn');
        if (btn) {
            const orig = btn.textContent;
            btn.textContent = '✓ Cart Updated!';
            btn.style.background = '#059669';
            setTimeout(() => {
                btn.textContent = orig;
                btn.style.background = '#475569';
            }, 2000);
        }
    }

    function refreshCart() {
        renderCart();
        updateBadge();
    }

    function proceedToCheckout() {
        const cart = loadCart();
        if (!cart || cart.length === 0) {
            alert('Your trade cart is empty. Please add diamonds or jewelry before proceeding to checkout.');
            return;
        }

        const checked = document.querySelector('input[name="shipping"]:checked');
        const shippingCost = checked ? parseFloat(checked.value) || 0 : 30;
        let shippingName = '2-3 Days within USA: $30.00';
        if (checked && checked.closest('label')) {
            shippingName = checked.closest('label').innerText.replace(/\s+/g, ' ').trim();
        }

        localStorage.setItem('itd_selected_shipping', JSON.stringify({
            cost: shippingCost,
            name: shippingName
        }));

        window.location.href = 'checkout.html';
    }

    window.ShoppingCart = {
        renderCart,
        refreshCart,
        removeItem,
        updateQuantity,
        updateCarats,
        updatePieces,
        onInputChange,
        updateCart,
        proceedToCheckout
    };

    function attachListeners() {
        renderCart();
        updateBadge();
        document.querySelectorAll('input[name="shipping"]').forEach(radio => {
            radio.addEventListener('change', renderCart);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachListeners);
    } else {
        attachListeners();
    }
})();
