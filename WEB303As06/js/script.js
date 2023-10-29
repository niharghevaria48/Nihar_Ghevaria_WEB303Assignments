//Nihar Ghevaria
//0806797

//For accordian 1
$('.accord1-panel').hide();
$('.accord1-label').on('click',function(e){
    $('.tab-panel').slideUp();
    $('.accord2-panel').slideUp();
    e.preventDefault(); //prevent default function
    let $this = $(this);  //button that we are working for
    $('.acoord1-panel').each(function(){
        //make sure  that showing class is removed - no
        $this.removeClass('showing');

    })
    //showing the panel that is for the button that we calling
    
    $this.toggleClass('showing');
    $this.next().slideToggle();


    //hide other panel

    $('.accord1-panel').not($this.next()).slideUp();
});


//For accordian 2
$('.accord2-panel').hide();
$('.accord2-label').on('click',function(e){
    $('.tab-panel').slideUp();
    $('.accord1-panel').slideUp();
    e.preventDefault(); //prevent default function
    let $this = $(this);  //button that we are working for
    $('.acoord2-panel').each(function(){
        //make sure  that showing class is removed - no
        $this.removeClass('showing');

    })
    //showing the panel that is for the button that we calling
    
    $this.toggleClass('showing');
    $this.next().slideToggle();


    //hide other panel

    $('.accord2-panel').not($this.next()).slideUp();
});

//Tabs
$('.tab-panel').hide();

$('#tab1').show(); //default tab 1 show
$('.tab-list li').on('click',function(e){
    $('.accord1-panel').slideUp();
    $('.accord2-panel').slideUp();
    e.preventDefault();
    //remove the active class
  $('.tab-list li').removeClass('active');
  //hide the panel
  $('.tab-panel').hide();

  //make li that is active
  $('.tab-panel').addClass('active');
    let panel=$(this).find('a').attr('href');
    $(panel).show();
    return false;
})