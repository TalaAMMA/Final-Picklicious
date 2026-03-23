import * as esbuild from "esbuild";

const ctx = await esbuild.context({
  entryPoints: ["./src/index.jsx"],
  bundle: true,
  sourcemap: true,
  outfile: "./src/js/app.js",
});
await ctx.serve({
  servedir : 'src',
  port : 3000, 
})
await ctx.watch();
console.log("esbuild is watching for changes. Press Ctrl-C to stop.");