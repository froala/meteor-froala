Package.describe({
  name: "froala:editor",
  summary: "A beautiful jQuery WYSIWYG HTML rich text editor.",
  version: "2.9.5",
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
    "assets/css/plugins/help.min.css",
    "assets/css/plugins/image_manager.min.css",
    "assets/css/plugins/image.min.css",
    "assets/css/plugins/line_breaker.min.css",
    "assets/css/plugins/quick_insert.min.css",
    "assets/css/plugins/special_characters.min.css",
    "assets/css/plugins/table.min.css",
    "assets/css/plugins/video.min.css",

    // 3rd Party
    "assets/css/third_party/embedly.min.css",
    "assets/css/third_party/spell_checker.min.css",
    "assets/css/third_party/image_tui.min.css",

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
    "assets/js/plugins/help.min.js",
    "assets/js/plugins/image.min.js",
    "assets/js/plugins/image_manager.min.js",
    "assets/js/plugins/inline_class.min.js",
    "assets/js/plugins/inline_style.min.js",
    "assets/js/plugins/line_breaker.min.js",
    "assets/js/plugins/line_height.min.js",
    "assets/js/plugins/link.min.js",
    "assets/js/plugins/lists.min.js",
    "assets/js/plugins/paragraph_format.min.js",
    "assets/js/plugins/paragraph_style.min.js",
    "assets/js/plugins/print.min.js",
    "assets/js/plugins/quick_insert.min.js",
    "assets/js/plugins/quote.min.js",
    "assets/js/plugins/save.min.js",
    "assets/js/plugins/special_characters.min.js",
    "assets/js/plugins/table.min.js",
    "assets/js/plugins/url.min.js",
    "assets/js/plugins/video.min.js",
    "assets/js/plugins/word_paste.min.js",

    // 3rd Party
    "assets/js/third_party/embedly.min.js",
    "assets/js/third_party/font_awesome.min.js",
    "assets/js/third_party/image_aviary.min.js",
    "assets/js/third_party/image_tui.min.js",
    "assets/js/third_party/spell_checker.min.js"
  ], ["client"]);
});
