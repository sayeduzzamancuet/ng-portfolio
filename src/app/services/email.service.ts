import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  constructor(public httpClient:HttpClient) { }
  sendMail(): Observable<any>{
    let API_URL='https://api.mailjet.com/v3.1/send';
    let data={
      "Messages":[
        {
          "From": {
            "Email": "eliaszamanonline@gmail.com",
            "Name": "Sayed"
          },
          "To": [
            {
              "Email": "eliaszamanonline@gmail.com",
              "Name": "Sayed"
            }
          ],
          "Subject": "My first Mailjet email",
          "TextPart": "Greetings from Mailjet.",
          "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=https://www.mailjet.com/>Mailjet</a>!</h3><br />May the delivery force be with you!",
          "CustomID": "AppGettingStartedTest"
        }
      ]
    };
    console.log('sending email....')
    console.log(data);
    this.httpClient.post<any>(API_URL,data,{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Basic MGIzOTI3ZTQ0M2NmODNlM2M1MTRkOTg5OWQ4NDkwMTI6MDI1YjM3OTA2MGFiOTRjNDU4OThiMjI0NWU0ZWIyYjY='
      })
    }).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    });
    return null;

  }
}
