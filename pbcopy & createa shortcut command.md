# Record

background
> I want to open to icloud document on terminal. The path is too long to type. So I want to create a shortcut command.

## terminal operation explanation

`pwd | pbcopy`

> pwd: print working directory
> pbcopy: copy the output to clipboard
> |: pipe, pass the output of the left command as the input of the right command

## how to create a shortcut command

1. open terminal
2. type `vim ~/.bash_profile`
3. press `i` to enter insert mode
4. type `alias icloud='cd /Users/username/Library/Mobile\ Documents/com~apple~CloudDocs'`
5. press `esc` to exit insert mode
6. type `:wq` to save and exit
7. type `source ~/.bash_profile` to make the change take effect