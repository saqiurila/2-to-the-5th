Shortens common maven and git commands.

I learned a bit about shell scripting while trying to set up ibus dev env with kamino, so in this practice project I used what I learned to make the commands we use everyday more concise.

## Usage
* Add <span>lazy.</span>sh to your .bashrc and give it an [alias](https://askubuntu.com/a/17538). e.g.,
  
   alias lz=/c/.../lazy-commands/lazy.sh
* Start using it by opening up the bash in any folder

## Commands
|        | Command        |  What it does  |
| :----: |:--------------:| -------------- |
| Maven  | lz -mi         | mvn clean install |
|        | lz -me         | mvn eclipse:eclipse |
| Git    | lz -gc --"msg" | Stage the changed files and commit |
|        | lz -gp --"msg" | Stage the changed files, commit and push |


