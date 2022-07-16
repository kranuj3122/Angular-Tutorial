import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lazyLoadingComponent';

  constructor(
    private viewContainer: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async loadAdmin() {
    this.viewContainer.clear();
    const { AdminlistComponent } = await import(
      './adminlist/adminlist.component'
    );
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    );
  }

  async loadUser() {
    this.viewContainer.clear();
    const { UserlistComponent } = await import(
      './userlist/userlist.component'
    );
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    );
  }
}
