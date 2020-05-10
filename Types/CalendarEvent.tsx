class CalendarEvent {
  constructor(
    title: string,
    eventDate: Date,
    description: string,
    attachment: any = null, //should be a file
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
  public attachment: File;
  public priority: priorityTypes;
  public notify: boolean;

  //TODO make notification function
}

enum priorityTypes {
  low,
  normal,
  high,
}

//TODO ADD EVENTS TO SCREEN (MAKE SOME TEST EVENTS TO TRY IT OUT)
