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

        if (cart.length === 0) {
            emptyState.style.display = 'block';
            contentState.style.display = 'none';
            return;
        }

        emptyState.style.display = 'none';
        contentState.style.display = 'block';

        let grandTotal = 0;

        tableBody.innerHTML = cart.map((item, index) => {
            const itemTotal = item.price * item.quantity;
            grandTotal += itemTotal;
            const stockNo = 'HRD/' + (item.clarity || 'VVS') + '/' + (item.mmSize || 'N/A');
            
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
                                ${item.instructions ? `<p style="font-size:11px;color:#64748b;margin:0;"><strong>Special Instructions:</strong> ${item.instructions}</p>` : ''}
                            </div>
                        </div>
                    </td>
                    <td style="padding:16px 12px;font-size:13px;color:#64748b;vertical-align:middle;">Round ${item.mmSize}</td>
                    <td style="padding:16px 12px;font-size:14px;font-weight:700;color:#059669;vertical-align:middle;">${formatPrice(item.price)}</td>
                    <td style="padding:16px 12px;text-align:center;vertical-align:middle;">
                        <div style="display:inline-flex;align-items:center;">
                            <button onclick="window.ShoppingCart.updateQuantity(${index}, -1)" style="width:32px;height:32px;background:#f59e0b;color:white;border:none;font-size:16px;font-weight:bold;cursor:pointer;border-radius:4px 0 0 4px;">-</button>
                            <span style="width:36px;text-align:center;display:inline-block;height:32px;line-height:32px;border:1px solid #e2e8f0;border-left:none;border-right:none;font-size:13px;font-weight:700;background:white;">${item.quantity}</span>
                            <button onclick="window.ShoppingCart.updateQuantity(${index}, 1)" style="width:32px;height:32px;background:#f59e0b;color:white;border:none;font-size:16px;font-weight:bold;cursor:pointer;border-radius:0 4px 4px 0;">+</button>
                        </div>
                    </td>
                    <td style="padding:16px 12px;text-align:right;font-size:14px;font-weight:700;color:#0f172a;vertical-align:middle;">${formatPrice(itemTotal)}</td>
                </tr>
            `;
        }).join('');

        const shippingCost = getShippingCost();
        subtotalEl.textContent = formatPrice(grandTotal);
        totalEl.textContent = formatPrice(grandTotal + shippingCost);
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
        const newQty = cart[index].quantity + delta;
        if (newQty > 0) {
            cart[index].quantity = newQty;
            saveCart(cart);
            renderCart();
        }
    }

    function updateBadge() {
        const badge = document.getElementById('cart-badge');
        if (badge) {
            const cart = loadCart();
            const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    function refreshCart() {
        renderCart();
    }

    window.ShoppingCart = {
        removeItem,
        updateQuantity,
        refreshCart
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            renderCart();
            updateBadge();
            // Listen for shipping radio changes
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
