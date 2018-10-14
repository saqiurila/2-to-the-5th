// cerner_2^5_2018
// Autofill Jira task label

var intervals = [], index = 0;

if (location.hostname == 'jira2.cerner.com') {
    $('#create-subtask').on('click', () => {
        waitUtilLoaded('#labels-multi-select', () => {
            $('#labels-multi-select .representation ul').append('<li class="item-row" role="option" aria-describedby="label-0" id="item-row-0"><button type="button" tabindex="-1" class="value-item"><span><span class="value-text">busteam</span></span></button><em class="item-delete" aria-label=" " original-title=""></em></li>')
            $('#labels').append('<option value="busteam" title="busteam" selected="selected">busteam</option>');
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