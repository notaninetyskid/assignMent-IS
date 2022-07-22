import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { queryModel } from "./queryModel";

@Injectable({providedIn: 'root'})
export class helpSectionService {
    Queries = new Subject<queryModel[]>();
    
    
    private detailsOfUserQuery: queryModel[] = []
    
    queryViewer() {
        return this.detailsOfUserQuery.slice()
    }
    queryReciever(form: queryModel) {
        this.detailsOfUserQuery.push(form);
        this.Queries.next(this.detailsOfUserQuery.slice())
    }

}