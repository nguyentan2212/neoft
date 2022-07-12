module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                primary: "var(--color-primary)",
                "secondary-yellow": "var(--color-secondary-yellow)",
                "secondary-pink": "var(--color-secondary-pink)",
                dark: "var(--color-dark)",
                grey: "var(--color-grey)",
                "grey-dark": "var(--color-grey-dark)",
                "grey-light": "var(--color-grey-light)",
            },
            boxShadow: {
                DEFAULT: "0px 3px 4px rgba(153, 155, 168, 0.25)",
                md: "0px 8px 12px rgba(153, 155, 168, 0.25)",
                lg: "0px 12px 14px rgba(0, 0, 0, 0.1)",
                xl: "0px 16px 18px rgba(153, 155, 168, 0.18)",
                "2xl": "0px 20px 24px rgba(153, 155, 168, 0.18)",
                inner: "0px -6px 20px rgba(13, 10, 25, 0.08)",
                "inner-md": "0px -15px 20px rgba(13, 10, 25, 0.06)",
            },
            fontFamily: {
                inner: ["Inter", "sans-serif"],
            },
            screens: {
                mobile: "390px",
                desktop: "1440px",
            }
        },
    },
    plugins: [],
};
