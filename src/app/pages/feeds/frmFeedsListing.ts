import { Component, OnInit } from "@angular/core";
import { AppModules } from "../../app.modules";
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'pages-feeds-feedsListing',
  standalone: true,
  imports: [AppModules],
  templateUrl: './frmFeedsListing.html',
  styles: ``
})

export class frmFeedsListing implements OnInit {
  demoData = [
    { Id: 1, Date: new Date('2025-12-01'), Sender: 'Alice Johnson', Title: 'Project Kickoff', Description: 'Initial meeting to discuss project requirements and milestones.' },
    { Id: 2, Date: new Date('2025-12-03'), Sender: 'Bob Smith', Title: 'Budget Approval', Description: 'Approved budget for Q1 2026, including resources allocation.' },
    { Id: 3, Date: new Date('2025-12-05'), Sender: 'Carol Lee', Title: 'Design Review', Description: 'Review of the UI/UX designs for the new application module.' },
    { Id: 4, Date: new Date('2025-12-07'), Sender: 'David Brown', Title: 'Client Feedback', Description: 'Received client feedback on the prototype, requires adjustments.' },
    { Id: 5, Date: new Date('2025-12-10'), Sender: 'Eva Green', Title: 'Deployment Schedule', Description: 'Plan for production deployment and rollback strategies.' },
    { Id: 11, Date: new Date('2025-12-01'), Sender: 'Alice Johnson', Title: 'Project Kickoff', Description: 'Initial meeting to discuss project requirements and milestones.' },
    { Id: 12, Date: new Date('2025-12-03'), Sender: 'Bob Smith', Title: 'Budget Approval', Description: 'Approved budget for Q1 2026, including resources allocation.' },
    { Id: 13, Date: new Date('2025-12-05'), Sender: 'Carol Lee', Title: 'Design Review', Description: 'Review of the UI/UX designs for the new application module.' },
    { Id: 14, Date: new Date('2025-12-07'), Sender: 'David Brown', Title: 'Client Feedback', Description: 'Received client feedback on the prototype, requires adjustments.' },
    { Id: 15, Date: new Date('2025-12-10'), Sender: 'Eva Green', Title: 'Deployment Schedule', Description: 'Plan for production deployment and rollback strategies.' },
    { Id: 21, Date: new Date('2025-12-01'), Sender: 'Alice Johnson', Title: 'Project Kickoff', Description: 'Initial meeting to discuss project requirements and milestones.' },
    { Id: 22, Date: new Date('2025-12-03'), Sender: 'Bob Smith', Title: 'Budget Approval', Description: 'Approved budget for Q1 2026, including resources allocation.' },
    { Id: 23, Date: new Date('2025-12-05'), Sender: 'Carol Lee', Title: 'Design Review', Description: 'Review of the UI/UX designs for the new application module.' },
    { Id: 24, Date: new Date('2025-12-07'), Sender: 'David Brown', Title: 'Client Feedback', Description: 'Received client feedback on the prototype, requires adjustments.' },
    { Id: 25, Date: new Date('2025-12-10'), Sender: 'Eva Green', Title: 'Deployment Schedule', Description: 'Plan for production deployment and rollback strategies.' },
  ];
  selectedData: any[] = [];
  searchValue: string = '';
  selectedSender: string | undefined;
  SenderList: any[] = [];

  pDetailTooltipCss = {
    root: {
      background: 'white',
      color:'{blue.500}'
    }
  };

  pDeleteTooltipCss = {
    root: {
      background: 'white',
      color: '{red.500}'
    }
  };

  constructor(public router: Router) { }

  ngOnInit() {
    const distinctSender = [...new Set(this.demoData.map(s => s.Sender))];
    this.SenderList = distinctSender.map(s => ({ label: s, value: s }));
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
}
