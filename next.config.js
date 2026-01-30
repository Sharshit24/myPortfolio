/** @type {import('next').NextConfig} */
const root = process.cwd();

export default {
  turbopack: {
    // Ensure Turbopack picks the correct workspace root when multiple lockfiles exist
    root,
  },
};
