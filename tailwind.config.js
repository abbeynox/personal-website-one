module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Copperplate Gothic'],
    },
    extend: {}
  },
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
};
