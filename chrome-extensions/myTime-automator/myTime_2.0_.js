if (location.href == 'https://mytime.cerner.com/') {
    var actualCode = '(' + function () {
        var intervals = [], index = 0, default_hours = 8;
        const holiday = { project_code: 10083426, project_description: '[10083426] US Cerner Admin (Cerner)', activity_code: 5799, activy_description: '[5799] Holiday' };
        const holidays_2018 = new Set(['11/22', '11/23', '12/24', '12/25']);
        // const holidays_2019 = new Set(['01/01, '03/27', '07/04', '09/02', '11/28', '11/29', '12/24', '12/25']);

        waitUtilLoaded('#page1.open', () => {
            $('#copy').val($('#past_timesheets_for_copy .select__option').first().attr('value'));
            waitUtilLoaded('#current-timer.positive-text', () => {
                $('#copy_from_existing_timesheet').trigger('click');
                waitUtilLoaded('#page2.open #row_0', () => {
                    $('#row_0 .inputhours').slice(1, 6).val(default_hours);
                    waitUtilLoaded('#current-timer.positive-text', () => {
                        holiday_yay();
                    });
                });
            });
        });

        function waitUtilLoaded(selector, callback) {
            var i = index++;
            intervals[i] = setInterval(() => {
                if ($(selector).length > 0) {
                    callback();
                    clearInterval(intervals[i]);
                }
            }, 50);
        }

        function holiday_yay() {
            var date = $('.full-circle').not('.ontime-circle, .late-circle').first().parent().attr('id').split('-');
            var month = date[1], day = date[2];
            var days = $('#weekdays-display .date').slice(1, 6); //slice to remove weekend
            var current_holidays = [];
            for (var i = 0; i < days.length; i++) {
                var d = days[i].innerHTML;
                var m = d <= day ? month : month - 1;
                if (holidays_2018.has(m + '/' + d)) {
                    current_holidays.push(i);
                }
            }

            if (current_holidays.length == 0) return;

            $('#add-new-row').click();

            interval = setInterval(() => {
                if ($('.dialog-container').filter(function () {
                    return $(this).css('display') == 'block';
                }).length > 0) {
                    $new_row_dialog = $('.dialog-container').filter(function () { return $(this).css('display') == 'block'; });
                    $new_row_dialog.hide();
                    $new_row_dialog.find('.projectcode').val(holiday.project_code);
                    $new_row_dialog.find('.typeahead').text(holiday.project_description);
                    $new_row_dialog.find('.selectvalue').val(holiday.activity_code)
                    $new_row_dialog.find('.activity-select').text(holiday.activy_description);

                    var indexRow = $new_row_dialog.closest('.row').attr('id');
                    if ($('#' + indexRow + ' .typeahead').text().trim() != '') {
                        $('#' + indexRow + ' .project_code_selector').text($('#' + indexRow + ' .typeahead').text());
                    }

                    if ($('#' + indexRow + ' .activity-select').text().trim() !== '') {
                        $('#' + indexRow + ' .activity_code_selector').text($('#' + indexRow + ' .activity-select').text());
                    }

                    current_holidays.forEach((holi) => {
                        $('#' + indexRow + ' .inputhours')[holi + 1].value = default_hours;
                        $('#row_0 .inputhours')[holi + 1].value = '';
                    });

                    calTotalHours($('#' + indexRow + ' .inputhours:eq(2)'));
                    calTotalHours($('#row_0 .inputhours:eq(2)'));

                    clearInterval(interval);
                }
            }, 50);
        }
    } + ')();';
    var script = document.createElement('script');
    script.textContent = actualCode;
    script.type = 'text/javascript';
    (document.head || document.documentElement).appendChild(script);
}