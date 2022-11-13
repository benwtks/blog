---
layout: post
title: "Getting started with Android"
date: 2019-09-30
tags: [android]
summary: "An overview of the key things you need to know to start developing for android"
---

Recently, I began looking into Android Development and while there's already a lot of resources out there, I thought I would share what I've learnt for anybody just getting started. These are the key things you need to know to start developing for android.

## Development Environment

As you may know, Android apps are developed in Java and Kotlin, usually in the [Android Studio](https://developer.android.com/studio) IDE (based on Intellij idea from JetBrains).

### What is Kotlin?

Kotlin is a new language backed by JetBrains. It's developed to target the JVM, fully interpolating with Java to allow preexisting Java frameworks and libraries to work with it. Kotlin is statically typed and has modern features meant to improve development.

In [an interview](https://jrebel.com/rebellabs/jvm-languages-report-extended-interview-with-kotlin-creator-andrey-breslav/) with RebelLabs, Andrey Breslav, the lead language designer of Kotlin, said that
> One of the most important use cases for Kotlin is a big Java codebase whose developers want a better language: you can mix Java and Kotlin freely and migration can be gradual and doesn’t have to alter entire codebase.

The language is now [officially supported](https://android-developers.googleblog.com/2017/05/android-announces-support-for-kotlin.html) by Google and since 7 May 2019, it's their [preferred language](https://techcrunch.com/2019/05/07/kotlin-is-now-googles-preferred-language-for-android-app-development/) for android development.

### Kotlin or Java?

Kotlin is a great language with many features that will make your life easier, but you may be best starting with Java. Having searched around [some](https://www.reddit.com/r/Kotlin/comments/7w2lhy/i_want_to_learn_programming_in_kotlin_should_i/) [threads](https://www.reddit.com/r/androiddev/comments/9o40xe/java_vs_kotlin_for_absolute_beginner_android/) on reddit and a [few](https://discuss.kotlinlang.org/t/does-it-make-sense-to-learn-kotlin-with-no-prior-java-experience/1627/11) [other](https://www.quora.com/Do-I-need-to-learn-Java-before-learning-Kotlin-for-Android-development) forums, this seeems to be the recommendation for the time being.

Since Kotlin is still relatively new, the majority of online resources are in Java and you would have trouble finding a job that only requires Kotlin. While Google have said that Kotlin is their preferred language, Java isn't going anywhere and a lot of projects continue to use Java in their codebases. Some people have also suggested that learning Java first will strengthen your understanding of Kotlin and help you understand and appreciate some of its design decisions.

That being said, learning Kotlin will be an important step once you've got comfortable enough with Java and covered the basics of Android. It's the way android development is heading and will make your codebase a lot nicer. When you're ready, I found [some](https://youtu.be/6P20npkvcb8) [good](https://youtu.be/X1RVYt2QKQE) [talks](https://youtu.be/eNe5Nokrjdg) on YouTube that give an introduction and you can find some good guides and documentation on [Android Developers](https://developer.android.com/kotlin) and the [Kotlin website](https://kotlinlang.org/docs/reference/).

## Terminology

There's lots of terminology in Android but a lot of them are pretty straightforward and you don't need to learn them all at once. These are some of the main things

- Layout file - an XML document that describes a user interface in your app
- Resources - these are your layout files, icons, images and values (like the text and colour of a button). They're contained in the res folder and accessed using the Resources class
- Activity - represents a hierarchy of views (floating or full-screen)
- Context - an abstract class that gives global information about an app environment
- Listener - how you define the outcome of an event like clicking a button
- Package name - in Android apps, code is seperated by packages. Your app will have its own package, which will contain the Java/Kotlin code. The package for an app should be named with a reversed domain and the name of the project (e.g. com.example.appname)
- AndroidManifest - contains information about the app like the package name, permissions and included activities
- Android emulator - with a virtual device (AVD), this allows you to run your app on your computer during development. Alternatively, you can use a wired connection with an android device to test your app there.

## Resources

As mentioned earlier, a resource is a piece of content in your app. They define layout files, menus, colours, images, icons, etc. These are core components of any app and they’re stored in the res folder.

### Layouts

Layouts are XML documents that describe user interfaces in your app. They do this with Views, objects of the class that UI elements are built upon. For example, a TextView will let you show a piece of text in your UI. These View objects are often called Widgets and ViewGroup objects, which hold View objects, are often called "layouts".

You can define a layout file by writing the XML code yourself or using the visual Layout editor in your IDE. Elements can also be instantiated at runtime programatically. Using XML follows the 'seperation of concerns' design principle by keeping the UI of your app seperate from the code that describes behaviour.

To organise your widgets, you can use layouts such as the linear layout, relative layout, grid layout and web view. There's also the constraint layout which positions each element relative to other points, removing the need for hierarchies. You can set these constraints in the layout editor using the circles around the edge of widgets and the spacing values in the attributes window.


### Values

You can also define value resources such as strings, string arrays, booleans, colours, integers and more. Using values allows you to keep hardcoded values in a nicely seperated place from the logic and user interface of your app.

You could define a string for example in `res/values/strings.xml` as
```xml
<resources>
    <string name = "forgotPassword">Forgot Password?</string>
</resources>
```
### Drawables

A drawable is a graphic that can be drawn on the screen such as a bitmap or vector. For some drawables it may be necessary to provide different versions for different resolutions - this ensures that graphics still look sharp on different displays. To help with building these, Android studio has the [Image Asset Studio](https://developer.android.com/studio/write/image-asset-studio).

### Accessing resources

You can access resources using their id in xml attributes or in your Java using the Resource class. For instance, the forgotPassword string from earlier could be retrieved as the text of a button with `android:text="@string/forgotPassword"` or accessed using the getString method.

```Java
String forgotPassword = getString(R.string.forgotPassword);
```

These kind of methods exist for all the resources in your application. For example, the forgotPassword button could be retrieved using `findViewById`.

## Activities

An activity is where the user interacts with and can see the UI of an application. Each activity is a hierarchy of views (floating or full-screen) and is made with an Activity class which has a set layout file from the Resources. This Activity class can handle user interactions and start other activities. The first activity a user sees is usally called the Main Activty.

In a messenging app for example, you might have a "chats" activity for displaying a list of contacts along with a "chat" activity for displaying a conversion and allowing the user to send and recieve messages. These would be defined by Activity classes with layouts set to define the user interface. The initial "chats" activity would have a listener to check for user interaction and start the "chat" activity with the corresponding contact.

## Further Resources

There's lots of resources to go beyond what I've spoken about here. I've been using a combination of the [documentation](https://developer.android.com/docs) and [Treehouse](https://teamtreehouse.com) so far but there's also a lot of [courses from Google](https://developer.android.com/courses) that I plan to look into later on. The [Build your first app](https://developer.android.com/training/basics/firstapp) guide might also be useful. CodePath's [Android Cliffnotes](https://guides.codepath.com/android) would also be worth a look.
