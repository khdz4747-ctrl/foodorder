const stores = [
    { id: 1, name: "ร้านพี่โด่งตามสั่ง", menu: [
        { name: "ข้าวผัด", price: 50, img: "image1/1.jpg" },
        { name: "ผัดกะเพรา", price: 55, img: "image1/2.jpg" },
        { name: "ข้าวผัดกุ้ง", price: 60, img: "image1/3.jpg" },
        { name: "ข้าวผัดไข่", price: 70, img: "image1/4.jpg" },
        { name: "ข้าวราดพริกแกงหมู", price: 40, img: "image1/5.jpg" },
        { name: "ข้าวราดผัดผักรวม", price: 50, img: "image1/6.jpg" },
        { name: "ข้าวราดผัดเผ็ดหน่อไม้", price: 45, img: "image1/7.jpg" },
        { name: "ข้าวหมูทอดกระเทียม", price: 60, img: "image1/8.jpg" },
        { name: "ข้าวไก่ทอดน้ำปลา", price: 70, img: "image1/9.jpg" },
        { name: "ข้าวกระเพราหมูกรอบ", price: 65, img: "image1/10.jpg" },
        { name: "ข้าวผัดกุนเชียง", price: 120, img: "image1/11.jpg" },
        { name: "ข้าวผัดแหนม", price: 150, img: "image1/12.jpg" },
        { name: "ข้าวไข่เจียว", price: 80, img: "image1/13.jpg" },
        { name: "ข้าวไก่กระเทียม", price: 60, img: "image1/14.jpg" }  
    ]},
    { id: 2, name: "ร้านก๋วยเตี๋ยวป้าหนู", menu: [
        { name: "ก๋วยเตี๋ยวหมูน้ำใส", price: 40, img: "image2/1.jpg" },
        { name: "เย็นตาโฟ", price: 45, img: "image2/2.jpg" },
        { name: "ก๋วยเตี๋ยวหมูน้ำตก", price: 60, img: "image2/3.jpg" },
        { name: "ก๋วยเตี๋ยวต้มยำหมู", price: 70, img: "image2/4.jpg" },
        { name: "ก๋วยเตี๋ยวหมูตุ๋น", price: 40, img: "image2/5.jpg" },
        { name: "ก๋วยเตี๋ยวต้มยำทะเล", price: 50, img: "image2/6.jpg" },
        { name: "ก๋วยเตี๋ยวดนื้อน้ำตก", price: 45, img: "image2/7.jpg" },
        { name: "ก๋วยเตี๋ยวลูกชิ้นหมู", price: 60, img: "image2/8.jpg" },
        { name: "ก๋วยเตี๋ยวแห้งหมู", price: 70, img: "image2/9.jpg" },
        { name: "ต้ำยำแห้ง", price: 65, img: "image2/10.jpg" },
        { name: "หมูเนื้อเปื่อย", price: 120, img: "image2/11.jpg" },
        { name: "ก๋วยเตี๋ยวไก่น้ำใส", price: 150, img: "image2/12.jpg" },
        { name: "ก๋วยเตี๋ยวเนื้อน้ำใส", price: 80, img: "image2/13.jpg" },
        { name: "แห้งเนื้อ", price: 60, img: "image2/14.jpg" }
       
    ]},
    { id: 3, name: "ร้านส้มตำพี่ไอซ์", menu: [
        { name: "ส้มตำไทย", price: 35, img: "image3/15.jpg" },
        { name: "ส้มตำปูปลาร้า", price: 45, img: "image3/1.jpg" },
        { name: "ส้มตำปูม้า", price: 60, img: "image3/2.jpg" },
        { name: "ส้มตำทะเล", price: 70, img: "image3/3.jpg" },
        { name: "ส้มตำซั่ว", price: 40, img: "image3/4.jpg" },
        { name: "ส้มตำผลไม้", price: 50, img:"image3/5.jpg" },
        { name: "ส้มตำข้าวโพด", price: 45, img: "image3/6.jpg" },
        { name: "ไก่ย่าง", price: 60, img: "image3/7.jpg" },
        { name: "คอหมูย่าง", price: 70, img: "image3/8.jpg" },
        { name: "หมูทอดน้ำปลา", price: 65, img: "image3/9.jpg" },
        { name: "ลาบหมู", price: 60, img: "image3/10.jpg" },
        { name: "ลาบเนื้อ", price: 80, img: "image3/11.jpg" },
        { name: "น้ำตกหมู", price: 65, img: "image3/12.jpg" },
        { name: "น้ำตกเนื้อ", price: 85, img: "image3/13.jpg" },
        { name: "ข้าวเหนียว", price: 10, img: "image3/14.jpg" }
        
    ]}
];

