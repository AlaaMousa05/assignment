// Task 4: TypeScript Product Interface and Total Price Calculation
// The Product interface defines the structure of a product, 
// which includes a name (string) and a price (number).

interface Product {
    name: string;
    price: number;
  }
// This function calculates the total price of an array of Product objects.
// It uses the reduce method to sum the prices of all products in the array.
  function TotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }
  // ex:
  const products: Product[] = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 150 },
    { name: 'orange', price: 200 }
  ];
  // ex:
  console.log(TotalPrice(products)); // Output: 450
  
// Task 5: TypeScript Email Validation Function
// This function validates an email address using a regular expression.
// It checks if the email matches the basic structure: username@domain.com.

function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }
  console.log(isValidEmail('alaamousa@domain.com')); // Output: true
  console.log(isValidEmail('alaa-mousa.com'));  // Output: false


  //لتشغيل ملف التايب سكربت في صفحة html 
  //نحتاج لتحويله الى ملف جافا سكربت لان التايب سكربت لا تدعمها المتصفحات  واليكم توضيح بما فعلته من اجل تنفيذ ذلك
  // قمت بانشاء ملفين 
  // اولا ملف 
  //src الذي يوجد بداخله ملف التايب سكربت 
  // ثانيا ملف 
  //dist الذي يوجد بداخله ملف الجافا سكربت المربوط بملف التايب سكربت
  // لرؤية التغيرات التي تحصل في ملف التايب سكربت على ملف الجافا سكربت نقوم بكتابة 
  //tsc في التيرمينال فقط
  // لم نحتج لكتابة ايضا امتداد ملف التايب سكربت في التيرمينال لاني قمت ببعض التعديلات على ملف tsconfig.json
  //ملاحظة في حالة كتابة 
  //tsc  نحتاج لكتابتها في التيرمينال عند كل تعديل 
  // لحل المشكلة السابقة اكتب 
  //tsc --watch
  // وهكذا اي تعديل على ملف التايب سكربت يتعدل بشكل مباشر على ملف الجافا سكربت
  // consolوطباعة النتائج في  test.html  اخيرا قمت باستدعاء ملف الجافا سكربت في صفحة  