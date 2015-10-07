Package.describe({
  name: "froala:editor",
  summary: "A beautiful jQuery WYSIWYG HTML rich text editor.",
  version: "2.0.0-rc.3-1",
  git: "https://github.com/froala/meteor-froala/"
});

Package.onUse(function(api) {
  api.use([
    "jquery@1.0.1",
    "fortawesome:fontawesome@4.4.0"
  ], "client");

  api.addFiles([
    // CSS
    "froala:editor/css/froala_editor.min.css",
    "froala:editor/css/froala_style.min.css",

    // CSS Plugins
    "froala:editor/css/plugins/char_counter.min.css",
    "froala:editor/css/plugins/code_view.min.css",
    "froala:editor/css/plugins/colors.min.css",
    "froala:editor/css/plugins/emoticons.min.css",
    "froala:editor/css/plugins/file.min.css",
    "froala:editor/css/plugins/fullscreen.min.css",
    "froala:editor/css/plugins/image_manager.min.css",
    "froala:editor/css/plugins/image.min.css",
    "froala:editor/css/plugins/line_breaker.min.css",
    "froala:editor/css/plugins/table.min.css",
    "froala:editor/css/plugins/video.min.css",

    // JS
    "froala:editor/js/froala_editor.min.js",

    // JS Plugins
    "froala:editor/js/plugins/align.min.js",
    "froala:editor/js/plugins/char_counter.min.js",
    "froala:editor/js/plugins/code_view.min.js",
    "froala:editor/js/plugins/colors.min.js",
    "froala:editor/js/plugins/emoticons.min.js",
    "froala:editor/js/plugins/entities.min.js",
    "froala:editor/js/plugins/file.min.js",
    "froala:editor/js/plugins/font_family.min.js",
    "froala:editor/js/plugins/font_size.min.js",
    "froala:editor/js/plugins/fullscreen.min.js",
    "froala:editor/js/plugins/image_manager.min.js",
    "froala:editor/js/plugins/image.min.js",
    "froala:editor/js/plugins/inline_style.min.js",
    "froala:editor/js/plugins/line_breaker.min.js",
    "froala:editor/js/plugins/link.min.js",
    "froala:editor/js/plugins/lists.min.js",
    "froala:editor/js/plugins/paragraph_format.min.js",
    "froala:editor/js/plugins/paragraph_style.min.js",
    "froala:editor/js/plugins/quote.min.js",
    "froala:editor/js/plugins/save.min.js",
    "froala:editor/js/plugins/table.min.js",
    "froala:editor/js/plugins/url.min.js",
    "froala:editor/js/plugins/video.min.js"
  ], ["client"]);
});
