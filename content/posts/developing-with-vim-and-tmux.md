---
layout: post
title: "Developing with Vim and Tmux"
date: 2020-02-05
tags: [tools]
summary: "An introduction to vim and tmux"
---

You've probably heard of vim. Maybe you've used it with SSH, maybe you opened it one time and couldn't quit or maybe you've heard people talking about it but figured it wasn't worth learning. Whichever it is, there's no denying that Vim is a very popular editor.

That said, it does have a steep learning curve. In this post, I'll give an introduction to vim and tmux and show how powerful they can be once you get up to speed. This ended up being quite a long post, but bear with me and you'll get a thorough crash course in Vim and a brief overview of Tmux.

## Why Vim?

Released in 1991 as an improvement on Vi (released in 1976), Vim has a lot of history. In fact, it's probably the oldest text editor you know with most popular editors being fairly recent. Sublime text was released in 2008, Atom in 2014 and VS Code in 2015. If we look at IDEs then Intellij, like eclipse, was released in 2001, and Xcode was released in 2003. So why use such an old editor?

While newer editors tend to focus on GUIs, Vim is typically used within a terminal, using shortcuts rather than the mouse. Why would we want that?

GUIs are straightforward and intuitive. They stop the user from having to remember thousands of commands and shortcuts, making computers more widely accessible to consumers. But with all their simplicity, they still offer a lot of power. Why would we take a step back? Why would we bother learning all these shortcuts?

Well, although Vim doesn't use a GUI, it too is very intuitive once you get started. You think of all the thousands of actions you take in your text editor and you wonder how many thousands of shortcuts you'll have to remember, but luckily Vim breaks things down. In Vim, we combine shortcuts like "d" for delete with numbers and shortcuts like "w" for words. For example, `d5w` will delete the next 5 words. Over time, these begin feeling very natural and before you know it you'll be using vim like it's second nature and your hands won't leave the keyboard once.

You probably already use shortcuts all the time, seeing that they're much faster than switching to the mouse. When programming, you're probably also using the terminal, recognising that while GUIs are powerful, the terminal is still very well suited for certain tasks. Similarly, vim will further save you time by keeping you on the keyboard and is very well suited to text editing.

Vim also has a lot of customisability. You can configure it to work however you want and really make it feel right for you. You don't like a shortcut? That's okay, just remap it. You want to add a shortcut for something else? Sure, add it to your config. You want some extra feature? Search and somebody has probably made a plugin for it. If not, Vim is very easy to extend and write your own plugins for.

Furthermore, whatever platform you're on, Vim probably exists for it. If you're using SSH to remotely access machines, this can be very useful. Even if you're not a server administrator, you may occasionally SSH into a server for a side project and knowing Vim will make your life a lot easier.

If you're going to spend hours in a program then you need it to work for _you_, not just the guy who designed it. You want to feel at home using it and like you have control over how it works. You want it to be fast. If you're editing files day in, day out, telling your editor precisely what to do, without leaving your keyboard and without giving it much thought, can make you feel much more productive.

## Modal editing

Unlike most editors, Vim uses "modes" to separate the different things you may want to do. The idea of switching between these may seem like a pain, but it works very well. Vim uses the following modes

