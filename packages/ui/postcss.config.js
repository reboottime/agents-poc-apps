/** @type {import('postcss-load-config').Config} */
const isProd = (typeof process !== "undefined")
  ? process.env.NODE_ENV === "production"
  : (import.meta.env?.PROD ?? false);

export default {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {
      flexbox: "no-2009",
    },
    "postcss-preset-env": {
      /**
       * CSS Stages represent how close a feature is to being finalized in the CSS specification:
          Stage 1: Initial draft (experimental)
          Stage 2: Draft (in development)
          Stage 3: Testing phase
          Stage 4: Standardized
       */
      stage: 4,
      features: { "nesting-rules": false },
    },
    ...(isProd
      ? {
          cssnano: {
            preset: "default",
          },
        }
      : {}),
  },
  sourceMap: !isProd,
};
