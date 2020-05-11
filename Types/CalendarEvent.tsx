export class CalendarEvent {
  constructor(
    title: string,
    eventDate: Date,
    description: string,
    attachment: any, //should be a file
    priority: priorityTypes,
    notify: boolean
  ) {
    this.title = title;
    this.attachment = attachment;
    this.description = description;
    this.eventDate = eventDate;
    this.title = title;
    this.priority = priority;
    this.notify = notify;
  }

  public title: string;
  public eventDate: Date;
  public description: string;
  public attachment: any;
  public priority: priorityTypes;
  public notify: boolean;

  //TODO make notification function
}

export enum priorityTypes {
  low = "#66d97d",
  normal = "#66a3d9",
  high = "#d96666",
}
