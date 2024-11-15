Creational Design Patterns in TypeScript
This repository demonstrates various Creational Design Patterns implemented in TypeScript with real-world examples. Creational patterns are concerned with the process of object creation, providing solutions for instantiating objects in a manner suitable to specific situations.

Patterns Included
Builder Pattern

Purpose: Simplifies the creation of complex objects by separating construction logic from representation.
Example: Building an Axios-based HTTP client with flexible configuration options.
Key Features:
Chainable methods for readability.
Reusable components for constructing different HTTP client configurations.
Factory Method Pattern

Purpose: Delegates the instantiation of objects to subclasses or specific methods.
Example: Creating different types of Notification services (EmailNotification, SMSNotification, etc.) based on the delivery mechanism.
Key Features:
Promotes loose coupling between client code and object creation.
Easy to extend with new types.
Prototype Pattern

Purpose: Creates new objects by copying existing ones, avoiding the cost of recreating complex objects.
Example: A DocumentTemplate system for managing and duplicating different types of document templates (e.g., Invoice, Report).
Key Features:
Supports shallow or deep copying.
Reduces the overhead of creating new objects from scratch.
Singleton Pattern

Purpose: Ensures a class has only one instance and provides a global point of access to it.
Example: A Logger service for centralized logging across the application.
Key Features:
Global instance shared across the application.
Useful for managing shared resources like configuration, caching, or database connections.
Usage
