// cerner_2^5_2018

$(function () {
    $('body').addClass('upside-down-img');

    if (location.hostname.indexOf('crucible') >= 0) {
        hideCrucibleEvenRowCode();

        $(window).on('hashchange', () => {
            hideCrucibleEvenRowCode();
        });
    } else if (location.href == 'https://github.cerner.com/') {
        location.href = 'https://github.com/';
    }
});

function hideCrucibleEvenRowCode() {
    const interval = setInterval(() => {
        if ($('table.inlineSource').length > 0) {
            $('table.inlineSource tr').each((i, val) => {
                if (!(i % 2)) {
                    $(val).remove();
                }
            });
            clearInterval(interval);
        }
    }, 50);
}