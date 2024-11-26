export interface AuthInputType {
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;
  userName: string;
}

interface SettingModalType {
  profile: string;
  userName: string;
  email: string;
  password: string;
}

export type settingModalProps = keyof SettingModalType;
