import { Role } from './Role';
import { SexeType } from './SexeType';
import { ZoneMap } from './ZoneMap';


export class User {

  idUser: number;
  username: string;
  lastNameUser: string;
  cinUser: string;
  password: string;
  confirmPasswordUser: string;
  stateUser: boolean;
  phoneNumberUser: string;
  adressUser: string;
  birthDateUser: Date;
  emailUser: string;
  sexeUser: SexeType;
  accountNonLocked: boolean;
  lockTime: Date;
  resettoken: string;
  isBlocked: boolean;
  blockDate: Date;
  unBlockDate: Date;
  isPrivate: boolean;
  salaire: number;
  pointnumber: number;
  avilaibility: boolean;
  zone: ZoneMap;
  role: Role;
  fileName: string;

}
