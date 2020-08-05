$(document).ready(function(){
  buildHeader();
  buildFooter();
});


//header build
function buildHeader() {
  var headLogo = '<h1 class="logo"><a href="http://brandonzippe.name"><img src="assets/mycon.png" class="mycon" alt="*" /> zippetomylou</a></h1>';
  var menuBtn = '<div class="menuToggle">menu</div>';
  var headNav = '<nav class="nav"><ul><li><a href="http://brandonzippe.name/resume/" target="_blank">resume</a></li><li><a href="http://www.zippetomylou.com/hire.php" target="_blank">hire</a></li><li><a href="/ui.html">work</a></li><li><a href="/contact.html">contact</a></li></ul></nav>';
  var pageHeader = headLogo + menuBtn + headNav;

  $('.header').prepend(pageHeader);
}

//footer build
function buildFooter() {
  var footerNav = '<ul class="footerLinks"><li><a href="http://brandonzippe.name/resume/" target="_blank">resume</a></li><li><a href="/ui.html">work</a></li><li><a href="http://www.zippetomylou.com/hire.php" target="_blank">hire</a></li><li><a href="/contact.html">contact</a></li></ul>';
  var cpyRight = '<span class="cr">&copy; zippetomylou designs</span>';
  var pageFooter = footerNav + cpyRight;

  $('.footer').prepend(pageFooter);
}

