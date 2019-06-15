import { BaseModel, dso, Field, FieldType, Model } from "../deps.ts";

@Model("replies")
class ReplyModel extends BaseModel<ReplyModel> {
  @Field({
    type: FieldType.INT,
    length: 20,
    primary: true,
    autoIncrement: true
  })
  id: number;
  @Field({ type: FieldType.INT, length: 20, notNull: true })
  topic_id: number;
  @Field({ type: FieldType.INT, length: 20 })
  reply_to: number;
  @Field({ type: FieldType.INT, length: 20 })
  author_id: number;
  @Field({ type: FieldType.TEXT, length: 65535 })
  content: string;
  @Field({ type: FieldType.BOOLEAN, default: false })
  deleted: boolean;
}

export const Reply = new ReplyModel();
dso.define(Reply);
