import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
/*import { Router} from '@angular/router';*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /*constructor(private router: Router ) {}*/
  @ViewChild('f', { static: false }) signupForm: NgForm;
  defaultCountry = '';
  defaultState = '';
  answer = '';

  genders = ['Male', 'Female',"Other"];
  states=[];
  copy=false;
  user = {
    fname: '',
    lname:'',
    url:'',
    dob:'',
    email: '',
    gender: '',
    pan:'',
    aadhar:'',
    phone:'',
    altph:'',
    city:'',
    address:'',  
    address2:'',
    state:'',
    country:'',
    pin:'' ,
    captcha:''
  };
  address2='';
  capC=false;
  a=Math.floor(Math.random() * 100)+1;
	b=Math.floor(Math.random() * 100);
	operations=["+","-","*","/"];
  operator="+";
  captcha=this.a+this.operator+this.b;
  result=this.a+this.b;
  cCode="";
  
  callCaptcha()
  {
    this.a=Math.floor(Math.random() * 100)+1;
	  this.b=Math.floor(Math.random() * 100);
    this.operator=this.operations[Math.floor(Math.random() * this.operations.length)];
    if(this.operator=="/")
	  {
      while(((this.a/this.b)!=Math.round(this.a/this.b))||this.b==0)
      {
        this.a=Math.floor(Math.random() * 100)+1;//a may be prime
        this.b=Math.floor(Math.random() * 100);
      }
	  }
    this.captcha=(this.a+this.operator+this.b);
    switch(this.operator)
    {
      case "+":
        this.result=this.a+this.b;
        break;
      case "-":
        this.result=this.a-this.b;
        break;
      case "*":
        this.result=this.a*this.b;
        break;
      case "/":
        this.result=this.a/this.b;
        break;
    }
  }

 
    submitted = false;
    url: any; 
    msg = "";
  
	selectFile(event: any) 
  { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}
  /*suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        fname: suggestedName
      }
    });
  }*/
  copyAddress(copy)
  {
    if(copy)
    {
    this.address2= this.signupForm.value.userData.address;}
    else{
      this.address2="";
    }
  }
  openStates(){
    var selected=this.signupForm.value.userData.country;
    if(selected=="India"){
      this.states=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh",
		"Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
		"Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"];
    }
    else if(selected=="USA")
    {
      this.states=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii",
      "Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota",
      "Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina",
      "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee",
      "Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
    }
    else if(selected=="UK")
		{
			this.states=["Scotland","Northern Ireland","Wales","North East","North West","Yorkshire and the Humber","West Midlands","East Midlands",
				"South West","South East","East of England","Greater London"];
		}
		else if(selected=="Japan")
		{
			this.states=["Hokkaido","Tohoku","Kanto","Chubu","Kinki/Kansai","Chugoku","Shikoku","Kyushu"];
		}
		else if(selected=="France")
		{
			this.states=["Grand-Est","Nouvelle-Aquitaine","Auvergne-Rhône-Alpes","Bourgogne-Franche-Comté","Occitanie","Hauts-de-France","Normandie",
				"Bretagne","Corse","Centre","Île-de-France","Pays de la Loire","Provence-Alpes-Côte d’Azur"];
		}
		else if(selected=="Russia")
		{
			this.states=["Adygey", "Altai", "Bashkortostan", "Buryat", "Chechnya", "Chuvash", "Dagestan", "Ingushetia", "Kabardino-Balkar","Sakha", 
		"Kalmykia","Karachay-Cherkess","Karelia","Khakass","Komi","Mari El","Mordovia","North Ossetia-Alania", "Tatarstan","Tuva","Udmurt"];
		}
  }
 
  onSubmit() {
    this.signupForm.form.markAllAsTouched();
    var date=new Date(this.signupForm.value.userData.dob).toLocaleDateString('en-GB');
    this.user.fname = this.signupForm.value.userData.fname;
    this.user.lname = this.signupForm.value.userData.lname;
    this.user.url=this.url;
    this.user.dob= date;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.userData.gender;
    this.user.pan = this.signupForm.value.userData.pan;
    this.user.aadhar = this.signupForm.value.userData.aadhar;
    this.user.phone = this.signupForm.value.userData.phone;
    this.user.altph = this.signupForm.value.userData.altph;
    this.user.city = this.signupForm.value.userData.city;
    this.user.address = this.signupForm.value.userData.address;
    this.user.address2 = this.signupForm.value.userData.address2;
    this.user.state = this.signupForm.value.userData.state;
    this.user.country = this.signupForm.value.userData.country;
    this.user.pin= this.signupForm.value.userData.pin;
    //this.signupForm.value.userData.cCode
    
    if(this.signupForm.value.userData.cCode!=String(this.result))
    {
      
      this.cCode="";
      this.capC=false;
      this.callCaptcha();
    }
    else{
      this.capC=true;
    this.signupForm.reset();
    this.submitted = true;
    }
  }
}


