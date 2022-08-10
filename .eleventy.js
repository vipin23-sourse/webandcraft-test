const path = require("path");
const Image = require("@11ty/eleventy-img");


module.exports = function (eleventyConfig) {
    async function imageShortcode( src, cls, alt, sizes) {
        let metadata = await Image( src, {
          widths: [400, 900, null],
          formats: ["avif", "webp", "jpeg", "svg"],
          urlPath:"images",
          outputDir: "public/images",
          svgShortCircuit: true,
          filenameFormat: function (id, src, width, format) {
            const extension = path.extname(src);
            const name = path.basename(src, extension);
            return `${name}-${width}w.${format}`;
          }
          
        });
    
        let imageAttributes = {
          class:cls,
          alt,
          sizes,
          loading: "lazy",
          decoding: "async",
        };
        return Image.generateHTML(metadata, imageAttributes, {
            whitespaceMode: "inline"
          });
      }

      
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addWatchTarget("./src/sass/"); // eleventy triggers a build when this folder changes
    eleventyConfig.addPassthroughCopy("src/js/");
    eleventyConfig.addPassthroughCopy("src/images/*.svg");

  
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };

    
  };