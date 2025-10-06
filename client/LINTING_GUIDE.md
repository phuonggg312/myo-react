# 📋 Hướng dẫn sử dụng ESLint & Stylelint

## 🎯 Mục đích
- **ESLint**: Kiểm tra và sửa lỗi code JavaScript/JSX
- **Stylelint**: Kiểm tra và sửa lỗi code CSS/SCSS

---

## 🚀 Các lệnh sử dụng

### ESLint (JavaScript/JSX)

```bash
# Kiểm tra lỗi JavaScript/JSX
npm run lint

# Tự động sửa lỗi JavaScript/JSX
npm run lint:fix
```

### Stylelint (CSS/SCSS)

```bash
# Kiểm tra lỗi CSS/SCSS
npm run lint:css

# Tự động sửa lỗi CSS/SCSS
npm run lint:css:fix
```

### Kiểm tra tất cả

```bash
# Kiểm tra cả JS và CSS
npm run lint:all

# Tự động sửa cả JS và CSS
npm run lint:all:fix
```

---

## 📝 Các quy tắc chính

### ESLint Rules

1. **No unused variables** - Không để biến không sử dụng
2. **Prefer const** - Ưu tiên dùng `const` thay vì `let`
3. **No var** - Không dùng `var`, chỉ dùng `const` hoặc `let`
4. **No console** - Cảnh báo khi dùng `console.log()` (chỉ cho phép `console.warn()` và `console.error()`)
5. **React Hooks Rules** - Tuân thủ quy tắc React Hooks

### Stylelint Rules

1. **Standard SCSS** - Tuân thủ chuẩn SCSS
2. **Color notation** - Sử dụng format màu chuẩn
3. **No descending specificity** - Tránh CSS specificity conflicts
4. **Proper nesting** - Nest SCSS đúng cách

---

## 🔧 Cấu hình VSCode (Khuyến nghị)

### Cài đặt Extensions

1. **ESLint** - dbaeumer.vscode-eslint
2. **Stylelint** - stylelint.vscode-stylelint
3. **Prettier** - esbenp.prettier-vscode (optional)

### Settings.json

Thêm vào `.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact"
  ],
  "stylelint.validate": [
    "css",
    "scss"
  ]
}
```

---

## 📚 Ví dụ

### ❌ Sai

```javascript
// Unused variable
var unused = 'test';

// Using var instead of const
var name = 'John';

// Console.log in production
console.log('Debug info');
```

```scss
// Wrong color notation
.class {
  color: rgb(255 0 0 / 0.5);
}
```

### ✅ Đúng

```javascript
// Using const
const name = 'John';

// Using console.error for errors
console.error('Error occurred');

// No unused variables
const greeting = `Hello ${name}`;
```

```scss
// Correct color notation
.class {
  color: rgba(255, 0, 0, 0.5);
}
```

---

## 🎓 Tips

1. **Chạy lint trước khi commit**: `npm run lint:all:fix`
2. **Setup pre-commit hook** với Husky để tự động lint
3. **Đọc error messages** để hiểu vấn đề
4. **Không disable rules** trừ khi thực sự cần thiết

---

## 📖 Tài liệu tham khảo

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Stylelint Documentation](https://stylelint.io/)
- [React ESLint Plugin](https://github.com/jsx-eslint/eslint-plugin-react)
