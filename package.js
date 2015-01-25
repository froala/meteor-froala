Package.describe({
  name: "froala:editor",
  summary: "A beautiful jQuery WYSIWYG HTML text editor.",
  version: "1.2.5",
  git: "https://github.com/froala/meteor-froala/"
});

Package.onUse(function(api) {

  api.use([
    "jquery@1.0.1",
    "fortawesome:fontawesome@4.2.0"
  ], "client");

  api.addFiles([
    // CSS
    "froala:editor/css/froala_content.css",
    "froala:editor/css/froala_editor.css",
    "froala:editor/css/froala_style.css",

    // JS
    "froala:editor/js/froala_editor.min.js",
    "froala:editor/js/froala_editor_ie8_wrapped.min.js",

    // JS Plugins
    "froala:editor/js/plugins/block_styles.min.js",
    "froala:editor/js/plugins/char_counter.min.js",
    "froala:editor/js/plugins/colors.min.js",
    "froala:editor/js/plugins/file_upload.min.js",
    "froala:editor/js/plugins/font_family.min.js",
    "froala:editor/js/plugins/font_size.min.js",
    "froala:editor/js/plugins/fullscreen.min.js",
    "froala:editor/js/plugins/inline_styles.min.js",
    "froala:editor/js/plugins/lists.min.js",
    "froala:editor/js/plugins/media_manager.min.js",
    "froala:editor/js/plugins/tables.min.js",
    "froala:editor/js/plugins/urls.min.js",
    "froala:editor/js/plugins/video.min.js"
  ], ["client"]);
});
