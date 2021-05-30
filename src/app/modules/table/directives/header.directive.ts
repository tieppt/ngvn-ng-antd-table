import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {
  constructor(
    public template: TemplateRef<any>
  ) { }

}
