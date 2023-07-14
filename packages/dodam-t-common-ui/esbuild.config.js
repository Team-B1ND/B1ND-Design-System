const { build } = require("esbuild");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");

build({
  entryPoints: ["./src/index.ts"],
  outdir: "./dist",
  format: "cjs",
  platform: "node",
  sourcemap: true,
  bundle: true,
  plugins: [pnpPlugin()],
}).catch(() => process.exit(1));