//Task 2: Calculate Total Sum and Average
function SumAndAverage(numbers) {
    if (numbers.length === 0) {
      return { sum: 0, average: 0 }; // Handle empty array
    }
  
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;
  
    return { sum: total, average: average };
  }
  
  // ex:
  const numbers = [10, 20, 30, 40];
  const result = SumAndAverage(numbers);
  console.log("Sum:", result.sum); // Output: Sum: 100
  console.log("Average:", result.average); // Output: Average: 25
  
  // Task 3: Remove Duplicates
function removeDuplicates(strings) {
    const arr = [...new Set(strings)];
    //قمت بتخزين عناصر المصفوفة في سيت لانها لا تقبل التكرار واذا حصل تكرار لا تقوم بتخزينه بالتالي تصبح المصفوفة خالية من التكرارات
    return arr;
  }
  
  // ex:
  const strings = ["apple", "banana", "apple", "orange", "banana"];
  const arr= removeDuplicates(strings);
  console.log("Unique Strings:", arr);
  // Output: Unique Strings: [ 'apple', 'banana', 'orange' ]
  