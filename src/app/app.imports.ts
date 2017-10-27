import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';

import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

import { rootReducer } from './reducers';
import { StoreDevToolsModule } from './features/store-devtools.module';
import { UserEffects } from './user/user.effects';

const STORE_DEV_TOOLS_IMPORTS = [];
if (ENV === 'development' && !AOT &&
  ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
) STORE_DEV_TOOLS_IMPORTS.push(...[
  StoreDevtoolsModule.instrumentStore({
    monitor: useLogMonitor({
      visible: true,
      position: 'right'
    })
  })
]);


export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'Fixonclick',
    defaults: {
      title: 'Featured Promotions by Service Providers',
      description: 'Mighty Mouse is an animated superhero mouse character',
      'og:image': 'https://www.fixonclick.com/assets/images/backgrounds/bg-final.jpg',
      'og:type': 'website',
      'og:locale': 'en_US',
      

      // 'og:locale:alternate': 'en_US,nl_NL,tr_TR'
    }
  });
}


export const APP_IMPORTS = [
  EffectsModule.run(UserEffects),
  MaterialModule,
  ReactiveFormsModule,
  RouterStoreModule.connectRouter(),
  StoreModule.provideStore(rootReducer),
  MetaModule.forRoot({
    provide: MetaLoader,
    useFactory: (metaFactory)
  }),
  STORE_DEV_TOOLS_IMPORTS,
  StoreDevToolsModule,
  TransferHttpModule
];
