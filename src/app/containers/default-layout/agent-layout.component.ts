import { Component } from '@angular/core';

import { navItemsAgent } from './_nav_agent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './agent-layout.component.html',
  styleUrls: ['./agent-layout.component.scss'],
})
export class AgentLayoutComponent {

  public navItemsAgent = navItemsAgent;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}
