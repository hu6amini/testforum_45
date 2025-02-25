$(document).ready(function () {
    var $post = $("#Post");

    // Only clear if there's no existing content (i.e., new post, not editing)
    if (!$post.val().trim()) {
        $post.val(""); 
    }

    $post.sceditor({
        format: "bbcode",
        style: "https://cdnjs.cloudflare.com/ajax/libs/sceditor/3.2.0/themes/content/default.min.css",
        toolbar: "bold,italic,underline,strikethrough|subscript,superscript|left,center,right,justify|" +
         "font,size,color,emoticon,removeformat|cut,copy,paste|bulletlist,orderedlist,table|" +
         "code,quote,spoiler|image,link,unlink,youtube|" +
         "ltr,rtl",
        resizeEnabled: true,
        plugins: "bbcode",
        toolbarExclude: "source"
    }).sceditor("instance").sourceMode(true);
});
