(function() {
    function loadCart() {
        const cartStr = localStorage.getItem('itd_cart');
        return cartStr ? JSON.parse(cartStr) : [];
    }

    function saveCart(cart) {
        localStorage.setItem('itd_cart', JSON.stringify(cart));
    }

    function formatPrice(price) {
        return '$' + parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function getShippingCost() {
        const checked = document.querySelector('input[name="shipping"]:checked');
        return checked ? parseFloat(checked.value) || 0 : 30;
    }

    function renderCart() {
        const cart = loadCart();
        const emptyState = document.getElementById('cart-empty-state');
        const contentState = document.getElementById('cart-content-state');
        const tableBody = document.getElementById('cart-table-body');
        const subtotalEl = document.getElementById('cart-subtotal');
        const totalEl = document.getElementById('cart-total');

        if (!tableBody) return;

        if (cart.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
            if (contentState) contentState.style.display = 'none';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';
        if (contentState) contentState.style.display = 'block';

        let grandTotal = 0;

        tableBody.innerHTML = cart.map((item, index) => {
            const pricePerCarat = parseFloat(item.price) || 0;
            const carats = parseFloat(item.carats) || 0;
            const pieces = parseInt(item.pieces) || 0;

            // Price logic: if carats > 0, use carats-based price; else use pieces-based price
            let itemTotal = 0;
            let priceBasis = '';
            if (carats > 0) {
                itemTotal = pricePerCarat * carats;
                priceBasis = `${formatPrice(pricePerCarat)}/ct`;
            } else if (pieces > 0) {
                itemTotal = pricePerCarat * pieces;
                priceBasis = `${formatPrice(pricePerCarat)}/pc`;
            } else {
                itemTotal = 0;
                priceBasis = `${formatPrice(pricePerCarat)}/ct`;
            }

            grandTotal += itemTotal;

            const stockNo = item.title || ('HRD/' + (item.clarity || 'VVS') + '/' + (item.mmSize || 'N/A'));
            const sourceLabel = item.source || 'Round Melee';
            const caratsVal = carats.toFixed(2);
            const piecesVal = pieces;

            // Summary line: "0.11 ct | 10 pcs | $9.35"
            const summaryLine = `<span id="summary-line-${index}">${caratsVal} ct &nbsp;|&nbsp; ${piecesVal} pcs &nbsp;|&nbsp; <strong>${formatPrice(itemTotal)}</strong></span>`;

            return `
                <tr style="border-bottom:1px solid #e2e8f0;">
                    <td style="padding:16px 12px;vertical-align:middle;">
                        <button onclick="window.ShoppingCart.removeItem(${index})" style="width:24px;height:24px;background:none;border:none;color:#94a3b8;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;" title="Remove item" onmouseover="this.style.color='#ef4444'" onmouseout="this.style.color='#94a3b8'">
                            &times;
                        </button>
                    </td>
                    <td style="padding:16px 12px;vertical-align:middle;">
                        <div style="display:flex;align-items:center;gap:14px;">
                            <div style="width:70px;height:70px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;">
                                <img src="../images/melee-hero.jpg" alt="Diamond" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.parentElement.innerHTML='<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'28\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'#cbd5e1\' stroke-width=\'1.5\'><path d=\'M12 2L2 12l10 10 10-10L12 2z\'/></svg>'">
                            </div>
                            <div>
                                <p style="font-size:13px;font-weight:700;color:#0f172a;margin:0 0 2px;">${stockNo}</p>
                                <p style="font-size:11px;color:#94a3b8;margin:0 0 4px;">${sourceLabel}</p>
                                <p style="font-size:12px;color:#059669;font-weight:600;margin:0;">${summaryLine}</p>
                                ${item.instructions ? `<p style="font-size:11px;color:#64748b;margin:4px 0 0;"><strong>Instructions:</strong> ${item.instructions}</p>` : ''}
                            </div>
                        </div>
                    </td>
                    <td style="padding:16px 12px;font-size:13px;color:#64748b;vertical-align:middle;">${item.shape || ('Round ' + item.mmSize)}</td>
                    <td style="padding:16px 12px;vertical-align:middle;">
                        <p style="font-size:14px;font-weight:700;color:#059669;margin:0 0 2px;">${formatPrice(pricePerCarat)}/ct</p>
                        <p style="font-size:11px;color:#94a3b8;margin:0;">est. price</p>
                    </td>
                    <td style="padding:16px 12px;text-align:center;vertical-align:middle;">
                        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
                            <div style="display:flex;align-items:center;gap:6px;">
                                <span style="font-size:10px;font-weight:700;color:#f59e0b;min-width:44px;text-align:right;">CARATS:</span>
                                <div style="display:inline-flex;align-items:center;">
                                    <button onclick="window.ShoppingCart.updateCarats(${index}, -0.01)" style="width:26px;height:28px;background:#f59e0b;color:white;border:none;font-size:14px;font-weight:bold;cursor:pointer;border-radius:4px 0 0 4px;">&#8722;</button>
                                    <input type="number" step="0.01" min="0" data-index="${index}" class="cart-carats-input" value="${caratsVal}" oninput="window.ShoppingCart.onInputChange(${index}, 'carats')" style="width:52px;height:28px;text-align:center;border:1px solid #e2e8f0;border-left:none;border-right:none;font-size:12px;font-weight:700;background:white;outline:none;">
                                    <button onclick="window.ShoppingCart.updateCarats(${index}, 0.01)" style="width:26px;height:28px;background:#f59e0b;color:white;border:none;font-size:14px;font-weight:bold;cursor:pointer;border-radius:0 4px 4px 0;">&#43;</button>
                                </div>
                                <span style="font-size:10px;color:#64748b;">ct</span>
                            </div>
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
                    <td style="padding:16px 12px;text-align:right;font-size:15px;font-weight:800;color:#0f172a;vertical-align:middle;">
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
        const newQty = (cart[index].quantity || 1) + delta;
        if (newQty > 0) {
            cart[index].quantity = newQty;
            if (cart[index].pieces !== undefined) cart[index].pieces = newQty;
            saveCart(cart);
            renderCart();
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

        const pricePerCarat = parseFloat(cart[index].price) || 0;
        const carats = parseFloat(cart[index].carats) || 0;
        const pieces = parseInt(cart[index].pieces) || 0;

        let itemTotal = 0;
        let priceBasis = '';
        if (carats > 0) {
            itemTotal = pricePerCarat * carats;
            priceBasis = `${formatPrice(pricePerCarat)}/ct`;
        } else if (pieces > 0) {
            itemTotal = pricePerCarat * pieces;
            priceBasis = `${formatPrice(pricePerCarat)}/pc`;
        } else {
            itemTotal = 0;
            priceBasis = `${formatPrice(pricePerCarat)}/ct`;
        }

        const totalEl = document.getElementById(`item-total-${index}`);
        const basisEl = document.getElementById(`item-basis-${index}`);
        const summaryEl = document.getElementById(`summary-line-${index}`);

        if (totalEl) totalEl.textContent = formatPrice(itemTotal);
        if (basisEl) basisEl.textContent = priceBasis;
        if (summaryEl) summaryEl.innerHTML = `${carats.toFixed(2)} ct &nbsp;|&nbsp; ${pieces} pcs &nbsp;|&nbsp; <strong>${formatPrice(itemTotal)}</strong>`;

        let grandTotal = 0;
        cart.forEach(item => {
            const p = parseFloat(item.price) || 0;
            const c = parseFloat(item.carats) || 0;
            const pcs = parseInt(item.pieces) || 0;
            if (c > 0) grandTotal += p * c;
            else if (pcs > 0) grandTotal += p * pcs;
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
            const count = cart.reduce((sum, item) => sum + (item.pieces || item.quantity || 1), 0);
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
    }

    window.ShoppingCart = {
        removeItem,
        updateQuantity,
        updateCarats,
        updatePieces,
        onInputChange,
        updateCart,
        refreshCart
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            renderCart();
            updateBadge();
            document.querySelectorAll('input[name="shipping"]').forEach(radio => {
                radio.addEventListener('change', renderCart);
            });
        });
    } else {
        renderCart();
        updateBadge();
        document.querySelectorAll('input[name="shipping"]').forEach(radio => {
            radio.addEventListener('change', renderCart);
        });
    }
})();
