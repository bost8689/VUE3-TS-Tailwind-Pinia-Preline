/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,vue}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // Основной цвет (синий)
        secondary: "#6b7280", // Вторичный цвет (серый)
        accent: "#f472b6", // Цвет акцента (розовый)
        success: "#22c55e", // Цвет успеха (зеленый)
        warning: "#f59e0b", // Цвет предупреждения (желтый)
        danger: "#ef4444", // Цвет опасности (красный)
        info: "#3b82f6", // Цвет информации (синий)
        background: "#f3f4f6", // Цвет фона
        text: "#111827", // Основной цвет текста
      },
    },
  },
  plugins: [require("preline/plugin")],
};
