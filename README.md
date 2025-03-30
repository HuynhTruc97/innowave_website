# MongoDB Database Setup Guide – INNOWAVE Project

This guide walks you through the process of creating and populating a MongoDB database for the INNOWAVE e-commerce project using **MongoDB Compass**.

---

## Step-by-Step Instructions

### 1. Connect to MongoDB
Open **MongoDB Compass**: Click **Connect** localhost:27017

---

### 2. Create Database and Collections
#### ➤ Database Name: `innowave_db`
#### ➤ Collections:
- `products`
- `reviews`
---

### 3. Insert Data
For both collections, follow these steps:
1. Click on the collection (e.g., `products`)
2. Click **"Add Data"** → **"Insert Document"**
3. Copy and paste the below corresponding data (products or reviews)
> Note: Make sure to insert **array format data** one document at a time or use **"Import File"** if working with bulk data.
---

## Collection: products
```
[
        {
            "product_id": 1,
            "name": "Tai nghe in-ear có dây INNOWAVE WEP-0405",
            "description": {
                "Công nghệ âm thanh": "Dynamic Driver 12.4 mm",
                "Tương thích": "Thiết bị hỗ trợ chuyển đổi âm thanh qua cổng Type C",
                "Jack cắm": "Type C",
                "Độ dài dây": "130 cm",
                "Tiện ích": [
                    "Có mic thoại",
                    "Khử tiếng ồn AI"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Khối lượng": "12.82 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 40,
            "category_id": 4,
            "image_url": "assets/innowave_product_list/INNOWAVE_WEP-0405.jpg",
            "original_price": 460000,
            "discount_percentage": 30,
            "discounted_price": 320000
        },
        {
            "product_id": 2,
            "name": "Tai nghe in-ear có dây INNOWAVE WEP-0400",
            "description": {
                "Công nghệ âm thanh": "Dynamic Driver 12.4 mm",
                "Tương thích": "Thiết bị hỗ trợ chuyển đổi âm thanh qua cổng Type C",
                "Jack cắm": "Type C",
                "Độ dài dây": "130 cm",
                "Tiện ích": [
                    "Có mic thoại",
                    "Khử tiếng ồn AI"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Khối lượng": "12.82 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 62,
            "category_id": 4,
            "image_url": "assets/innowave_product_list/INNOWAVE_WEP-0400.jpg",
            "original_price": 660000,
            "discount_percentage": 30,
            "discounted_price": 460000
        },
        {
            "product_id": 3,
            "name": "Tai nghe in-ear có dây INNOWAVE WEP-0401",
            "description": {
                "Công nghệ âm thanh": "Dynamic Driver 12.4 mm",
                "Tương thích": "Thiết bị hỗ trợ chuyển đổi âm thanh qua cổng Type C",
                "Jack cắm": "Type C",
                "Độ dài dây": "130 cm",
                "Tiện ích": [
                    "Có mic thoại",
                    "Khử tiếng ồn AI"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Khối lượng": "12.82 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 61,
            "category_id": 4,
            "image_url": "assets/innowave_product_list/INNOWAVE_WEP-0401.jpg",
            "original_price": 800000,
            "discount_percentage": 40,
            "discounted_price": 480000
        },
        {
            "product_id": 4,
            "name": "Tai nghe in-ear có dây INNOWAVE WEP-0402",
            "description": {
                "Công nghệ âm thanh": "Dynamic Driver 12.4 mm",
                "Tương thích": "Thiết bị hỗ trợ chuyển đổi âm thanh qua cổng Type C",
                "Jack cắm": "Type C",
                "Độ dài dây": "130 cm",
                "Tiện ích": [
                    "Có mic thoại",
                    "Khử tiếng ồn AI"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Khối lượng": "12.82 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 43,
            "category_id": 4,
            "image_url": "assets/innowave_product_list/INNOWAVE_WEP-0402.jpg",
            "original_price": 620000,
            "discount_percentage": 35,
            "discounted_price": 400000
        },
        {
            "product_id": 5,
            "name": "Tai nghe in-ear có dây INNOWAVE WEP-0403",
            "description": {
                "Công nghệ âm thanh": "Dynamic Driver 12.4 mm",
                "Tương thích": "Thiết bị hỗ trợ chuyển đổi âm thanh qua cổng Type C",
                "Jack cắm": "Type C",
                "Độ dài dây": "130 cm",
                "Tiện ích": [
                    "Có mic thoại",
                    "Khử tiếng ồn AI"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Khối lượng": "12.82 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 65,
            "category_id": 4,
            "image_url": "assets/innowave_product_list/INNOWAVE_WEP-0403.jpg",
            "original_price": 820000,
            "discount_percentage": 40,
            "discounted_price": 490000
        },
        {
            "product_id": 6,
            "name": "Tai nghe in-ear có dây INNOWAVE WEP-0404",
            "description": {
                "Công nghệ âm thanh": "Dynamic Driver 12.4 mm",
                "Tương thích": "Thiết bị hỗ trợ chuyển đổi âm thanh qua cổng Type C",
                "Jack cắm": "Type C",
                "Độ dài dây": "130 cm",
                "Tiện ích": [
                    "Có mic thoại",
                    "Khử tiếng ồn AI"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Khối lượng": "12.82 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 72,
            "category_id": 4,
            "image_url": "assets/innowave_product_list/INNOWAVE_WEP-0404.jpg",
            "original_price": 740000,
            "discount_percentage": 35,
            "discounted_price": 480000
        },
        {
            "product_id": 7,
            "name": "Tai nghe chụp tai có dây INNOWAVE WHP-0300",
            "description": {
                "Tương thích": [
                    "Windows Phone",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "149 cm",
                "Tiện ích": [
                    "Có mic thoại"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Nghe/ngắt cuộc gọi",
                    "Mic thoại"
                ],
                "Khối lượng": "180 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 55,
            "category_id": 3,
            "image_url": "assets/innowave_product_list/INNOWAVE_WHP-0300.jpg",
            "original_price": 370000,
            "discount_percentage": 25,
            "discounted_price": 280000
        },
        {
            "product_id": 8,
            "name": "Tai nghe chụp tai có dây INNOWAVE WHP-0301",
            "description": {
                "Tương thích": [
                    "Windows Phone",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "149 cm",
                "Tiện ích": [
                    "Có mic thoại"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Nghe/ngắt cuộc gọi",
                    "Mic thoại"
                ],
                "Khối lượng": "180 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 49,
            "category_id": 3,
            "image_url": "assets/innowave_product_list/INNOWAVE_WHP-0301.jpg",
            "original_price": 570000,
            "discount_percentage": 25,
            "discounted_price": 430000
        },
        {
            "product_id": 9,
            "name": "Tai nghe chụp tai có dây INNOWAVE WHP-0302",
            "description": {
                "Tương thích": [
                    "Windows Phone",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "149 cm",
                "Tiện ích": [
                    "Có mic thoại"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Nghe/ngắt cuộc gọi",
                    "Mic thoại"
                ],
                "Khối lượng": "180 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 69,
            "category_id": 3,
            "image_url": "assets/innowave_product_list/INNOWAVE_WHP-0302.jpg",
            "original_price": 450000,
            "discount_percentage": 40,
            "discounted_price": 270000
        },
        {
            "product_id": 10,
            "name": "Tai nghe chụp tai có dây INNOWAVE WHP-0303",
            "description": {
                "Tương thích": [
                    "Windows Phone",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "149 cm",
                "Tiện ích": [
                    "Có mic thoại"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Nghe/ngắt cuộc gọi",
                    "Mic thoại"
                ],
                "Khối lượng": "180 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 78,
            "category_id": 3,
            "image_url": "assets/innowave_product_list/INNOWAVE_WHP-0303.jpg",
            "original_price": 430000,
            "discount_percentage": 35,
            "discounted_price": 280000
        },
        {
            "product_id": 11,
            "name": "Tai nghe chụp tai có dây INNOWAVE WHP-0304",
            "description": {
                "Tương thích": [
                    "Windows Phone",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "149 cm",
                "Tiện ích": [
                    "Có mic thoại"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Nghe/ngắt cuộc gọi",
                    "Mic thoại"
                ],
                "Khối lượng": "180 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 49,
            "category_id": 3,
            "image_url": "assets/innowave_product_list/INNOWAVE_WHP-0304.jpg",
            "original_price": 600000,
            "discount_percentage": 20,
            "discounted_price": 480000
        },
        {
            "product_id": 12,
            "name": "Tai nghe in-ear không dây INNOWAVE WLEP-0200",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 6 giờ - Sạc 1.5 giờ",
                "Thời lượng pin hộp sạc": "Dùng 30 giờ - Sạc 2 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": "Công nghệ ENC",
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Tiện ích": [
                    "Có mic thoại",
                    "Chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.3",
                "Điều khiển": "Cảm ứng chạm",
                "Phím điều khiển": [
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật trợ lí ảo",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Kích thước": "Dài 3.3 cm - Rộng 2.9 cm - Cao 1.7 cm",
                "Khối lượng": "4.36 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 63,
            "category_id": 2,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLEP-0200.jpg",
            "original_price": 680000,
            "discount_percentage": 40,
            "discounted_price": 410000
        },
        {
            "product_id": 13,
            "name": "Tai nghe in-ear không dây INNOWAVE WLEP-0201",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 6 giờ - Sạc 1.5 giờ",
                "Thời lượng pin hộp sạc": "Dùng 30 giờ - Sạc 2 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": "Công nghệ ENC",
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Tiện ích": [
                    "Có mic thoại",
                    "Chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.3",
                "Điều khiển": "Cảm ứng chạm",
                "Phím điều khiển": [
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật trợ lí ảo",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Kích thước": "Dài 3.3 cm - Rộng 2.9 cm - Cao 1.7 cm",
                "Khối lượng": "4.36 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 69,
            "category_id": 2,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLEP-0201.jpg",
            "original_price": 430000,
            "discount_percentage": 35,
            "discounted_price": 280000
        },
        {
            "product_id": 14,
            "name": "Tai nghe in-ear không dây INNOWAVE WLEP-0202",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 6 giờ - Sạc 1.5 giờ",
                "Thời lượng pin hộp sạc": "Dùng 30 giờ - Sạc 2 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": "Công nghệ ENC",
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Tiện ích": [
                    "Có mic thoại",
                    "Chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.3",
                "Điều khiển": "Cảm ứng chạm",
                "Phím điều khiển": [
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật trợ lí ảo",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Kích thước": "Dài 3.3 cm - Rộng 2.9 cm - Cao 1.7 cm",
                "Khối lượng": "4.36 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 50,
            "category_id": 2,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLEP-0202.jpg",
            "original_price": 550000,
            "discount_percentage": 20,
            "discounted_price": 440000
        },
        {
            "product_id": 15,
            "name": "Tai nghe in-ear không dây INNOWAVE WLEP-0203",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 6 giờ - Sạc 1.5 giờ",
                "Thời lượng pin hộp sạc": "Dùng 30 giờ - Sạc 2 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": "Công nghệ ENC",
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Tiện ích": [
                    "Có mic thoại",
                    "Chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.3",
                "Điều khiển": "Cảm ứng chạm",
                "Phím điều khiển": [
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật trợ lí ảo",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Kích thước": "Dài 3.3 cm - Rộng 2.9 cm - Cao 1.7 cm",
                "Khối lượng": "4.36 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 44,
            "category_id": 2,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLEP-0203.jpg",
            "original_price": 830000,
            "discount_percentage": 40,
            "discounted_price": 500000
        },
        {
            "product_id": 16,
            "name": "Tai nghe in-ear không dây INNOWAVE WLEP-0204",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 6 giờ - Sạc 1.5 giờ",
                "Thời lượng pin hộp sạc": "Dùng 30 giờ - Sạc 2 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": "Công nghệ ENC",
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Tiện ích": [
                    "Có mic thoại",
                    "Chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.3",
                "Điều khiển": "Cảm ứng chạm",
                "Phím điều khiển": [
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật trợ lí ảo",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Kích thước": "Dài 3.3 cm - Rộng 2.9 cm - Cao 1.7 cm",
                "Khối lượng": "4.36 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 43,
            "category_id": 2,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLEP-0204.jpg",
            "original_price": 520000,
            "discount_percentage": 25,
            "discounted_price": 390000
        },
        {
            "product_id": 17,
            "name": "Tai nghe in-ear không dây INNOWAVE WLEP-0205",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 6 giờ - Sạc 1.5 giờ",
                "Thời lượng pin hộp sạc": "Dùng 30 giờ - Sạc 2 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": "Công nghệ ENC",
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Tiện ích": [
                    "Có mic thoại",
                    "Chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.3",
                "Điều khiển": "Cảm ứng chạm",
                "Phím điều khiển": [
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật trợ lí ảo",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Kích thước": "Dài 3.3 cm - Rộng 2.9 cm - Cao 1.7 cm",
                "Khối lượng": "4.36 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 55,
            "category_id": 2,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLEP-0205.jpg",
            "original_price": 650000,
            "discount_percentage": 35,
            "discounted_price": 420000
        },
        {
            "product_id": 18,
            "name": "Tai nghe in-ear không dây INNOWAVE WLEP-0206",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 6 giờ - Sạc 1.5 giờ",
                "Thời lượng pin hộp sạc": "Dùng 30 giờ - Sạc 2 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": "Công nghệ ENC",
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Tiện ích": [
                    "Có mic thoại",
                    "Chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.3",
                "Điều khiển": "Cảm ứng chạm",
                "Phím điều khiển": [
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật trợ lí ảo",
                    "Nhận/Ngắt cuộc gọi"
                ],
                "Kích thước": "Dài 3.3 cm - Rộng 2.9 cm - Cao 1.7 cm",
                "Khối lượng": "4.36 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 45,
            "category_id": 2,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLEP-0206.jpg",
            "original_price": 450000,
            "discount_percentage": 35,
            "discounted_price": 290000
        },
        {
            "product_id": 19,
            "name": "Tai nghe chụp tai không dây INNOWAVE WLHP-0100",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 65 giờ - Sạc Khoảng 1.5 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": [
                    "Bass Enhancement",
                    "Spatial Audio",
                    "Hi-Res Audio",
                    "Driver 50 mm",
                    "Active Noise Cancelling",
                    "Công nghệ ENC",
                    "codec LDAC"
                ],
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Ứng dụng kết nối": "BASEUS",
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "1.1 m",
                "Tiện ích": [
                    "Sạc nhanh",
                    "2 Micro chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.4",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Từ chối cuộc gọi",
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật/ Tắt ANC",
                    "Kích hoạt Spatial Audio"
                ],
                "Kích thước": "Dài 8.8 cm - Rộng 7.625 cm - Cao 4.58 cm",
                "Khối lượng": "320 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 41,
            "category_id": 1,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLHP-0100.jpg",
            "original_price": 360000,
            "discount_percentage": 20,
            "discounted_price": 290000
        },
        {
            "product_id": 20,
            "name": "Tai nghe chụp tai không dây INNOWAVE WLHP-0101",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 65 giờ - Sạc Khoảng 1.5 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": [
                    "Bass Enhancement",
                    "Spatial Audio",
                    "Hi-Res Audio",
                    "Driver 50 mm",
                    "Active Noise Cancelling",
                    "Công nghệ ENC",
                    "codec LDAC"
                ],
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Ứng dụng kết nối": "BASEUS",
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "1.1 m",
                "Tiện ích": [
                    "Sạc nhanh",
                    "2 Micro chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.4",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Từ chối cuộc gọi",
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật/ Tắt ANC",
                    "Kích hoạt Spatial Audio"
                ],
                "Kích thước": "Dài 8.8 cm - Rộng 7.625 cm - Cao 4.58 cm",
                "Khối lượng": "320 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 78,
            "category_id": 1,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLHP-0101.jpg",
            "original_price": 480000,
            "discount_percentage": 20,
            "discounted_price": 380000
        },
        {
            "product_id": 21,
            "name": "Tai nghe chụp tai không dây INNOWAVE WLHP-0102",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 65 giờ - Sạc Khoảng 1.5 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": [
                    "Bass Enhancement",
                    "Spatial Audio",
                    "Hi-Res Audio",
                    "Driver 50 mm",
                    "Active Noise Cancelling",
                    "Công nghệ ENC",
                    "codec LDAC"
                ],
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Ứng dụng kết nối": "BASEUS",
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "1.1 m",
                "Tiện ích": [
                    "Sạc nhanh",
                    "2 Micro chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.4",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Từ chối cuộc gọi",
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật/ Tắt ANC",
                    "Kích hoạt Spatial Audio"
                ],
                "Kích thước": "Dài 8.8 cm - Rộng 7.625 cm - Cao 4.58 cm",
                "Khối lượng": "320 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 80,
            "category_id": 1,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLHP-0102.jpg",
            "original_price": 750000,
            "discount_percentage": 35,
            "discounted_price": 490000
        },
        {
            "product_id": 22,
            "name": "Tai nghe chụp tai không dây INNOWAVE WLHP-0103",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 65 giờ - Sạc Khoảng 1.5 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": [
                    "Bass Enhancement",
                    "Spatial Audio",
                    "Hi-Res Audio",
                    "Driver 50 mm",
                    "Active Noise Cancelling",
                    "Công nghệ ENC",
                    "codec LDAC"
                ],
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Ứng dụng kết nối": "BASEUS",
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "1.1 m",
                "Tiện ích": [
                    "Sạc nhanh",
                    "2 Micro chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.4",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Từ chối cuộc gọi",
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật/ Tắt ANC",
                    "Kích hoạt Spatial Audio"
                ],
                "Kích thước": "Dài 8.8 cm - Rộng 7.625 cm - Cao 4.58 cm",
                "Khối lượng": "320 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 50,
            "category_id": 1,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLHP-0103.jpg",
            "original_price": 600000,
            "discount_percentage": 20,
            "discounted_price": 480000
        },
        {
            "product_id": 23,
            "name": "Tai nghe chụp tai không dây INNOWAVE WLHP-0104",
            "description": {
                "Thời lượng pin tai nghe": "Dùng 65 giờ - Sạc Khoảng 1.5 giờ",
                "Cổng sạc": "Type-C",
                "Công nghệ âm thanh": [
                    "Bass Enhancement",
                    "Spatial Audio",
                    "Hi-Res Audio",
                    "Driver 50 mm",
                    "Active Noise Cancelling",
                    "Công nghệ ENC",
                    "codec LDAC"
                ],
                "Tương thích": [
                    "macOS",
                    "Android",
                    "iOS",
                    "Windows"
                ],
                "Ứng dụng kết nối": "BASEUS",
                "Jack cắm": "3.5 mm",
                "Độ dài dây": "1.1 m",
                "Tiện ích": [
                    "Sạc nhanh",
                    "2 Micro chống ồn"
                ],
                "Kết nối cùng lúc": "1 thiết bị",
                "Công nghệ kết nối": "Bluetooth 5.4",
                "Điều khiển": "Phím nhấn",
                "Phím điều khiển": [
                    "Từ chối cuộc gọi",
                    "Tăng/giảm âm lượng",
                    "Phát/dừng chơi nhạc",
                    "Chuyển bài hát",
                    "Bật/ Tắt ANC",
                    "Kích hoạt Spatial Audio"
                ],
                "Kích thước": "Dài 8.8 cm - Rộng 7.625 cm - Cao 4.58 cm",
                "Khối lượng": "320 g",
                "Thương hiệu của": "Việt Nam",
                "Sản xuất tại": "Việt Nam",
                "Hãng": "INNOWAVE"
            },
            "stock": 59,
            "category_id": 1,
            "image_url": "assets/innowave_product_list/INNOWAVE_WLHP-0104.jpg",
            "original_price": 600000,
            "discount_percentage": 20,
            "discounted_price": 480000
        }
    ]
```
---

