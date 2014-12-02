Package.describe({
  name: "froala:editor",
  summary: "A beautiful jQuery WYSIWYG HTML text editor.",
  version: "1.2.4",
  git: "https://github.com/froala/meteor-froala/"
});

Package.onUse(function(api) {

  api.use([
    "jquery@1.0.1",
    "fortawesome:fontawesome@4.2.0"
  ], "client");

  api.addFiles([
    "froala:editor/css/froala_content.css",
    "froala:editor/css/froala_editor.css",
    "froala:editor/css/froala_style.css",

    "froala:editor/js/froala_editor.min.js",
    "froala:editor/js/froala_editor_ie8.min.js",
    
    "froala:editor/js/langs/ar.js",
    "froala:editor/js/langs/bs.js",
    "froala:editor/js/langs/cs.js",
    "froala:editor/js/langs/da.js",
    "froala:editor/js/langs/de.js",
    "froala:editor/js/langs/en_ca.js",
    "froala:editor/js/langs/en_gb.js",
    "froala:editor/js/langs/en_us.js",
    "froala:editor/js/langs/es.js",
    "froala:editor/js/langs/fa.js",
    "froala:editor/js/langs/fi.js",
    "froala:editor/js/langs/fr.js",
    "froala:editor/js/langs/he.js",
    "froala:editor/js/langs/hr.js",
    "froala:editor/js/langs/hu.js",
    "froala:editor/js/langs/id.js",
    "froala:editor/js/langs/it.js",
    "froala:editor/js/langs/ja.js",
    "froala:editor/js/langs/ko.js",
    "froala:editor/js/langs/me.js",
    "froala:editor/js/langs/nb.js",
    "froala:editor/js/langs/nl.js",
    "froala:editor/js/langs/pl.js",
    "froala:editor/js/langs/pt_br.js",
    "froala:editor/js/langs/pt_pt.js",
    "froala:editor/js/langs/ro.js",
    "froala:editor/js/langs/ru.js",
    "froala:editor/js/langs/sr.js",
    "froala:editor/js/langs/sv.js",
    "froala:editor/js/langs/th.js",
    "froala:editor/js/langs/tr.js",
    "froala:editor/js/langs/zh_cn.js",
    "froala:editor/js/langs/zh_tw.js",

    "froala:editor/js/plugins/block_styles.min.js",
    "froala:editor/js/plugins/char_counter.min.js",
    "froala:editor/js/plugins/colors.min.js",
    "froala:editor/js/plugins/file_upload.min.js",
    "froala:editor/js/plugins/font_family.min.js",
    "froala:editor/js/plugins/font_size.min.js",
    "froala:editor/js/plugins/lists.min.js",
    "froala:editor/js/plugins/media_manager.min.js",
    "froala:editor/js/plugins/tables.min.js",
    "froala:editor/js/plugins/video.min.js"
  ], ["client"]);
});
