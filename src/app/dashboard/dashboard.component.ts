import { Component } from '@angular/core';
import { SugHeaderComponent } from '../sug-header/sug-header.component';
import { SugSidebarComponent } from '../sug-sidebar/sug-sidebar.component';
import { SugAdvertsComponent } from '../sug-adverts/sug-adverts.component';
import { SugCardComponent } from '../sug-card/sug-card.component';
import { NavBarIcon } from '../model/navbar-icon';
import { SugPageTitleComponent } from '../sug-page-title/sug-page-title.component';
import { FunnelCard } from '../model/funnel-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [SugHeaderComponent, SugSidebarComponent, SugAdvertsComponent, SugCardComponent, SugPageTitleComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})

// Container component to hold all the sub-components
export class DashboardComponent {

  // Icons data
  navIconsList: NavBarIcon[] = [
    {title: 'Home', icon: 'house', navigation_link: '#' },
    {title: 'Groups', icon: 'users', navigation_link: '#' },
    {title: 'Messages', icon: 'envelope-open-text', navigation_link: '#' },
    {title: 'Reports', icon: 'chart-pie', navigation_link: '#' },
    {title: 'Setting', icon: 'screwdriver-wrench', navigation_link: '#'}
  ];

  // To render create icon in disabled state
  create_disabled = false;

  // is_premium_user = true; // created to hide/show advertisement

  // Data for Title component
  title = "Let's create something great together for your group!";
  sub_title = "Build custom sign-ups, forms, and payment collections the genius way: streamline group events, boost your bottom line, and take your organization to the next level.";

  // Static Card component data
  cards : FunnelCard [] = 
  [
    {
      imageurl:'assets/images/signup.png',
      title: 'Sign Up',
      description: 'Organize events and volunteers in minutes',
      navigation_url: '#'
    },
    {
      imageurl:'assets/images/fess.jpg',
      title: 'Fees and Registrations',
      description: 'Collect dues, fees, registration forms, and more',
      navigation_url: '#'
    },
    {
      imageurl:'assets/images/forms_vaiver.jpg',
      title: 'Form or Waiver',
      description: 'Beautiful online forms and waivers for your group',
      navigation_url: '#'
    },
    {
      imageurl:'assets/images/onlinestore.jpg',
      title: 'Online Store',
      description: 'Move merch with e-commerce tools to help you sell more',
      navigation_url: '#'
    },
    {
      imageurl:'assets/images/group_gift.jpg',
      title: 'Group Gift',
      description: 'Instant tracking and the option to send gift cards makes life easy',
      navigation_url: '#'
    },
    {
      imageurl:'assets/images/ticketed_event.jpg',
      title: 'Ticketed Event',
      description: 'Enjoy quick and easy mobile ticketing check-ins',
      navigation_url: '#'
    },
    {
      imageurl:'assets/images/athon_fundraiser.jpg',
      title: '"Athon" Fundraiser',
      description: 'Launch a peer-to-peer fundraiser to raise money the fun way',
      navigation_url: '#'
    },
    {
      imageurl:'assets/images/fundraiser.jpg',
      title: 'Fundraiser',
      description: 'Raise money traditionally to support any cause',
      navigation_url: '#'
    }
  ]
}
