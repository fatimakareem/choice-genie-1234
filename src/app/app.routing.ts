import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AboutComponent} from "./about/about.component";
import {CustomerLayoutComponent} from "./layouts/customer/customer-layout.component";
import {NormalLayoutComponent} from "./layouts/normal/normal-layout.component";
import {StepperOverviewExample} from "./signup/stepper-overview-example";
import { LoginComponent } from './pages/login/login.component';
import { TermsComponent } from './terms/terms.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { Component } from '@angular/core';
import { SuperloginComponent } from './pages/superlogin/superlogin.component';
import { SuperadminComponent } from './layouts/superadmin/superadmin.component';
import { ActivateaccountComponent } from './activateaccount/activateaccount.component';
import { AuthguardService } from './authguard.service';
import { ConsumeradminComponent } from './layouts/consumeradmin/consumeradmin.component';
// import { UsersdashboardComponent } from './layouts/usersdashboard/usersdashboard.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {path: "", component: HomeComponent},
    
    // {path: "usersignup", component: UsersignupComponent},
    // {path:"userlogin", component:UserloginComponent},
    // {path:"superlogin", component:SuperloginComponent},
    // {
    //     path: 'activateaccount/:query1',
    //     //redirectTo: 'activateaccount/:query1',
    //     pathMatch: 'full'
      
    // },
   

    {
        path: '',
        component: CustomerLayoutComponent,
        children: [
          {
              path: 'products/:zipCode',
              loadChildren: './products/products.module#ProductsModule'
          },
          

        ]
    },

    {
        path: '',
        component: NormalLayoutComponent,
        children: [
          {
              path: 'commercial',
              loadChildren: './commercial/commercial.module#CommercialModule'
          },
          {path: "activateaccount/:query1",
          loadChildren: './activateaccount/activateaccount.module#ActivateAccountModule'},
          {
            path: 'privacy',
            loadChildren: './privacy/privacy.module#PrivacyModule'
        },
          {
            path: 'Become-a-partner',
            loadChildren: './becomeapartner/becomeapartner.module#BecomeapartnerModule'
        },
        {
            path: 'Faqs',
            loadChildren: './faqs/faqs.module#FaqsModule'
        },
        {
            path: 'ChangePassword',
            loadChildren: './changepassword/changepassword.module#ChangePasswordModule'
        },
        // {
        //     path: 'changepassword',
        //     loadChildren: './change-password/change-password.module#ChangePasswordModule'
        // },
       
        {
            path: 'Why-Choice-Genie',
            loadChildren: './why-chocie-genie/whychoicegenie.module#WhyModule'
        },
        {
            path: 'Choice-and-Saving',
            loadChildren: './choiceandsaving/choiceandsaving.module#ChoiceandsavingModule'
        },
          {
              path: 'residential',
              loadChildren: './residential/residential.module#ResidentialModule'
          },
         
          {
            path: 'usersignup',
            loadChildren: './usersignup/usersignup.module#userSignupModule'
        },
        {
            path: 'signup',
            loadChildren: './signup/signup.module#SignupModule'
        },
          {
              path: 'signup/:id',
              loadChildren: './signup/signup.module#SignupModule'
          },            {
              path: 'signup/:id/:product',
              loadChildren: './signup/signup.module#SignupModule'
          },
        //   {
        //     path: 'register',
        //     loadChildren: './signup1/signup1.module#Signup1Module'
        // },
        //   {
        //     path: "new-product",
        //     loadChildren: './admin/new-product/new-product.module#NewProductModule'
        //   },
          {
            path: 'admin/search-customer',
            loadChildren: './admin/search-customer/search-customer.module#SearchCustomerModule'
          },  {
            path: 'superlogin',
            loadChildren: './pages/superlogin/superlogin.module#LoginModule'
          },
          {
            path: 'login',
            loadChildren: './pages/login/login.module#LoginModule'
          },
           {
            path: 'userlogin',
            loadChildren: './pages/userlogin/userlogin.module#LoginModule'
          },
          {
            path: 'register',
            loadChildren: './signup1/signup1.module#Signup1Module'
        },
          
          {
            path: 'Terms-of-use-and-Privacy',
            loadChildren: './terms/terms.module#termsModule'
          },
          {
            path: 'features-comparison',
            loadChildren: './features-comparison/features.module#FeatureModule'
        },
        // {
        //     path: 'how-it-works',
        //     loadChildren: './how-it-works/how.module#HowModule'
        // },
        {
            path: 'how-it-works',
            loadChildren: './overview/overview.module#OverViewModule'
        },
          {
            path: 'contactus',
            loadChildren: './contactus/contactus.module#contactusModule'
        },
        {
            path: 'forget_password/:qurey',
            loadChildren: './forget_password/forget_password.module#ForgetpasswordModule'
        }
        ]
    },
     
    {path: "what-is-ChoiceGenie", component: AboutComponent},
    // {path: "contact", component: ContactusComponent},
    {path: "stepper", component: StepperOverviewExample},
    // {
    //     path: 'dashboard',
    //     redirectTo: 'dashboard'
    // },
    {
        path: '',
        component: ConsumeradminComponent,
        children: [
            {
                path: 'consumerdashboard',
                loadChildren: './consumerdashboard/consumerdashboard.module#ConsumerDashboardModule'
            }
            // {
            //     path: 'SuperChangePassword',
            //     loadChildren: './superchangepassword/superchangepassword.module#ChangePasswordModule'
            // },
            // {
            //     path: 'superviewcontact',
            //     loadChildren: './superviewcontact/superviewcontact.module#superviewcontactModule'
            // },//superviewbecomeModuleng superpartnerModule
            // {
            //     path: 'sviewapartner',
            //     loadChildren: './sviewapartner/sviewapartner.module#partnerModule'
            // }
        ]
    },
    {
        path: '',
        component: SuperadminComponent,
        children: [
            {
                path: 'superdashboard',
                loadChildren: './superdashboard/superdashboard.module#SuperDashboardModule'
            },
            {
                path: 'SuperChangePassword',
                loadChildren: './superchangepassword/superchangepassword.module#ChangePasswordModule'
            },
            {
                path: 'superviewcontact',
                loadChildren: './superviewcontact/superviewcontact.module#superviewcontactModule'
            },//superviewbecomeModuleng superpartnerModule
            {
                path: 'sviewapartner',
                loadChildren: './sviewapartner/sviewapartner.module#partnerModule'
            }
        ]
    },          
    {
        path: '',
        component: AdminLayoutComponent,
      //  canActivate: [AuthguardService], 
        children: [
            {
                path: 'dashboard/:username',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
               // canActivate: [AuthguardService]
            },
          
            {
                path: "new-product",
                loadChildren: './admin/new-product/new-product.module#NewProductModule'
            },
            
            {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            },  {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, 
            //  {
            //     path: 'calendar',
            //     loadChildren: './calendar/calendar.module#CalendarModule'
            // },
             {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }
        ]
    }, 
    
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
          },
          {
            path: 'residential',
            loadChildren: './residential/residential.module#ResidentialModule'
          }
        ]
    }
    
];
