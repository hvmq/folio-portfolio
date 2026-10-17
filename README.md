# folio. — Creative portfolio

Portfolio tiếng Việt dùng HTML, CSS và JavaScript thuần. Không cần cài dependency hoặc build. Giao diện responsive, có bộ lọc dự án, hộp thoại chi tiết và sáu website concept có thể tương tác.

## Chạy trên máy

Yêu cầu Node.js 18 trở lên:

```sh
npm run dev
```

Mở `http://127.0.0.1:4173`. Dùng `PORT=5000 npm run dev` để thay cổng. Kiểm tra cú pháp bằng `npm run check`.

## Các dự án demo

| Dự án | Thể loại | Tương tác |
| --- | --- | --- |
| Objects | Cửa hàng nội thất | Lọc sản phẩm, thêm giỏ, tăng/giảm số lượng, đơn hàng mẫu |
| Orbit | Landing page SaaS | Bảng giá tháng/năm, chọn gói mẫu, FAQ |
| The Journal | Blog / tạp chí | Tìm kiếm không dấu, lọc chuyên mục, đọc 6 bài viết |
| Pulse | Dashboard | Đổi kỳ báo cáo, cập nhật KPI và biểu đồ, xuất CSV |
| Escape | Du lịch | Lọc điểm đến, chọn ngày/khách, yêu cầu đặt chỗ mẫu |
| Moka | Café / nhà hàng | Lọc menu, giỏ món, đặt bàn mẫu |

Mở demo tại `demo/?project=objects` (hoặc `orbit`, `journal`, `pulse`, `escape`, `moka`). Thanh trên cùng cho phép đổi demo hoặc quay về portfolio.

## Cá nhân hóa

- `dist/index.html`: tên thương hiệu, nội dung giới thiệu, quy trình, nội dung liên hệ.
- `dist/data.js`: tên, mô tả, thể loại, nhãn và email nhận liên hệ.
- `dist/app.js`: phần giao diện thu nhỏ của từng thẻ dự án.
- `dist/styles.css`: màu sắc, kiểu chữ, bố cục và các kích thước responsive.
- `dist/demo/demo.js` và `demo.css`: nội dung, tương tác và phong cách sáu demo.
- `dist/assets/`: ảnh và biểu tượng.

Mặc định `contactEmail` để trống: biểu mẫu liên hệ tạo file brief `.txt` trên máy khách. Khi điền email thật trong `dist/data.js`, nút sẽ mở ứng dụng email với brief đã soạn để khách tự gửi. Website không có backend, không tự gửi email và không lưu thông tin người dùng trên máy chủ.

Tất cả thương hiệu, bài viết, số liệu, sản phẩm và giá trong demo là nội dung concept. Các giỏ hàng, chọn gói, đặt chỗ và đặt bàn chỉ mô phỏng; không thanh toán, gửi yêu cầu hoặc tạo tài khoản thật. Thay bằng thông tin và dự án thật trước khi dùng như hồ sơ nghề nghiệp cá nhân.

## Triển khai

Thư mục website là `dist/`. Có thể đưa nguyên thư mục này lên bất kỳ dịch vụ static hosting nào. `.openai/hosting.json` cấu hình bản triển khai bằng Sites. Không cần lệnh build.

## Hình ảnh

Ảnh minh họa từ Unsplash, đã lưu trong `dist/assets/` để không phụ thuộc tải ảnh bên ngoài:

- Không gian nội thất: `images.unsplash.com/photo-1600210492486-724fe5c67fb0`
- Phong cảnh: `images.unsplash.com/photo-1476514525535-07fb3b4ae5f1`
- Cà phê: `images.unsplash.com/photo-1442512595331-e89e73853f31`
- Kiến trúc: `images.unsplash.com/photo-1487958449943-2429e8be8625`
- Ghế: `images.unsplash.com/photo-1567538096630-e0c55bd6374c`
- Món ăn: `images.unsplash.com/photo-1547592180-85f173990554`

Font Be Vietnam Pro từ Google Fonts, đã lưu nội bộ cùng giấy phép SIL Open Font License. Website không cần gọi dịch vụ font hoặc ảnh bên ngoài khi truy cập.
