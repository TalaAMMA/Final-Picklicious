import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["./src/index.jsx"],
  bundle: true,
  minify: true,
  outfile: "./prod/js/app.js",
});