import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  company = [{
    name : 'TCS',
    img  : '../assets/tcs.png',
    vacancy : 'software testing ',
    keyword : 'E learning,Publishing,Content management,Scrum,Instructional design,Agile,Interpersonal skills'
  },
  {
    name : 'Dell',
    img  : '../assets/dell.png',
    vacancy : 'bpo',
    keyword : 'Digital Marketing PPC Expert SEO SMO Googleadword Social media marketing'
  },
  {
    name : 'Honda',
    img  : '../assets/honda.png',
    vacancy : 'production manager',
    keyword : 'Content Writing,Journalism,News research,Full time, Part time, Temporary, Contract, Internship, Commission, Volunteer, Fresher, Walk In'
  },
  {
    name : 'Thirdware',
    img  : '../assets/thirdware.jpg',
    vacancy : 'Software Developer',
    keyword : 'BDE- Sales Marketing BBA fresher MBA Fresher Business Development Business Development Executive'
  },
  {
    name : 'intel',
    img  : '../assets/intel.png',
    vacancy : 'Senior Analyst',
    keyword : 'Nangil Anand Foundation, Public Relation, ngo'
  },
  {
    name : 'Toyoto',
    img  : '../assets/toyoto.jpg',
    vacancy : 'Supervisor',
    keyword : 'BDE- Sales Marketing BBA fresher MBA Fresher Business Development Business Development Executive'

  }
];
application=[];

addapplication(data){
  this.application.push(data);
}

}
