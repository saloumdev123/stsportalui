import { Subscription } from "rxjs"

export interface Job {
    id:number,
    title:string,
    description:string
    employmentType:string,
    location: string,
    jobType: string,
    yearsExperiences: number,
    datePosted:string,
    subscription:Subscription
}
