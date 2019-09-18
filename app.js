$('input[type="number"]').change(function(){

    var priceRow = $(this).parent().next();

    priceRow.text('$'+Math.round($(this).val()*priceRow.attr('unit-price')*100)/100);

    updateTotal();
});

$('input[type="checkbox"]').change(function(){

    updateTotal();
    
});

function updateTotal(){

    var total = 0;

    $('input[type="checkbox"]:checked').each(function(){

        var priceRow = $(this).parents('tr').children('td[unit-price]');

        total += parseFloat(priceRow.text().replace('$',''))

    })


    $('#ad_promote_total_cost').text('$'+total);
}
