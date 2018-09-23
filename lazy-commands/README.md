
# Lazy Commands
Shortens/simplifies some commands.

I learned a bit about shell scripting while trying to set up ibus dev env with kamino, so in this practice project I used what I learned to make the commands we use everyday more concise.

## Usage
* Add the shell script to your .bashrc and give it an [alias](https://askubuntu.com/a/17538). e.g.,
  
   alias lz=/c/.../lazy-commands/lazy.sh
* Start using it by opening up the bash in any folder

## Commands
|        | Command        |  What it does  |
| :----: |:--------------:| -------------- |
| [lazy.sh](lazy.sh)| lz -gc --"msg" | Stage the changed files and commit |
|        | lz -gp --"msg" | Stage the changed files, commit and push |
|        | lz -mi         | mvn clean install<sup>[1]</sup> |
|        | lz -me         | mvn eclipse:eclipse<sup>[1]</sup> |
| [kill_port.sh](kill_port.sh) | kill --<port_numer> | Kill the process listening on a port  |

<br>
[1] Simple commands can be given aliases directly