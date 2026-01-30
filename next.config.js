/** @type {import('next').NextConfig} */
module.exports = {
  turbopack: {
    // Ensure Turbopack picks the correct workspace root when multiple lockfiles exist
    root: __dirname,
  },
};
