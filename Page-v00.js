document.addEventListener('DOMContentLoaded', () => {
            const mainContent = document.getElementById('main-content');
            // Chọn tất cả các liên kết có class 'nav-link'
            const navLinks = document.querySelectorAll('.nav-link');

            // Định nghĩa nội dung HTML cho từng trang
            const pageContents = {
                'home': `
                    <section id="home-section" class="section home-section">
                        <div class="container">
                            <h2>Chào mừng bạn đến với trang của tôi!</h2>
                            <p>Đây là trang chủ của bạn. Bạn có thể xem các thông tin giới thiệu hoặc tin tức mới nhất tại đây.</p>
                            <!-- Có thể thêm lại các nút download file nếu muốn xuất hiện trên trang chủ -->
                        </div>
                    </section>
                `,
                'ai': `
                    <section id="ai-section" class="section ai-section">
                        <div class="container">
                            <h2>Free AI</h2>
                            <p>Chào mừng bạn đến với trang AI miễn phí của chúng tôi! Tại đây, bạn có thể tương tác với các mô hình AI tiên tiến.</p>
                            <!-- Thêm nội dung của trang Free AI vào đây -->
                            <p>Hãy thử hỏi AI bất cứ điều gì!</p>
                        </div>
                    </section>
                `,
                'files': `
                    <section id="files-section" class="section files-section">
                        <div class="container">
                            <h2>Tải game & script</h2>
                            <p>Bạn có thể tải các file game và script hữu ích tại đây.</p>
                            <div class="main-action-buttons-container">
                                <div class="container">
                                    <div class="action-buttons">
                                        <a href="https://www.mediafire.com/file/vwiexk2z0w7fxsg/Patch_12192_Arm64_32_Musc.apk/file" target="_blank" class="button external-link-button">
                                            <i class="fas fa-external-link-alt"></i> Minecraft(patch)1.21.92.1
                                        </a>
                                        <a href="https://discord.gg/YkRK3DRHN4" target="_blank" class="button external-link-button">
                                            <i class="fas fa-blog"></i> Tham gia discord
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                `,
                'about': `
                    <section id="about-section" class="section about-section">
                        <div class="container">
                            <h2>Về tôi</h2>
                            <p>Tôi là một người đam mê công nghệ và sáng tạo. Với nhiều năm kinh nghiệm trong lĩnh vực phát triển web, tôi luôn tìm kiếm những giải pháp mới và hiệu quả để giải quyết các vấn đề. Tôi tin rằng công nghệ có thể mang lại những giá trị to lớn cho cuộc sống.</p>
                            <p>Mục tiêu của tôi là tạo ra những sản phẩm, trang web giải trí có thể giúp ích cho cuộc sống!</p>
                        </div>
                    </section>
                `,
                'contact': `
                    <section id="contact-section" class="section contact-section">
                        <div class="container">
                            <h2>Liên hệ</h2>
                            <p>Bạn cần hỗ trợ? Hãy gửi email cho tôi!</p>
                            <form action="https://getform.io/f/allzrmla" method="POST" class="contact-form">
                                <div class="form-group">
                                    <label for="name">Họ và tên:</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">SDT:</label>
                                    <input type="text" id="phone" name="phone" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="_replyto" required>
                                </div>
                                <div class="form-group">
                                    <label for="message">Tin nhắn:</label>
                                    <textarea id="message" name="message" rows="5" required></textarea>
                                </div>
                                <button type="submit" class="button">Gửi tin nhắn</button>
                            </form>
                            <p id="formStatus" class="form-status"></p>
                        </div>
                    </section>
                `,
                'login': `
                    <section id="login-section" class="section login-section full-screen-section">
                        <div class="box">
                            <div class="form">
                                <h2><i class="fas fa-user"></i>LOGIN</h2>
                                <div class="inputbox">
                                    <input type="text" id="username" required>
                                    <span>Username</span>
                                    <i></i>
                                </div>
                                <div class="inputbox">
                                    <input type="password" id="password" required>
                                    <span>Password</span>
                                    <i></i>
                                </div>
                                <div class="link">
                                    <a href="https://discord.gg/YkRK3DRHN4" target="_blank">Quên mật khẩu?</a>
                                    <a href="https://discord.gg/YkRK3DRHN4" target="_blank">Tham gia Discord</a>
                                </div>
                                <button type="submit" class="login-btn" id="login-button">LOG IN</button>
                                <p id="login-message" class="login-message"></p>
                            </div>
                        </div>
                    </section>
                    <!-- Script cho login (được nhúng trực tiếp) -->
                    <script>
                        // Logic login được tái tạo ở đây
                        const loginButton = document.getElementById('login-button');
                        const usernameInput = document.getElementById('username');
                        const passwordInput = document.getElementById('password');
                        const loginMessage = document.getElementById('login-message');

                        const CORRECT_PASSWORD = "htgvippro"; // Mật khẩu của bạn

                        if (loginButton) {
                            loginButton.addEventListener('click', () => {
                                const enteredPassword = passwordInput.value.trim();

                                if (enteredPassword === CORRECT_PASSWORD) {
                                    sessionStorage.setItem("loggedIn", "true");
                                    loginMessage.textContent = "Đăng nhập thành công! Đang chuyển hướng...";
                                    loginMessage.style.color = "green";
                                    setTimeout(() => {
                                        window.location.href = "index.html"; // Chuyển hướng về trang chính
                                    }, 1000);
                                } else {
                                    loginMessage.textContent = "Mật khẩu không chính xác!";
                                    loginMessage.style.color = "red";
                                }
                            });
                        }

                        if (passwordInput) {
                            passwordInput.addEventListener('keypress', (e) => {
                                if (e.key === 'Enter') {
                                    loginButton.click();
                                }
                            });
                        }
                    </script>
                `
            };

            // Hàm tải nội dung trang
            function loadPage(pageName) {
                const content = pageContents[pageName];
                if (content) {
                    mainContent.innerHTML = content;
                    // Cuộn lên đầu trang sau khi tải nội dung mới
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    // Cập nhật URL (tùy chọn, để hỗ trợ nút back/forward của trình duyệt)
                    history.pushState({ page: pageName }, '', `#${pageName}`);
                } else {
                    mainContent.innerHTML = `<section class="section"><div class="container"><h2>Trang không tìm thấy</h2><p>Nội dung bạn yêu cầu không tồn tại.</p></div></section>`;
                    history.pushState({ page: '404' }, '', `#404`);
                }
                // Đóng sidebar sau khi click
                document.getElementById('sidebar-active').checked = false;
            }

            // Xử lý sự kiện click cho các liên kết điều hướng
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    // Kiểm tra nếu là liên kết ngoài hoặc có target="_blank"
                    if (link.hasAttribute('target') && link.getAttribute('target') === '_blank') {
                        return; // Cho phép liên kết ngoài hoạt động bình thường
                    }

                    e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

                    const pageName = link.getAttribute('data-page');
                    if (pageName) {
                        loadPage(pageName);
                    } else {
                        // Xử lý trường hợp không có data-page (ví dụ: liên kết đến #top)
                        const href = link.getAttribute('href');
                        if (href && href.startsWith('#')) {
                            const targetElement = document.querySelector(href);
                            if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    }
                });
            });

            // Xử lý khi người dùng sử dụng nút back/forward của trình duyệt
            window.addEventListener('popstate', (event) => {
                if (event.state && event.state.page) {
                    loadPage(event.state.page);
                } else {
                    // Tải trang chủ nếu không có state cụ thể
                    loadPage('home');
                }
            });

            // Tải trang ban đầu khi load
            // Kiểm tra nếu đã đăng nhập và đang ở trang login, thì chuyển hướng về home
            const initialHash = window.location.hash.substring(1);
            if (initialHash === 'login' && sessionStorage.getItem("loggedIn") === "true") {
                loadPage('home');
            } else {
                loadPage(initialHash || 'home');
            }

            // Kiểm tra đăng nhập khi tải trang chính
            if (sessionStorage.getItem("loggedIn") !== "true") {
                // Nếu chưa đăng nhập, chuyển hướng đến trang login
                // loadPage('login'); // Bạn có thể uncomment dòng này nếu muốn bắt buộc đăng nhập
            }
        });
