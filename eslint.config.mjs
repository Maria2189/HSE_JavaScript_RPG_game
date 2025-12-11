import js from "@eslint/js";

export default [
  // 1. Игнорируем папку dist (аналог .eslintignore)
  {
    ignores: ["dist/"]
  },
  
  js.configs.recommended,
  {
    // 2. Настройки для поддержки синтаксиса (Airbnb legacy из задания)
    plugins: {
      extends: ["airbnb-base/legacy"]
    },
    // 3. Разрешаем использование console (исправляет ошибку 'console is not defined')
    languageOptions: {
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly"
      }
    }
  }
];