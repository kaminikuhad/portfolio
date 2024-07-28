import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

 aboutData: any = {
  about:{
    aboutMe:'About Me',
    aboutHeading:'Hello, I am Kamini Kuhad, and I work as a front-end developer with the Angular Framework.',
    aboutDescription:'Versatile Front end developer with 8 year of experience designing,developing and managing internal sites and internal frameworks. Especially in Angular and responsive design.'
  },
  technology:{
    technology:'Technologies and Skills',
    skills:['HTML','CSS','JavaScript','Angular 2+']
  },
  process:{
    process:'Work Process',
    workProcess:['Research',
      'Design',
      'Codeing',
      'Launch']
  }
 }
resumeurl = "https://docs.google.com/document/d/1qw0zNhtpkxOI3hBEcDksyeqezzD_kPak/edit?usp=sharing&ouid=109723305849279733553&rtpof=true&sd=true"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'JAVASCRIPT',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'HTML5',
      'progress': '75%'
    },
    {
      'id': '4',
      'skill': 'CSS',
      'progress': '75%'
    },
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2011 - 2015',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Completed B.TECH in Computer Science and Engineering with 72.3%.`,
      'institution': 'INDIRA GANDHI INSTITUTE OF TECHNOLOGY (Formally known as IGDTUW), DELHI'
    },
    {
      'id': '2',
      'from_to_year': '2010 - 2011',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': ' A.V.N sr. sec. School (CBSE), Faridabad',
      'info': `Completed my high school with 70.4%.`
    },
    {
      'id': '3',
      'from_to_year': '2008 - 2009',
      'education': 'Secondary  School',
      'stream': '',
      'institution': ' Faridabad Model School (CBSE)',
      'info': `Completed my Secondary school with 72.2%.`
    }
  ];
  exprienceData: any = [
    {
      id: 3,
      company: 'IBM',
      location: 'Gurugram',
      timeline: 'September 2021 to Present',
      role: 'Senior Software Developer',
      work: ['Technologies : Angular 14, HTML5, CSS, Git Version Control','Working as a Front End developer .Responsible for handling the UI in Angular and Manageing the Functionality of UI',
      'Contributed on developing the review page with different cards and pay section for the application.']

    },
    {
      id: 2,
      company: 'Wipro Technologies',
      location: 'Pune',
      timeline: 'March 2021 to September 2021',
      role: 'Software Developer',
      work: ['Technologies : Angular 9, HTML5, CSS, Git Version Control',
      'Worked on the web application built in Angular for banking domain .']
    },

    {
      id: 1,
      company: 'Accenture',
      location: 'Gurugram',
      timeline: 'Feburary 2016 - March 2021',
      role: 'Assosiate Application Developer',
      work: ['Technologies : Angular 6,HTML5, CSS, Git Version Control',

  'Project 1 : Worked on creating the user and admin dashboards. Display the list in the user interface and filter the results based on different criteria. worked on several features, including the ability to download Excel files, validate forms, filter data, and upload files.',
  'Project 2 : Contributed on developing the admin dashboard with different charts and insights for the application.',
  'Project 3 : Worked on UI development and Unit test cases',
  'Project 4 : Worked on IBM Webshere Tool which is used for conversion JSON Format to XML Format.']
  
    },


  ]

 contactData: any={
  phone:{
    heading:'Phone',
    number:'+91 8384033404',
  },
  email:{
    heading:'Email',
    id:'kamini.kuhad09@gmail.com'
  },
  contactHeading:'Send us a message',
  contactDescription:'If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It is my pleasure to help you.'
 }
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  contact(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.contactData;
  }
  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

 
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  about(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.aboutData;
  }

}