## Collection: reviews
```
[
        {
            "review_id": 1,
            "user_id": "HoangMinh",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 02:50:35"
        },
        {
            "review_id": 2,
            "user_id": "QuocDuy",
            "product_id": 13,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 03:53:35"
        },
        {
            "review_id": 3,
            "user_id": "ThanhTam",
            "product_id": 16,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 13:10:35"
        },
        {
            "review_id": 4,
            "user_id": "PhuongMai",
            "product_id": 18,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 01:44:35"
        },
        {
            "review_id": 5,
            "user_id": "BuiHieu",
            "product_id": 19,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 03:50:35"
        },
        {
            "review_id": 6,
            "user_id": "LinhHoang",
            "product_id": 22,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 13:39:35"
        },
        {
            "review_id": 7,
            "user_id": "QuocDuy",
            "product_id": 14,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 09:29:35"
        },
        {
            "review_id": 8,
            "user_id": "ThanhTam",
            "product_id": 9,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 00:20:35"
        },
        {
            "review_id": 9,
            "user_id": "LinhHoang",
            "product_id": 9,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 06:35:35"
        },
        {
            "review_id": 10,
            "user_id": "MaiLan",
            "product_id": 10,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 08:45:35"
        },
        {
            "review_id": 11,
            "user_id": "PhuongMai",
            "product_id": 18,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 02:57:35"
        },
        {
            "review_id": 12,
            "user_id": "MaiLan",
            "product_id": 2,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 15:19:35"
        },
        {
            "review_id": 13,
            "user_id": "LinhMinh",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 11:09:35"
        },
        {
            "review_id": 14,
            "user_id": "NguyenHieu",
            "product_id": 9,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 04:38:35"
        },
        {
            "review_id": 15,
            "user_id": "BuiHieu",
            "product_id": 4,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 03:22:35"
        },
        {
            "review_id": 16,
            "user_id": "ThanhTam",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 12:20:35"
        },
        {
            "review_id": 17,
            "user_id": "NguyenHieu",
            "product_id": 2,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 19:27:35"
        },
        {
            "review_id": 18,
            "user_id": "LinhHoang",
            "product_id": 5,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-17 22:51:35"
        },
        {
            "review_id": 19,
            "user_id": "MaiLan",
            "product_id": 1,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 10:20:35"
        },
        {
            "review_id": 20,
            "user_id": "MaiLan",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 05:55:35"
        },
        {
            "review_id": 21,
            "user_id": "LinhHoang",
            "product_id": 18,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 20:07:35"
        },
        {
            "review_id": 22,
            "user_id": "LanTrang",
            "product_id": 2,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 15:08:35"
        },
        {
            "review_id": 23,
            "user_id": "NguyenHieu",
            "product_id": 19,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 17:17:35"
        },
        {
            "review_id": 24,
            "user_id": "BuiHieu",
            "product_id": 1,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 10:33:35"
        },
        {
            "review_id": 25,
            "user_id": "ThanhTam",
            "product_id": 12,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 20:10:35"
        },
        {
            "review_id": 26,
            "user_id": "HoangMinh",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 12:16:35"
        },
        {
            "review_id": 27,
            "user_id": "BuiHieu",
            "product_id": 17,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 02:47:35"
        },
        {
            "review_id": 28,
            "user_id": "PhuongMai",
            "product_id": 13,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 15:24:35"
        },
        {
            "review_id": 29,
            "user_id": "BuiHieu",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 08:47:35"
        },
        {
            "review_id": 30,
            "user_id": "LanTrang",
            "product_id": 4,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 14:08:35"
        },
        {
            "review_id": 31,
            "user_id": "LanTrang",
            "product_id": 11,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 18:51:35"
        },
        {
            "review_id": 32,
            "user_id": "MaiLan",
            "product_id": 21,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 19:25:35"
        },
        {
            "review_id": 33,
            "user_id": "LinhHoang",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-17 22:55:35"
        },
        {
            "review_id": 34,
            "user_id": "LinhMinh",
            "product_id": 12,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-17 21:00:35"
        },
        {
            "review_id": 35,
            "user_id": "LanTrang",
            "product_id": 1,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 20:06:35"
        },
        {
            "review_id": 36,
            "user_id": "LinhMinh",
            "product_id": 12,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 19:14:35"
        },
        {
            "review_id": 37,
            "user_id": "NguyenHieu",
            "product_id": 10,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 15:27:35"
        },
        {
            "review_id": 38,
            "user_id": "LanTrang",
            "product_id": 5,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 03:31:35"
        },
        {
            "review_id": 39,
            "user_id": "LanTrang",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 10:52:35"
        },
        {
            "review_id": 40,
            "user_id": "NguyenHieu",
            "product_id": 1,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 11:43:35"
        },
        {
            "review_id": 41,
            "user_id": "QuocDuy",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 07:39:35"
        },
        {
            "review_id": 42,
            "user_id": "QuocDuy",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 15:43:35"
        },
        {
            "review_id": 43,
            "user_id": "QuocDuy",
            "product_id": 16,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-17 23:31:35"
        },
        {
            "review_id": 44,
            "user_id": "ThanhTam",
            "product_id": 5,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 10:08:35"
        },
        {
            "review_id": 45,
            "user_id": "PhuongMai",
            "product_id": 10,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 04:07:35"
        },
        {
            "review_id": 46,
            "user_id": "PhuongMai",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 06:41:35"
        },
        {
            "review_id": 47,
            "user_id": "ThanhTam",
            "product_id": 21,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 04:35:35"
        },
        {
            "review_id": 48,
            "user_id": "PhuongMai",
            "product_id": 23,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 02:36:35"
        },
        {
            "review_id": 49,
            "user_id": "LinhHoang",
            "product_id": 9,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 02:46:35"
        },
        {
            "review_id": 50,
            "user_id": "MaiLan",
            "product_id": 10,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-17 21:37:35"
        },
        {
            "review_id": 51,
            "user_id": "LanTrang",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 14:53:35"
        },
        {
            "review_id": 52,
            "user_id": "MaiLan",
            "product_id": 13,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 10:06:35"
        },
        {
            "review_id": 53,
            "user_id": "ThanhTam",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 03:01:35"
        },
        {
            "review_id": 54,
            "user_id": "ThanhTam",
            "product_id": 5,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 01:00:35"
        },
        {
            "review_id": 55,
            "user_id": "PhuongMai",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 16:51:35"
        },
        {
            "review_id": 56,
            "user_id": "LinhHoang",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 11:24:35"
        },
        {
            "review_id": 57,
            "user_id": "LinhMinh",
            "product_id": 19,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 12:15:35"
        },
        {
            "review_id": 58,
            "user_id": "LinhMinh",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 01:30:35"
        },
        {
            "review_id": 59,
            "user_id": "PhuongMai",
            "product_id": 8,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 19:09:35"
        },
        {
            "review_id": 60,
            "user_id": "HoangMinh",
            "product_id": 4,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 04:25:35"
        },
        {
            "review_id": 61,
            "user_id": "MaiLan",
            "product_id": 8,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-17 21:35:35"
        },
        {
            "review_id": 62,
            "user_id": "LinhMinh",
            "product_id": 13,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 07:16:35"
        },
        {
            "review_id": 63,
            "user_id": "MaiLan",
            "product_id": 6,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 18:07:35"
        },
        {
            "review_id": 64,
            "user_id": "PhuongMai",
            "product_id": 18,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 09:02:35"
        },
        {
            "review_id": 65,
            "user_id": "BuiHieu",
            "product_id": 7,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 02:10:35"
        },
        {
            "review_id": 66,
            "user_id": "QuocDuy",
            "product_id": 5,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 16:36:35"
        },
        {
            "review_id": 67,
            "user_id": "ThanhTam",
            "product_id": 11,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 10:10:35"
        },
        {
            "review_id": 68,
            "user_id": "BuiHieu",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 18:05:35"
        },
        {
            "review_id": 69,
            "user_id": "PhuongMai",
            "product_id": 12,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 13:11:35"
        },
        {
            "review_id": 70,
            "user_id": "PhuongMai",
            "product_id": 11,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 06:22:35"
        },
        {
            "review_id": 71,
            "user_id": "ThanhTam",
            "product_id": 13,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 15:11:35"
        },
        {
            "review_id": 72,
            "user_id": "MaiLan",
            "product_id": 9,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 11:31:35"
        },
        {
            "review_id": 73,
            "user_id": "HoangMinh",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 15:39:35"
        },
        {
            "review_id": 74,
            "user_id": "QuocDuy",
            "product_id": 2,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 00:12:35"
        },
        {
            "review_id": 75,
            "user_id": "BuiHieu",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 06:35:35"
        },
        {
            "review_id": 76,
            "user_id": "LanTrang",
            "product_id": 7,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 16:24:35"
        },
        {
            "review_id": 77,
            "user_id": "HoangMinh",
            "product_id": 1,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 01:44:35"
        },
        {
            "review_id": 78,
            "user_id": "HoangMinh",
            "product_id": 5,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-17 22:29:35"
        },
        {
            "review_id": 79,
            "user_id": "ThanhTam",
            "product_id": 5,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 13:53:35"
        },
        {
            "review_id": 80,
            "user_id": "MaiLan",
            "product_id": 19,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 17:19:35"
        },
        {
            "review_id": 81,
            "user_id": "LinhHoang",
            "product_id": 22,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 12:49:35"
        },
        {
            "review_id": 82,
            "user_id": "MaiLan",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 17:53:35"
        },
        {
            "review_id": 83,
            "user_id": "LinhHoang",
            "product_id": 1,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 03:06:35"
        },
        {
            "review_id": 84,
            "user_id": "LinhHoang",
            "product_id": 18,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 03:48:35"
        },
        {
            "review_id": 85,
            "user_id": "NguyenHieu",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 03:12:35"
        },
        {
            "review_id": 86,
            "user_id": "QuocDuy",
            "product_id": 5,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 00:43:35"
        },
        {
            "review_id": 87,
            "user_id": "NguyenHieu",
            "product_id": 19,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 07:06:35"
        },
        {
            "review_id": 88,
            "user_id": "ThanhTam",
            "product_id": 2,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 12:40:35"
        },
        {
            "review_id": 89,
            "user_id": "HoangMinh",
            "product_id": 10,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 15:13:35"
        },
        {
            "review_id": 90,
            "user_id": "QuocDuy",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-17 22:30:35"
        },
        {
            "review_id": 91,
            "user_id": "QuocDuy",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-17 23:42:35"
        },
        {
            "review_id": 92,
            "user_id": "LinhMinh",
            "product_id": 9,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 12:52:35"
        },
        {
            "review_id": 93,
            "user_id": "LinhHoang",
            "product_id": 6,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 17:45:35"
        },
        {
            "review_id": 94,
            "user_id": "QuocDuy",
            "product_id": 7,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 14:23:35"
        },
        {
            "review_id": 95,
            "user_id": "HoangMinh",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 03:17:35"
        },
        {
            "review_id": 96,
            "user_id": "QuocDuy",
            "product_id": 4,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 06:11:35"
        },
        {
            "review_id": 97,
            "user_id": "MaiLan",
            "product_id": 17,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-17 21:07:35"
        },
        {
            "review_id": 98,
            "user_id": "HoangMinh",
            "product_id": 12,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 08:40:35"
        },
        {
            "review_id": 99,
            "user_id": "PhuongMai",
            "product_id": 12,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 19:45:35"
        },
        {
            "review_id": 100,
            "user_id": "QuocDuy",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 03:31:35"
        },
        {
            "review_id": 101,
            "user_id": "BuiHieu",
            "product_id": 5,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 16:52:35"
        },
        {
            "review_id": 102,
            "user_id": "NguyenHieu",
            "product_id": 7,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 03:42:35"
        },
        {
            "review_id": 103,
            "user_id": "BuiHieu",
            "product_id": 11,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 00:09:35"
        },
        {
            "review_id": 104,
            "user_id": "ThanhTam",
            "product_id": 10,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 07:32:35"
        },
        {
            "review_id": 105,
            "user_id": "MaiLan",
            "product_id": 23,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 17:07:35"
        },
        {
            "review_id": 106,
            "user_id": "LinhHoang",
            "product_id": 23,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 13:16:35"
        },
        {
            "review_id": 107,
            "user_id": "PhuongMai",
            "product_id": 16,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 02:17:35"
        },
        {
            "review_id": 108,
            "user_id": "PhuongMai",
            "product_id": 1,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 20:37:35"
        },
        {
            "review_id": 109,
            "user_id": "PhuongMai",
            "product_id": 9,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-17 21:37:35"
        },
        {
            "review_id": 110,
            "user_id": "LinhHoang",
            "product_id": 5,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 04:27:35"
        },
        {
            "review_id": 111,
            "user_id": "PhuongMai",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 08:16:35"
        },
        {
            "review_id": 112,
            "user_id": "LinhMinh",
            "product_id": 10,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 08:48:35"
        },
        {
            "review_id": 113,
            "user_id": "HoangMinh",
            "product_id": 7,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 20:19:35"
        },
        {
            "review_id": 114,
            "user_id": "PhuongMai",
            "product_id": 7,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-17 23:24:35"
        },
        {
            "review_id": 115,
            "user_id": "HoangMinh",
            "product_id": 23,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 13:54:35"
        },
        {
            "review_id": 116,
            "user_id": "HoangMinh",
            "product_id": 17,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 09:55:35"
        },
        {
            "review_id": 117,
            "user_id": "NguyenHieu",
            "product_id": 2,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-17 22:35:35"
        },
        {
            "review_id": 118,
            "user_id": "BuiHieu",
            "product_id": 5,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 19:10:35"
        },
        {
            "review_id": 119,
            "user_id": "LanTrang",
            "product_id": 8,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 10:13:35"
        },
        {
            "review_id": 120,
            "user_id": "MaiLan",
            "product_id": 13,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 11:55:35"
        },
        {
            "review_id": 121,
            "user_id": "BuiHieu",
            "product_id": 1,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 10:45:35"
        },
        {
            "review_id": 122,
            "user_id": "ThanhTam",
            "product_id": 16,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 05:30:35"
        },
        {
            "review_id": 123,
            "user_id": "QuocDuy",
            "product_id": 1,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 04:16:35"
        },
        {
            "review_id": 124,
            "user_id": "QuocDuy",
            "product_id": 9,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 10:57:35"
        },
        {
            "review_id": 125,
            "user_id": "PhuongMai",
            "product_id": 23,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 12:38:35"
        },
        {
            "review_id": 126,
            "user_id": "HoangMinh",
            "product_id": 19,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 01:21:35"
        },
        {
            "review_id": 127,
            "user_id": "ThanhTam",
            "product_id": 5,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 18:57:35"
        },
        {
            "review_id": 128,
            "user_id": "BuiHieu",
            "product_id": 19,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 09:16:35"
        },
        {
            "review_id": 129,
            "user_id": "NguyenHieu",
            "product_id": 20,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 15:40:35"
        },
        {
            "review_id": 130,
            "user_id": "MaiLan",
            "product_id": 17,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 05:58:35"
        },
        {
            "review_id": 131,
            "user_id": "NguyenHieu",
            "product_id": 1,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 16:47:35"
        },
        {
            "review_id": 132,
            "user_id": "MaiLan",
            "product_id": 23,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 06:41:35"
        },
        {
            "review_id": 133,
            "user_id": "QuocDuy",
            "product_id": 12,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 16:55:35"
        },
        {
            "review_id": 134,
            "user_id": "LinhHoang",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 04:21:35"
        },
        {
            "review_id": 135,
            "user_id": "HoangMinh",
            "product_id": 12,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 02:11:35"
        },
        {
            "review_id": 136,
            "user_id": "BuiHieu",
            "product_id": 8,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 09:28:35"
        },
        {
            "review_id": 137,
            "user_id": "PhuongMai",
            "product_id": 9,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 03:24:35"
        },
        {
            "review_id": 138,
            "user_id": "ThanhTam",
            "product_id": 4,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-17 22:52:35"
        },
        {
            "review_id": 139,
            "user_id": "BuiHieu",
            "product_id": 10,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 11:49:35"
        },
        {
            "review_id": 140,
            "user_id": "ThanhTam",
            "product_id": 10,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 02:43:35"
        },
        {
            "review_id": 141,
            "user_id": "LinhMinh",
            "product_id": 22,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 18:45:35"
        },
        {
            "review_id": 142,
            "user_id": "BuiHieu",
            "product_id": 18,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 03:00:35"
        },
        {
            "review_id": 143,
            "user_id": "HoangMinh",
            "product_id": 14,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 18:05:35"
        },
        {
            "review_id": 144,
            "user_id": "PhuongMai",
            "product_id": 17,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 14:46:35"
        },
        {
            "review_id": 145,
            "user_id": "LanTrang",
            "product_id": 8,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 03:40:35"
        },
        {
            "review_id": 146,
            "user_id": "LanTrang",
            "product_id": 23,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 01:06:35"
        },
        {
            "review_id": 147,
            "user_id": "LinhHoang",
            "product_id": 17,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 16:33:35"
        },
        {
            "review_id": 148,
            "user_id": "NguyenHieu",
            "product_id": 10,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-17 22:46:35"
        },
        {
            "review_id": 149,
            "user_id": "QuocDuy",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 11:02:35"
        },
        {
            "review_id": 150,
            "user_id": "LinhMinh",
            "product_id": 4,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 02:54:35"
        },
        {
            "review_id": 151,
            "user_id": "HoangMinh",
            "product_id": 14,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 13:06:35"
        },
        {
            "review_id": 152,
            "user_id": "PhuongMai",
            "product_id": 1,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 16:32:35"
        },
        {
            "review_id": 153,
            "user_id": "ThanhTam",
            "product_id": 8,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-17 23:47:35"
        },
        {
            "review_id": 154,
            "user_id": "PhuongMai",
            "product_id": 22,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 06:18:35"
        },
        {
            "review_id": 155,
            "user_id": "NguyenHieu",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 01:07:35"
        },
        {
            "review_id": 156,
            "user_id": "ThanhTam",
            "product_id": 9,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 09:10:35"
        },
        {
            "review_id": 157,
            "user_id": "LinhHoang",
            "product_id": 21,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-17 22:41:35"
        },
        {
            "review_id": 158,
            "user_id": "BuiHieu",
            "product_id": 16,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-17 23:54:35"
        },
        {
            "review_id": 159,
            "user_id": "ThanhTam",
            "product_id": 21,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 04:12:35"
        },
        {
            "review_id": 160,
            "user_id": "PhuongMai",
            "product_id": 10,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-17 22:45:35"
        },
        {
            "review_id": 161,
            "user_id": "MaiLan",
            "product_id": 4,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 17:13:35"
        },
        {
            "review_id": 162,
            "user_id": "LinhMinh",
            "product_id": 2,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 07:17:35"
        },
        {
            "review_id": 163,
            "user_id": "HoangMinh",
            "product_id": 13,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-17 22:29:35"
        },
        {
            "review_id": 164,
            "user_id": "HoangMinh",
            "product_id": 14,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 05:42:35"
        },
        {
            "review_id": 165,
            "user_id": "NguyenHieu",
            "product_id": 14,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 01:29:35"
        },
        {
            "review_id": 166,
            "user_id": "MaiLan",
            "product_id": 2,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 15:39:35"
        },
        {
            "review_id": 167,
            "user_id": "LinhHoang",
            "product_id": 12,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-17 22:55:35"
        },
        {
            "review_id": 168,
            "user_id": "HoangMinh",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 12:13:35"
        },
        {
            "review_id": 169,
            "user_id": "BuiHieu",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 02:00:35"
        },
        {
            "review_id": 170,
            "user_id": "QuocDuy",
            "product_id": 14,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 03:49:35"
        },
        {
            "review_id": 171,
            "user_id": "MaiLan",
            "product_id": 18,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 01:12:35"
        },
        {
            "review_id": 172,
            "user_id": "HoangMinh",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 18:26:35"
        },
        {
            "review_id": 173,
            "user_id": "BuiHieu",
            "product_id": 7,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 11:12:35"
        },
        {
            "review_id": 174,
            "user_id": "HoangMinh",
            "product_id": 22,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 14:04:35"
        },
        {
            "review_id": 175,
            "user_id": "LinhHoang",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 08:44:35"
        },
        {
            "review_id": 176,
            "user_id": "HoangMinh",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 04:15:35"
        },
        {
            "review_id": 177,
            "user_id": "LanTrang",
            "product_id": 16,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 00:46:35"
        },
        {
            "review_id": 178,
            "user_id": "MaiLan",
            "product_id": 6,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 07:17:35"
        },
        {
            "review_id": 179,
            "user_id": "BuiHieu",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 10:51:35"
        },
        {
            "review_id": 180,
            "user_id": "MaiLan",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 04:33:35"
        },
        {
            "review_id": 181,
            "user_id": "ThanhTam",
            "product_id": 22,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 04:16:35"
        },
        {
            "review_id": 182,
            "user_id": "BuiHieu",
            "product_id": 14,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 17:35:35"
        },
        {
            "review_id": 183,
            "user_id": "HoangMinh",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 09:00:35"
        },
        {
            "review_id": 184,
            "user_id": "LinhMinh",
            "product_id": 11,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 03:54:35"
        },
        {
            "review_id": 185,
            "user_id": "MaiLan",
            "product_id": 22,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 04:29:35"
        },
        {
            "review_id": 186,
            "user_id": "LanTrang",
            "product_id": 23,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 07:44:35"
        },
        {
            "review_id": 187,
            "user_id": "QuocDuy",
            "product_id": 23,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 07:44:35"
        },
        {
            "review_id": 188,
            "user_id": "NguyenHieu",
            "product_id": 6,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 04:41:35"
        },
        {
            "review_id": 189,
            "user_id": "ThanhTam",
            "product_id": 3,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 01:30:35"
        },
        {
            "review_id": 190,
            "user_id": "BuiHieu",
            "product_id": 8,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 17:35:35"
        },
        {
            "review_id": 191,
            "user_id": "BuiHieu",
            "product_id": 1,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 10:42:35"
        },
        {
            "review_id": 192,
            "user_id": "ThanhTam",
            "product_id": 1,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 06:42:35"
        },
        {
            "review_id": 193,
            "user_id": "PhuongMai",
            "product_id": 20,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Dùng thử và thấy rất ưng ý, chất lượng rất tốt.",
            "date_created": "2025-03-18 06:22:35"
        },
        {
            "review_id": 194,
            "user_id": "QuocDuy",
            "product_id": 6,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-17 23:47:35"
        },
        {
            "review_id": 195,
            "user_id": "HoangMinh",
            "product_id": 15,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm rất chất lượng, sẽ tiếp tục ủng hộ.",
            "date_created": "2025-03-18 02:04:35"
        },
        {
            "review_id": 196,
            "user_id": "PhuongMai",
            "product_id": 7,
            "rating": 4,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 03:42:35"
        },
        {
            "review_id": 197,
            "user_id": "HoangMinh",
            "product_id": 9,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 12:37:35"
        },
        {
            "review_id": 198,
            "user_id": "QuocDuy",
            "product_id": 12,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Chất lượng âm thanh tuyệt vời, giá cả hợp lý.",
            "date_created": "2025-03-18 04:07:35"
        },
        {
            "review_id": 199,
            "user_id": "HoangMinh",
            "product_id": 8,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Mua sản phẩm này rất đáng tiền, không thất vọng!",
            "date_created": "2025-03-18 16:28:35"
        },
        {
            "review_id": 200,
            "user_id": "HoangMinh",
            "product_id": 4,
            "rating": 5,
            "comment": "Sản phẩm tuyệt vời, tôi rất hài lòng! Sản phẩm vượt quá mong đợi, rất hài lòng!",
            "date_created": "2025-03-18 03:33:35"
        }
    ]
```
---

## 📫 Contact
For setup help, contact: **huynhtruc09072004@gmail.com**
