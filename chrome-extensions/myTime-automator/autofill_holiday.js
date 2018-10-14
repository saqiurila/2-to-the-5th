// cerner_2^5_2018
// Add holiday time code to timesheet if there are holidays in the current week

const holiday = { project_code: 10083426, project_description: '[10083426] US Cerner Admin (Cerner)', activity_code: 5799, activy_description: '[5799] Holiday' };
const holidays_2018 = new Set(['11/22', '11/23', '12/24', '12/25']), default_hours = 8;
// const holidays_2019 = new Set(['01/01, '03/27', '07/04', '09/02', '11/28', '11/29', '12/24', '12/25']);

function holiday_yay() {
    var date = $('.full-circle').not('.ontime-circle, .late-circle').first().parent().attr('id').split('-'); // Date of the last day of this timesheet
    var month = date[1], day = date[2], current_holidays = [], days = $('#weekdays-display .date').slice(1, 6); //slice to remove weekend

    // Get the holidays of current week
    for (var i = 0; i < days.length; i++) {
        var d = days[i].innerHTML, m = d <= day ? month : month - 1;
        if (holidays_2018.has(m + '/' + d)) current_holidays.push(i);
    }

    if (current_holidays.length == 0) return;

    $('#add-new-row').click();

    interval = setInterval(() => {
        if ($('.dialog-container').filter(function () { return $(this).css('display') == 'block'; }).length > 0) {
            // Add holiday time code to <input> so that it will be submitted with the timesheet
            $new_row_dialog = $('.dialog-container').filter(function () { return $(this).css('display') == 'block'; });
            $new_row_dialog.hide();
            $new_row_dialog.find('.projectcode').val(holiday.project_code);
            $new_row_dialog.find('.typeahead').text(holiday.project_description);
            $new_row_dialog.find('.selectvalue').val(holiday.activity_code)
            $new_row_dialog.find('.activity-select').text(holiday.activy_description);

            // Display holiday in the new row
            var indexRow = $new_row_dialog.closest('.row').attr('id');
            if ($('#' + indexRow + ' .typeahead').text().trim() != '') $('#' + indexRow + ' .project_code_selector').text($('#' + indexRow + ' .typeahead').text());
            if ($('#' + indexRow + ' .activity-select').text().trim() !== '') $('#' + indexRow + ' .activity_code_selector').text($('#' + indexRow + ' .activity-select').text());

            // Set the hour of each holiday in that week to 8
            current_holidays.forEach((holi) => {
                $('#' + indexRow + ' .inputhours')[holi + 1].value = default_hours;
                $('#row_0 .inputhours')[holi + 1].value = '';
            });

            // Trigger total hour calculation of the first row and the holiday row 
            calTotalHours($('#' + indexRow + ' .inputhours:eq(2)'));
            calTotalHours($('#row_0 .inputhours:eq(2)'));

            clearInterval(interval);
        }
    }, 50);
}