Package.describe({
  name: "froala:editor",
  summary: "A beautiful jQuery WYSIWYG HTML rich text editor.",
  version: "2.3.2",
  git: "https://github.com/froala/meteor-froala/"
});

Package.onUse(function(api) {
  api.use([
    "jquery@1.0.1",
    "fortawesome:fontawesome@4.4.0"
  ], "client");

  api.addFiles([
    // CSS
    "assets/css/froala_editor.min.css",
    "assets/css/froala_style.min.css",

    // CSS Plugins
    "assets/css/plugins/char_counter.min.css",
    "assets/css/plugins/code_view.min.css",
    "assets/css/plugins/colors.min.css",
    "assets/css/plugins/draggable.min.css",
    "assets/css/plugins/emoticons.min.css",
    "assets/css/plugins/file.min.css",
    "assets/css/plugins/fullscreen.min.css",
    "assets/css/plugins/image_manager.min.css",
    "assets/css/plugins/image.min.css",
    "assets/css/plugins/line_breaker.min.css",
    "assets/css/plugins/quick_insert.min.css",
    "assets/css/plugins/table.min.css",
    "assets/css/plugins/video.min.css",

    // JS
    "assets/js/froala_editor.min.js",

    // JS Plugins
    "assets/js/plugins/align.min.js",
    "assets/js/plugins/char_counter.min.js",
    "assets/js/plugins/code_beautifier.min.js",
    "assets/js/plugins/code_view.min.js",
    "assets/js/plugins/colors.min.js",
    "assets/js/plugins/draggable.min.js",
    "assets/js/plugins/emoticons.min.js",
    "assets/js/plugins/entities.min.js",
    "assets/js/plugins/file.min.js",
    "assets/js/plugins/font_family.min.js",
    "assets/js/plugins/font_size.min.js",
    "assets/js/plugins/fullscreen.min.js",
    "assets/js/plugins/image.min.js",
    "assets/js/plugins/image_manager.min.js",
    "assets/js/plugins/inline_style.min.js",
    "assets/js/plugins/line_breaker.min.js",
    "assets/js/plugins/link.min.js",
    "assets/js/plugins/lists.min.js",
    "assets/js/plugins/paragraph_format.min.js",
    "assets/js/plugins/paragraph_style.min.js",
    "assets/js/plugins/quick_insert.min.js",
    "assets/js/plugins/quote.min.js",
    "assets/js/plugins/save.min.js",
    "assets/js/plugins/table.min.js",
    "assets/js/plugins/url.min.js",
    "assets/js/plugins/video.min.js"
  ], ["client"]);
});
