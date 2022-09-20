import { Component, OnInit} from '@angular/core';
import pdfMake from "pdfmake/build/pdfMake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { NgModule } from '@angular/core';
import {Resume, Experience, Education, Skill} from "./resume"

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  resume = new Resume;

  constructor() {
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
    if (!this.resume.experiences || this.resume.experiences.length === 0) {
      this.resume.experiences = [];
      this.resume.experiences.push(new Experience());
    }
   }

  ngOnInit(): void {
  }

  createPdf(){

    const pdfDefintion: any = {
      content: [
        {
          text: "Hola mundo"
        }
      ]
    }
    const pdf = pdfMake.createPdf(pdfDefintion);
    pdf.open();
  }


  addExperience() {
    this.resume.experiences.push(new Experience());
  }

  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          text: 'RESUME',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: this.resume.name,
              style: 'name'
            },
            {
              text: this.resume.address
            },
            {
              text: 'Email : ' + this.resume.email,
            },
            {
              text: 'Contant No : ' + this.resume.contactNo,
            },
            {
              text: 'GitHub: ' + this.resume.socialProfile,
              link: this.resume.socialProfile,
              color: 'blue',
            }
            ],
            [
              // Document definition for Profile pic
            ]
          ]
        }],
        styles: {
          name: {
            fontSize: 16,
            bold: true
          }
        }
    };
  }

  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }

}
