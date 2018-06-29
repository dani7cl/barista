import { Component } from '@angular/core';
import { OriginalClassName } from '../../../core/decorators';

@Component({
  moduleId: module.id,
  template: `<div class="demo-card">
<dt-card>
  <dt-card-icon>
    <dt-icon name="application"></dt-icon>
  </dt-card-icon>
  <dt-card-title>Top 3 JavaScript errors</dt-card-title>
  <dt-card-subtitle>Some subtitle</dt-card-subtitle>
  Icons are not yet implemented - this is an example to showcase the icon placeholder
</dt-card></div>`,
})
@OriginalClassName('IconCardExampleComponent')
export class IconCardExampleComponent { }