// ไปหน้าร้าน
function goToStore(id) {
    window.location.href = `store.html?storeId=${id}`;
}

// โหลดเมนูร้าน
function loadMenu() {
    const params = new URLSearchParams(window.location.search);
    const storeId = parseInt(params.get("storeId"));
    const store = stores.find(s => s.id === storeId);
    if (!store) return;
    document.getElementById("storeName").textContent = store.name;
    const menuList = document.getElementById("menuList");
    store.menu.forEach((item, index) => {
        menuList.innerHTML += `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price} บาท</p>
                <input type="number" min="1" value="1" id="qty_${index}">
                <button onclick="addToCart(${storeId}, '${item.name}', ${item.price}, ${index})">เพิ่มลงตะกร้า</button>
            </div>
        `;
    });
}

// เพิ่มลงตะกร้า
function addToCart(storeId, name, price, index) {
    const qty = parseInt(document.getElementById(`qty_${index}`).value);
    let cart = JSON.parse(localStorage.getItem(`cart_store${storeId}`)) || [];
    cart.push({ name, price, qty });
    localStorage.setItem(`cart_store${storeId}`, JSON.stringify(cart));
    alert("เพิ่มสินค้าลงตะกร้าแล้ว");
}

// ไปตะกร้า
function goToCart() {
    const params = new URLSearchParams(window.location.search);
    const storeId = params.get("storeId");
    window.location.href = `cart.html?storeId=${storeId}`;
}

// โหลดตะกร้า
function loadCart() {
    const params = new URLSearchParams(window.location.search);
    const storeId = params.get("storeId");
    let cart = JSON.parse(localStorage.getItem(`cart_store${storeId}`)) || [];
    const cartDiv = document.getElementById("cartItems");
    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name} x ${item.qty} = ${item.price * item.qty} บาท</p>`;
    });
}

// ส่งคำสั่งซื้อ
function submitOrder(e) {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const storeId = params.get("storeId");
    let cart = JSON.parse(localStorage.getItem(`cart_store${storeId}`)) || [];
    const order = {
        items: cart,
        customerName: document.getElementById("customerName").value,
        customerPhone: document.getElementById("customerPhone").value,
        customerAddress: document.getElementById("customerAddress").value,
        customerNote: document.getElementById("customerNote").value,
        date: new Date().toLocaleString()
    };
    let orders = JSON.parse(localStorage.getItem(`orders_store${storeId}`)) || [];
    orders.push(order);
    localStorage.setItem(`orders_store${storeId}`, JSON.stringify(orders));
    localStorage.removeItem(`cart_store${storeId}`);
    alert("สั่งซื้อสำเร็จ!");
    window.location.href = "index.html";
}

// ล็อกอินร้าน
function loginStore(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const accounts = {
        "pdong": { pass: "1234", storeId: 1 },
        "panoo": { pass: "1234", storeId: 2 },
        "pice": { pass: "1234", storeId: 3 }
    };
    if (accounts[username] && accounts[username].pass === password) {
        window.location.href = `admin.html?storeId=${accounts[username].storeId}`;
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
}

// โหลดออร์เดอร์หลังบ้าน
function loadAdminOrders() {
    const params = new URLSearchParams(window.location.search);
    const storeId = params.get("storeId");
    const store = stores.find(s => s.id == storeId);
    document.getElementById("adminTitle").textContent = `คำสั่งซื้อ - ${store.name}`;
    let orders = JSON.parse(localStorage.getItem(`orders_store${storeId}`)) || [];
    const listDiv = document.getElementById("orderList");
    if (orders.length === 0) {
        listDiv.innerHTML = "<p>ยังไม่มีคำสั่งซื้อ</p>";
        return;
    }
    orders.forEach(o => {
        listDiv.innerHTML += `
            <div class="menu-card">
                <p><strong>ชื่อลูกค้า:</strong> ${o.customerName}</p>
                <p><strong>เบอร์:</strong> ${o.customerPhone}</p>
                <p><strong>ที่อยู่:</strong> ${o.customerAddress}</p>
                <p><strong>หมายเหตุ:</strong> ${o.customerNote}</p>
                <p><strong>วันที่:</strong> ${o.date}</p>
                <p><strong>รายการอาหาร:</strong></p>
                ${o.items.map(i => `<p>- ${i.name} x ${i.qty} = ${i.price * i.qty} บาท</p>`).join("")}
            </div>

        `;
    });
}
