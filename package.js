Package.describe({
  name: "uzumaxy:froala",
  summary: "A beautiful jQuery WYSIWYG HTML text editor.",
  version: "1.2.4",
  git: "https://github.com/uzumaxy/meteor-froala/"
});

Package.onUse(function(api) {

  api.use([
    "jquery@1.0.1",
    "linto:fontawesome@4.2.2"
  ], "client");

  api.addFiles([
    "uzumaxy:froala/css/froala_content.css",
    "uzumaxy:froala/css/froala_editor.css",
    "uzumaxy:froala/css/froala_style.css",

    "uzumaxy:froala/js/froala_editor.min.js",
    "uzumaxy:froala/js/froala_editor_ie8.min.js",
    
    "uzumaxy:froala/js/langs/ar.js",
    "uzumaxy:froala/js/langs/bs.js",
    "uzumaxy:froala/js/langs/cs.js",
    "uzumaxy:froala/js/langs/da.js",
    "uzumaxy:froala/js/langs/de.js",
    "uzumaxy:froala/js/langs/en_ca.js",
    "uzumaxy:froala/js/langs/en_gb.js",
    "uzumaxy:froala/js/langs/en_us.js",
    "uzumaxy:froala/js/langs/es.js",
    "uzumaxy:froala/js/langs/fa.js",
    "uzumaxy:froala/js/langs/fi.js",
    "uzumaxy:froala/js/langs/fr.js",
    "uzumaxy:froala/js/langs/he.js",
    "uzumaxy:froala/js/langs/hr.js",
    "uzumaxy:froala/js/langs/hu.js",
    "uzumaxy:froala/js/langs/id.js",
    "uzumaxy:froala/js/langs/it.js",
    "uzumaxy:froala/js/langs/ja.js",
    "uzumaxy:froala/js/langs/ko.js",
    "uzumaxy:froala/js/langs/me.js",
    "uzumaxy:froala/js/langs/nb.js",
    "uzumaxy:froala/js/langs/nl.js",
    "uzumaxy:froala/js/langs/pl.js",
    "uzumaxy:froala/js/langs/pt_br.js",
    "uzumaxy:froala/js/langs/pt_pt.js",
    "uzumaxy:froala/js/langs/ro.js",
    "uzumaxy:froala/js/langs/ru.js",
    "uzumaxy:froala/js/langs/sr.js",
    "uzumaxy:froala/js/langs/sv.js",
    "uzumaxy:froala/js/langs/th.js",
    "uzumaxy:froala/js/langs/tr.js",
    "uzumaxy:froala/js/langs/zh_cn.js",
    "uzumaxy:froala/js/langs/zh_tw.js",

    "uzumaxy:froala/js/plugins/block_styles.min.js",
    "uzumaxy:froala/js/plugins/char_counter.min.js",
    "uzumaxy:froala/js/plugins/colors.min.js",
    "uzumaxy:froala/js/plugins/file_upload.min.js",
    "uzumaxy:froala/js/plugins/font_family.min.js",
    "uzumaxy:froala/js/plugins/font_size.min.js",
    "uzumaxy:froala/js/plugins/lists.min.js",
    "uzumaxy:froala/js/plugins/media_manager.min.js",
    "uzumaxy:froala/js/plugins/tables.min.js",
    "uzumaxy:froala/js/plugins/video.min.js"
  ], ["client"]);
});