- Normal mode - for navigating through the file, copying and deleting sections, etc.
- Insert mode - for typing into the file
- Visual mode - for highlighting or selecting particular parts of the file
- Ex mode - for performing a series of commands (you probably won't use this very often)

When you start Vim you will be in Normal mode and you can switch into insert mode with `i` to begin typing. When you're done you press `esc` to exit back to normal mode. From normal mode you can also press v to enter visual mode or Q to enter ex mode.

If you press `:` then you can begin typing commands. The difference between this and ex mode is that ex mode will allow you to enter multiple commands at once while `:` will exit out immediately afterwards, which is more commonly what you will want. The most important commands here are `q` for quit and `w`  for write. Like the shortcuts in normal mode, these can also be combined, for example `wq`  will write the file (save) and quit. If you want to search a file you can press `/` and if you want to find and replace you can use `:%s/textToFind/textToReplaceWith`

Ideally, you should spend most of your time in normal mode, entering Insert only to add text. If you're holding down backspace or using the arrow keys to move around, you're really missing the point of Vim. It may be a pain to learn all of these shortcuts but stick a note next to your computer or open a cheatsheet in your browser and you'll thank me later.

## The basics

As I briefly mentioned, Vim has different shortcuts which can be used together. These are broken down into commands, motions, text objects and navigation. These are just some of the most important ones to get started. If you want to find more then the [Vim wiki](https://vim.fandom.com/wiki/Vim_Tips_Wiki) has lots of content with a [tutorial page](https://vim.fandom.com/wiki/Tutorial) which you might find useful. The built in "vimtutor" can also be very good by teaching you all of these within vim where you can test them out for yourself.

### Commands

Firstly, we have commands such as
- `d` for delete
- `c` for change
- `y` for yank (copying text)
- `p` for paste (note Vim has a separate clipboard)
- `v` for visually selecting (this enters us into visual mode where we use motions and text objects)

### Motions

We can specify where we want to edit with motions such as
- `i` for in
- `t` for 'til
- `f` for find forward
- `F` for find backward

### Text objects

We can then combine these with text objects such as
- `w` for word
- `s` for sentence
- `p` for paragraph
- `t` for tags

### Navigation

Finally, we can navigate files in normal mode wih our arrow keys, or 'h', 'j', 'k' and 'l' as is usually recommended. Why would we use these instead of the arrow keys? Much like the rest of Vim, while this might take longer to get used to, it will in the end speed you up, keeping your hands on the home row.
- `h` for left
- `j` for down
- `k` for up
- `l` for right

These hjkl keys can also be used with our commands, motions and text objects. For example, c2j will let you change the next two lines. This change command is very useful, it deletes the specified area and enters you into insert mode ready to replace that text with something new. Alternatively, you can also simply use these with numbers to navigate big chunks at one time, e.g. "50j" will take you 50 lines down. 

You can also use `ctrl+y` to scroll the file up without moving your cursor and `ctrl+e` to scroll your file down without moving your cursor. If you want to move to the top of the file you use `gg` and `G` for the bottom. Moreover, you can use `H` to move to the first line of the current screen, `M` for the middle and `L` for the last. You can even use `%` to jump between brackets.

There's a lot to learn here but you can pick them up gradually. Once you're comfortable with one part, try learning another. You can look at [this page on the Vim wiki](https://vim.fandom.com/wiki/All_the_right_moves) for more tips. I've been using Vim for years and there's still lots of commands I forget or haven't learnt about, it's okay not to know everything.

### Bringing it all together

As you can see, there's a lot to learn here, but a lot of these shortcuts make a lot of sense, "d" for delete for example feels very intuitive. Once you get used to them, these can be combined in all different ways to do exactly what you want in one quick shortcut. The aim here is to be lazy, to manipulate files with minimal effort so we can spend less time worrying about editing the file and more time writing code.

The dot command makes this even more powerful, allowing us to repeat actions with '.'. Do you want to make some complicated change multiple times? Easy, combine the powerful commands with text objects and motions and use . to repeat your last shortcut however many times you want.

#### Examples
- `diw` - delete inner word will delete the word at your cursor
- `ci"` - change inside double quotes will delete the contents of a quote and put you into insert mode within the quotes ready to replace it with something else
- `dt;` - delete until semicolon will delete everything from your cursor up until the first semicolon
- `50j` - move 50 lines down
- `f=` - move the cursor to the next equals sign
- `y10l` - copy the next 10 characters to the left of your cursor
- `dis` - delete the sentence your cursor is currently on
- `dip` - delete the paragraph your cursor is currently on
- `yi(` - copy the contents of a pair of brackets

## Macros

The dot command can be great for repeating simple shortcuts, but when you want to repeat a series of shortcuts you might want something more powerful. For this, Vim has macros. Macros are simple to record and you can store several in different 'registers'. To begin, enter 'q' in normal mode, followed by a letter or number. This letter or number is the name of the macro and using that will store the macro in that 'register'. Use the shortcuts you want to repeat and press 'q' again to finish recording. To use your macro press '@' followed by your register.

When recording macros, you should be careful to keep things general enough to work for every instance where you wish to repeat it. For instance, if you want to perform some manipulation several times on different lines, you may want to make some change from the start of the line at some point in the macro. To do this, you could move back some number of words, e.g. 5b, however this may not work for all of your lines. If this is the case, you need to use ^ to navigate to the start of the line exactly no matter where the cursor is in relation to the line.

I found [this video](https://youtu.be/5iYA1S-p7es) which gives a good example of using macros.

## Plugins

Without plugins Vim may lack a lot of the features you've come to expect. Luckily, Vim is incredibly customisable and you can configure it with [all different plugins](https://vimawesome.com/) to get it how you want. To begin with, it's best to keep your config minimal but as you gradually add plugins, you can add a lot of functionality. This is controlled in your config file, `.vimrc` for vim and `init.vim` for Neovim (I'll explain what this is later).

To add plugins, it's a good idea to use [pathogen](https://github.com/tpope/vim-pathogen) which is a plugin itself which manages your other plugins. Once you've got pathogen, adding, removing and updating plugins becomes very straightforward. The [vim-plug](https://github.com/junegunn/vim-plug) plugin also works well and is what I now use.

Personally I use the following plugins
- [NerdTree](https://github.com/preservim/nerdtree) - This adds a file explorer like you've come to expect in more modern editors like VS code
- [Vim Airline](https://github.com/vim-airline/vim-airline) - This adds a bar at the bottom of your files, giving details like your filename, git repo, file format, encoding and more. This also makes it which mode you're in with distinct colours
- [Vim Devicons](https://github.com/ryanoasis/vim-devicons) - Adds icons to make vim more modern. Especially good with nerdtree and vim airline
- [Tmuxline](https://github.com/edkolev/tmuxline.vim) - This sets tmux to match vim airline for a consistent theme
- [Vim tmux navigator](https://github.com/christoomey/vim-tmux-navigator) - This lets you seamlessly switch between vim and tmux splits
- [fzf.vim](https://github.com/junegunn/fzf.vim) - Very powerful fuzzy search. This is an unusual plugin in that fzf is really a terminal program but this plugin will set it up to work nicely in Vim. Alternatively, you can use [CtrlP](https://github.com/ctrlpvim/ctrlp.vim) which is a bit simpler.
- [Vim airline themes](https://github.com/vim-airline/vim-airline-themes) - Nice themes for vim airline
- [base16](https://github.com/chriskempson/base16) - Nice themes for the editor
- [Vim fugitive](https://github.com/tpope/vim-fugitive) - Good git integration
- [Vim surround](https://github.com/tpope/vim-surround) - Adds another 'motion' to specify "surround"
- [Vim rails](https://github.com/tpope/vim-rails) - Must have plugin for Ruby on Rails in Vim
- [Vim commentary](https://github.com/tpope/vim-commentary) - Easily comment and uncomment lines
- [vim-mundo](https://github.com/simnalamburt/vim-mundo) - A nice way of moving through your history (vim saves a lot of history for you)
- [gv](https://github.com/junegunn/gv.vim) - A really nice git log plugin to use with Vim-fugitive
- [vimwiki](https://github.com/vimwiki/vimwiki) - Nice notetaking in vim. This can be combined with [bullets.vim](https://github.com/dkarter/bullets.vim) and [vim-table-mode](https://github.com/dhruvasagar/vim-table-mode).
- [which-key](https://github.com/liuchengxu/vim-which-key) - Shows keybindings as you type them. This is really useful if you have lots of commands or mappings that you want to use but keep forgetting them. For example, I have it setup for git, opening files, switching and killing buffers and more. I could do without it, but this saves me checking my init.vim everytime I forget the name of a command for a plugin and helps me remember what features I've put in my config. I uploaded [my mappings](https://gist.github.com/benwtks/885f5d137230e363e3e9b30a03f450a7) to gist if you're interested.

As you can see, there's a lot of plugins out there and if you want a nice editor that compares to the likes of VS code then you will need to add these to build up features. The benefit of this is that you can add features as you want, building up a more and more complex editor as you learn how to use those features. This also results in a config that feels very personal and is exactly how you want it. You can even write your own plugins without much hassle.

## Using Neovim

Neovim is a new take on Vim which adds extra features and refactors it for the 21st century. It's simple enough to switch to since everything in vim works in neovim, including your config file (.vimrc or init.vim in Neovim's case). Neovim builds on vim however to add extra functionality. You can alias 'vim' to start 'nvim' and unless you search for the extra features you won't even notice the change, neovim is still vim (even if it's technically a different program, they're as close as could be).

This works a lot nicer than standard Vim, with a built in terminal, asynchronous processes (you can do multiple things at once), faster loading of plugins, easier plugin development, better defaults and a refactored codebase to keep Vim easy to maintain going forward.

I've been using neovim for the last year and had a great experience with it. I would definitely recommend it.

## Tmux

At this point you might be wondering what tmux is and where it comes in. Tmux allows you to hold different terminal windows together with splits and windows (like tabs) into separate sessions. You might be wondering why you would use this rather than tabs in your terminal. There's a few reasons for this, the main ones being that it's a lot more powerful and brings vim and your terminal together into a much more cohesive environment (although neovim has a terminal, I still prefer to use tmux).

For instance, this blog is developed with Jekyll which means my posts are written in markdown files and compiled to a static website which is then published on the server. As I'm writing this, I need a program to edit my posts in, I need a command prompt for my version control with git and I need to run the jekyll local server with `jekyll serve` to regenerate my website each time I make a change and let me preview this on localhost. This is where tmux comes in handy, giving me windows for vim, git and my localhost server. If I want to switch to something else, I can easily quit out of the session to return to a simple command prompt and rejoin the session to return right where I was before. I can even detach from the session and the terminal window and my tmux session will persist for later if I don't quit it.

If I was working on multiple things, I may want different tmux sessions at one time. This way, I can detach out of my blog session and open a new one for coursework for example and each time I detach from one and enter the other, they will keep their state. If I wanted, I could also save these sessions, shutdown my computer and restart them later to resume everything exactly how it was. Furthermore, if I always set up a session in a particular way then I can write [small scripts](https://gist.github.com/benwtks/97438a84405d34e84d3c201ab2f3c16c) to start and configure sessions, give these short aliases in my shell and start working very quickly without wasting time opening all my windows.

Another great feature is splitting windows side by side. This allows you to really configure your session as you want and when you switch between windows, those splits will remain in place. Paired with [the plugin](https://github.com/christoomey/vim-tmux-navigator) I mentioned earlier, you can even switch between these splits and splits of files in vim with the same commands, bringing the whole setup together to feel a lot more coherent.

The bar at the bottom of tmux can also be very useful, highlighting a window's name if something happens (say if your code finishes compiling) and allowing for lots of customisation. You can configure this to tell you your current spotify song, the weather or even the number of unread emails you have.

### Vim emulators

I've talked about a lot so far, but I thought it would be worth mentioning the various emulators out there. Sometimes you simply can't use vim and sometimes it just doesn't make sense for a project. If you're developing a iOS app for example then you should probably stick to Xcode and likewise if you're writing Java then Intellij might be a better option. You can add plugins to Vim to bring some of these platform specific features but you're probably best sticking to what has been fine tuned for it. Even if this is the case, you may wish to use and learn about vim, or you may be so used to using vim that you struggle to switch back to normal editors without adding random characters into your files where you try to run shortcuts out of muslce memory.

In this situation, vim emulators can be just what you need. I've found some which are poor and others which work a bit better but they exist for pretty much any editor or IDE you could think of. For example, I personally use the vim emulator for Intellij all the time. If this is what you want, simply search for an emulator plugin and it'll probably exist.

## Conclusion

Although you might be very happy with your current text editor, the combination of vim and tmux can be very good and is worth a try if you're interested. I would recommend you watch [this talk](https://youtu.be/5r6yzFEXajQ) which talks about the setup and explains its benefits and power in much more detail than I could here. It's also worth looking at the [vim wiki](https://vim.fandom.com/wiki/) that I mentioned earlier as this has a lot of good detail to learn more. Vim has a tough learning curve but it's not as complicated as you might think. Once you get used to it, it might just become your favourite editor.
