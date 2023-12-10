export interface createMatch {
  group: string;
  persons: person[];
}

export interface person {
  id: string;
  name: string;
  email: string;
}

export interface group {
  id: string;
  name: string;
}