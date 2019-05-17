$('a[href*="#pizzas "]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

$('input[name="pizzasize"]').change(function() {
    $('#money').text(this.value);
})

$('input[name="pizzasize2"]').change(function() {
    $('#money2').text(this.value);
})

$('input[name="pizzasize3"]').change(function() {
    $('#money3').text(this.value);
})


$('input[name="pizzasize4"]').change(function() {
    $('#money4').text(this.value);
})