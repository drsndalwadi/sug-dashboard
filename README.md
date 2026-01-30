# SugDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Installed Dependencies:
- "@fortawesome/fontawesome-free": "^7.1.0" (Free version)
- "@primeng/themes": "^19.1.4"
- "primeng": "^19.1.4"
- "postcss": "^8.5.6"
- "tailwindcss": "^3.4.19"

## To generate components:
ng g c sug-icon
ng g c sug-page-title
ng g c sug-sidenav
ng g c sug-header
ng g c sug-advertisement

==============================
Total components: 5
==============================
1) Icon Component
2) SideNavBar Component
3) Page-title Component
4) Funnel Card Component
5) Advertisement Component

==============================
## Icon Component
==============================
# Properties
title:string,       	    // Icon/Menu title
icon:string,   	            // Name of the (FA) icon
navigation_link:string,   	// Where do you want to redirect on click
size?:string,  	            // Optional - As default size is 2rem (u can give size in REM or PX)
color?:string  	            // Optional - As default color is green (#75862A)
isDisabled?:boolean,        // Optional - As it is not required for each icon

## To invoke Icon component
<sug-icon [icon]="house" [color]="#f58b1d" [navigation_link]="#" [size]="3rem"> </sug-icon>


==============================
## SideNavBar Component
==============================
## To invoke sidebar component
<sug-left-nav [iconLinks]="navIconsList" [create_disabled]="create_disabled"> </sug-left-nav>
iconLinks = array of icon object (metadata)
create_disabled = to enable or disable create/plus icon

==============================
## Page-title Component
==============================
- Accepts page title and sub_title as input value
## To invoke Page-Title component
<sug-page-title [page_title]="title" [page_sub_title]="sub_title"> </sug-page-title>


==============================
## Funnel Card Component
==============================
# Properties
imageurl: string,			// Card Image URL
title:string,				// Card title
description:string,		    // Description / text
navigation_url:string		// Redirection URL when clicked

## To invoke Funnel Card component
<sug-funnel-card 
    [image]="imageurl" [title]="TITLE" 
    [desc]="Description" [navigation_url]="Navigation_URL">
</sug-funnel-card>


==============================
## Advertisement Component
==============================
## To invoke Advertisement component

<sug-adverts> </sug-adverts>
