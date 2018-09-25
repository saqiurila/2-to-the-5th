# Music Generator

[Live Demo.](https://saqiurila.github.io/projects/music-generator/)

Randomly generates music! As I was doing research on composition, I thought it might be nice to have a program like this to spark something in your head.

* **Melody:** C Major (C4 - C5)
* **Harmony:** each note in melody has 3 harmonic notes defined. Each harmonic note has a 30% chance of being played.
* **Speed:** one note per 300 - 800 ms.
* **Rest:** there is a 15% chance that the note is a rest.

Unfortunately, 32 lines of code are not enough to generate a very "pretty" or less robotic song. In the future, the followings could be added:
* Generate random phrase length and add rests at the end of each phrase.
* Make the chance of steps higher than skips.
* Avoid too many notes or rests in a row.
* When the note is the tonic, increase the chance of rest for the next interval; when the note is the leading tone, increase the chance of the next note being the tonic, etc.
* Other music theory stuff such as chord progression and beat patterns.