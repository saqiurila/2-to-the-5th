// cerner_2^5_2018
// Adds keyboard shorcuts (ctrl+shift+<1 to 9>) to the work-related websites that I use frequently
// and opens them in a new tab

var pressed_keys = [];
var prefix_keys = new Set([17, 16]); // ctrl, shift
var urls = ["https://search.ucern.com/?WT.mc_id=ucerncom_searchheader",
            "https://jira2.cerner.com/secure/RapidBoard.jspa?rapidView=4370&view=planning.nodetail",
            "http://crucible06.cerner.com/viewer/",
            "https://github.cerner.com/financials-billing"];

var key_code_for_zero = 48;

$(window).keydown(function (e) {
    if (pressed_keys[pressed_keys.length - 1] !== e.which) {
        pressed_keys.push(e.which);
    }
}).keyup(function () {
    var meet_prefix = false;

    pressed_keys.forEach(function (key, i) {
        if (i < pressed_keys.length - 1) {
            meet_prefix = prefix_keys.has(key);
        }
    })

    var last_key = pressed_keys[pressed_keys.length - 1] - key_code_for_zero;

    // prefix is correct & num of keys pressed is correct & the number key doesn't exceed the num of urls
    if (meet_prefix && pressed_keys.length == prefix_keys.size + 1 && last_key <= urls.length) {
        window.open(urls[last_key - 1], '_blank');
    }
    pressed_keys = [];
});