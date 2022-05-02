import { Candidat } from './Candidat';

export class Offer {
    id: number;
    titleOffre: string;
    Salary: number;
    offerDescription: string;
    candidats: Candidat[];
    dateCreation: Date;

    constructor(titleOffre:string, salary: number,offerDescription: string,dateCreation:Date){
        this.Salary= salary;
        this.offerDescription= offerDescription;
        this.titleOffre = titleOffre;
        this.dateCreation=dateCreation;
    }
}
