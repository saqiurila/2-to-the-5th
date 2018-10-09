// cerner_2^5_2018
var actualCode = '(' + function() {
    var intervals = [], index = 0, default_hours = 8;

    if (location.href == 'https://mytime.cerner.com/') {
        waitUtilLoaded('#page1.open', () => {
            $('#copy').val($('#past_timesheets_for_copy .select__option').first().attr('value'));
            waitUtilLoaded('#current-timer.positive-text', () => {
                $('#copy_from_existing_timesheet').trigger('click');
                waitUtilLoaded('#page2.open #row_0', () => {
                    $('.inputhours').slice(1, 6).val(default_hours);
                    waitUtilLoaded('#current-timer.positive-text', () => {
                        calTotalHours($('.inputhours:eq(2)'));
                    });
                });
            });
        });
    }

    function waitUtilLoaded(selector, callback) {
        var i = index++;
        intervals[i] = setInterval(() => {
            if ($(selector).length > 0) {
                callback();
                clearInterval(intervals[i]);
            }
        }, 50);
    }
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
script.type='text/javascript';
(document.head||document.documentElement).appendChild(script);