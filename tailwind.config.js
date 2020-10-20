module.exports = {
  purge: [],
  theme: {
    minWidth: {
      "0": "0",
      "1/5": "20%",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    customForms: (theme) => ({
      default: {
        select: {
          icon:
            '<svg fill="#e2e8f0" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
        },
      },
    }),
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Roboto"],
      body: ["Roboto"],
    },
    extend: {},
  },
  variants: {
    borderWidth: ["responsive", "odd", "hover", "focus"],
    backgroundColor: [
      "responsive",
      "group-hover",
      "first",
      "last",
      "odd",
      "even",
      "hover",
      "focus",
      "active",
      "visited",
      "disabled",
    ],
    tableLayout: ["responsive", "hover", "focus"],
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
