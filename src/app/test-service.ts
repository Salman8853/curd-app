import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Student } from "./student";

@Injectable({
    providedIn: 'root'
  })
export class TestService implements InMemoryDbService {

    constructor() { }

    createDb() {
        return {
            students:[
            {"id":1001,"name":"Adam","rollnumber":1234,"course":"B.Tech"},
            {"id":1002,"name":"John","rollnumber":1235,"course":"BCA"},
            {"id":1003,"name":"Ryan","rollnumber":1236,"course":"M.Tech"},
            {"id":1004,"name":"Sam","rollnumber":1237,"course":"MBA"},
            {"id":1005,"name":"Samual","rollnumber":1238,"course":"MCA"},
            {"id":1006,"name":"Miranda","rollnumber":1239,"course":"Nursing"}
    ]
  }
    }
}
 