//svg icons
var svgIcon_coding = '<svg xmlns="http://www.w3.org/2000/svg" version="1" x="0" y="0" viewBox="0 0 503 503" xml:space="preserve" enable-background="new 0 0 502.664 502.664"><path d="M154 358L0 274v-46l154-83v55L47 251l107 53C154 304 154 358 154 358zM180 388L282 115h32L212 388H180zM349 358v-54l107-53 -107-53v-54l154 84v46L349 358z"/></svg>';
var svgIcon_content = '<svg xmlns="http://www.w3.org/2000/svg" version="1" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve" enable-background="new 0 0 31.938 31.937"><path d="M21 28H2V4h18v4l2-3V4c0-1-1-2-2-2H2C1 1 0 3 0 4v24c0 1 1 2 2 2h18c1 0 2-1 2-2v-8l-2 3V28L21 28zM19 8c0-1-1-1-1-1H6C5 7 4 8 4 8c0 1 1 1 1 1h12C18 10 19 9 19 8zM17 12H6c-1 0-1 1-1 1 0 1 1 1 1 1h9L17 12zM12 17H6c-1 0-1 1-1 1 0 1 1 1 1 1h5L12 17zM4 23c0 1 1 1 1 1h4c0 0 0 0 0 0l1-2H6C5 22 4 23 4 23zM23 8l-8 9 -1 1 5 4 1-1 8-9 1-1 -5-4L23 8zM22 13l-6 6c0 0 0 0 0 0 0 0 0 0 0 0l0 0c0 0 0 0 0-1l6-6c0 0 0 0 0 0 0 0 0 0 0 0l0 0C22 12 22 13 22 13zM24 10l0 0c0 0 0 0 0 1l0 0 0 0 0 0c0 0 0 0 0 0 0 0 0 0 0 0l0 0c0 0 0 0 0 0 0 0 0 0 0 0l0-1C23 10 24 10 24 10z"/><polygon points="24 7 24 7 28 11 29 11 30 10 25 6 "/><path d="M32 7c0 0 0-1 0-1l-3-2c0 0-1 0-1 0 0 0-1 0-1 0l-2 2 5 4 2-2C32 8 32 7 32 7zM30 8l-3-3 1-1 3 3L30 8zM12 25c0 0 0 0 1 0l5-2 -5-4 -2 6C11 25 11 25 12 25zM13 21l3 2 -2 1 -1-1L13 21z"/></svg>';
var svgIcon_visual = '<svg xmlns="http://www.w3.org/2000/svg" version="1" x="0" y="0" viewBox="0 0 98 98" xml:space="preserve"><path d="M97 46c-1-1-22-25-48-25 -26 0-47 24-48 25 -2 2-2 5 0 7 1 1 22 25 48 25 26 0 47-24 48-25C99 51 99 48 97 46zM57 35c2-1 4 0 6 2 1 2 1 5-1 6 -2 1-4 0-6-2C55 39 56 36 57 35zM49 69c-18 0-34-14-39-20 4-4 12-11 23-16 -2 3-3 7-3 11 0 11 9 20 20 20s20-9 20-20c0-4-1-8-3-11C77 38 85 45 89 49 83 55 68 69 49 69z"/></svg>';
var svgIcon_research = '<svg xmlns="http://www.w3.org/2000/svg" version="1" x="0" y="0" viewBox="0 0 224 224" xml:space="preserve" enable-background="new 0 0 224.33 224.33"><path d="M188 119c1-32-25-59-57-59 -32-1-59 25-59 57 0 1 0 1 0 2h0c0 0 0 0 0 0 0 2 0 3 0 5 0 1 0 2 0 3 0 1 0 2 0 3 0 0 0 1 0 1 0 0 0 0 0 0 1 3 2 6 3 9 0 0 0 0 0 0 2 4 4 8 6 12 0 0 0 0 0 0 6 8 13 14 22 19 0 0 0 0-1 0 7 4 15 6 23 6 0 0 0 0 0 0 1 0 1 0 2 0 7 0 14-1 20-3v0c5-2 10-4 14-7v0C177 156 187 139 188 119zM129 161c-20 0-37-15-41-34 0-1 0-1 0-2 0-1 0-1 0-2 0-2 0-3 0-5 0-1 0-1 0-2 0-2 0-4 1-6 0 0 0 0 0 0 1-4 2-8 4-12 0 0 0 0 0 0 7-15 23-25 40-25 6 0 12 2 18 4v0c5 3 10 6 14 11V90c7 8 11 18 11 29C173 143 153 162 129 161zM224 206l-13 13 -44-45 13-13L224 206zM66 62c-10 0-20 0-30 0 -7 0-7-12 0-12 10 0 20 0 30 0C74 50 74 62 66 62zM36 81c-7 0-7-12 0-12 10 0 20 0 30 0 7 0 7 12 0 12C56 81 46 81 36 81zM162 99v39c-3 6-8 10-14 14V85C154 88 159 93 162 99zM148 179c5-2 10-4 14-6v44H0V6h132l30 29v29c-4-3-9-5-14-6V42h-23V20H14v183h134V179zM121 151c-2 0-6 0-11 0 -5-3-9-7-12-12 11 0 20 0 23 0C128 139 128 151 121 151zM35 139c4 0 19 0 36 0 1 4 3 8 6 12 -18 0-36 0-41 0C27 151 27 139 35 139zM121 130c-4 0-15 0-28 0 -1-4-2-8-2-12 14 0 26 0 29 0C128 118 128 130 121 130zM35 118c4 0 17 0 32 0 0 4 0 8 1 12 -15 0-29 0-33 0C27 130 27 118 35 118zM121 111c-4 0-15 0-29 0 1-4 2-8 4-12 12 0 21 0 24 0C128 99 128 111 121 111zM35 99c4 0 19 0 35 0 -1 4-2 8-3 12 -15 0-28 0-33 0C27 111 27 99 35 99zM91 182c-7 0-7-12 0-12 1 0 2 0 3 0 9 6 19 10 30 11 -1 0-1 0-2 0C111 182 101 182 91 182z"/></svg>';
var svgIcon_ui = '<svg xmlns="http://www.w3.org/2000/svg" version="1" x="0" y="0" viewBox="0 0 396 396" xml:space="preserve" enable-background="new 0 0 396.494 396.494"><path d="M304 331h-43c-2 0-3-1-3-3v-11c0-2-1-3-3-3h-60c-2 0-3 1-3 3v11c0 2-1 3-3 3h-32c-2 0-3 1-3 3v12c0 2 1 3 3 3h148c2 0 3-1 3-3v-12C307 332 306 331 304 331z"/><path d="M377 46h-308c-11 0-19 9-19 19 0 0 0 37 0 51 0 7 0 8 4 8 2 0 5 0 8 0 4 0 3-1 3-8 0-14 0-51 0-51 0-3 2-5 5-5h308c3 0 5 2 5 5v190h-220c0 0-8 0-8 10 0 6 0 18 0 24 0 10 8 10 8 10h215c11 0 19-9 19-19V66C396 55 388 46 377 46zM223 283c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9S228 283 223 283zM124 142H13C6 142 0 147 0 154v183c0 7 6 13 13 13h112c7 0 13-6 13-13V154C137 147 131 142 124 142zM55 154h28c1 0 2 1 2 2 0 1-1 2-2 2H55c-1 0-2-1-2-2C52 156 53 154 55 154zM68 341c-4 0-6-3-6-6s3-6 7-6 7 3 7 7S72 341 68 341zM126 322c0 2-1 3-3 3H14c-2 0-3-1-3-3V170c0-2 1-3 3-3h109c2 0 3 1 3 3V322z"/></svg>'

$('.codeSVG').append(svgIcon_coding);
$('.contentSVG').append(svgIcon_content);
$('.visualSVG').append(svgIcon_visual);
$('.researchSVG').append(svgIcon_research);
$('.uiSVG').append(svgIcon_ui);

//scroll animation control
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1500);
       return false;
      }
    }
  });


//mobile menu toggle
$('.menuToggle').click(function() {
  $('.nav').toggle();
  $('.nav').toggleClass('open');
});