// WEB303 Assignment 2 
// Nihar Ghevaria (0806797)

var content = $('#content');
var currentXHR;


$('a[href="#"]').on('click', function() {
    if (currentXHR) {
        currentXHR.abort();
    }

    var xhr = new XMLHttpRequest;
    currentXHR = xhr;
    console.log(xhr);

    var page = $(this).attr("id");

    content.slideUp(500, function(){
    xhr.open('GET', page+'.html', true);
    console.log(xhr);


    xhr.onload = function() {
        if(this.status=== 200) {
            var contentHTML = xhr.responseText;
            display(contentHTML);
        }
    }

    xhr.send();
});
})

function display(contentHTML) {
    content.css('display','block');
    content.html(contentHTML);
    content.slideDown(1000);
}