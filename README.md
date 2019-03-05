# Meteor Froala WYSIWYG HTML Editor

>A beautiful Javascript WYSIWYG HTML text editor for [Meteor](https://github.com/meteor/meteor).
Check out the [Froala editor homepage](https://froala.com/wysiwyg-editor) for more details.


## How do I use it?

1.Open terminal in your meteor project directory and execute following command:

```bash
meteor add froala:editor
```
2.Create a froala-template in your main.html file.
<template name="froala">
  <div class="editor">Hello Froala</div>
</template>

3.Include the template in body of html.
<body>
 {{> froala}}
</body>

4.Run froala when template is rendered in main.js file.
Template.froala.rendered = function () {
  $('.editor').froalaEditor()
};



## License

The `meteor-froala` project is under MIT license. However, in order to use Froala WYSIWYG HTML Editor plugin you should purchase a license for it.

Froala Editor has [3 different licenses](https://froala.com/wysiwyg-editor/pricing/) for commercial use.
For details please see [License Agreement](https://froala.com/wysiwyg-editor/terms).
