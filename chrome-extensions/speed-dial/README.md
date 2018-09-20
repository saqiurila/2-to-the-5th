# Speed Dial
Adds keyboard shorcuts to the work-related websites that I use frequently. The shortcuts will open the mapped websites in a new tab.

The shorcuts are `Ctrl + Shift + 1-9`, where each number from 1 to 9 maps to one url. I have 4 mappings defined for myself:

| Number |  Mapped Website  |
|:------:| ---------------- |
| 1      | uCern Search page |
| 2      | My team's Jira board |
| 3      | Crucible06 |
| 4      | My team's GitHub Org |

## How to Use
* Clone the project to your device.
* Go into speed-dial.js and put your favorite urls in `urls`. You can put as many as 9 urls. <sup>[[1]](#footnote1)</sup>
* Go to the extension page (chrome://extensions/) in your chrome, click on "Load unpacked" on the upper left corner and select the project folder.
* The shortcuts will only work in newly opened webpages after you import the extension, so go to any website and then try them out.

<br>
<a name="footnote1">[1]</a> But honestly I think more than 9 urls could be added as long as you know the keys on the keyboard whose key code are greater than the key `9` and their combinations with ctrl+shift don't conflict with some existing shortcuts.
