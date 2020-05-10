class CalendarEvent {
  constructor(
    title: string,
    eventDate: Date,
    description: string,
    attachment: any = null, //should be a file
    priority: priorityTypes
  ) {
    this.title = title;
    this.attachment = attachment;
    this.description = description;
    this.eventDate = eventDate;
    this.title = title;
    this.priority = priority;
  }

  public title: string;
  public eventDate: Date;
  public description: string;
  public attachment: File;
  public priority: priorityTypes;
}

enum priorityTypes {
  low,
  normal,
  high,
}
