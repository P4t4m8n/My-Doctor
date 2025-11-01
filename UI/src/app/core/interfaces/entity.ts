export interface IID {
  id?: string;
}

export interface ITimestamps {
  created_at?: string | Date;
  updated_at?: string | Date;
}

export interface IName {
  name?: string | null;
}

export interface IPublicId {
  public_id?: string;
}

export interface IEntity extends IID, ITimestamps {}
