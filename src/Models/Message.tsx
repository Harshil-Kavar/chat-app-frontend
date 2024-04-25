export interface Attachment {
  public_id: string;
  url: string;
}
export interface Sender {
  _id: string;
  name: string;
}

export interface Message {
  attachments: Attachment[];
  content: string;
  _id: string;
  sender: Sender;
  chat: string;
  createdAt: string;
}
