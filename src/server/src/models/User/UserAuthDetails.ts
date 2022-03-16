import { Document, model, Model, Schema } from 'mongoose';

interface IUserDetail {
  name: string;
  college: string;
  teamName: string;
  description: string;
  email: string;
  eventID: string;
  type: string;
  iD: string;
  certUrl: string;
}
export type UserDetailDocument = IUserDetail & Document;

const UserDetailSchema: Schema = new Schema({
  name: { type: String, required: false, default: '' },
  college: { type: String, required: false, default: '' },
  teamName: { type: String, required: false, default: '' },
  description: { type: String, required: false, default: '' },
  email: { type: String, required: true, default: '' },
  eventID: { type: String, required: false, default: '' },
  type: { type: String, required: false, default: '' },
  iD: { type: String, required: false, default: '' },
  certUrl: { type: String, required: true, default: '' }
});

const UserDetail: Model<UserDetailDocument> = model(
  'User',
  UserDetailSchema
);
export default UserDetail;
