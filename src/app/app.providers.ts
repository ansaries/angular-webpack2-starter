import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';
import { FocMetaService } from './services/meta.service';

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  FocMetaService,
];
