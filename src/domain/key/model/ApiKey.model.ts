import { Schema } from "mongoose";
import { ApiKey } from '../interface';
import { ApiPermission, KeyStatus } from '../enum';

const DOCUMENT_NAME = "APIKey";
const COLLECTION_NAME = "APIKey";


const schema: Schema<ApiKey> = new Schema<ApiKey>({
  key: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    default: KeyStatus.active
  },
  permissions: {
    type: [String],
    default: [],
    enum: [ApiPermission.Read, ApiPermission.Delete, ApiPermission.Write]
  }
}, {
  timestamps: true,
  collection: COLLECTION_NAME
});

export const APIKeyModel = require("mongoose").model(DOCUMENT_NAME, schema);