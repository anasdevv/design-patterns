type Payload = {
  // can be anything
  message: string;
};
interface INotification {
  send(payload: Payload): void;
}

class EmailNotification implements INotification {
  send(payload: Payload): void {
    console.log('sending payload via email ', payload.message);
  }
}

class SMSNotification implements INotification {
  send(payload: Payload): void {
    console.log('sending payload via sms ', payload.message);
  }
}

class PushNotification implements INotification {
  send(payload: Payload): void {
    console.log(`Sending Push Notification: ${payload.message}`);
  }
}

// now the factory comes into play

abstract class NotificationFactory {
  abstract createNotification(): INotification;

  sendNotification(payload: Payload): void {
    const notification = this.createNotification();
    notification.send(payload);
  }
}

class EmailNotificationFactory extends NotificationFactory {
  createNotification(): INotification {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): INotification {
    return new SMSNotification();
  }
}

class PushNotificationFactory extends NotificationFactory {
  createNotification(): INotification {
    return new PushNotification();
  }
}

// usage
const emailNotification: NotificationFactory = new EmailNotificationFactory();
emailNotification.sendNotification({
  message: 'hi',
});
