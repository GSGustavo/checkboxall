$checks = []

$('.check').on('change', function () {
    if ($checks.indexOf($(this).prop('id')) == -1) {
        $checks.push($(this).prop('id'))

        if ($('.check').length == $checks.length) {
            $(".check-all")[0].checked = true
        }
    } else {
        if ($('.check').length == $checks.length) {
            $(".check-all")[0].checked = false
        }
        $checks.splice($checks.indexOf($(this).prop('id')), 1)
    }
})

function changeAllCheckbox($bool) {
    $lengthChecks = $('.check').length

    for ($i = 0; $i <= $lengthChecks; $i++) {
        $('.check')[$i].checked = $bool
        if ($bool) {
            if ($checks.indexOf($('.check')[$i].id) == -1) {
                $checks.push($('.check')[$i].id)
            }
        } else {
            $checks.splice($checks.indexOf($('.check')[$i].id), 1)
        }
        $('.check')[$i]
    }

}

$(".check-all").on('change', function () {

    if ($(this)[0].checked) {
        changeAllCheckbox(true);

    } else {
        changeAllCheckbox(false);
    }

})
