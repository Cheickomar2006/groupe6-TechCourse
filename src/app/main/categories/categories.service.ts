import { Inject, Injectable } from '@angular/core';
import { Category } from './category.model';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service'
import { PopupPage } from 'src/app/popup/popup.page';
import { PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private vues: string[];
  private categories: Category[] = [
    {
      id: "cat1",
      title: "Web Design",
      description: "First, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a web form.",
      imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGVzaWdufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      courses: [
        {
          id: "crs1",
          title: "HTML",
          description: "HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content. For example, different elements can describe text as a heading, paragraph, or list item.",
          imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRlc2lnbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          chapters: [
            {
              id: "chp1",
              title: "Hello World",
              content: "First, you'll start by building a simple web page using HTML. You can edit code in your code editor, which is embedded into this web page."
            },
             {
              id: "chp2",
              title: "Headline",
              content: "Over the next few lessons, we'll build an HTML5 cat photo web app piece-by-piece."
            }
          ]
        },
        {
          id: "crs2",
          title: "CSS",
          description: "CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.",
          imageUrl: "https://images.unsplash.com/photo-1603322199363-14380ec2ba31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNzc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          chapters: [
            {
              id: "chp3",
              title: "Color",
              content: "The property that is responsible for the color of an element's text is the color style property."
            },
             {
              id: "chp4",
              title: "Selectors",
              content: "With CSS, there are hundreds of CSS properties that you can use to change the way an element looks on your page."
            }
          ]
        }
      ]
    },
    {
      id: "cat2",
      title: "Algorithms",
      description: "While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you'll learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.",
      imageUrl: "https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWxnb3JpdGhtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      courses: [
        {
          id: "crs3",
          title: "Basic JS",
          description: "JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.",
          imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          chapters: [
            {
              id: "chp5",
              title: "Comment",
              content: "Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does."
            },
             {
              id: "chp6",
              title: "Declare",
              content: "In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object."
            }
          ]
        },
        {
          id: "crs4",
          title: "ES6",
          description: "ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.",
          imageUrl: "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGphdmFzY3JpcHR8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          chapters: [
            {
              id: "chp7",
              title: "Var and Let",
              content: "One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error."
            },
             {
              id: "chp8",
              title: "Scopes",
              content: "The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression."
            }
          ]
        }
      ]
    },
    {
      id: "cat3",
      title: "Front End Libraries",
      description: "Now that you're familiar with HTML, CSS, and JavaScript, level up your skills by learning some of the most popular front end libraries in the industry.",
      imageUrl: "https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdlYiUyMGRlc2lnbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      courses: [
        {
          id: "crs5",
          title: "Bootsrap",
          description: "Bootstrap is a front end framework used to design responsive web pages and applications. It takes a mobile-first approach to web development, and includes pre-built CSS styles and classes, plus some JavaScript functionality.",
          imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vdHN0cmFwfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          chapters: [
            {
              id: "chp9",
              title: "Responsive Design",
              content: "In the HTML5 and CSS section of freeCodeCamp we built a Cat Photo App. Now let's go back to it. This time, we'll style it using the popular Bootstrap responsive CSS framework."
            },
             {
              id: "chp10",
              title: "Center Text",
              content: "Now that we're using Bootstrap, we can center our heading element to make it look better. All we need to do is add the class text-center to our h2 element."
            }
          ]
        },
        {
          id: "crs6",
          title: "jQuery",
          description: "In 2006 when it was released, all major browsers handled JavaScript slightly differently. jQuery simplified the process of writing client-side JavaScript, and also ensured that your code worked the same way in all browsers.",
          imageUrl: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anF1ZXJ5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          chapters: [
            {
              id: "chp11",
              title: "Script Tags",
              content: "Now we're ready to learn jQuery, the most popular JavaScript tool of all time.Before we can start using jQuery, we need to add some things to our HTML."
            },
             {
              id: "chp12",
              title: "ApendTo",
              content: "jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element."
            }
          ]
        }
      ]
    }
  ];
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private popoverController: PopoverController
  ) { }
  getCategories(){
    return [...this.categories];
  }
  getOneCategory(id: string){
    this.saveElement("categories", id);
    return {...this.categories.find(category=>category.id==id)};
  }
  getOneCategoryCourse(id: string){
    this.saveElement("courses", id);
    return {...this.getOneCategory((id.split(" "))[0]).courses.find(course=>course.id==(id.split(" "))[1])};
  }
  getOneCourseChapter(id: string){
    this.saveElement("chapters", id);
    return {...this.getOneCategory((id.split(" "))[0]).courses.find(course=>course.id==(id.split(" "))[1]).chapters.find(chapter=>chapter.id==(id.split(" "))[2])};
  }

  //Lire les catégories, cours, chapitres déjà enregistrés
  readElement(key: string){
    return this.storage.get(key) || [];
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopupPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  //Enregistrer une catégories, cours ou chapitre recemment vue
  saveElement(key: string, id: string){
    this.vues = this.readElement(key);
    if(!this.vues.includes(id)){
      this.vues.push(id);
      this.storage.set(key, this.vues);
    }
  }

  resetStats(key: string){
    this.storage.set(key, []);
  }

  getStatsOf(key: string){
    return this.readElement(key).length;
  }
}
