// used to clone/copy objects without changing the original (deep copy)

// A shallow copy copies the top-level properties but doesn't clone nested objects or references. Modifications to nested objects in a shallow copy affect the original object.
// A deep copy ensures that all nested objects or references are recursively copied, creating a completely independent clone.

interface DocumentPrototype {
  clone(): DocumentPrototype;
  display(): void;
}
class DocumentTemplate implements DocumentPrototype {
  type: string;
  content: string;
  metadata: { author: string; createdAt: Date; lastModified: Date };

  constructor(
    type: string,
    content: string,
    metadata: { author: string; createdAt: Date; lastModified: Date }
  ) {
    this.type = type;
    this.content = content;
    this.metadata = metadata;
  }

  clone(): DocumentTemplate {
    return new DocumentTemplate(this.type, this.content, {
      author: this.metadata.author,
      createdAt: new Date(this.metadata.createdAt),
      lastModified: new Date(this.metadata.lastModified),
    });
  }

  display(): void {
    console.log(`Document Type: ${this.type}`);
    console.log(`Author: ${this.metadata.author}`);
    console.log(`Created At: ${this.metadata.createdAt}`);
    console.log(`Last Modified: ${this.metadata.lastModified}`);
    console.log(`Content: ${this.content}`);
  }
}

// usage
const runDocumentTemplateExample = () => {
  const invoiceTemplate = new DocumentTemplate(
    'Invoice',
    'Invoice Template Content: [Customer Name], [Date], [Amount Due]',
    {
      author: 'Mohammad Anas',
      createdAt: new Date('2024-15-11'),
      lastModified: new Date('2024-15-11'),
    }
  );

  console.log('Original Template:');
  invoiceTemplate.display();

  const customerInvoice = invoiceTemplate.clone();
  customerInvoice.content = customerInvoice.content
    .replace('[Customer Name]', 'Huzaifa')
    .replace('[Date]', '2024-11-15')
    .replace('[Amount Due]', '$1,000');
  customerInvoice.metadata.lastModified = new Date();

  console.log('\nCustomized Invoice:');
  customerInvoice.display();

  console.log('\nOriginal Template After Cloning:');
  invoiceTemplate.display();
};

runDocumentTemplateExample();
