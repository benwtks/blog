---
layout: post
title: "Getting up to speed with IntelliJ"
date: 2020-04-07
tags: [development]
summary: "Tips and tricks to take advantage of IntelliJ"
---

IntelliJ is a great, powerful IDE and if you utilise it well, you can get a lot out of it. It has powerful features that I use all the time and I thought I would share some of them here. These really improve your experience so it's worth putting the time into picking them up.

Note that all of this applies to both IntelliJ Idea and Android Studio. A lot of these will apply to other IDEs from Jetbrains as well since these are all related pieces of software.

## Debugging

The first of these is probably the most obvious, the [debugging tools](https://www.jetbrains.com/help/idea/debugging-code.html) - these kind of debugging tools are in most IDEs but that doesn't make them any less useful. If you're looking for a bug or trying to better understand the logic of a program, these are incredibly helpful and powerful.

I found [this video](https://youtu.be/1bCgzjatcr4) and I recommend you give that I watch. IntelliJ allows you to place breakpoints and run your program to run until those points. From there, you can inspect the line it paused at, look at the variables in memory and the stack and even slowly step through functions to see how things change.

One powerful part of this are the watches. Here, you can write a piece of code and then see how that changes, without putting it into the source code itself. You can even set conditional breakpoints that only stop if something in particular happens.

To set a breakpoint, click in the gutter of the file and then press the bug icon next to the normal run button to start debug mode. When you run in debug mode, a special debugging tab will pop up at the bottom.

Say goodbye to print statements and speed up your development! (Print statements still have a place sometimes but this is better in most situations)

## Ctrl + Click

The next feature to look at is the ctrl click functionality. This allows you to find where a variable, method, class or whatever it may be was first defined. From where it was first defined, it lets you skip to places it's used. Simply ctrl click on the name of the object and it'll turn into a link.

This is useful to step through code when debugging, following a logical path of execution. It really allows you to understand and explore a program, which is also useful in refactoring to tidy up logic, or in exploring a new project that you haven't seen before.

## Quick definition

Another feature that I use all the time is the quick definition. Similar to the previous feature, this will let you see the definition of a piece of code, but this will show it in a small window rather than opening the entire file. This is a less intrusive way to peek at the definition quickly. Simply put your cursor on the object and press `ctrl+shift+i`.

## Version Control

Version control is vital in a lot of projects so it's important to have a comfortable way to use it. Many, myself included, like to use it on the terminal, but the vcs features in IntelliJ can be very useful. Even if you're more than comfortable with the cli, it's worth giving a try.

There's a lot of powerful stuff with IntelliJ's version control and [this video](https://youtu.be/MaQnpCaiop0) is a great overview of everything you can do with it.

### Changelists

You can make several ["changelists"](https://www.jetbrains.com/help/idea/managing-changelists.html) which act as different staging areas. This can be useful if you make a big set of changes and want to commit each bit separately, letting you split the changes up to commit separately, before you start making those commits.

### Switching branches

You can also [switch branches](https://www.jetbrains.com/help/idea/manage-branches.html) more conveniently, with smart checkout and a look at which branches exist remotely and whether these have any remote changes to pull.

### Commit history

The commit history is nicely shown as well, with a conviently searchable log. This even has a nice diagram showing the different merges of each branch!

From a commit, you can see the details straight away and see which files were changed. If you open one of these, it'll show the changes from that file in that specific commit.

From this log tab, reverting changes is just a click away and this includes reverting changes for specific files in a specific commit.

## Decompile!

I couldn't believe [this](https://youtu.be/znhW69pM-7U) was a thing when I found it and I'm still impressed by it. It works like magic and is incredibly useful for looking at code from libraries or other sources where the code has already been compiled!

With a few clicks, you can easily see what the code you're using might have looked like before compilation. Combined with the other features I mentioned for looking at the definition of a piece of code, this is very powerful and makes the `ctrl+shift+i` functionality even more useful, serving as a quick means of documentation.

## Quick documentation

Talking of accessing documentation quickly, there's another nice [feature](https://www.jetbrains.com/help/idea/viewing-reference-information.html#inline-quick-documentation) in IntelliJ if documentation does exist for the piece of code you're looking at. This works similarly to the quick definition feature, but instead of showing you code it will show you the relevant documentation. You can access this with `Ctrl+Q`.

## Alt + Enter

You've probably used this before. IntelliJ is very advanced and can even suggest changes to fix or refactor code with the little light bulb that you might have seen appear on the side. If you press alt+enter you can accept this change quickly and easily! This is a must have shortcut for anybody using IntelliJ.

You can even use this on code that doesn't have an error, warning or suggestion. This will allow you to make changes that aren't objectively better from IntelliJ's point of view, but that you may want to perform.

## Next error

IntelliJ is great at giving the errors, warnings and suggestions that I spoke about with the previous feature. Something that works great with this is the [next error](https://www.jetbrains.com/help/idea/viewing-reference-information.html#inline-quick-documentation) feature with `F2`. As the name suggests, this will take you straight to the next error in the current file.

## Comment line

This is great for quickly commenting out a line to toggle it. I use this all the time when debugging, just press `cctrl+\` and the code will quickly comment out. Press it again on a comment and it'll uncomment.

## Extract

This is a refactoring tool to quickly extract variables, parameters, methods and more! These are steps you should be considering when refactoring but might avoid due to the time it takes and risk of causing errors and bugs. With these features, you can perform such refactors easily without the worry of breaking anything. You can find these under the refactor option in the right click menu on code.

If you extract a variable for example (`ctrl+alt+v`), it'll move the value to a variable and replace all uses with that variable.

You can extract a method with `ctrl+alt+m` and you should be using this all the time when refactoring. Methods should be small and simple, specific to one part of the problem. Often when we're refactoring, we're moving logic around and simplifying logic. By extracting methods, we can break code down and then refactor or even remove parts afterwards. This makes a great workflow and you can see more about it with [this video](https://youtu.be/1a_tCXDivZ4).

## Rename refactor

Another feature with refactoring is the [renaming features](https://youtu.be/_Fv7Bn9qwkI). These are the most basic refactoring tools you can have and common throughout editors and IDEs, but still important to point out for anybody new to refactoring. With this, you can rename something and have all its uses update accordingly.

IntelliJ has a nice shortcut with `shift+f6` to rename a piece of code or file name.

## Fold code

You can also [fold sections of code](https://www.jetbrains.com/help/idea/code-folding-settings.html), which can make it quicker to explore a file. Use the arrows in the gutter to fold methods and the shortcuts `ctrl+shift++` and `ctrl+shift+-` to fold and expand all methods.

## Structure overview

Open the structure tab to see all the methods and instance variables in your class. This can be filtered and has nice icons to visually show the type and access modifier of said piece of code.

## Generate UML diagrams

If you want to look at the structure of your code in more detail, looking at the structure of different files all together and how those relate, IntelliJ allows you to use UML. With [this feature](https://www.jetbrains.com/help/idea/class-diagram.html), you can right click on a file (or use the shortcut `ctrl+alt+shift+u`) to quickly generate a UML diagram. This is handy if you're working with a large project or one that you haven't seen before.

## Conclusion

There's a lot of great tools in IntelliJ and I've really only scratched the surface here. IntelliJ is an incredibly complex and advanced IDE with a lot of power hidden away. When you explore it and look into all it can do, you'll be amazed how much it can improve your workflow. I encourage you to try out these features and have a look around to see what else you can find.
