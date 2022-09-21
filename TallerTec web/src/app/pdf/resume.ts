
import { Component, OnInit } from '@angular/core';
export class Resume {
    profilePic: string;
    name: string;
    address: string;
    contactNo: number;
    email: string;
    socialProfile: string;
    experiences: Experience[] = [];
    otherDetails: string;
    skills: Skill[] = [];

    constructor() {
        this.experiences.push(new Experience());
    }
}

export class Experience {
    employer: string;
    jobTitle: string;
    jobDescription: string;
    startDate: string;
    experience: number;
}

export class Education {
    degree: string;
    college: string;
    passingYear: string;
    percentage: number;
}

export class Skill {
    value: string;
}