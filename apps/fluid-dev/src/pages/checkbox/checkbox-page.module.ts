/**
 * @license
 * Copyright 2021 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DtCheckboxModule } from '@dynatrace/barista-components/checkbox';
import { FluidCheckboxPage } from './checkbox-page.component';

export const routes: Route[] = [
  {
    path: '',
    component: FluidCheckboxPage,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), DtCheckboxModule],
  declarations: [FluidCheckboxPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FluidCheckboxPageModule {}
